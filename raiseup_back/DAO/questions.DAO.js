let QuestionsDAO = {};
const { Client } = require("pg");

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
      if (err) callback(null, err);
      else callback(null, resQuestions.rows);
    }
  );
};

//add a question function
QuestionsDAO.addOne = (body, callback) => {
  client.query(
    "INSERT INTO questions (content, dateQuestion, idAuthor, idTheme) VALUES ($1,$2,$3,$4)",
    [body.question, body.date, body.author, body.theme],
    (err, resQuestion) => {
      if (err) callback(null, err);
      else callback(null, resQuestion.rows);
    }
  );
};

module.exports = QuestionsDAO;
