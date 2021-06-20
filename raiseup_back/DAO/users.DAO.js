let UsersDAO = {};
const { Client } = require("pg");
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const connectionString = process.env.DATABASE_URL;
const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});
client.connect();

/*=====FUNCTIONS=====*/
//register function
UsersDAO.register = (body, callback) => {
  //we encrypt the password
  bcrypt.hash(body.password, 10, (err, hash) => {
    if (err) {
      callback(err, null);
    } else {
      //we save in the database with the encrypted password
      client.query(
        "INSERT INTO users (lastname,firstname,email,password) VALUES ($1,$2,$3,$4)",
        [body.lastname, body.firstname, body.email, hash],
        (err, res) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, { ok: 1 });
          }
        }
      );
    }
  });
};

//data verification function
UsersDAO.checkData = (body, callback) => {
  const schema = joi.object({
    lastname: joi
      .string()
      .required()
      .error(new Error("Le nom est obligatoire")),
    firstname: joi
      .string()
      .required()
      .error(new Error("Le prénom est obligatoire")),
    email: joi
      .string()
      .email()
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "L'email est obligatoire";
              break;
            case "string.email":
              err.message = "L'email n'est pas valide";
              break;
            default:
              err.message = "L'email n'est pas valide";
              break;
          }
        });
        return errors;
      }),
    password: joi
      .string()
      .pattern(new RegExp(process.env.REGEX_PWD))
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Le mot de passe est obligatoire";
              break;
            case "string.regex":
              err.message =
                "Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial";
              break;
            default:
              err.message = "Le mot de passe n'est pas valide";
              break;
          }
        });
        return errors;
      }),
    confirm_password: joi
      .string()
      .required()
      .valid(joi.ref("password"))
      .error(new Error("Les mots de passes sont différents")),
  });

  const { error } = schema.validate(body);
  if (error) {
    callback(null, { ok: 0, message: error.message });
  } else {
    callback(null, { ok: 1 });
  }
};

//uniqueness function on email
UsersDAO.uniqueness = (email, callback) => {
  client.query(
    "SELECT 1 as mail FROM users WHERE email=$1",
    [email],
    (err, res) => {
      //error during the request
      if (err) callback(err, null);
      //the email is already in use
      else if (res.rows.length > 0)
        callback(null, { ok: 0, message: "Cet email est déjà utilisé" });
      //email isn't used
      else callback(null, { ok: 1 });
    }
  );
};

//connect function
UsersDAO.connect = (body, callback) => {
  client.query(
    "SELECT id, email, password FROM users WHERE email=$1",
    [body.email],
    (err, result) => {
      if (err) {
        callback(err, null);
      }
      //if we have results we check the password
      else if (result.rows.length) {
        //we check if it is the right password
        if (result.rows[0].password) {
          bcrypt.compare(
            body.password,
            result.rows[0].password,
            (errBcrypt, resultHash) => {
              if (errBcrypt) {
                callback(errBcrypt, null);
              } else {
                if (resultHash) {
                  callback(null, {
                    ok: 1,
                    message: "Connexion effectuée avec succès",
                    idUser: result.rows[0].id,
                    token: jwt.sign(
                      { idUser: result.rows[0].id },
                      "RANDOM_TOKEN_SECRET",
                      { expiresIn: "24h" }
                    ),
                  });
                } else {
                  callback(null, {
                    ok: 0,
                    message: "Email ou mot de passe invalide",
                  });
                }
              }
            }
          );
        }
      }
      //if there's no result it means that the email doesn't exist in the database
      else {
        callback(null, { ok: 0, message: "Email ou mot de passe invalide" });
      }
    }
  );
};

//get one user function
UsersDAO.findOne = (idUser, callback) => {
  client.query(
    "SELECT lastname, firstname, email FROM users WHERE id=$1",
    [idUser],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.rows);
      }
    }
  );
};

//modify user name function
UsersDAO.modifyName = (body, callback) => {
  client.query(
    "UPDATE users SET lastname=$1, firstname=$2 WHERE id=$3",
    [body.lastname, body.firstname, body.idUser],
    (err, resModify) => {
      if (err) callback(err, null);
      else callback(null, { ok: 1 });
    }
  );
};

//modify user password function
UsersDAO.modifyPassword = (body, callback) => {
  //we check if the old password is correct
  client.query(
    "SELECT password FROM users WHERE id=$1",
    [body.idUser],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        bcrypt.compare(
          body.old_password,
          result.rows[0].password,
          (err, result_hash) => {
            if (err) {
              callback(err, null);
            } else {
              if (result_hash) {
                //we check the new password
                const schema = joi.object({
                  idUser: joi.required(),
                  old_password: joi.required(),
                  password: joi
                    .string()
                    .pattern(new RegExp(process.env.REGEX_PWD))
                    .required()
                    .error((errors) => {
                      errors.forEach((err) => {
                        switch (err.type) {
                          case "any.empty":
                            err.message = "Le mot de passe est obligatoire";
                            break;
                          case "string.regex":
                            err.message =
                              "Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial";
                            break;
                          default:
                            err.message = "Le mot de passe n'est pas valide";
                            break;
                        }
                      });
                      return errors;
                    }),
                  confirm_password: joi
                    .string()
                    .required()
                    .valid(joi.ref("password"))
                    .error(new Error("Les mots de passes sont différents")),
                });

                const { error } = schema.validate(body);
                if (error) {
                  callback(null, { ok: 0, message: error.message });
                } else {
                  //we encrypt the new password
                  bcrypt.hash(body.password, 10, (errBcrypt, hash) => {
                    if (errBcrypt) {
                      callback(errBcrypt, null);
                    } else {
                      //change the password in the database
                      client.query(
                        "UPDATE users SET password=$1 WHERE id=$2",
                        [hash, body.idUser],
                        (errUpdate, resModify) => {
                          if (errUpdate) {
                            callback(errUpdate, null);
                          } else callback(null, { ok: 1 });
                        }
                      );
                    }
                  });
                }
              } else {
                callback(null, { ok: 0, message: "Mot de passe incorrect" });
              }
            }
          }
        );
      }
    }
  );
};

module.exports = UsersDAO;
