let QuestionsController = {};
const QuestionsService = require("../services/questions.service");

/*=====FUNCTIONS=====*/
//get all questions
QuestionsController.findAll = (req, res) => {
  const idTheme = req.params.idTheme;
  QuestionsService.findAll(idTheme, (err, resQuestions) => {
    if (resQuestions) res.status(200).send(resQuestions);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};
//add a question
QuestionsController.addOne = (req, res) => {
  const body = req.body;
  QuestionsService.findAll(body, (err, resQuestion) => {
    if (resQuestion) res.status(200).send(resQuestion);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};

module.exports = QuestionsController;
