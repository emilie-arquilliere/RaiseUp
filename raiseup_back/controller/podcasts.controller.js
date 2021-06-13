let PodcastsController = {};
const PodcastsService = require("../services/podcasts.service.js");

/*=====FUNCTIONS=====*/
//get all podcasts
PodcastsController.findAll = (req, res) => {
  PodcastsService.findAll((err, resPodcasts) => {
    if (resPodcasts) res.status(200).send(resPodcasts);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};
//get one podcast
PodcastsController.findOne = (req, res) => {
  const idPodcast = req.params.idPodcast;
  //call service
  PodcastsService.findOne(idPodcast, (err, resPodcast) => {
    if (resPodcast) res.status(200).send(resPodcast);
    else if (err) res.status(500).send(err);
    else res.status(404).send();
  });
};

module.exports = PodcastsController;
