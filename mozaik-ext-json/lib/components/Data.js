'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ui = require('mozaik/ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//export default React.createClass(

var Data = function (_Component) {
    _inherits(Data, _Component);

    function Data() {
        _classCallCheck(this, Data);

        return _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).apply(this, arguments));
    }

    _createClass(Data, [{
        key: 'render',


        // getApiRequest() {
        //     return {
        //       id: 'json.data',
        //       params: {
        //         title: this.props.title,
        //         value: this.props.value,
        //         unit: this.props.unit,
        //         alter: this.props.alter
        //       }
        //     };
        // }

        value: function render() {
            var _props = this.props,
                _props$apiData = _props.apiData,
                apiData = _props$apiData === undefined ? {} : _props$apiData,
                apiError = _props.apiError,
                _props$title = _props.title,
                title = _props$title === undefined ? "unknown" : _props$title,
                _props$unit = _props.unit,
                unit = _props$unit === undefined ? null : _props$unit;

            var value = apiData.response || this.props.value;

            if (value && this.props.alter) {
                var alter = eval("(" + this.props.alter + ")");
                value = alter(value);
            }

            value || (value = "unknown");

            return _react2.default.createElement(
                _ui.Widget,
                null,
                _react2.default.createElement(_ui.WidgetHeader, {
                    title: title || 'Events',
                    icon: 'code-fork'
                }),
                _react2.default.createElement(
                    _ui.WidgetBody,
                    null,
                    _react2.default.createElement(
                        _ui.TrapApiError,
                        { error: apiError },
                        _react2.default.createElement(_ui.WidgetLabel, {
                            label: unit,
                            prefix: value,
                            style: {
                                padding: '2vmin',
                                textAlign: 'center'
                            }
                        })
                    )
                )
            );
        }
    }], [{
        key: 'getApiRequest',
        value: function getApiRequest(_ref) {
            var url = _ref.url,
                headers = _ref.headers;

            return {
                id: 'json.data',
                params: { url: url, headers: headers }
            };
        }
    }]);

    return Data;
}(_react.Component);

Data.displayName = 'Data';

Data.propTypes = {
    title: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.number,
    unit: _react.PropTypes.string
};

Data.defaultProps = {
    title: 'Mozaïk JSON widget',
    value: 0,
    unit: ''
};

exports.default = Data;