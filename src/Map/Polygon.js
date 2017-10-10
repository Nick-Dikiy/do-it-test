'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React  from 'react';
import DG from '2gis-maps';
import MapComponent from './MapComponent';
import PropTypes from 'prop-types';

var Polygon = (function (_MapComponent) {
    _inherits(Polygon, _MapComponent);

    function Polygon() {
        _classCallCheck(this, Polygon);

        _get(Object.getPrototypeOf(Polygon.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null,
            childrenForRender: []
        };
    }

    _createClass(Polygon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dgElement = DG.polygon(this.props.points);

            if (this.props.style) {
                dgElement.setStyle(this.props.style);
            }

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
    }]);

    return Polygon;
})(MapComponent);

export default Polygon;