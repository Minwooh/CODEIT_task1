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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_td__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home_td */ \"(app-pages-browser)/./components/home_td.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input */ \"(app-pages-browser)/./components/input.tsx\");\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/navigation */ \"(app-pages-browser)/./components/navigation.tsx\");\n/* harmony import */ var _components_style_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/style/todo */ \"(app-pages-browser)/./components/style/todo.tsx\");\n/* harmony import */ var _components_style_done__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/style/done */ \"(app-pages-browser)/./components/style/done.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nasync function HomePage() {\n    _s();\n    const [todoList, setTodoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [doneList, setDoneList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tenantId, setTenantId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"20211586\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const res = await fetch(\"/api/\".concat(tenantId), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name\n                })\n            });\n            if (!res.ok) {\n                const errorResponse = await res.json();\n                setError(errorResponse.error);\n                setResponse(null);\n                return;\n            }\n            const data = await res.json();\n            setResponse(data);\n            setError(null);\n        } catch (err) {\n            setError(\"Something went wrong!\");\n        }\n    };\n    // Add a new todo\n    const handleAddTodo = (newTodo)=>{\n        setTodoList((prevTodos)=>[\n                ...prevTodos,\n                newTodo\n            ]); // 이전 상태에서 새 todo를 추가\n    };\n    const handleMarkDone = (todo)=>{\n        setTodoList((prevTodos)=>prevTodos.filter((item)=>item !== todo));\n        setDoneList((prevDone)=>[\n                ...prevDone,\n                todo\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"background\",\n        style: {\n            display: \"flex\",\n            height: \"100vh\",\n            width: \"100vw\",\n            overflow: \"hidden\",\n            backgroundColor: \"#F9FAFB\",\n            flexDirection: \"column\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAddTodo: handleAddTodo\n                    }, void 0, false, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"content\",\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle1, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.TodoImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"todo_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\",\n                                            width: \"590px\",\n                                            height: \"490px\",\n                                            overflow: \"auto\"\n                                        },\n                                        children: todoList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/todo_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : todoList.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_todo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                value: todo,\n                                                onMarkDone: ()=>handleMarkDone(todo)\n                                            }, index, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle2, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.DoneImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"done_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\",\n                                            width: \"590px\",\n                                            height: \"490px\",\n                                            overflow: \"auto\"\n                                        },\n                                        children: doneList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/done_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 131,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 141,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 142,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : doneList.map((doneItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_done__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                value: doneItem\n                                            }, index, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 148,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"cZKl3ePEGdQkJUhI07gjcOZxOAE=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQTtnREFFSDBELE9BQU94QjtnREFDUHlCLFlBQVksSUFBTTFCLGVBQWVDOytDQUY1QnVCOzs7Ozs7Ozs7Ozs7Ozs7OzBDQVFmLDhEQUFDNUQsd0RBQU9BOztrREFDTiw4REFBQ0gsd0RBQU9BOzs7OztrREFDUiw4REFBQzRDO3dDQUNDQyxJQUFHO3dDQUNIQyxPQUFPOzRDQUNMSyxpQkFBaUI7NENBQ2pCRixPQUFPOzRDQUNQRCxRQUFROzRDQUNSRSxVQUFVO3dDQUNaO2tEQUVDdkMsU0FBUzRDLE1BQU0sS0FBSyxrQkFDbkI7OzhEQUNFLDhEQUFDQztvREFDQ0MsS0FBSTtvREFDSkMsS0FBSTtvREFDSlosT0FBTzt3REFDTEcsT0FBTzt3REFDUEQsUUFBUTt3REFDUlcsV0FBVzt3REFDWEMsWUFBWTtvREFDZDs7Ozs7OzhEQUVGLDhEQUFDaEI7b0RBQUlFLE9BQU87d0RBQUVlLFdBQVc7b0RBQVM7OERBQUc7Ozs7Ozs4REFDckMsOERBQUNqQjtvREFBSUUsT0FBTzt3REFBRWUsV0FBVztvREFBUzs4REFBRzs7Ozs7OzsyREFLdkNsRCxTQUFTbUQsR0FBRyxDQUFDLENBQUNJLFVBQVVILHNCQUN0Qiw4REFBQ3hELDhEQUFJQTtnREFBYXlELE9BQU9FOytDQUFkSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3QjtHQW5KOEJ2RDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21pbndvby9kZXZlbG9wL0NvZGVJdC9DT0RFSVRfdGFzazEvYXBwLyhob21lKS9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRG9uZUltZywgTWlkZGxlMSwgVG9kb0ltZywgTWlkZGxlMiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWVfdGRcIjtcbmltcG9ydCBJbnB1dEFkZENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnB1dFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFRvRG8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGUvdG9kb1wiO1xuaW1wb3J0IERvbmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3R5bGUvZG9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkb25lTGlzdCwgc2V0RG9uZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGVuYW50SWQsIHNldFRlbmFudElkXSA9IHVzZVN0YXRlKFwiMjAyMTE1ODZcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS8ke3RlbmFudElkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUgfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JSZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHNldEVycm9yKGVycm9yUmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICBzZXRSZXNwb25zZShudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldFJlc3BvbnNlKGRhdGEpO1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWRkIGEgbmV3IHRvZG9cbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9IChuZXdUb2RvKSA9PiB7XG4gICAgc2V0VG9kb0xpc3QoKHByZXZUb2RvcykgPT4gWy4uLnByZXZUb2RvcywgbmV3VG9kb10pOyAvLyDsnbTsoIQg7IOB7YOc7JeQ7IScIOyDiCB0b2Rv66W8IOy2lOqwgFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1hcmtEb25lID0gKHRvZG8pID0+IHtcbiAgICBzZXRUb2RvTGlzdCgocHJldlRvZG9zKSA9PiBwcmV2VG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB0b2RvKSk7XG4gICAgc2V0RG9uZUxpc3QoKHByZXZEb25lKSA9PiBbLi4ucHJldkRvbmUsIHRvZG9dKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwiYmFja2dyb3VuZFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y5RkFGQlwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCAvLyDshLjroZwg7KCV66CsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIC8vIOqwgOuhnCDrsKntlqUg7KSR7JWZIOygleugrFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPElucHV0QWRkQ29udGFpbmVyIG9uQWRkVG9kbz17aGFuZGxlQWRkVG9kb30gLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsIC8vIOqwgOuhnCDsoJXroKxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNaWRkbGUxPlxuICAgICAgICAgICAgPFRvZG9JbWcgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJ0b2RvX2xpc3RcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNTkwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDkwcHhcIixcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0b2RvTGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy90b2RvX2Jhc2ljX2xhcmdlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIu2VoCDsnbzsnbQg7JeG7Iq164uI64ukLlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTYwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT7tlaAg7J287J20IOyXhuyWtOyalDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRPRE/rpbwg7IOI66Gt6rKMIOy2lOqwgO2VtOyjvOyEuOyalCFcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHRvZG9MaXN0Lm1hcCgodG9kbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUb0RvXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b2RvfVxuICAgICAgICAgICAgICAgICAgICBvbk1hcmtEb25lPXsoKSA9PiBoYW5kbGVNYXJrRG9uZSh0b2RvKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTWlkZGxlMT5cbiAgICAgICAgICA8TWlkZGxlMj5cbiAgICAgICAgICAgIDxEb25lSW1nIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwiZG9uZV9saXN0XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZlwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjU5MHB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQ5MHB4XCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZG9uZUxpc3QubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZG9uZV9iYXNpY19sYXJnZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCLtlaAg7J287J20IOyXhuyKteuLiOuLpC5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE2MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+7ZWgIOydvOydtCDsl4bslrTsmpQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICBUT0RP66W8IOyDiOuhreqyjCDstpTqsIDtlbTso7zshLjsmpQhXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkb25lTGlzdC5tYXAoKGRvbmVJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPERvbmUga2V5PXtpbmRleH0gdmFsdWU9e2RvbmVJdGVtfSAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01pZGRsZTI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJEb25lSW1nIiwiTWlkZGxlMSIsIlRvZG9JbWciLCJNaWRkbGUyIiwiSW5wdXRBZGRDb250YWluZXIiLCJOYXZpZ2F0aW9uIiwiVG9EbyIsIkRvbmUiLCJIb21lUGFnZSIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJkb25lTGlzdCIsInNldERvbmVMaXN0IiwidGVuYW50SWQiLCJzZXRUZW5hbnRJZCIsIm5hbWUiLCJzZXROYW1lIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZXJyb3JSZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyIiwiaGFuZGxlQWRkVG9kbyIsIm5ld1RvZG8iLCJwcmV2VG9kb3MiLCJoYW5kbGVNYXJrRG9uZSIsInRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwicHJldkRvbmUiLCJkaXYiLCJpZCIsInN0eWxlIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm9uQWRkVG9kbyIsImxlbmd0aCIsImltZyIsInNyYyIsImFsdCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJpbmRleCIsInZhbHVlIiwib25NYXJrRG9uZSIsImRvbmVJdGVtIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/page.tsx\n"));

/***/ })

});