'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React, { Component } from 'react';
import DG from '2gis-maps';
import MapComponent from './MapComponent';
import PropTypes from 'prop-types';
var Polyline = (function (_MapComponent) {
    _inherits(Polyline, _MapComponent);

    function Polyline() {
        _classCallCheck(this, Polyline);

        _get(Object.getPrototypeOf(Polyline.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null
        };
    }

    _createClass(Polyline, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dgElement = DG.polyline(this.props.points, this.props.style);

            if (this.props.label) {
                dgElement.bindLabel(this.props.label);
            }

            this.setState({
                dgElement: dgElement
            });

            this.bindEvents(dgElement);

            this.props.element.addLayer(dgElement);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            this.updatePoints(prevProps);
            this.updateLabel(prevProps);
            this.updateStyle(prevProps);
            this.updateEvents(this.state.dgElement);
        }
    }], [{
        key: 'propsTypes',
        value: {
            style: PropTypes.object,
            points: PropTypes.array,
            label: PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            style: null
        },
        enumerable: true
    }]);

    return Polyline;
})(MapComponent);

export default Polyline;