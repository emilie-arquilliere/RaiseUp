let UsersService = {};
const UsersDAO = require("../DAO/users.DAO");

/*=====FUNCTIONS=====*/
//register function
UsersService.register = (body, callback) => {
  //we check the information entered
  UsersDAO.checkData(body, (errCheck, resCheck) => {
    if (errCheck) {
      callback(errCheck, null);
    } else if (resCheck.ok === 1) {
      //we check the uniqueness of the email
      UsersDAO.uniqueness(body.email, (errUnique, resUnique) => {
        if (errUnique) {
          callback(errUnique, null);
        } else if (resUnique.ok === 0) {
          //not unique
          callback(null, resUnique);
        } else {
          //unique, we register the user
          UsersDAO.register(body, callback);
        }
      });
    } else if (resCheck.ok === 0) {
      callback(null, resCheck);
    }
  });
};

//connect function
UsersService.connect = (body, callback) => {
  UsersDAO.connect(body, callback);
};

//get one user function
UsersService.findOne = (idUser, callback) => {
  UsersDAO.findOne(idUser, callback);
};

//modify user name function
UsersService.modifyName = (body, callback) => {
  UsersDAO.modifyName(body, callback);
};

//modify user password function
UsersService.modifyPassword = (body, callback) => {
  UsersDAO.modifyPassword(body, callback);
};

module.exports = UsersService;
