let AnswersController = {};
const AnswersService = require("../services/answers.service");

/*=====FUNCTIONS=====*/
//get all answers
AnswersController.findAllByQuestion = (req, res) => {
  const idQuestion = req.body.idQuestion;
  //call service
  AnswersService.findAllByQuestion(idQuestion, (err, resAnswers) => {
    if (resAnswers) res.status(200).send(resAnswers);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};
//add an answer
AnswersController.addOne = (req, res) => {
  const body = req.body;
  AnswersService.addOne(body, (err, resAnswer) => {
    if (resAnswer) res.status(200).send(resAnswer);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};

module.exports = AnswersController;
