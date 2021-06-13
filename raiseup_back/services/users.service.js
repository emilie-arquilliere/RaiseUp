let UsersService = {};
const UsersDAO = require("../DAO/users.DAO");

/*=====FUNCTIONS=====*/
//register function
UsersService.register = (body, callback) => {
  //on vérifie les informations saisies
  UsersDAO.checkData(body, (errCheck, resCheck) => {
    if (errCheck) {
      return errCheck;
    } else {
      //on vérifie l'unicité de l'email
      UsersDAO.uniqueness(body.email, (errUnique, resUnique) => {
        if (errUnique) {
          return errUnique;
        } else if (resUnique != 0) {
          return 0;
        } else {
          //on enregistre le user
          UsersDAO.register(body, callback);
        }
      });
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
