'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React, { Component } from 'react';
import DG from '2gis-maps';
import MapComponent from './MapComponent';
import PropTypes from 'prop-types';
var GeoJSON = (function (_MapComponent) {
    _inherits(GeoJSON, _MapComponent);

    function GeoJSON() {
        _classCallCheck(this, GeoJSON);

        _get(Object.getPrototypeOf(GeoJSON.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null
        };
    }

    _createClass(GeoJSON, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderGeoJSON();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.checkPropsChange(['data', 'style', 'pointToLayer', 'onEachFeature', 'onEachFeature'], prevProps)) {
                this.renderGeoJSON();
            }
        }
    }, {
        key: 'renderGeoJSON',
        value: function renderGeoJSON() {
            var options = {
                style: this.props.style,
                pointToLayer: this.props.pointToLayer,
                onEachFeature: this.props.onEachFeature,
                filter: this.props.filter
            };

            if (this.state.dgElement) {
                this.state.dgElement.remove();
            }

            var dgElement = DG.geoJson(this.props.data, options);
            this.props.element.addLayer(dgElement);

            this.setState({
                dgElement: dgElement
            });
        }
    }], [{
        key: 'propsTypes',
        value: {
            data: PropTypes.object,
            style: PropTypes.object,
            pointToLayer: PropTypes.func,
            onEachFeature: PropTypes.func,
            filter: PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            style: null,
            pointToLayer: null,
            onEachFeature: null,
            filter: null
        },
        enumerable: true
    }]);

    return GeoJSON;
})(MapComponent);

export default GeoJSON;