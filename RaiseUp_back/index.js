const express = require("express");
const app = express();
const { Client } = require("pg");

app.use(express.static("public"));
app.listen(8080);

//chemin qui connecte le user
app.get("/users", (req, res) => {});

//chemin qui inscrit le user
app.post("/user", (req, res) => {});

//chemin qui récupère les podcasts
app.get("/podcasts", (req, res) => {});
