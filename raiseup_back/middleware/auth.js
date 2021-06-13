const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const idUser = decodedToken.idUser;
    if (req.body.idUser && req.body.idUser !== idUser) {
      throw "idUser invalide";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Vous n'êtes pas autorisé à faire cette action"),
    });
  }
};
