let PodcastsService = {};
const PodcastsDAO = require("../DAO/podcasts.DAO");

/*=====FUNCTIONS=====*/
//findAll podcasts function
PodcastsService.findAll = (callback) => {
  PodcastsDAO.findAll(callback);
};

//find one podcast function
PodcastsService.findOne = (idPodcast, callback) => {
  PodcastsDAO.findOne(idPodcast, callback);
};

module.exports = PodcastsService;
