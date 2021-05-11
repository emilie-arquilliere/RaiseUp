const express = require("express");
const app = express();
const { Client } = require("pg");
const joi = require("joi");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const connectionString = process.env.DATABASE_URL;
const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});
client.connect();

//chemin qui connecte le user
app.post("/connect", (req, res) => {
  console.log("Salut les coupains");
  client.query(
    "SELECT email, password FROM users WHERE email='" + req.body.email + "'",
    (err, result) => {
      if (err) {
        return res.json({ ok: 0, message: err });
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
});

//chemin qui inscrit le user
app.post("/register", (req, res) => {
  //on vérifie si les champs sont bien remplis et au bon format
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

  const { error } = schema.validate(req.body);

  if (error) {
    return res.json({ ok: 0, message: error });
  } else {
    //si tous les champs sont ok, on fait un test d'unicité sur l'email
    client.query(
      "SELECT 1 as mail FROM users WHERE email='$1'",
      [req.body.email],
      (err, result) => {
        if (err) {
          return res.json({ ok: 0, message: err });
        }
        //si l'email est déjà utilisé on retourne un message d'erreur
        else if (result.mail) {
          return res.json({ ok: 0, message: "Cet email est déjà utilisé" });
        }
        //si l'email n'est pas encore utilisé on crypte le mot de passe
        else {
          //on crypte le mot de passe
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.json({ ok: 0, message: err });
            } else {
              //si tous les tests sont passé on enregistre en BDD avec le mot de passe crypter
              client.query(
                "INSERT INTO users (lastname,firstname,email,password) VALUES ($1,$2,$3,$4)",
                [req.body.lastname, req.body.firstname, req.body.email, hash],
                (err) => {
                  if (err) {
                    return res.json({
                      ok: 0,
                      message: "Un problème est survenu lors de l'inscription",
                    });
                  } else {
                    return res.json({
                      ok: 1,
                      message: "Inscription réalisée avec succès",
                    });
                  }
                }
              );
            }
          });
        }
      }
    );
  }
});

//chemin qui récupère les podcasts
app.post("/podcasts/:theme_id", (req, res) => {
  client.query(
    "SELECT * FROM podcasts WHERE id_theme = '$1'",
    [req.params.theme_id],
    (err, result) => {
      if (err) {
        return res.json({
          ok: 0,
          message:
            "Un problème est survenu lors de la récupération des données",
        });
      } else {
        return res.json({ ok: 1, message: result });
      }
    }
  );
});

//chemin qui récupère les questions
app.post("/questions/:theme_id", (req, res) => {
  client.query(
    "SELECT * FROM questions WHERE id_theme = '$1'",
    [req.params.theme_id],
    (err, result) => {
      if (err) {
        return res.json({
          ok: 0,
          message:
            "Un problème est survenu lors de la récupération des données",
        });
      } else {
        return res.json({ ok: 1, message: result });
      }
    }
  );
});

//chemin qui récupère les réponses
app.post("/answers/:question_id", (req, res) => {
  client.query(
    "SELECT * FROM answers WHERE id_question = '$1'",
    [req.params.question_id],
    (err, result) => {
      if (err) {
        return res.json({
          ok: 0,
          message:
            "Un problème est survenu lors de la récupération des données",
        });
      } else {
        return res.json({ ok: 1, message: result });
      }
    }
  );
});

//chemin qui récupère les thèmes
app.post("/themes", (req, res) => {
  client.query("SELECT * FROM themes", (err, result) => {
    if (err) {
      return res.json({
        ok: 0,
        message: "Un problème est survenu lors de la récupération des données",
      });
    } else {
      return res.json({ ok: 1, message: result });
    }
  });
});

//chemin qui récupère les challenges
app.post("/challenges", (req, res) => {
  //sélectionner les dates de début et de fin
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server is running on", port));
