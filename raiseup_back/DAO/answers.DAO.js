let AnswersDAO = {};
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
//get all answers with idQuestion
AnswersDAO.findAllByQuestion = (idQuestion, callback) => {
  client.query(
    "SELECT * FROM answers WHERE idQuestion=$1",
    [idQuestion],
    (err, resAnswers) => {
      if (err) callback(err, null);
      else callback(null, resAnswers.rows);
    }
  );
};
//add one answer
AnswersDAO.addOne = (body, callback) => {
  //we get the date to which we add the question
  const date = new Date();
  client.query(
    "INSERT INTO answers (content, dateAnswer, idQuestion, idAuthor, idTheme) VALUES ($1,$2,$3,$4,$5)",
    [body.answer, date, body.question, body.author, body.theme],
    (err, resAnswer) => {
      if (err) callback(err, null);
      else callback(null, { ok: 1 });
    }
  );
};

module.exports = AnswersDAO;
