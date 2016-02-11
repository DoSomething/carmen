'use strict';

var React    = require('react');
var ReactDOM = require('react-dom');
var L        = require('leaflet');
var config   = require('./MapConfig');


var Map = React.createClass({

  getInitialState: function() {
    return {
      tileLayer: null
    }
  },

  componentDidMount: function() {
    var mapId = this.getComponentId();

    this.init(mapId)
  },

  getComponentId: function() {
    return this.refs.mapId;
  },

  init: function(id) {
    let map = L.map(id, config.params);

    this.state.tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

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
