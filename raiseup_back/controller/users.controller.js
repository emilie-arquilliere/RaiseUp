let UsersController = {};
const UsersService = require("./services/users.service");

/*=====FUNCTIONS=====*/
//register function
UsersController.register = (req, res) => {
  const body = req.body;
  //call service
  UsersService.register(body, (err, resRegister) => {
    if (resRegister) res.status(200).send(resRegister);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};

//connect function
UsersController.connect = (req, res) => {
  const body = req.body;
  //call service
  UsersService.connect(body, (err, resConnect) => {
    if (resConnect) res.status(200).send(resConnect);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};

//get one user function
UsersController.findOne = (req, res) => {
  const idUser = req.body.idUser;
  //call service
  UsersService.findOne(idUser, (err, resFindOne) => {
    if (resFindOne) res.status(200).send(resFindOne);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};

//modify user name function
UsersController.modifyName = (req, res) => {
  const body = req.body;
  //call service
  UsersService.modifyName(body, (err, resModifyName) => {
    if (resModifyName) res.status(200).send(resModifyName);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};

//modify user password function
UsersController.modifyPassword = (req, res) => {
  const body = req.body;
  //call service
  UsersService.modifyPassword(body, (err, resModifyPassword) => {
    if (resModifyPassword) res.status(200).send(resModifyPassword);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};

module.exports = UsersController;
