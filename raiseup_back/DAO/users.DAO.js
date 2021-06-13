let UsersDAO = {};
const { Client } = require("pg");
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");

const connectionString = process.env.DATABASE_URL;
const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});
client.connect();

/*=====FUNCTIONS=====*/
//register function
UsersDAO.register = (body, callback) => {
  //on crypte le mot de passe
  bcrypt.hash(body.password, 10, (err, hash) => {
    if (err) {
      callback(null, err);
    } else {
      //on enregistre en BDD avec le mot de passe crypter
      client.query(
        "INSERT INTO users (lastname,firstname,email,password) VALUES ($1,$2,$3,$4)",
        [req.body.lastname, req.body.firstname, req.body.email, hash],
        (err, res) => {
          if (err) {
            callback(null, err);
          } else {
            callback(null, res);
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
    callback(null, error);
  } else {
    callback(null, 1);
  }
};
//uniqueness function on email
UsersDAO.uniqueness = (email, callback) => {
  client.query(
    "SELECT 1 as mail FROM users WHERE email=$1",
    [email],
    (err, res) => {
      //erreur lors de la requête
      if (err) callback(null, err);
      //l'email est déjà utilisé
      else if (res.mail) callback(null, 1);
      //l'email n'est pas utilisé
      else callback(null, 0);
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
        callback(null, err);
      }
      //si on a des résultats on vérifie le mot de passe
      else if (result.rows.length) {
        //on vérifie si c'est le bon mot de passe
        if (result.rows[0].password) {
          bcrypt.compare(
            req.body.password,
            result.rows[0].password,
            (err, result_hash) => {
              if (err) {
                return res.json({ ok: 0, message: err });
              } else {
                if (result_hash) {
                  return res.json({
                    ok: 1,
                    message: "Connexion effectuée avec succès",
                    token: jwt.sign(
                      { idUser: result.rows[0].id },
                      "RANDOM_TOKEN_SECRET",
                      { expiresIn: "24h" }
                    ),
                  });
                } else {
                  return res.json({
                    ok: 0,
                    message: "Email ou mot de passe invalide",
                  });
                }
              }
            }
          );
        }
      }
      //si on a pas de résultat c'est que l'email n'existe pas en BDD
      else {
        return res.json({ ok: 0, message: "Email ou mot de passe invalide" });
      }
    }
  );
};

//get one user function
UsersDAO.findOne = (idUser, callback) => {
  client.query("SELECT * FROM users WHERE id=$1", [idUser], (err, res) => {
    if (err) callback(null, err);
    else callback(null, res.rows);
  });
};

//modify user name function
UsersDAO.modifyName = (body, callback) => {
  client.query(
    "UPDATE users SET lastname=$1, firstname=$2 WHERE id=$3",
    [body.lastname, body.firstname, body.idUser],
    (err, resModify) => {
      if (err) callback(null, err);
      else callback(null, resModify);
    }
  );
};

//modify user password function
UsersDAO.modifyPassword = (body, callback) => {
  //on vérifie si l'ancien password est correct
  client.query(
    "SELECT password FROM users WHERE id=$1",
    [body.idUser],
    (err, res) => {
      if (err) {
        callback(null, err);
      } else {
        bcrypt.compare(
          req.body.password,
          result.rows[0].password,
          (err, result_hash) => {
            if (err) {
              callback(null, err);
            } else {
              if (result_hash) {
                //on vérifie le nouveau mot de passe
                const schema = joi.object({
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
                  callback(null, error);
                } else {
                  //on chiffre le nouveau mot de passe
                  bcrypt.hash(body.password, 10, (err, hash) => {
                    if (err) {
                      callback(null, err);
                    } else {
                      //on modifie le mot de passe en base
                      client.query(
                        "UPDATE users SET password=$1 WHERE id=$3",
                        [body.lastname, body.firstname, body.idUser],
                        (err, resModify) => {
                          if (err) callback(null, err);
                          else callback(null, resModify);
                        }
                      );
                    }
                  });
                }
              } else {
                callback(null, 0);
              }
            }
          }
        );
      }
    }
  );
};

module.exports = UsersDAO;
