let QuestionsDAO = {};
const { Client } = require("pg");

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
//get all questions function
QuestionsDAO.findAll = (idTheme, callback) => {
  client.query(
    "SELECT * FROM questions WHERE idTheme=$1",
    [idTheme],
    (err, resQuestions) => {
      if (err) callback(err, null);
      else callback(null, resQuestions.rows);
    }
  );
};

//add a question function
QuestionsDAO.addOne = (body, callback) => {
  //we get the date to which we add the question
  const date = new Date();
  client.query(
    "INSERT INTO questions (content, dateQuestion, idAuthor, idTheme) VALUES ($1,$2,$3,$4)",
    [body.question, date, body.author, body.theme],
    (err, resQuestion) => {
      if (err) {
        callback(err, null);
      } else callback(null, { ok: 1 });
    }
  );
};

module.exports = QuestionsDAO;
