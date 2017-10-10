'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React  from 'react';
import DG from '2gis-maps';
import MapComponent from './MapComponent';
import PropTypes from 'prop-types';
var Rectangle = (function (_MapComponent) {
    _inherits(Rectangle, _MapComponent);

    function Rectangle() {
        _classCallCheck(this, Rectangle);

        _get(Object.getPrototypeOf(Rectangle.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null,
            childrenForRender: []
        };
    }

    _createClass(Rectangle, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dgElement = DG.rectangle(this.props.bounds);

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
            var dgElement = this.state.dgElement;

            if (this.checkPropsChange('bounds', prevProps)) {
                dgElement.setBounds(this.props.bounds);
            }
            this.updateLabel(prevProps);
            this.updateStyle(prevProps);
            this.updateEvents(dgElement, prevProps);
        }
    }], [{
        key: 'propsTypes',
        value: {
            style: PropTypes.object,
            bounds: PropTypes.array,
            label: PropTypes.string
        },
        enumerable: true
    }]);

    return Rectangle;
})(MapComponent);

export default Rectangle;