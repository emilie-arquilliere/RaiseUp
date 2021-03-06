let ThemesController = {};
const ThemesService = require("../services/themes.service");

/*=====FUNCTIONS=====*/
//get month theme
ThemesController.findOne = (req, res) => {
  ThemesService.findOne((err, result) => {
    if (result) res.status(200).send(result);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};

module.exports = ThemesController;
