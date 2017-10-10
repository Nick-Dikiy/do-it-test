'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import React from 'react';
import PropTypes from 'prop-types';
import DG from '2gis-maps';
import MapComponent from './MapComponent';

var Map = (function (_MapComponent) {
    _inherits(Map, _MapComponent);

    function Map() {
        _classCallCheck(this, Map);

        _get(Object.getPrototypeOf(Map.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null,
            childrenForRender: []
        };
    }

    _createClass(Map, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            var container = this.refs.container;

            // Map options.
            var _props = this.props;
            var zoom = _props.zoom;
            var center = _props.center;
            var geoclicker = _props.geoclicker;
            var projectDetector = _props.projectDetector;
            var zoomControl = _props.zoomControl;
            var fullscreenControl = _props.fullscreenControl;
            var preferCanvas = _props.preferCanvas;
            var touchZoom = _props.touchZoom;
            var scrollWheelZoom = _props.scrollWheelZoom;
            var doubleClickZoom = _props.doubleClickZoom;
            var dragging = _props.dragging;
            var maxBounds = _props.maxBounds;
            var minZoom = _props.minZoom;
            var maxZoom = _props.maxZoom;

            var options = {
                zoom: zoom, center: center, geoclicker: geoclicker, projectDetector: projectDetector, zoomControl: zoomControl, fullscreenControl: fullscreenControl, preferCanvas: preferCanvas, touchZoom: touchZoom,
                scrollWheelZoom: scrollWheelZoom, doubleClickZoom: doubleClickZoom, dragging: dragging, maxBounds: maxBounds, minZoom: minZoom, maxZoom: maxZoom
            };

            // Check exist prop center.
            if (!center) {
                console.error('For initial map You should set prop \'center\'.');
            }

            // Check exist zoom center.
            if (!zoom) {
                console.error('For initial map You should set prop \'zoom\'.');
            }

            // Create Map.
            var dgElement = DG.map(container, options);

            if (this.props.onProjectChange) {
                dgElement.on('projectchange', function (e) {
                    return _this.props.onProjectChange(e);
                });
            }

            if (this.props.onProjectLeave) {
                dgElement.on('projectleave', function (e) {
                    return _this.props.onProjectLeave(e);
                });
            }

            this.setState({
                dgElement: dgElement
            });

            this.bindEvents(dgElement);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var dgElement = this.state.dgElement;

            if (this.checkPropsChange('center', prevProps)) {
                dgElement.setView(this.props.center);
            }

            if (this.checkPropsChange('zoom', prevProps)) {
                dgElement.setZoom(this.props.zoom);
            }

            if (this.checkPropsChange('style', prevProps)) {
                dgElement.invalidateSize();
            }

            this.updateEvents(dgElement, prevProps);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { ref: 'container', style: this.props.style },
                _get(Object.getPrototypeOf(Map.prototype), 'render', this).call(this)
            );
        }
    }], [
        {
        key: 'propsTypes',
        value: {
            style: PropTypes.object,
            center: PropTypes.array,
            zoom: PropTypes.number,
            geoclicker: PropTypes.bool,
            projectDetector: PropTypes.bool,
            zoomControl: PropTypes.bool,
            fullscreenControl: PropTypes.bool,
            preferCanvas: PropTypes.bool,
            touchZoom: PropTypes.bool,
            scrollWheelZoom: PropTypes.bool,
            doubleClickZoom: PropTypes.bool,
            dragging: PropTypes.bool,
            maxBounds: PropTypes.array,
            minZoom: PropTypes.number,
            maxZoom: PropTypes.number
        },
        enumerable: true
    }
    , {
        key: 'defaultProps',
        value: {
            zoom: false,
            center: false,
            geoclicker: false,
            projectDetector: false,
            zoomControl: true,
            fullscreenControl: true,
            preferCanvas: true,
            touchZoom: true,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            dragging: true
        },
        enumerable: true
    }]);

    return Map;
})(MapComponent);

export default Map;