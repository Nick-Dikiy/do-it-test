'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import DG from '2gis-maps';
import MapComponent from './MapComponent';
import PropTypes from 'prop-types';
var Popup = (function (_MapComponent) {
    _inherits(Popup, _MapComponent);

    function Popup() {
        _classCallCheck(this, Popup);

        _get(Object.getPrototypeOf(Popup.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Popup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var popupHtml = this.renderChildren();

            var element = this.props.element;

            var dgElement = null;

            // Popup options.
            var _props = this.props;
            var maxWidth = _props.maxWidth;
            var minWidth = _props.minWidth;
            var maxHeight = _props.maxHeight;
            var sprawling = _props.sprawling;
            var className = _props.className;

            var options = {
                maxWidth: maxWidth, minWidth: minWidth, maxHeight: maxHeight, sprawling: sprawling, className: className
            };

            if (this.insideMap()) {
                dgElement = DG.popup(options).setLatLng(this.props.pos).setContent(popupHtml).openOn(element);
            } else {
                if (element.getPopup()) {
                    element.setPopupContent(popupHtml);
                } else {
                    element.bindPopup(popupHtml, options);
                }

                dgElement = element.getPopup();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var element = this.props.element;

            if (prevProps.children != this.props.children) {
                var popupHtml = this.renderChildren();

                if (this.insideMap()) {
                    element.getPopup().setContent(popupHtml);
                } else {
                    element.setPopupContent(popupHtml);
                }
            }

            this.updatePos(prevProps);

            if (element.getPopup) {
                this.updateEvents(element.getPopup());
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.element.unbindPopup();
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            return ReactDOMServer.renderToString(React.createElement(
                'div',
                { style: {
                        padding: 0,
                        margin: 0,
                        display: 'inline'
                    } },
                this.props.children
            ));
        }
    }], [{
        key: 'propsTypes',
        value: {
            pos: PropTypes.array,
            maxWidth: PropTypes.number,
            minWidth: PropTypes.number,
            maxHeight: PropTypes.number,
            sprawling: PropTypes.bool,
            className: PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            sprawling: false,
            className: ''
        },
        enumerable: true
    }]);

    return Popup;
})(MapComponent);

export default Popup;