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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_td__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home_td */ \"(app-pages-browser)/./components/home_td.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input */ \"(app-pages-browser)/./components/input.tsx\");\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/navigation */ \"(app-pages-browser)/./components/navigation.tsx\");\n/* harmony import */ var _components_style_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/style/todo */ \"(app-pages-browser)/./components/style/todo.tsx\");\n/* harmony import */ var _components_style_done__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/style/done */ \"(app-pages-browser)/./components/style/done.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [todoList, setTodoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [doneList, setDoneList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Add a new todo\n    const handleAddTodo = (newTodo)=>{\n        setTodoList((prevTodos)=>[\n                ...prevTodos,\n                newTodo\n            ]); // 이전 상태에서 새 todo를 추가\n    };\n    const handleMarkDone = (todo)=>{\n        setTodoList((prevTodos)=>prevTodos.filter((item)=>item !== todo));\n        setDoneList((prevDone)=>[\n                ...prevDone,\n                todo\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"background\",\n                style: {\n                    display: \"flex\",\n                    backgroundColor: \"#000\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAddTodo: handleAddTodo\n                    }, void 0, false, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"content\",\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle1, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.TodoImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"todo_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\",\n                                            width: \"570px\"\n                                        },\n                                        children: todoList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/todo_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : todoList.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_todo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                value: todo,\n                                                onMarkDone: ()=>handleMarkDone(todo)\n                                            }, index, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle2, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.DoneImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"done_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\"\n                                        },\n                                        children: doneList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/done_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : doneList.map((doneItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_done__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                value: doneItem\n                                            }, index, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"/hzNS916ikVE0cShtJEdY7HSxjs=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDNkM7QUFDdkI7QUFDRjtBQUNOO0FBQ0E7QUFFaEMsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLGlCQUFpQjtJQUNqQixNQUFNYyxnQkFBZ0IsQ0FBQ0M7UUFDckJKLFlBQVksQ0FBQ0ssWUFBYzttQkFBSUE7Z0JBQVdEO2FBQVEsR0FBRyxxQkFBcUI7SUFDNUU7SUFFQSxNQUFNRSxpQkFBaUIsQ0FBQ0M7UUFDdEJQLFlBQVksQ0FBQ0ssWUFBY0EsVUFBVUcsTUFBTSxDQUFDLENBQUNDLE9BQVNBLFNBQVNGO1FBQy9ETCxZQUFZLENBQUNRLFdBQWE7bUJBQUlBO2dCQUFVSDthQUFLO0lBQy9DO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ2hCLDhEQUFVQTs7Ozs7MEJBQ1gsOERBQUNnQjtnQkFDQ0MsSUFBRztnQkFDSEMsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsaUJBQWlCO29CQUNqQkMsZUFBZTtvQkFDZkMsWUFBWTtvQkFDWkMsZ0JBQWdCO2dCQUNsQjs7a0NBRUEsOERBQUN4Qix5REFBaUJBO3dCQUFDeUIsV0FBV2hCOzs7Ozs7a0NBRTlCLDhEQUFDUTt3QkFDQ0MsSUFBRzt3QkFDSEMsT0FBTzs0QkFDTEMsU0FBUzs0QkFDVEUsZUFBZTt3QkFDakI7OzBDQUVBLDhEQUFDekIsd0RBQU9BOztrREFDTiw4REFBQ0Msd0RBQU9BOzs7OztrREFDUiw4REFBQ21CO3dDQUNDQyxJQUFHO3dDQUNIQyxPQUFPOzRDQUFFRSxpQkFBaUI7NENBQVFLLE9BQU87d0NBQVE7a0RBRWhEckIsU0FBU3NCLE1BQU0sS0FBSyxrQkFDbkI7OzhEQUNFLDhEQUFDQztvREFDQ0MsS0FBSTtvREFDSkMsS0FBSTtvREFDSlgsT0FBTzt3REFDTE8sT0FBTzt3REFDUEssUUFBUTt3REFDUkMsV0FBVzt3REFDWEMsWUFBWTtvREFDZDs7Ozs7OzhEQUVGLDhEQUFDaEI7b0RBQUlFLE9BQU87d0RBQUVlLFdBQVc7b0RBQVM7OERBQUc7Ozs7Ozs4REFDckMsOERBQUNqQjtvREFBSUUsT0FBTzt3REFBRWUsV0FBVztvREFBUzs4REFBRzs7Ozs7OzsyREFLdkM3QixTQUFTOEIsR0FBRyxDQUFDLENBQUN0QixNQUFNdUIsc0JBQ2xCLDhEQUFDbEMsOERBQUlBO2dEQUVIbUMsT0FBT3hCO2dEQUNQeUIsWUFBWSxJQUFNMUIsZUFBZUM7K0NBRjVCdUI7Ozs7Ozs7Ozs7Ozs7Ozs7MENBUWYsOERBQUNyQyx3REFBT0E7O2tEQUNOLDhEQUFDSCx3REFBT0E7Ozs7O2tEQUNSLDhEQUFDcUI7d0NBQUlDLElBQUc7d0NBQVlDLE9BQU87NENBQUVFLGlCQUFpQjt3Q0FBTztrREFDbERkLFNBQVNvQixNQUFNLEtBQUssa0JBQ25COzs4REFDRSw4REFBQ0M7b0RBQ0NDLEtBQUk7b0RBQ0pDLEtBQUk7b0RBQ0pYLE9BQU87d0RBQ0xPLE9BQU87d0RBQ1BLLFFBQVE7d0RBQ1JDLFdBQVc7d0RBQ1hDLFlBQVk7b0RBQ2Q7Ozs7Ozs4REFFRiw4REFBQ2hCO29EQUFJRSxPQUFPO3dEQUFFZSxXQUFXO29EQUFTOzhEQUFHOzs7Ozs7OERBQ3JDLDhEQUFDakI7b0RBQUlFLE9BQU87d0RBQUVlLFdBQVc7b0RBQVM7OERBQUc7Ozs7Ozs7MkRBS3ZDM0IsU0FBUzRCLEdBQUcsQ0FBQyxDQUFDSSxVQUFVSCxzQkFDdEIsOERBQUNqQyw4REFBSUE7Z0RBQWFrQyxPQUFPRTsrQ0FBZEg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0I7R0FyR3dCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW53b28vZGV2ZWxvcC9Db2RlSXQvQ09ERUlUX3Rhc2sxL2FwcC8oaG9tZSkvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb25lSW1nLCBNaWRkbGUxLCBUb2RvSW1nLCBNaWRkbGUyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZV90ZFwiO1xuaW1wb3J0IElucHV0QWRkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lucHV0XCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZS90b2RvXCI7XG5pbXBvcnQgRG9uZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZS9kb25lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RvbmVMaXN0LCBzZXREb25lTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gQWRkIGEgbmV3IHRvZG9cbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9IChuZXdUb2RvKSA9PiB7XG4gICAgc2V0VG9kb0xpc3QoKHByZXZUb2RvcykgPT4gWy4uLnByZXZUb2RvcywgbmV3VG9kb10pOyAvLyDsnbTsoIQg7IOB7YOc7JeQ7IScIOyDiCB0b2Rv66W8IOy2lOqwgFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1hcmtEb25lID0gKHRvZG8pID0+IHtcbiAgICBzZXRUb2RvTGlzdCgocHJldlRvZG9zKSA9PiBwcmV2VG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB0b2RvKSk7XG4gICAgc2V0RG9uZUxpc3QoKHByZXZEb25lKSA9PiBbLi4ucHJldkRvbmUsIHRvZG9dKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImJhY2tncm91bmRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgLy8g7IS466GcIOygleugrFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIC8vIOqwgOuhnCDrsKntlqUg7KSR7JWZIOygleugrFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW5wdXRBZGRDb250YWluZXIgb25BZGRUb2RvPXtoYW5kbGVBZGRUb2RvfSAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIiwgLy8g6rCA66GcIOygleugrFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1pZGRsZTE+XG4gICAgICAgICAgICA8VG9kb0ltZyAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cInRvZG9fbGlzdFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjhmXCIsIHdpZHRoOiBcIjU3MHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RvZG9MaXN0Lmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3RvZG9fYmFzaWNfbGFyZ2UucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwi7ZWgIOydvOydtCDsl4bsirXri4jri6QuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNjBweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Pu2VoCDsnbzsnbQg7JeG7Ja07JqUPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVE9ET+ulvCDsg4jroa3qsowg7LaU6rCA7ZW07KO87IS47JqUIVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdG9kb0xpc3QubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRvRG9cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvZG99XG4gICAgICAgICAgICAgICAgICAgIG9uTWFya0RvbmU9eygpID0+IGhhbmRsZU1hcmtEb25lKHRvZG8pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9NaWRkbGUxPlxuICAgICAgICAgIDxNaWRkbGUyPlxuICAgICAgICAgICAgPERvbmVJbWcgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkb25lX2xpc3RcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZlwiIH19PlxuICAgICAgICAgICAgICB7ZG9uZUxpc3QubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZG9uZV9iYXNpY19sYXJnZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCLtlaAg7J287J20IOyXhuyKteuLiOuLpC5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE2MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+7ZWgIOydvOydtCDsl4bslrTsmpQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICBUT0RP66W8IOyDiOuhreqyjCDstpTqsIDtlbTso7zshLjsmpQhXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkb25lTGlzdC5tYXAoKGRvbmVJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPERvbmUga2V5PXtpbmRleH0gdmFsdWU9e2RvbmVJdGVtfSAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01pZGRsZTI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJEb25lSW1nIiwiTWlkZGxlMSIsIlRvZG9JbWciLCJNaWRkbGUyIiwiSW5wdXRBZGRDb250YWluZXIiLCJOYXZpZ2F0aW9uIiwiVG9EbyIsIkRvbmUiLCJIb21lUGFnZSIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJkb25lTGlzdCIsInNldERvbmVMaXN0IiwiaGFuZGxlQWRkVG9kbyIsIm5ld1RvZG8iLCJwcmV2VG9kb3MiLCJoYW5kbGVNYXJrRG9uZSIsInRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwicHJldkRvbmUiLCJkaXYiLCJpZCIsInN0eWxlIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJvbkFkZFRvZG8iLCJ3aWR0aCIsImxlbmd0aCIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJpbmRleCIsInZhbHVlIiwib25NYXJrRG9uZSIsImRvbmVJdGVtIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/page.tsx\n"));

/***/ })

});