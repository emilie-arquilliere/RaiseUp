let ThemesService = {};
const ThemesDAO = require("../DAO/themes.DAO");

/*=====FUNCTIONS=====*/
//get month theme
ThemesService.findOne = (callback) => {
  ThemesDAO.findOne(callback);
};

module.exports = ThemesService;
