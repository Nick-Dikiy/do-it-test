'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React, { Component } from 'react';
import DG from '2gis-maps';
import MapComponent from './MapComponent';
import PropTypes from 'prop-types';
var Wkt = (function (_MapComponent) {
    _inherits(Wkt, _MapComponent);

    function Wkt() {
        _classCallCheck(this, Wkt);

        _get(Object.getPrototypeOf(Wkt.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null
        };
    }

    _createClass(Wkt, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderWkt();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.checkPropsChange(['data', 'style'], prevProps)) {
                this.renderWkt();
            }
        }
    }, {
        key: 'renderWkt',
        value: function renderWkt() {
            var dgElement = DG.Wkt.geoJsonLayer(this.props.data, this.props.style);

            if (this.state.dgElement) {
                this.state.dgElement.remove();
            }

            this.props.element.addLayer(dgElement);

            this.setState({
                dgElement: dgElement
            });
        }
    }], [{
        key: 'propsTypes',
        value: {
            style: PropTypes.object,
            data: PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            style: null
        },
        enumerable: true
    }]);

    return Wkt;
})(MapComponent);

export default Wkt;