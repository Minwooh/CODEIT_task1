"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./app/(home)/page.tsx":
/*!*****************************!*\
  !*** ./app/(home)/page.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_td__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home_td */ \"(app-pages-browser)/./components/home_td.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input */ \"(app-pages-browser)/./components/input.tsx\");\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/navigation */ \"(app-pages-browser)/./components/navigation.tsx\");\n/* harmony import */ var _components_style_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/style/todo */ \"(app-pages-browser)/./components/style/todo.tsx\");\n/* harmony import */ var _components_style_done__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/style/done */ \"(app-pages-browser)/./components/style/done.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [todoList, setTodoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [doneList, setDoneList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tenantId, setTenantId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"20211586\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const res = await fetch(\"/api/\".concat(tenantId), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name\n                })\n            });\n            if (!res.ok) {\n                const errorResponse = await res.json();\n                setError(errorResponse.error);\n                setResponse(null);\n                return;\n            }\n            const data = await res.json();\n            setResponse(data);\n            setError(null);\n        } catch (err) {\n            setError(\"Something went wrong!\");\n        }\n    };\n    // Add a new todo\n    const handleAddTodo = (newTodo)=>{\n        setTodoList((prevTodos)=>[\n                ...prevTodos,\n                newTodo\n            ]); // 이전 상태에서 새 todo를 추가\n    };\n    const handleMarkDone = (todo)=>{\n        setTodoList((prevTodos)=>prevTodos.filter((item)=>item !== todo));\n        setDoneList((prevDone)=>[\n                ...prevDone,\n                todo\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"background\",\n        style: {\n            display: \"flex\",\n            height: \"100vh\",\n            width: \"100vw\",\n            overflow: \"hidden\",\n            backgroundColor: \"#F9FAFB\",\n            flexDirection: \"column\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAddTodo: handleAddTodo\n                    }, void 0, false, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"content\",\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle1, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.TodoImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"todo_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\",\n                                            width: \"590px\",\n                                            height: \"490px\",\n                                            overflow: \"auto\"\n                                        },\n                                        children: todoList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/todo_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : todoList.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_todo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                value: todo,\n                                                onMarkDone: ()=>handleMarkDone(todo)\n                                            }, index, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle2, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.DoneImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"done_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\",\n                                            width: \"590px\",\n                                            height: \"490px\",\n                                            overflow: \"auto\"\n                                        },\n                                        children: doneList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/done_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 131,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 141,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 142,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : doneList.map((doneItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_done__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                value: doneItem\n                                            }, index, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 148,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"cZKl3ePEGdQkJUhI07gjcOZxOAE=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQTtnREFFSDBELE9BQU94QjtnREFDUHlCLFlBQVksSUFBTTFCLGVBQWVDOytDQUY1QnVCOzs7Ozs7Ozs7Ozs7Ozs7OzBDQVFmLDhEQUFDNUQsd0RBQU9BOztrREFDTiw4REFBQ0gsd0RBQU9BOzs7OztrREFDUiw4REFBQzRDO3dDQUNDQyxJQUFHO3dDQUNIQyxPQUFPOzRDQUNMSyxpQkFBaUI7NENBQ2pCRixPQUFPOzRDQUNQRCxRQUFROzRDQUNSRSxVQUFVO3dDQUNaO2tEQUVDdkMsU0FBUzRDLE1BQU0sS0FBSyxrQkFDbkI7OzhEQUNFLDhEQUFDQztvREFDQ0MsS0FBSTtvREFDSkMsS0FBSTtvREFDSlosT0FBTzt3REFDTEcsT0FBTzt3REFDUEQsUUFBUTt3REFDUlcsV0FBVzt3REFDWEMsWUFBWTtvREFDZDs7Ozs7OzhEQUVGLDhEQUFDaEI7b0RBQUlFLE9BQU87d0RBQUVlLFdBQVc7b0RBQVM7OERBQUc7Ozs7Ozs4REFDckMsOERBQUNqQjtvREFBSUUsT0FBTzt3REFBRWUsV0FBVztvREFBUzs4REFBRzs7Ozs7OzsyREFLdkNsRCxTQUFTbUQsR0FBRyxDQUFDLENBQUNJLFVBQVVILHNCQUN0Qiw4REFBQ3hELDhEQUFJQTtnREFBYXlELE9BQU9FOytDQUFkSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3QjtHQW5Kd0J2RDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21pbndvby9kZXZlbG9wL0NvZGVJdC9DT0RFSVRfdGFzazEvYXBwLyhob21lKS9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERvbmVJbWcsIE1pZGRsZTEsIFRvZG9JbWcsIE1pZGRsZTIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lX3RkXCI7XG5pbXBvcnQgSW5wdXRBZGRDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBUb0RvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlL3RvZG9cIjtcbmltcG9ydCBEb25lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0eWxlL2RvbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZG9uZUxpc3QsIHNldERvbmVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RlbmFudElkLCBzZXRUZW5hbnRJZF0gPSB1c2VTdGF0ZShcIjIwMjExNTg2XCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvJHt0ZW5hbnRJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBzZXRFcnJvcihlcnJvclJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgc2V0UmVzcG9uc2UobnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBzZXRSZXNwb25zZShkYXRhKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gICAgfVxuICB9O1xuXG4gIC8vIEFkZCBhIG5ldyB0b2RvXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSAobmV3VG9kbykgPT4ge1xuICAgIHNldFRvZG9MaXN0KChwcmV2VG9kb3MpID0+IFsuLi5wcmV2VG9kb3MsIG5ld1RvZG9dKTsgLy8g7J207KCEIOyDge2DnOyXkOyEnCDsg4ggdG9kb+ulvCDstpTqsIBcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNYXJrRG9uZSA9ICh0b2RvKSA9PiB7XG4gICAgc2V0VG9kb0xpc3QoKHByZXZUb2RvcykgPT4gcHJldlRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbykpO1xuICAgIHNldERvbmVMaXN0KChwcmV2RG9uZSkgPT4gWy4uLnByZXZEb25lLCB0b2RvXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cImJhY2tncm91bmRcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGOUZBRkJcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgLy8g7IS466GcIOygleugrFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCAvLyDqsIDroZwg67Cp7ZalIOykkeyVmSDsoJXroKxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxJbnB1dEFkZENvbnRhaW5lciBvbkFkZFRvZG89e2hhbmRsZUFkZFRvZG99IC8+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwiY29udGVudFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLCAvLyDqsIDroZwg7KCV66CsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TWlkZGxlMT5cbiAgICAgICAgICAgIDxUb2RvSW1nIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwidG9kb19saXN0XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZlwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjU5MHB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQ5MHB4XCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dG9kb0xpc3QubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdG9kb19iYXNpY19sYXJnZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCLtlaAg7J287J20IOyXhuyKteuLiOuLpC5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE2MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+7ZWgIOydvOydtCDsl4bslrTsmpQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICBUT0RP66W8IOyDiOuhreqyjCDstpTqsIDtlbTso7zshLjsmpQhXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VG9Eb1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG9kb31cbiAgICAgICAgICAgICAgICAgICAgb25NYXJrRG9uZT17KCkgPT4gaGFuZGxlTWFya0RvbmUodG9kbyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01pZGRsZTE+XG4gICAgICAgICAgPE1pZGRsZTI+XG4gICAgICAgICAgICA8RG9uZUltZyAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cImRvbmVfbGlzdFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOGZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI1OTBweFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0OTBweFwiLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RvbmVMaXN0Lmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2RvbmVfYmFzaWNfbGFyZ2UucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwi7ZWgIOydvOydtCDsl4bsirXri4jri6QuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNjBweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Pu2VoCDsnbzsnbQg7JeG7Ja07JqUPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVE9ET+ulvCDsg4jroa3qsowg7LaU6rCA7ZW07KO87IS47JqUIVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgZG9uZUxpc3QubWFwKChkb25lSXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxEb25lIGtleT17aW5kZXh9IHZhbHVlPXtkb25lSXRlbX0gLz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9NaWRkbGUyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRG9uZUltZyIsIk1pZGRsZTEiLCJUb2RvSW1nIiwiTWlkZGxlMiIsIklucHV0QWRkQ29udGFpbmVyIiwiTmF2aWdhdGlvbiIsIlRvRG8iLCJEb25lIiwiSG9tZVBhZ2UiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiZG9uZUxpc3QiLCJzZXREb25lTGlzdCIsInRlbmFudElkIiwic2V0VGVuYW50SWQiLCJuYW1lIiwic2V0TmFtZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImVycm9yUmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImVyciIsImhhbmRsZUFkZFRvZG8iLCJuZXdUb2RvIiwicHJldlRvZG9zIiwiaGFuZGxlTWFya0RvbmUiLCJ0b2RvIiwiZmlsdGVyIiwiaXRlbSIsInByZXZEb25lIiwiZGl2IiwiaWQiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJvbkFkZFRvZG8iLCJsZW5ndGgiLCJpbWciLCJzcmMiLCJhbHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIiwibWFwIiwiaW5kZXgiLCJ2YWx1ZSIsIm9uTWFya0RvbmUiLCJkb25lSXRlbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/page.tsx\n"));

/***/ })

});