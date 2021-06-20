let ThemesDAO = {};
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
//get month theme
ThemesDAO.findOne = (callback) => {
  client.query(
    "SELECT title FROM themes WHERE isMonthTheme = 1",
    (err, res) => {
      if (err) callback(err, null);
      else callback(null, res.rows);
    }
  );
};

module.exports = ThemesDAO;
