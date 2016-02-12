'use strict';

var React    = require('react');
var ReactDOM = require('react-dom');
var Leaflet  = require('leaflet');
var config   = require('./MapConfig');
var util     = require('../utilities');


Leaflet.Icon.Default.imagePath = config.leaflet.imagePath;


var Map = React.createClass({

  markerIndex: 0,

  getInitialState: function() {
    return {
      map: null,
      tileLayer: null,
      markers: {}  // or []?
    }
  },

  componentDidMount: function() {
    var mapId = this.getComponentId();

    this.init(mapId);

    // @TODO: sample code, move out of here!
    // var marker = Leaflet.marker(config.locations.dosomething).addTo(this.state.map);
    // marker.bindPopup("<section><h1>Welcome!</h1><br><p>This is the DoSomething Staff Sabbatical Map</p></section>").openPopup();

    // var popup = Leaflet.popup()
    //   .setLatLng(config.locations.dosomething)
    //   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    //   .openOn(this.state.map);

    // var coordinates = util.getCoordinates();

    // for (var i = 0, total = coordinates.length; i < total; i++) {
    //   Leaflet.marker(coordinates[i]).addTo(this.state.map);
    // }


    var data = util.getData();

    Leaflet.marker(config.locations.dosomething).addTo(this.state.map); // @TODO: use custom icon with DS logo

    for (var i = 0, total = data.length; i < total; i++) {
      this.setMarker(data[i]);
    }

  },

  componentWillUnmount: function() {
    // clean up steps to run when unmounting...
  },

  getComponentId: function() {
    return this.refs.mapId;
  },

  init: function(id) {
    this.state.map = Leaflet.map(id, config.params);

    this.state.tileLayer = Leaflet.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(this.state.map);

    this.setState({
      tileLayer: this.state.tileLayer
    });
  },

  setMarker: function(data) {
    for (var i = 0, total = data.sabbaticals.length; i < total; i++) {
      console.log(data);

      var sabbatical = data.sabbaticals[i];
      var latitude = sabbatical.location.latitude;
      var longitude = sabbatical.location.longitude;

      this.state.markers[this.markerIndex] = Leaflet.marker([latitude, longitude]).addTo(this.state.map);

      this.state.markers[this.markerIndex].bindPopup(
        `
        <section class="sabbatical">
          <h1>${data.first_name} ${data.last_name}</h1>
          <div class="info">
            <div class="location">
              ${sabbatical.location.city}, ${sabbatical.location.country} <span class="date">${sabbatical.date}</span>
            </div>

            <div class="block organization">
              <strong>Organization:</strong>
              <h2>${sabbatical.organization.title}</h2>
              <p><a href="${sabbatical.organization.website}" target="_blank">${sabbatical.organization.website}</a></p>
            </div>

            <div class="block description">
              <strong>What ${data.first_name} did:</strong>
              <blockquote>
                <p>${sabbatical.description}</p>
              </blockquote>
            </div>

            <div class="block contact">
              <strong>Contact:</strong>
              <p>${sabbatical.contact.name}</p>
              <p>${sabbatical.contact.email}</p>
            </div>
          </div>
        </section>
        `
      );

      this.markerIndex++;
    }

  },

  render: function() {
    return (
      <div className="map-container">
        <div id="map" ref="mapId"></div>
      </div>
    )
  }

});


module.exports = Map;
