"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction SignIn(param) {\n    let { csrfToken  } = param;\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(session);\n    }, [\n        session\n    ]);\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeadComponent, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                        },\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeadComponent, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"post\",\n                action: \"/api/auth/callback/credentials\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"csrfToken\",\n                        type: \"hidden\",\n                        defaultValue: csrfToken\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Username\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                name: \"username\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Password\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                name: \"password\",\n                                type: \"password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Sign in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SignIn, \"BVvivrSRe8/FL3eVGyG/GYgr2vQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = SignIn;\nfunction HeadComponent() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"Login - Book Direct And Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_c1 = HeadComponent;\nvar _c, _c1;\n$RefreshReg$(_c, \"SignIn\");\n$RefreshReg$(_c1, \"HeadComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUVzQztBQUNqQztBQUVpQjs7QUFFcEMsU0FBU0ssT0FBTyxLQUFhLEVBQUU7UUFBZixFQUFFQyxVQUFTLEVBQUUsR0FBYjs7SUFFM0IsTUFBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUUsR0FBR1AsMkRBQVVBO0lBRXBDRSxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pNLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEIsR0FBRztRQUFDQTtLQUFRO0lBRVosSUFBSUEsU0FBUztRQUNULHFCQUNJOzs4QkFDSSw4REFBQ0c7Ozs7OzhCQUNELDhEQUFDQzs4QkFDRyw0RUFBQ0M7d0JBQU9DLFNBQVMsSUFBTTs0QkFDbkJaLHdEQUFPQTt3QkFDWDtrQ0FBRzs7Ozs7Ozs7Ozs7OztJQUluQixDQUFDO0lBQ0QscUJBQ0k7OzBCQUNJLDhEQUFDUzs7Ozs7MEJBQ0QsOERBQUNJO2dCQUFLQyxRQUFPO2dCQUFPQyxRQUFPOztrQ0FDdkIsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFZQyxNQUFLO3dCQUFTQyxjQUFjZjs7Ozs7O2tDQUNwRCw4REFBQ2dCOzs0QkFBTTswQ0FFSCw4REFBQ0o7Z0NBQU1DLE1BQUs7Z0NBQVdDLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FFaEMsOERBQUNFOzs0QkFBTTswQ0FFSCw4REFBQ0o7Z0NBQU1DLE1BQUs7Z0NBQVdDLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FFaEMsOERBQUNQO3dCQUFPTyxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7OztBQUl0QyxDQUFDO0dBckN1QmY7O1FBRU1KLHVEQUFVQTs7O0tBRmhCSTtBQXVDeEIsU0FBU00sZ0JBQWdCO0lBQ3JCLHFCQUNJLDhEQUFDWCxrREFBSUE7OzBCQUNELDhEQUFDdUI7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQUtMLE1BQUs7Z0JBQWNNLFNBQVE7Ozs7Ozs7Ozs7OztBQUc3QztNQVBTZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4uanM/ZTViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0LCBnZXRDc3JmVG9rZW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgZm9ybVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Zvcm1zLm1vZHVsZS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKHsgY3NyZlRva2VuIH0pIHtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvbik7XHJcbiAgICB9LCBbc2Vzc2lvbl0pO1xyXG5cclxuICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlNpZ24gb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIi9hcGkvYXV0aC9jYWxsYmFjay9jcmVkZW50aWFsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjc3JmVG9rZW5cIiB0eXBlPVwiaGlkZGVuXCIgZGVmYXVsdFZhbHVlPXtjc3JmVG9rZW59IC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkQ29tcG9uZW50KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkxvZ2luIC0gQm9vayBEaXJlY3QgQW5kIFNhdmVcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNzcmZUb2tlbjogYXdhaXQgZ2V0Q3NyZlRva2VuKGNvbnRleHQpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwidXNlRWZmZWN0IiwiZm9ybVN0eWxlcyIsIlNpZ25JbiIsImNzcmZUb2tlbiIsImRhdGEiLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsIkhlYWRDb21wb25lbnQiLCJtYWluIiwiYnV0dG9uIiwib25DbGljayIsImZvcm0iLCJtZXRob2QiLCJhY3Rpb24iLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwibGFiZWwiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.js\n"));

/***/ })

});