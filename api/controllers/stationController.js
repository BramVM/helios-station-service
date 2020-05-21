'use strict';
const inputMappers = require('../mappers/inputMappers');
const mongoose = require('mongoose'),
Station = mongoose.model('Stations');

mongoose.set('useFindAndModify', false);

exports.list_all_stations = function (req, res) {
  Station.find({}, function (err, station) {
    if (err)
      res.send(err);
    else
      res.json(station);
  });
};

exports.list_all_stations = function (req, res) {
  //  position : {x:{ $gt :  30, $lt : 60}, y:{ $gt :  30, $lt : 60}}
  Station.find({}, function (err, station) {
    if (err)
      res.send(err);
    else
      res.json(station);
  });
};

exports.create_a_station = function (req, res) {
  const station = inputMappers.mapStation(req.body)
  var new_station = new Station(station);
  new_station.save(function (err, station) {
    if (err)
      res.send(err);
    else
      res.json(station);
  });
};

exports.update_a_station = function (req, res) {
  const station = inputMappers.mapStation(req.body)
  Station.findOneAndUpdate({ _id: req.params.stationId }, station, { new: true }, function (err, station) {
    if (err)
      res.send(err);
    else
      res.json(station);
  });
};

exports.delete_a_station = function (req, res) {
  Station.remove({
    _id: req.params.stationId
  }, function (err) {
    if (err)
      res.send();
    else
      res.json({ message: 'Station successfully deleted' });
  });
};
