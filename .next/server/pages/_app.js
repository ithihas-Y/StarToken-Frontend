/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcmNvaW4vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n  enumerable: true,\n  get: function () {\n    return _utils.AppInitialProps;\n  }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n  enumerable: true,\n  get: function () {\n    return _utils.NextWebVitalsMetric;\n  }\n}));\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nfunction _appGetInitialProps() {\n  _appGetInitialProps =\n  /**\n  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n  * This allows for keeping state between navigation, custom error handling, injecting additional data.\n  */\n  _asyncToGenerator(function* ({\n    Component,\n    ctx\n  }) {\n    const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n    return {\n      pageProps\n    };\n  });\n  return _appGetInitialProps.apply(this, arguments);\n}\n\nfunction appGetInitialProps(_) {\n  return _appGetInitialProps.apply(this, arguments);\n}\n\nclass App extends _react.default.Component {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps));\n  }\n\n}\n\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2JBLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FILG1EQUFrRDtBQUM5Q0ksRUFBQUEsVUFBVSxFQUFFLElBRGtDO0FBRTlDQyxFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU9DLE1BQU0sQ0FBQ0MsZUFBZDtBQUNIO0FBSjZDLENBQWxEO0FBTUFQLHVEQUFzRDtBQUNsREksRUFBQUEsVUFBVSxFQUFFLElBRHNDO0FBRWxEQyxFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU9DLE1BQU0sQ0FBQ0UsbUJBQWQ7QUFDSDtBQUppRCxDQUF0RDtBQU1BTixlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSVEsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlOLE1BQU0sR0FBR00sbUJBQU8sQ0FBQyxnREFBRCxDQUFwQjs7QUFDQSxTQUFTQyxrQkFBVCxDQUE0QkMsR0FBNUIsRUFBaUNDLE9BQWpDLEVBQTBDQyxNQUExQyxFQUFrREMsS0FBbEQsRUFBeURDLE1BQXpELEVBQWlFQyxHQUFqRSxFQUFzRUMsR0FBdEUsRUFBMkU7QUFDdkUsTUFBSTtBQUNBLFFBQUlDLElBQUksR0FBR1AsR0FBRyxDQUFDSyxHQUFELENBQUgsQ0FBU0MsR0FBVCxDQUFYO0FBQ0EsUUFBSWpCLEtBQUssR0FBR2tCLElBQUksQ0FBQ2xCLEtBQWpCO0FBQ0gsR0FIRCxDQUdFLE9BQU9tQixLQUFQLEVBQWM7QUFDWk4sSUFBQUEsTUFBTSxDQUFDTSxLQUFELENBQU47QUFDQTtBQUNIOztBQUNELE1BQUlELElBQUksQ0FBQ0UsSUFBVCxFQUFlO0FBQ1hSLElBQUFBLE9BQU8sQ0FBQ1osS0FBRCxDQUFQO0FBQ0gsR0FGRCxNQUVPO0FBQ0hxQixJQUFBQSxPQUFPLENBQUNULE9BQVIsQ0FBZ0JaLEtBQWhCLEVBQXVCc0IsSUFBdkIsQ0FBNEJSLEtBQTVCLEVBQW1DQyxNQUFuQztBQUNIO0FBQ0o7O0FBQ0QsU0FBU1EsaUJBQVQsQ0FBMkJDLEVBQTNCLEVBQStCO0FBQzNCLFNBQU8sWUFBVztBQUNkLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQUEsUUFBaUJDLElBQUksR0FBR0MsU0FBeEI7QUFDQSxXQUFPLElBQUlOLE9BQUosQ0FBWSxVQUFTVCxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxVQUFJRixHQUFHLEdBQUdhLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTSCxJQUFULEVBQWVDLElBQWYsQ0FBVjs7QUFDQSxlQUFTWixLQUFULENBQWVkLEtBQWYsRUFBc0I7QUFDbEJVLFFBQUFBLGtCQUFrQixDQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBZUMsTUFBZixFQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDLE1BQXRDLEVBQThDZixLQUE5QyxDQUFsQjtBQUNIOztBQUNELGVBQVNlLE1BQVQsQ0FBZ0JjLEdBQWhCLEVBQXFCO0FBQ2pCbkIsUUFBQUEsa0JBQWtCLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFlQyxNQUFmLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0NjLEdBQS9DLENBQWxCO0FBQ0g7O0FBQ0RmLE1BQUFBLEtBQUssQ0FBQ2dCLFNBQUQsQ0FBTDtBQUNILEtBVE0sQ0FBUDtBQVVILEdBWkQ7QUFhSDs7QUFDRCxTQUFTdEIsc0JBQVQsQ0FBZ0N1QixHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakN6QixJQUFBQSxPQUFPLEVBQUV5QjtBQUR3QixHQUFyQztBQUdIOztBQUNELFNBQVNFLG1CQUFULEdBQStCO0FBQzNCQSxFQUFBQSxtQkFBbUI7QUFBRztBQUMxQjtBQUNBO0FBQ0E7QUFBSVYsRUFBQUEsaUJBQWlCLENBQUMsV0FBVTtBQUFFVyxJQUFBQSxTQUFGO0FBQWNDLElBQUFBO0FBQWQsR0FBVixFQUFnQztBQUM5QyxVQUFNQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUdqQyxNQUFKLEVBQVlrQyxtQkFBWixDQUFnQ0gsU0FBaEMsRUFBMkNDLEdBQTNDLENBQXhCO0FBQ0EsV0FBTztBQUNIQyxNQUFBQTtBQURHLEtBQVA7QUFHSCxHQUxnQixDQUhqQjtBQVNBLFNBQU9ILG1CQUFtQixDQUFDTCxLQUFwQixDQUEwQixJQUExQixFQUFnQ0QsU0FBaEMsQ0FBUDtBQUNIOztBQUNELFNBQVNXLGtCQUFULENBQTRCQyxDQUE1QixFQUErQjtBQUMzQixTQUFPTixtQkFBbUIsQ0FBQ0wsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NELFNBQWhDLENBQVA7QUFDSDs7QUFDRCxNQUFNYSxHQUFOLFNBQWtCakMsTUFBTSxDQUFDRCxPQUFQLENBQWU0QixTQUFqQyxDQUEyQztBQUN2Q08sRUFBQUEsTUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFUCxNQUFBQSxTQUFGO0FBQWNFLE1BQUFBO0FBQWQsUUFBNkIsS0FBS00sS0FBeEM7QUFDQSxXQUFPLGFBQWNuQyxNQUFNLENBQUNELE9BQVAsQ0FBZXFDLGFBQWYsQ0FBNkJULFNBQTdCLEVBQXdDckMsTUFBTSxDQUFDK0MsTUFBUCxDQUFjLEVBQWQsRUFDMURSLFNBRDBELENBQXhDLENBQXJCO0FBRUg7O0FBTHNDOztBQU8zQ0ksR0FBRyxDQUFDSyxtQkFBSixHQUEwQlAsa0JBQTFCO0FBQ0FFLEdBQUcsQ0FBQ00sZUFBSixHQUFzQlIsa0JBQXRCO0FBQ0F2QyxlQUFBLEdBQWtCeUMsR0FBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFyY29pbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcz8wNzk1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXBwSW5pdGlhbFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuQXBwSW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTmV4dFdlYlZpdGFsc01ldHJpY1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7XG4gICAgfVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9hcHBHZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgX2FwcEdldEluaXRpYWxQcm9wcyA9IC8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi8gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qKHsgQ29tcG9uZW50ICwgY3R4ICB9KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHlpZWxkICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZVByb3BzXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfKSB7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgcGFnZVByb3BzKSkpO1xuICAgIH1cbn1cbkFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIkFwcCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ \"./public/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/animate.css */ \"./public/css/animate.css\");\n/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_css_icofont_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/icofont.css */ \"./public/css/icofont.css\");\n/* harmony import */ var _public_css_icofont_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_icofont_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ \"./node_modules/react-modal-video/css/modal-video.min.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_color_color_default_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/color/color-default.css */ \"./public/color/color-default.css\");\n/* harmony import */ var _public_color_color_default_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_color_color_default_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/css/responsive.css */ \"./public/css/responsive.css\");\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/ithihasreddy/Downloads/Archive_Oct13/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n // Default Color\n\n // import '../public/color/gradient-color-one.css';\n\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_8___default()) {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_10___default().Fragment), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          charSet: \"utf-8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n          name: \"viewport\",\n          content: \"width=device-width, initial-scale=1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"title\", {\n          children: \"StarCoin Cryptocurrency \\u2013 The First Crypto Backed Record Contract\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"link\", {\n          rel: \"icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FFQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFZSxNQUFNRyxLQUFOLFNBQW9CSCxpREFBcEIsQ0FBd0I7QUFDbkNJLEVBQUFBLE1BQU0sR0FBSTtBQUNOLFVBQU07QUFBRUMsTUFBQUEsU0FBRjtBQUFhQyxNQUFBQTtBQUFiLFFBQTJCLEtBQUtDLEtBQXRDO0FBRUEsd0JBQ0ksK0RBQUMsd0RBQUQ7QUFBQSw4QkFDSSwrREFBQyxrREFBRDtBQUFBLGdDQUNJO0FBQU0saUJBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQXNCLGlCQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUk7QUFBTSxhQUFHLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVFJLCtEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBWUg7O0FBaEJrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJjb2luLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vcHVibGljL2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvYW5pbWF0ZS5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL2ljb2ZvbnQuY3NzJztcbmltcG9ydCAncmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb24vZGlzdC9mYW5jeS1leGFtcGxlLmNzcyc7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC12aWRlby9jc3MvbW9kYWwtdmlkZW8ubWluLmNzcydcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9zdHlsZS5jc3MnO1xuXG4vLyBEZWZhdWx0IENvbG9yXG5pbXBvcnQgJy4uL3B1YmxpYy9jb2xvci9jb2xvci1kZWZhdWx0LmNzcyc7XG4vLyBpbXBvcnQgJy4uL3B1YmxpYy9jb2xvci9ncmFkaWVudC1jb2xvci1vbmUuY3NzJztcblxuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3Jlc3BvbnNpdmUuY3NzJztcblxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U3RhckNvaW4gQ3J5cHRvY3VycmVuY3kgJiM4MjExOyBUaGUgRmlyc3QgQ3J5cHRvIEJhY2tlZCBSZWNvcmQgQ29udHJhY3Q8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiQXBwIiwiSGVhZCIsIlJlYWN0IiwiTXlBcHAiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/color/color-default.css":
/*!****************************************!*\
  !*** ./public/color/color-default.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/animate.css":
/*!********************************!*\
  !*** ./public/css/animate.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/icofont.css":
/*!********************************!*\
  !*** ./public/css/icofont.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();