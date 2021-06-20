const express = require("express");
const app = express();
const UsersController = require("./controller/users.controller");
const QuestionsController = require("./controller/questions.controller");
const AnswersController = require("./controller/answers.controller");
const PodcastsController = require("./controller/podcasts.controller");
const ThemesController = require("./controller/themes.controller");
const auth = require("./middleware/auth");

app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/*======USERS FUNCTIONS======*/
//register function
app.post("/register", UsersController.register);
//connect function
app.post("/connect", UsersController.connect);
//findOne function
app.post("/user", auth, UsersController.findOne);
//modify user name function
app.post("/name", auth, UsersController.modifyName);
//modify user password function
app.post("/password", UsersController.modifyPassword);

/*======QUESTIONS FUNCTIONS======*/
app.post("/questions", QuestionsController.findAll);
app.post("/question", auth, QuestionsController.addOne);

/*======ANSWERS FUNCTIONS======*/
app.post("/answers", auth, AnswersController.findAllByQuestion);
app.post("/answer", auth, AnswersController.addOne);

/*======PODCASTS FUNCTIONS======*/
app.post("/podcasts", auth, PodcastsController.findAll);
app.post("/podcast", PodcastsController.findOne);

/*======THEMES FUNCTION======*/
app.get("/themes", ThemesController.findOne);

//lancement du serveur
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server is running on", port));
