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
var DivIcon = (function (_MapComponent) {
    _inherits(DivIcon, _MapComponent);

    function DivIcon() {
        _classCallCheck(this, DivIcon);

        _get(Object.getPrototypeOf(DivIcon.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DivIcon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var iconHtml = '';
            if (this.props.children) {
                iconHtml = ReactDOMServer.renderToString(React.createElement(
                    'div',
                    { style: {
                            padding: 0,
                            margin: 0,
                            display: 'inline'
                        } },
                    this.props.children
                ));
            } else {
                iconHtml = this.props.dangerouslySetInnerHTML;
            }

            var icon = DG.divIcon({
                iconSize: this.props.iconSize,
                html: iconHtml
            });

            this.props.element.setIcon(icon);
        }
    }], [{
        key: 'propsTypes',
        value: {
            iconSize: PropTypes.array,
            dangerouslySetInnerHTML: PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            dangerouslySetInnerHTML: ''
        },
        enumerable: true
    }]);

    return DivIcon;
})(MapComponent);

export default DivIcon;