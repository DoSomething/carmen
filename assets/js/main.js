'use strict';

var data     = require('./sabbaticals');
var config   = require('./config');
var L        = require('leaflet');
var React    = require('react');
var ReactDom = require('react-dom');


// @TODO: eventually clean this file up and set up as app bootstrap.

var dosomething = ['40.741023', '-73.991770'];
var map = L.map('map').setView(dosomething, 2);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.light',
    accessToken: config.mapbox.token
}).addTo(map);


// Leaflet is pulled in via NPM, and seems to have trouble finding image directory.
L.Icon.Default.imagePath = config.leaflet.imagePath;

// var marker = L.marker(dosomething).addTo(map);

// Get all the markers from the sabbaticals json.
var latslongs = [];
for (var i = 0; i < data.length; i++) {
  // This only deals with the first sabbatical for now.
  latslongs[i] = [data[i].sabbaticals[0].location.latitude, data[i].sabbaticals[0].location.longitude];
  L.marker(latslongs[i]).addTo(map);

}

// Testing use of React components:
var Sabbatical = React.createClass({
  render: function() {
    return (
      <section className="sabbatical">
        <p>Hi, I'm a react component.</p>
      </section>
    )
  }
});

ReactDom.render(<Sabbatical/>, document.getElementById('interface'));
