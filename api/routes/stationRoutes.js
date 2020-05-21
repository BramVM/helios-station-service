'use strict';

module.exports = function (app) {
  var stationController = require('../controllers/stationController');

  app.route('/stations')
    .get(stationController.list_all_stations)
    .post(stationController.create_a_station)

  app.route('/stations/:stationId')
    .patch(stationController.update_a_station)
    .delete(stationController.delete_a_station);
};
