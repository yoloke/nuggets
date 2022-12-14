"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _store = _interopRequireDefault(require("./store"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./eventBus.js");

var _router = _interopRequireDefault(require("./router"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_elementUi["default"]);

_vue["default"].config.productionTip = false;

_vue["default"].use(_vueRouter["default"]);

new _vue["default"]({
  store: _store["default"],
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");