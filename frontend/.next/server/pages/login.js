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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./src/styles/Forms.module.css":
/*!*************************************!*\
  !*** ./src/styles/Forms.module.css ***!
  \*************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"mainPage\": \"Forms_mainPage__KumjX\",\n\t\"mainSection\": \"Forms_mainSection___RFsA\",\n\t\"welcomeSection\": \"Forms_welcomeSection__j37WT\",\n\t\"formSection\": \"Forms_formSection__NOCyy\",\n\t\"passwordInput\": \"Forms_passwordInput__LZEYb\",\n\t\"passwordEye\": \"Forms_passwordEye__sJgUH\",\n\t\"nameSection\": \"Forms_nameSection__P_HBV\",\n\t\"formButton\": \"Forms_formButton__JgAut\",\n\t\"promptLink\": \"Forms_promptLink__TWMW6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0Zvcm1zLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3R5bGVzL0Zvcm1zLm1vZHVsZS5jc3M/MWMwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluUGFnZVwiOiBcIkZvcm1zX21haW5QYWdlX19LdW1qWFwiLFxuXHRcIm1haW5TZWN0aW9uXCI6IFwiRm9ybXNfbWFpblNlY3Rpb25fX19SRnNBXCIsXG5cdFwid2VsY29tZVNlY3Rpb25cIjogXCJGb3Jtc193ZWxjb21lU2VjdGlvbl9fajM3V1RcIixcblx0XCJmb3JtU2VjdGlvblwiOiBcIkZvcm1zX2Zvcm1TZWN0aW9uX19OT0N5eVwiLFxuXHRcInBhc3N3b3JkSW5wdXRcIjogXCJGb3Jtc19wYXNzd29yZElucHV0X19MWkVZYlwiLFxuXHRcInBhc3N3b3JkRXllXCI6IFwiRm9ybXNfcGFzc3dvcmRFeWVfX3NKZ1VIXCIsXG5cdFwibmFtZVNlY3Rpb25cIjogXCJGb3Jtc19uYW1lU2VjdGlvbl9fUF9IQlZcIixcblx0XCJmb3JtQnV0dG9uXCI6IFwiRm9ybXNfZm9ybUJ1dHRvbl9fSmdBdXRcIixcblx0XCJwcm9tcHRMaW5rXCI6IFwiRm9ybXNfcHJvbXB0TGlua19fVFdNVzZcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/Forms.module.css\n");

/***/ }),

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Forms.module.css */ \"./src/styles/Forms.module.css\");\n/* harmony import */ var _styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__]);\n([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nfunction SignIn({ csrfToken  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const { register , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const [passwordType, setPasswordType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"password\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleShowPassword = ()=>{\n        if (passwordType === \"password\") {\n            setPasswordType(\"text\");\n            return;\n        }\n        setPasswordType(\"password\");\n    };\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeadComponent, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                        },\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeadComponent, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainSection),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default().welcomeSection),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Welcome Back!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Please Log In...\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default().formSection),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Log In\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    method: \"post\",\n                                    action: \"/api/auth/callback/credentials\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            name: \"csrfToken\",\n                                            type: \"hidden\",\n                                            defaultValue: csrfToken\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            name: \"username\",\n                                            type: \"text\",\n                                            autoComplete: \"username\",\n                                            placeholder: \"Username\",\n                                            ...register(\"username\", {\n                                                required: true\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 29\n                                        }, this),\n                                        errors.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"This field is required\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 49\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default().passwordInput),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    name: \"password\",\n                                                    type: passwordType,\n                                                    autoComplete: \"current-password\",\n                                                    placeholder: \"Password\",\n                                                    ...register(\"password\", {\n                                                        required: true\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 33\n                                                }, this),\n                                                passwordType === \"password\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                                    onClick: handleShowPassword,\n                                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default().passwordEye),\n                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEye,\n                                                    color: \"#757575\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 37\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                                    onClick: handleShowPassword,\n                                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default().passwordEye),\n                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEyeSlash,\n                                                    color: \"#757575\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 37\n                                                }, this),\n                                                errors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"This field is required\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 53\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default().formButton),\n                                            type: \"submit\",\n                                            children: \"Log In\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: errorMessage\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Don't have an account? \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_8___default().promptLink),\n                                            onClick: ()=>router.push(\"/register\"),\n                                            children: \"Register\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 54\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\nfunction HeadComponent() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"Login - Book Direct And Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Francois Schoeman\\\\Desktop\\\\ABC Marketing\\\\Websites\\\\Book Direct And Save\\\\NextDjangoBookDirectAndSave\\\\frontend\\\\src\\\\pages\\\\login.js\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    return {\n        props: {\n            csrfToken: await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getCsrfToken)(context)\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEksQ0FBQztBQUVELFNBQVNoQyxnQkFBZ0I7SUFDckIscUJBQ0ksOERBQUN4QixrREFBSUE7OzBCQUNELDhEQUFDeUQ7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQUtqQixNQUFLO2dCQUFja0IsU0FBUTs7Ozs7Ozs7Ozs7O0FBRzdDO0FBRU8sZUFBZUMsbUJBQW1CQyxPQUFPLEVBQUU7SUFDOUMsT0FBTztRQUNIQyxPQUFPO1lBQ0hsRCxXQUFXLE1BQU1ULDZEQUFZQSxDQUFDMEQ7UUFDbEM7SUFDSjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9sb2dpbi5qcz9lNWJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQsIGdldENzcmZUb2tlbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgZm9ybVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Zvcm1zLm1vZHVsZS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKHsgY3NyZlRva2VuIH0pIHtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSgpO1xyXG5cclxuICAgIGNvbnN0IFtwYXNzd29yZFR5cGUsIHNldFBhc3N3b3JkVHlwZV0gPSB1c2VTdGF0ZSgncGFzc3dvcmQnKTtcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2hvd1Bhc3N3b3JkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwYXNzd29yZFR5cGUgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZFR5cGUoXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFBhc3N3b3JkVHlwZShcInBhc3N3b3JkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlNpZ24gb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRDb21wb25lbnQgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtU3R5bGVzLm1haW5QYWdlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtU3R5bGVzLm1haW5TZWN0aW9ufT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtU3R5bGVzLndlbGNvbWVTZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlbGNvbWUgQmFjayE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UgTG9nIEluLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5mb3JtU2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Mb2cgSW48L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIi9hcGkvYXV0aC9jYWxsYmFjay9jcmVkZW50aWFsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjc3JmVG9rZW5cIiB0eXBlPVwiaGlkZGVuXCIgZGVmYXVsdFZhbHVlPXtjc3JmVG9rZW59IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgey4uLnJlZ2lzdGVyKFwidXNlcm5hbWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgJiYgPHNwYW4+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1TdHlsZXMucGFzc3dvcmRJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9e3Bhc3N3b3JkVHlwZX0gYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFzc3dvcmRUeXBlID09PSBcInBhc3N3b3JkXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e2hhbmRsZVNob3dQYXNzd29yZH0gY2xhc3NOYW1lPXtmb3JtU3R5bGVzLnBhc3N3b3JkRXllfSBpY29uPXtmYUV5ZX0gY29sb3I9XCIjNzU3NTc1XCIgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e2hhbmRsZVNob3dQYXNzd29yZH0gY2xhc3NOYW1lPXtmb3JtU3R5bGVzLnBhc3N3b3JkRXllfSBpY29uPXtmYUV5ZVNsYXNofSBjb2xvcj1cIiM3NTc1NzVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIDxzcGFuPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuZm9ybUJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiID5Mb2cgSW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPHNwYW4gY2xhc3NOYW1lPXtmb3JtU3R5bGVzLnByb21wdExpbmt9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3JlZ2lzdGVyXCIpfT5SZWdpc3Rlcjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZENvbXBvbmVudCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJMb2dpbiAtIEJvb2sgRGlyZWN0IEFuZCBTYXZlXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjc3JmVG9rZW46IGF3YWl0IGdldENzcmZUb2tlbihjb250ZXh0KSxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsImdldENzcmZUb2tlbiIsInVzZVN0YXRlIiwidXNlRm9ybSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhRXllIiwiZmFFeWVTbGFzaCIsInVzZVJvdXRlciIsImZvcm1TdHlsZXMiLCJTaWduSW4iLCJjc3JmVG9rZW4iLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsInJlZ2lzdGVyIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwicGFzc3dvcmRUeXBlIiwic2V0UGFzc3dvcmRUeXBlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFuZGxlU2hvd1Bhc3N3b3JkIiwiSGVhZENvbXBvbmVudCIsIm1haW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpblBhZ2UiLCJtYWluU2VjdGlvbiIsIndlbGNvbWVTZWN0aW9uIiwicCIsInNlY3Rpb24iLCJmb3JtU2VjdGlvbiIsImgyIiwiZm9ybSIsIm1ldGhvZCIsImFjdGlvbiIsImlucHV0IiwibmFtZSIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJhdXRvQ29tcGxldGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidXNlcm5hbWUiLCJzcGFuIiwicGFzc3dvcmRJbnB1dCIsInBhc3N3b3JkRXllIiwiaWNvbiIsImNvbG9yIiwicGFzc3dvcmQiLCJmb3JtQnV0dG9uIiwicHJvbXB0TGluayIsInB1c2giLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.js\n");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.js"));
module.exports = __webpack_exports__;

})();