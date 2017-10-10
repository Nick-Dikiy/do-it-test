'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React from 'react';
import DG from '2gis-maps';
import MapComponent from './MapComponent';
import PropTypes from 'prop-types';

var CircleMarker = (function (_MapComponent) {
    _inherits(CircleMarker, _MapComponent);

    function CircleMarker() {
        _classCallCheck(this, CircleMarker);

        _get(Object.getPrototypeOf(CircleMarker.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null,
            childrenForRender: []
        };
    }

    _createClass(CircleMarker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dgElement = DG.circleMarker(this.props.pos);

            if (this.props.style) {
                dgElement.setStyle(this.props.style);
            }

            if (this.props.label) {
                dgElement.bindLabel(this.props.label);
            }

            if (this.props.radius) {
                dgElement.setRadius(this.props.radius);
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
            var dgElement = this.state.dgElement;

            this.updatePos(prevProps);

            if (this.checkPropsChange('radius', prevProps)) {
                dgElement.setRadius(this.props.radius);
            }

            this.updateLabel(prevProps);

            this.updateStyle(prevProps);

            this.updateEvents(dgElement, prevProps);
        }
    }], [{
        key: 'propsTypes',
        value: {
            style: PropTypes.object,
            pos: PropTypes.array,
            radius: PropTypes.number,
            label: PropTypes.string
        },
        enumerable: true
    }]);

    return CircleMarker;
})(MapComponent);

export default CircleMarker;