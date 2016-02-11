var config = require('../config');

/**
 * Configuration settings for <Map/>
 */
module.exports = {

  params: {
    center: config.locations.dosomething,
    zoomControl: false,
    zoom: 13,
    maxZoom: 20,
    minZoom: 10,
    scrollwheel: false,
    legends: true,
    infoControl: false,
    attributionControl: true
  },

  tileLayer: {
    uri: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    params: {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 20,
      id: 'mapbox.light',
      accessToken: config.mapbox.token
    }
  }

};
