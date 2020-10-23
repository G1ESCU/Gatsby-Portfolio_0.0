"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PortfolioConsumer = exports.PortfolioProvider = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PortfolioContext = _react["default"].createContext();

var PortfolioProvider = PortfolioContext.Provider;
exports.PortfolioProvider = PortfolioProvider;
var PortfolioConsumer = PortfolioContext.Consumer;
exports.PortfolioConsumer = PortfolioConsumer;
var _default = PortfolioContext;
exports["default"] = _default;