"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Common/Loader.jsx":
/*!******************************************!*\
  !*** ./src/components/Common/Loader.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_loadingPace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/loadingPace */ \"(app-pages-browser)/./src/common/loadingPace.js\");\n/* harmony import */ var _styles_loading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/loading.css */ \"(app-pages-browser)/./src/styles/loading.css\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\nvar _jsxFileName = \"/Users/moksh/Desktop/Hermes/HermesWebsite/src/components/Common/Loader.jsx\", _s1 = $RefreshSig$();\n // added useState\n\n\n\nfunction LoadingScreen() {\n    _s();\n    _s1();\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isTimeOver = _useState[0], setIsTimeOver = _useState[1]; // added this\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setTimeout(function() {\n            if (typeof Pace !== \"undefined\") (0,_common_loadingPace__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            setIsTimeOver(true); // added this\n        }, 3000); // changed this from 1000ms to 3000ms\n    }, []); // added empty dependency array to avoid infinite loops\n    if (isTimeOver) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"hideX\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                className: \"loading\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                        className: \"load_text\",\n                        children: \"H\"\n                    }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                        className: \"load_text\",\n                        children: \"e\"\n                    }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                        className: \"load_text\",\n                        children: \"r\"\n                    }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                        className: \"load_text\",\n                        children: \"m\"\n                    }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                        className: \"load_text\",\n                        children: \"e\"\n                    }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                        className: \"load_text\",\n                        children: \"s\"\n                    }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n                id: \"preloader\"\n            }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(LoadingScreen, \"enWpx7vTa10JaGLqtSlR8mXJ0Nk=\");\n_c1 = LoadingScreen;\n_s1(LoadingScreen, \"HZaIIc/nQ7R3JUlw3D07wYDo/BU=\");\n_c = LoadingScreen;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingScreen);\nvar _c;\n$RefreshReg$(_c, \"LoadingScreen\");\nvar _c1;\n$RefreshReg$(_c1, \"LoadingScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsQ0FBNkM7QUFDN0M7QUFDQTs7QUFFQSxTQUFTRzs7SUFBZ0JDO0lBQ3ZCLElBQUFDLFlBQW9DSiwrQ0FBUUEsQ0FBQyxRQUF0Q0ssYUFBUEQsU0FBQSxLQUFtQkUsZ0JBQW5CRixTQUFBLEtBQXFEO0lBRXJETCxnREFBU0EsQ0FBQztRQUNSUSxXQUFXO1lBQ1QsSUFBSSxPQUFPQyxTQUFTLGFBQWFQLCtEQUFXQTtZQUM1Q0ssY0FBYyxPQUFPO1FBQ3RCLEdBQUUsT0FBTztJQUNYLEdBQUUsRUFMTSxHQUtEO0lBRVIsSUFBSUQsWUFBWSxPQUFPO0lBRXZCLHFCQUNFSSw2REFBQUEsQ0FBQTtRQUFLQyxXQUFVO1FBQWZDLFVBQUE7WUFBQSxjQUNFRiw2REFBQUEsQ0FBQTtnQkFBS0MsV0FBVTtnQkFBZkMsVUFBQTtvQkFBQSxjQUNFRiw2REFBQUEsQ0FBQTt3QkFBTUMsV0FBWTt3QkFBbEJDLFVBQUE7b0JBQUE7d0JBQUFDLFVBQUFDO3dCQUFBQyxZQUFBO3dCQUFBQyxjQUFBO29CQUFBO29CQURGLGNBRUVOLDZEQUFBQSxDQUFBO3dCQUFNQyxXQUFZO3dCQUFsQkMsVUFBQTtvQkFBQTt3QkFBQUMsVUFBQUM7d0JBQUFDLFlBQUE7d0JBQUFDLGNBQUE7b0JBQUE7b0JBRkYsY0FHRU4sNkRBQUFBLENBQUE7d0JBQU1DLFdBQVk7d0JBQWxCQyxVQUFBO29CQUFBO3dCQUFBQyxVQUFBQzt3QkFBQUMsWUFBQTt3QkFBQUMsY0FBQTtvQkFBQTtvQkFIRixjQUlFTiw2REFBQUEsQ0FBQTt3QkFBTUMsV0FBWTt3QkFBbEJDLFVBQUE7b0JBQUE7d0JBQUFDLFVBQUFDO3dCQUFBQyxZQUFBO3dCQUFBQyxjQUFBO29CQUFBO29CQUpGLGNBS0VOLDZEQUFBQSxDQUFBO3dCQUFNQyxXQUFZO3dCQUFsQkMsVUFBQTtvQkFBQTt3QkFBQUMsVUFBQUM7d0JBQUFDLFlBQUE7d0JBQUFDLGNBQUE7b0JBQUE7b0JBTEYsY0FNRU4sNkRBQUFBLENBQUE7d0JBQU1DLFdBQVk7d0JBQWxCQyxVQUFBO29CQUFBO3dCQUFBQyxVQUFBQzt3QkFBQUMsWUFBQTt3QkFBQUMsY0FBQTtvQkFBQTtpQkFORjtZQUFBO2dCQUFBSCxVQUFBQztnQkFBQUMsWUFBQTtnQkFBQUMsY0FBQTtZQUFBO1lBREYsY0FTRU4sNkRBQUFBLENBQUE7Z0JBQUtPLElBQUc7WUFBUjtnQkFBQUosVUFBQUM7Z0JBQUFDLFlBQUE7Z0JBQUFDLGNBQUE7WUFBQTtTQVRGO0lBQUE7UUFBQUgsVUFBQUM7UUFBQUMsWUFBQTtRQUFBQyxjQUFBO0lBQUE7QUFZSDtHQXpCUWI7TUFBQUE7SUFBQUEsZUFBQTtLQUFBQTs7QUEyQlQsK0RBQWVBLGFBQWFBLEVBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkZXIuanN4P2Q3MmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyAvLyBhZGRlZCB1c2VTdGF0ZVxyXG5pbXBvcnQgbG9hZGluZ1BhY2UgZnJvbSBcIkAvY29tbW9uL2xvYWRpbmdQYWNlXCI7XHJcbmltcG9ydCAnQC9zdHlsZXMvbG9hZGluZy5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZ1NjcmVlbigpIHtcclxuICBjb25zdCBbaXNUaW1lT3Zlciwgc2V0SXNUaW1lT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGFkZGVkIHRoaXNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIFBhY2UgIT09ICd1bmRlZmluZWQnKSBsb2FkaW5nUGFjZSgpO1xyXG4gICAgICBzZXRJc1RpbWVPdmVyKHRydWUpOyAvLyBhZGRlZCB0aGlzXHJcbiAgICB9LCAzMDAwKTsgLy8gY2hhbmdlZCB0aGlzIGZyb20gMTAwMG1zIHRvIDMwMDBtc1xyXG4gIH0sIFtdKTsgLy8gYWRkZWQgZW1wdHkgZGVwZW5kZW5jeSBhcnJheSB0byBhdm9pZCBpbmZpbml0ZSBsb29wc1xyXG5cclxuICBpZiAoaXNUaW1lT3ZlcikgcmV0dXJuIG51bGw7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVhcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0gXCJsb2FkX3RleHRcIj5IPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IFwibG9hZF90ZXh0XCI+ZTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSBcImxvYWRfdGV4dFwiPnI8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0gXCJsb2FkX3RleHRcIj5tPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IFwibG9hZF90ZXh0XCI+ZTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSBcImxvYWRfdGV4dFwiPnM8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwicHJlbG9hZGVyXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NjcmVlbjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsb2FkaW5nUGFjZSIsIkxvYWRpbmdTY3JlZW4iLCJfcyIsIl91c2VTdGF0ZSIsImlzVGltZU92ZXIiLCJzZXRJc1RpbWVPdmVyIiwic2V0VGltZW91dCIsIlBhY2UiLCJfanN4REVWIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Common/Loader.jsx\n"));

/***/ })

});