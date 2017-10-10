'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React, { Component } from 'react';
import DG from '2gis-maps';
import MapComponent from './MapComponent';
import PropTypes from 'prop-types';
var Icon = (function (_MapComponent) {
    _inherits(Icon, _MapComponent);

    function Icon() {
        _classCallCheck(this, Icon);

        _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Icon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setIcon();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.iconUrl != this.props.iconUrl || prevProps.iconSize != this.props.iconSize) {
                this.setIcon();
            }
            this.props.element._bringToFront();
        }
    }, {
        key: 'setIcon',
        value: function setIcon() {
            this.props.element.setIcon(DG.icon({
                iconUrl: this.props.iconUrl,
                iconSize: this.props.iconSize
            }));
        }
    }], [{
        key: 'propsTypes',
        value: {
            iconUrl: PropTypes.string,
            iconSize: PropTypes.array
        },
        enumerable: true
    }]);

    return Icon;
})(MapComponent);

export default Icon;