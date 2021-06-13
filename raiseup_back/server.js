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
app.post("/findOne", auth, UsersController.findOne);
//modify user name function
app.post("/modifyName", auth, UsersController.modifyName);
//modify user password function
app.post("/modifyPassword", auth, UsersController.modifyPassword);

/*======QUESTIONS FUNCTIONS======*/
app.post("/questions/:idTheme", auth, QuestionsController.findAll);
app.post("/questions", auth, QuestionsController.addOne);

/*======ANSWERS FUNCTIONS======*/
app.post("/answers/:idQuestion", auth, AnswersController.findAllByQuestion);
app.post("/answers", auth, AnswersController.addOne);

/*======PODCASTS FUNCTIONS======*/
app.post("/podcasts", auth, PodcastsController.findAll);
app.post("/podcasts/:idPodcast", auth, PodcastsController.findOne);

/*======THEMES FUNCTION======*/
app.post("/themes", auth, ThemesController.findOne);

//lancement du serveur
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server is running on", port));
