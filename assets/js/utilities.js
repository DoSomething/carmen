'use strict';

/**
 * Utility helper methods.
 */
var data = require('./sabbaticals');

module.exports = {

  getCoordinates: function() {
    // Get all the markers from the sabbaticals json.
    var coordinates = [];
    var index = 0;

    for (var i = 0, total = data.length; i < total; i++) {
      var sabbaticalsCount = data[i].sabbaticals.length;

      for(var j = 0; j < sabbaticalsCount; j++) {
        var sabbatical = data[i].sabbaticals[j];

        coordinates[index] = [sabbatical.location.latitude, sabbatical.location.longitude];

        index++;
      }
    }

    return coordinates;
  }

};


