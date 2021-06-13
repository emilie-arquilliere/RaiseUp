let QuestionsService = {};
const QuestionsDAO = require("../DAO/questions.DAO");

/*=====FUNCTIONS=====*/
//get all questions function
QuestionsService.findAll = (idTheme, callback) => {
  QuestionsDAO.findAll(idTheme, callback);
};
//add a question function
QuestionsService.addOne = (body, callback) => {
  QuestionsDAO.addOne(body, callback);
};

module.exports = QuestionsService;
