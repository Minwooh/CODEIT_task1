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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_td__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home_td */ \"(app-pages-browser)/./components/home_td.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input */ \"(app-pages-browser)/./components/input.tsx\");\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/navigation */ \"(app-pages-browser)/./components/navigation.tsx\");\n/* harmony import */ var _components_style_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/style/todo */ \"(app-pages-browser)/./components/style/todo.tsx\");\n/* harmony import */ var _components_style_done__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/style/done */ \"(app-pages-browser)/./components/style/done.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [todoList, setTodoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // 초기값 빈 배열\n    const [doneList, setDoneList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // 초기값 빈 배열\n    const [tenantId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"20211586\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (name)=>{\n        setName(name); // 입력된 이름 상태 저장\n        try {\n            const res = await fetch(\"https://assignment-todolist-api.vercel.app/api/\".concat(tenantId, \"/items\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name\n                })\n            });\n            if (!res.ok) {\n                const errorResponse = await res.json();\n                setError(\"Server Error: \".concat(errorResponse.error || \"Unknown error\"));\n                console.log(\"Error Response:\", errorResponse);\n                setResponse(null);\n                return;\n            }\n            const data = await res.json();\n            setTodoList((prevTodos)=>[\n                    ...prevTodos,\n                    data\n                ]);\n            setResponse(data);\n            setError(null);\n        } catch (err) {\n            setError(\"Something went wrong! \".concat(err.message || \"\"));\n            console.error(\"Error:\", err); // 에러 로그 출력\n        }\n    };\n    const handleAddTodo = (newTodo)=>{\n        setTodoList((prevTodos)=>[\n                ...prevTodos,\n                newTodo\n            ]); // 새로운 todo 추가\n    };\n    const handleMarkDone = (todo)=>{\n        setTodoList((prevTodos)=>prevTodos.filter((item)=>item.id !== todo.id)); // todo 완료 표시\n        setDoneList((prevDone)=>[\n                ...prevDone,\n                todo\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"background\",\n        style: {\n            display: \"flex\",\n            height: \"100vh\",\n            width: \"100vw\",\n            overflow: \"hidden\",\n            backgroundColor: \"#F9FAFB\",\n            flexDirection: \"column\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleSubmit: handleSubmit\n                    }, void 0, false, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    color: \"red\"\n                                },\n                                children: error\n                            }, void 0, false, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this),\n                            response && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: JSON.stringify(response)\n                            }, void 0, false, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 24\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"content\",\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle1, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.TodoImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"todo_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\",\n                                            width: \"590px\",\n                                            height: \"490px\",\n                                            overflow: \"auto\"\n                                        },\n                                        children: todoList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/todo_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 120,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : todoList.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_todo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                value: todo.name,\n                                                onMarkDone: ()=>handleMarkDone(todo)\n                                            }, index, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 127,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle2, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.DoneImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"done_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\",\n                                            width: \"590px\",\n                                            height: \"490px\",\n                                            overflow: \"auto\"\n                                        },\n                                        children: doneList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/done_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 149,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 159,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 160,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : doneList.map((doneItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_done__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                value: doneItem\n                                            }, index, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 166,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"VA+u3MlEGXRBfmsGLPnhxx+BsnI=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDNkM7QUFDdkI7QUFDRjtBQUNOO0FBQ0E7QUFRaEMsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBYSxFQUFFLEdBQUcsV0FBVztJQUNyRSxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQWEsRUFBRSxHQUFHLFdBQVc7SUFDckUsTUFBTSxDQUFDYyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzVCLE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDaUIsVUFBVUMsWUFBWSxHQUFHbEIsK0NBQVFBLENBQU07SUFDOUMsTUFBTSxDQUFDbUIsT0FBT0MsU0FBUyxHQUFHcEIsK0NBQVFBLENBQWdCO0lBRWxELE1BQU1xQixlQUFlLE9BQU9OO1FBQzFCQyxRQUFRRCxPQUFPLGVBQWU7UUFFOUIsSUFBSTtZQUNGLE1BQU1PLE1BQU0sTUFBTUMsTUFDaEIsa0RBQTJELE9BQVRULFVBQVMsV0FDM0Q7Z0JBQ0VVLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFYjtnQkFBSztZQUM5QjtZQUdGLElBQUksQ0FBQ08sSUFBSU8sRUFBRSxFQUFFO2dCQUNYLE1BQU1DLGdCQUFnQixNQUFNUixJQUFJUyxJQUFJO2dCQUNwQ1gsU0FBUyxpQkFBd0QsT0FBdkNVLGNBQWNYLEtBQUssSUFBSTtnQkFDakRhLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJIO2dCQUMvQlosWUFBWTtnQkFDWjtZQUNGO1lBRUEsTUFBTWdCLE9BQU8sTUFBTVosSUFBSVMsSUFBSTtZQUMzQnBCLFlBQVksQ0FBQ3dCLFlBQWM7dUJBQUlBO29CQUFXRDtpQkFBSztZQUUvQ2hCLFlB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Q0FBZEg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0I7R0EvSndCdkQ7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW53b28vZGV2ZWxvcC9Db2RlSXQvQ09ERUlUX3Rhc2sxL2FwcC8oaG9tZSkvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb25lSW1nLCBNaWRkbGUxLCBUb2RvSW1nLCBNaWRkbGUyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZV90ZFwiO1xuaW1wb3J0IElucHV0QWRkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lucHV0XCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZS90b2RvXCI7XG5pbXBvcnQgRG9uZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZS9kb25lXCI7XG5cbmludGVyZmFjZSBUb2RvSXRlbSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNDb21wbGV0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlPFRvZG9JdGVtW10+KFtdKTsgLy8g7LSI6riw6rCSIOu5iCDrsLDsl7RcbiAgY29uc3QgW2RvbmVMaXN0LCBzZXREb25lTGlzdF0gPSB1c2VTdGF0ZTxUb2RvSXRlbVtdPihbXSk7IC8vIOy0iOq4sOqwkiDruYgg67Cw7Je0XG4gIGNvbnN0IFt0ZW5hbnRJZF0gPSB1c2VTdGF0ZShcIjIwMjExNTg2XCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBzZXROYW1lKG5hbWUpOyAvLyDsnoXroKXrkJwg7J2066aEIOyDge2DnCDsoIDsnqVcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXNzaWdubWVudC10b2RvbGlzdC1hcGkudmVyY2VsLmFwcC9hcGkvJHt0ZW5hbnRJZH0vaXRlbXNgLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSB9KSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JSZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHNldEVycm9yKGBTZXJ2ZXIgRXJyb3I6ICR7ZXJyb3JSZXNwb25zZS5lcnJvciB8fCBcIlVua25vd24gZXJyb3JcIn1gKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBSZXNwb25zZTpcIiwgZXJyb3JSZXNwb25zZSk7XG4gICAgICAgIHNldFJlc3BvbnNlKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0VG9kb0xpc3QoKHByZXZUb2RvcykgPT4gWy4uLnByZXZUb2RvcywgZGF0YV0pO1xuXG4gICAgICBzZXRSZXNwb25zZShkYXRhKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nISAke2Vyci5tZXNzYWdlIHx8IFwiXCJ9YCk7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycik7IC8vIOyXkOufrCDroZzqt7gg7Lac66ClXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSAobmV3VG9kbzogVG9kb0l0ZW0pID0+IHtcbiAgICBzZXRUb2RvTGlzdCgocHJldlRvZG9zKSA9PiBbLi4ucHJldlRvZG9zLCBuZXdUb2RvXSk7IC8vIOyDiOuhnOyatCB0b2RvIOy2lOqwgFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1hcmtEb25lID0gKHRvZG86IFRvZG9JdGVtKSA9PiB7XG4gICAgc2V0VG9kb0xpc3QoKHByZXZUb2RvcykgPT4gcHJldlRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gdG9kby5pZCkpOyAvLyB0b2RvIOyZhOujjCDtkZzsi5xcbiAgICBzZXREb25lTGlzdCgocHJldkRvbmUpID0+IFsuLi5wcmV2RG9uZSwgdG9kb10pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9XCJiYWNrZ3JvdW5kXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjlGQUZCXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIC8vIOyEuOuhnCDsoJXroKxcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgLy8g6rCA66GcIOuwqe2WpSDspJHslZkg7KCV66CsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SW5wdXRBZGRDb250YWluZXIgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Lyog7Jik66WYIOuplOyLnOyngCAqL31cbiAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgIHtyZXNwb25zZSAmJiA8ZGl2PntKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9PC9kaXY+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsIC8vIOqwgOuhnCDsoJXroKxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNaWRkbGUxPlxuICAgICAgICAgICAgPFRvZG9JbWcgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJ0b2RvX2xpc3RcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNTkwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDkwcHhcIixcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0b2RvTGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy90b2RvX2Jhc2ljX2xhcmdlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIu2VoCDsnbzsnbQg7JeG7Iq164uI64ukLlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTYwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT7tlaAg7J287J20IOyXhuyWtOyalDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRPRE/rpbwg7IOI66Gt6rKMIOy2lOqwgO2VtOyjvOyEuOyalCFcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHRvZG9MaXN0Lm1hcCgodG9kbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUb0RvXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b2RvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uTWFya0RvbmU9eygpID0+IGhhbmRsZU1hcmtEb25lKHRvZG8pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9NaWRkbGUxPlxuICAgICAgICAgIDxNaWRkbGUyPlxuICAgICAgICAgICAgPERvbmVJbWcgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJkb25lX2xpc3RcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNTkwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDkwcHhcIixcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkb25lTGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9kb25lX2Jhc2ljX2xhcmdlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIu2VoCDsnbzsnbQg7JeG7Iq164uI64ukLlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTYwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT7tlaAg7J287J20IOyXhuyWtOyalDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRPRE/rpbwg7IOI66Gt6rKMIOy2lOqwgO2VtOyjvOyEuOyalCFcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGRvbmVMaXN0Lm1hcCgoZG9uZUl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8RG9uZSBrZXk9e2luZGV4fSB2YWx1ZT17ZG9uZUl0ZW19IC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTWlkZGxlMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRvbmVJbWciLCJNaWRkbGUxIiwiVG9kb0ltZyIsIk1pZGRsZTIiLCJJbnB1dEFkZENvbnRhaW5lciIsIk5hdmlnYXRpb24iLCJUb0RvIiwiRG9uZSIsIkhvbWVQYWdlIiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImRvbmVMaXN0Iiwic2V0RG9uZUxpc3QiLCJ0ZW5hbnRJZCIsIm5hbWUiLCJzZXROYW1lIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZXJyb3JSZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInByZXZUb2RvcyIsImVyciIsIm1lc3NhZ2UiLCJoYW5kbGVBZGRUb2RvIiwibmV3VG9kbyIsImhhbmRsZU1hcmtEb25lIiwidG9kbyIsImZpbHRlciIsIml0ZW0iLCJpZCIsInByZXZEb25lIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0Iiwid2lkdGgiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJsZW5ndGgiLCJpbWciLCJzcmMiLCJhbHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIiwibWFwIiwiaW5kZXgiLCJ2YWx1ZSIsIm9uTWFya0RvbmUiLCJkb25lSXRlbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/page.tsx\n"));

/***/ })

});