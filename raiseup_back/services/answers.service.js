let AnswersService = {};
const AnswersDAO = require("../DAO/answers.DAO");

/*=====FUNCTIONS=====*/
//get all answers with idQuestion
AnswersService.findAllByQuestion = (idQuestion, callback) => {
  AnswersDAO.findAllByQuestion(idQuestion, callback);
};
//add one answer
AnswersService.addOne = (body, callback) => {
  AnswersDAO.addOne(body, callback);
};

module.exports = AnswersService;
