/**
 * Configuration settings for <Map/>
 */
var dosomething = ['40.741023', '-73.991770'];


module.exports = {

  leaflet: {
    imagePath: '/node_modules/leaflet/dist/images'
  },

  locations: {
    dosomething: dosomething
  },

  params: {
    center: dosomething,
    zoomControl: true,
    zoom: 10,
    maxZoom: 20,
    minZoom: 2,
    scrollWheelZoom: false,
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
      accessToken: 'pk.eyJ1IjoiZG9zb21ldGhpbmciLCJhIjoiY2lrZWh1ODVsMDA1aXYwbHp2MnMxbmVkeSJ9.2ZjF8TdLFN4k6M-qqGCtbw'
    }
  }

};
