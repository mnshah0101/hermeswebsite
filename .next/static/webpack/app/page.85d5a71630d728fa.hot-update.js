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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadingScreen; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/loading.css */ \"(app-pages-browser)/./src/styles/loading.css\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\nvar _jsxFileName = \"/Users/moksh/Desktop/Hermes/HermesWebsite/src/components/Common/Loader.jsx\", _s1 = $RefreshSig$();\n\n\n\nfunction LoadingScreen() {\n    _s();\n    _s1();\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = _useState[0], setLoading = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var timer = setTimeout(function() {\n            setLoading(false);\n        }, 3000); // Clean up the timer on unmount\n        return function() {\n            return clearTimeout(timer);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"fullscreen \".concat(isLoading ? \"visible\" : \"fade-out\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(LoadingScreen, \"zuU84panEAxXdNGjGLsuwg8Mrck=\");\n_c1 = LoadingScreen;\n_s1(LoadingScreen, \"xPrYw7zU0CoGCjtGXuWL2zxIwKw=\");\n_c = LoadingScreen;\nvar _c;\n$RefreshReg$(_c, \"LoadingScreen\");\nvar _c1;\n$RefreshReg$(_c1, \"LoadingScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUllLFNBQVNHOztJQUFnQkM7SUFDdEMsSUFBQUMsWUFBZ0NKLCtDQUFRQSxDQUFDLE9BQWxDSyxZQUFQRCxTQUFBLEtBQWtCRSxhQUFsQkYsU0FBQTtJQUVBSCxnREFBU0EsQ0FBQztRQUNSLElBQU1NLFFBQVFDLFdBQVc7WUFDdkJGLFdBQVc7UUFDWixHQUFFLE9BRUg7UUFDQSxPQUFPO1lBQUEsT0FBTUcsYUFBYUY7UUFBbkI7SUFDUixHQUFFLEVBUE07SUFTVCxxQkFDRUcsNkRBQUFBLENBQUE7UUFBS0MsV0FBUyxjQUFBQyxNQUFBLENBQWdCUCxZQUFZLFlBQVk7UUFBdERRLFVBQUEsY0FDRUgsNkRBQUFBLENBQUE7WUFBQUcsVUFBQTtRQUFBO1lBQUFDLFVBQUFDO1lBQUFDLFlBQUE7WUFBQUMsY0FBQTtRQUFBO0lBREY7UUFBQUgsVUFBQUM7UUFBQUMsWUFBQTtRQUFBQyxjQUFBO0lBQUE7QUFJSDtHQWpCdUJmO01BQUFBO0lBQUFBLGVBQUE7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRlci5qc3g/ZDcyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9sb2FkaW5nLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nU2NyZWVuKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDMwMDApO1xyXG5cclxuICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lciBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZ1bGxzY3JlZW4gJHtpc0xvYWRpbmcgPyBcInZpc2libGVcIiA6IFwiZmFkZS1vdXRcIn1gfT5cclxuICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxvYWRpbmdTY3JlZW4iLCJfcyIsIl91c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfanN4REVWIiwiY2xhc3NOYW1lIiwiY29uY2F0IiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Common/Loader.jsx\n"));

/***/ })

});