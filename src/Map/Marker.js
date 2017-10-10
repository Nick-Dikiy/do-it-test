'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import PropTypes from 'prop-types';

import React  from 'react';

import DG from '2gis-maps';
import MapComponent from './MapComponent';

var Marker = (function (_MapComponent) {
    _inherits(Marker, _MapComponent);

    function Marker() {
        var _this = this;

        _classCallCheck(this, Marker);

        _get(Object.getPrototypeOf(Marker.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null,
            childrenForRender: [],
            pos: this.props.pos || null
        };

        this.dragging = function (e) {
            _this.setState({
                dgElement: _this.state.dgElement,
                childrenForRender: _this.state.childrenForRender,
                pos: e.latlng
            });
        };
    }

    _createClass(Marker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var dgElement = DG.marker(this.props.pos, {
                draggable: this.props.draggable,
                clickable: this.props.clickable
            });

            if (this.props.label) {
                dgElement.bindLabel(this.props.label);
            }

            this.setState({
                dgElement: dgElement
            }, function () {
                // For dragging Marker.
                if (_this2.props.draggable) {
                    _this2.draggingSwitchTo(true);
                }
            });

            this.bindEvents(dgElement);

            // todo: fix it after fix https://github.com/2gis/mapsapi/issues/332
            if (this.props.staticLabel) {
                this.props.element.addLayer(dgElement);

                dgElement.bindLabel(this.props.staticLabel, { 'static': true });
            } else {
                this.props.element.addLayer(dgElement);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var dgElement = this.state.dgElement;

            this.updatePos(prevProps);

            this.updateLabel(prevProps);

            // Update static label.
            if (this.checkPropsChange('staticLabel', prevProps)) {
                dgElement.bindLabel(this.props.staticLabel, { 'static': true });
            }

            // Update draggable.
            if (this.checkPropsChange('draggable', prevProps)) {
                this.draggingSwitchTo(this.props.draggable);
            }

            this.updateEvents(dgElement, prevProps);
        }
    }, {
        key: 'draggingSwitchTo',
        value: function draggingSwitchTo(isEnable) {
            var dgElement = this.state.dgElement;

            if (isEnable) {
                dgElement.on('drag', this.dragging);
                dgElement.dragging.enable();
            } else {
                dgElement.off('drag', this.dragging);
                dgElement.dragging.disable();
                dgElement.setLatLng(this.state.pos);
            }
        }
    }], [{
        key: 'propsTypes',
        value: {
            pos: PropTypes.array,
            label: PropTypes.string,
            staticLabel: PropTypes.string,
            draggable: PropTypes.bool,
            clickable: PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            draggable: false,
            clickable: true,
            label: false,
            staticLabel: false
        },
        enumerable: true
    }]);

    return Marker;
})(MapComponent);

export default Marker;