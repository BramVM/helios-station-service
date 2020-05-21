'use strict';
//import {StationTileTypes} from '../constants/index'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StationSchema = new Schema({
  playerId: {
    type: String
  },
  position: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  tiles: [{
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    type:{
      type: String,
      default: 'ACCESS',
    },
    broken: {
      type: Boolean,
      default: false
    }
  }],
  Created_date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Stations', StationSchema);