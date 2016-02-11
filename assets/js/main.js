'use strict';

var React    = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App');


ReactDOM.render(<App/>, document.getElementById('app'));


// var data     = require('./sabbaticals');
// var config   = require('./config');


// // Leaflet is pulled in via NPM, and seems to have trouble finding image directory.
// L.Icon.Default.imagePath = config.leaflet.imagePath;

// // var marker = L.marker(dosomething).addTo(map);

// // Get all the markers from the sabbaticals json.
// var latslongs = [];
// for (var i = 0; i < data.length; i++) {
//   // This only deals with the first sabbatical for now.
//   latslongs[i] = [data[i].sabbaticals[0].location.latitude, data[i].sabbaticals[0].location.longitude];
//   L.marker(latslongs[i]).addTo(map);

// }
