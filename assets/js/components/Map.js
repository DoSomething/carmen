'use strict';

var React    = require('react');
var ReactDOM = require('react-dom');
var Leaflet  = require('leaflet');
var config   = require('./MapConfig');
var util     = require('../utilities');

Leaflet.Icon.Default.imagePath = config.leaflet.imagePath;


var Map = React.createClass({

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

    var coordinates = util.getCoordinates();

    for (var i = 0, total = coordinates.length; i < total; i++) {
      Leaflet.marker(coordinates[i]).addTo(this.state.map);
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

  render: function() {
    return (
      <div className="map-container">
        <div id="map" ref="mapId"></div>
      </div>
    )
  }

});


module.exports = Map;
