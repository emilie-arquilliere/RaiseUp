let PodcastsDAO = {};
const { Client } = require("pg");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const connectionString = process.env.DATABASE_URL;
const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});
client.connect();

/*=====FUNCTIONS=====*/
//findAll podcasts function
PodcastsDAO.findAll = (callback) => {
  client.query("SELECT * FROM podcasts", (err, resPodcast) => {
    if (err) callback(err, null);
    else callback(null, resPodcast.rows);
  });
};

//find one podcast function
PodcastsDAO.findOne = (idPodcast, callback) => {
  client.query(
    "SELECT * FROM podcasts WHERE id=$1",
    [idPodcast],
    (err, resPodcast) => {
      if (err) callback(err, null);
      else callback(null, resPodcast.rows);
    }
  );
};

module.exports = PodcastsDAO;
