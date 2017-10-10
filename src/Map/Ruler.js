'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React, { Component } from 'react';
import DG from '2gis-maps';
import MapComponent from './MapComponent';
import PropTypes from 'prop-types';
var Ruler = (function (_MapComponent) {
    _inherits(Ruler, _MapComponent);

    function Ruler() {
        _classCallCheck(this, Ruler);

        _get(Object.getPrototypeOf(Ruler.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null
        };
    }

    _createClass(Ruler, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dgElement = DG.ruler(this.props.points);
            this.props.element.addLayer(dgElement);
            this.setState({
                dgElement: dgElement
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            this.updatePoints(prevProps);
        }
    }], [{
        key: 'propsTypes',
        value: {
            points: PropTypes.array
        },
        enumerable: true
    }]);

    return Ruler;
})(MapComponent);

export default Ruler;