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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_td__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home_td */ \"(app-pages-browser)/./components/home_td.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input */ \"(app-pages-browser)/./components/input.tsx\");\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/navigation */ \"(app-pages-browser)/./components/navigation.tsx\");\n/* harmony import */ var _components_style_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/style/todo */ \"(app-pages-browser)/./components/style/todo.tsx\");\n/* harmony import */ var _components_style_done__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/style/done */ \"(app-pages-browser)/./components/style/done.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//api\nconst tenantId = \"20211586\"; // 고유 식별자\nconst URL = \"https://assignment-todolist-api.vercel.app/api/\".concat(tenantId, \"/items\");\nfunction HomePage() {\n    _s();\n    const [todoList, setTodoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [doneList, setDoneList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Fetch data from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            setLoading(true);\n            fetch(URL).then({\n                \"HomePage.useEffect\": (response)=>{\n                    if (!response.ok) throw new Error(\"Failed to fetch data\");\n                    return response.json();\n                }\n            }[\"HomePage.useEffect\"]).then({\n                \"HomePage.useEffect\": (data)=>{\n                    const todos = data.filter({\n                        \"HomePage.useEffect.todos\": (item)=>!item.isCompleted\n                    }[\"HomePage.useEffect.todos\"]);\n                    const dones = data.filter({\n                        \"HomePage.useEffect.dones\": (item)=>item.isCompleted\n                    }[\"HomePage.useEffect.dones\"]);\n                    setTodoList(todos);\n                    setDoneList(dones);\n                }\n            }[\"HomePage.useEffect\"]).catch({\n                \"HomePage.useEffect\": (err)=>setError(err.message)\n            }[\"HomePage.useEffect\"]).finally({\n                \"HomePage.useEffect\": ()=>setLoading(false)\n            }[\"HomePage.useEffect\"]);\n        }\n    }[\"HomePage.useEffect\"], []);\n    // Add a new todo\n    const handleAddTodo = (newTodo)=>{\n        const todoItem = {\n            id: Date.now(),\n            tenantId,\n            name: newTodo,\n            memo: \"\",\n            imageUrl: \"\",\n            isCompleted: false\n        };\n        fetch(URL, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(todoItem)\n        }).then((response)=>{\n            if (!response.ok) throw new Error(\"Failed to add todo\");\n            return response.json();\n        }).then((createdTodo)=>{\n            setTodoList((prevTodos)=>[\n                    ...prevTodos,\n                    createdTodo\n                ]);\n        }).catch((err)=>setError(err.message));\n    };\n    const handleMarkDone = (todo)=>{\n        const updatedTodo = {\n            ...todo,\n            isCompleted: true\n        };\n        fetch(\"\".concat(URL, \"/\").concat(todo.id), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(updatedTodo)\n        }).then((response)=>{\n            if (!response.ok) throw new Error(\"Failed to update todo\");\n            return response.json();\n        }).then(()=>{\n            setTodoList((prevTodos)=>prevTodos.filter((item)=>item.id !== todo.id));\n            setDoneList((prevDone)=>[\n                    ...prevDone,\n                    updatedTodo\n                ]);\n        }).catch((err)=>setError(err.message));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"background\",\n                style: {\n                    display: \"flex\",\n                    backgroundColor: \"#000\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAddTodo: handleAddTodo\n                    }, void 0, false, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"content\",\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle1, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.TodoImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"todo_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\",\n                                            width: \"570px\"\n                                        },\n                                        children: todoList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/todo_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 129,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 130,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : todoList.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_todo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                value: todo.name,\n                                                onMarkDone: ()=>handleMarkDone(todo)\n                                            }, todo.id, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.Middle2, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_td__WEBPACK_IMPORTED_MODULE_2__.DoneImg, {}, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"done_list\",\n                                        style: {\n                                            backgroundColor: \"#f8f\"\n                                        },\n                                        children: doneList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/done_basic_large.png\",\n                                                    alt: \"할 일이 없습니다.\",\n                                                    style: {\n                                                        width: \"240px\",\n                                                        height: \"240px\",\n                                                        marginTop: \"50px\",\n                                                        marginLeft: \"160px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 150,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"할 일이 없어요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 160,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        textAlign: \"center\"\n                                                    },\n                                                    children: \"TODO를 새롭게 추가해주세요!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                    lineNumber: 161,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true) : doneList.map((doneItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_style_done__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                value: doneItem\n                                            }, index, false, {\n                                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                                lineNumber: 167,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                                lineNumber: 145,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minwoo/develop/CodeIt/CODEIT_task1/app/(home)/page.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"BmPQXi8HlcYujSpRDIhY+RbkITg=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDa0M7QUFDdkI7QUFDRjtBQUNOO0FBQ0E7QUFFL0MsS0FBSztBQUNMLE1BQU1VLFdBQVcsWUFBWSxTQUFTO0FBQ3RDLE1BQU1DLE1BQU0sa0RBQTJELE9BQVRELFVBQVM7QUFFeEQsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDO0lBRW5DLHNCQUFzQjtJQUN0QkQsZ0RBQVNBOzhCQUFDO1lBQ1JrQixXQUFXO1lBQ1hHLE1BQU1WLEtBQ0hXLElBQUk7c0NBQUMsQ0FBQ0M7b0JBQ0wsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNO29CQUNsQyxPQUFPRixTQUFTRyxJQUFJO2dCQUN0QjtxQ0FDQ0osSUFBSTtzQ0FBQyxDQUFDSztvQkFDTCxNQUFNQyxRQUFRRCxLQUFLRSxNQUFNO29EQUFDLENBQUNDLE9BQVMsQ0FBQ0EsS0FBS0MsV0FBVzs7b0JBQ3JELE1BQU1DLFFBQVFMLEtBQUtFLE1BQU07b0RBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsV0FBVzs7b0JBQ3BEakIsWUFBWWM7b0JBQ1paLFlBQVlnQjtnQkFDZDtxQ0FDQ0MsS0FBSztzQ0FBQyxDQUFDQyxNQUFRZCxTQUFTYyxJQUFJQyxPQUFPO3FDQUNuQ0MsT0FBTztzQ0FBQyxJQUFNbEIsV0FBVzs7UUFDOUI7NkJBQUcsRUFBRTtJQUVMLGlCQUFpQjtJQUNqQixNQUFNbUIsZ0JBQWdCLENBQUNDO1FBQ3JCLE1BQU1DLFdBQVc7WUFDZkMsSUFBSUMsS0FBS0MsR0FBRztZQUNaaEM7WUFDQWlDLE1BQU1MO1lBQ05NLE1BQU07WUFDTkMsVUFBVTtZQUNWZCxhQUFhO1FBQ2Y7UUFFQVYsTUFBTVYsS0FBSztZQUNUbUMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNYO1FBQ3ZCLEdBQ0dqQixJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJLENBQUNBLFNBQVNDLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07WUFDbEMsT0FBT0YsU0FBU0csSUFBSTtRQUN0QixHQUNDSixJQUFJLENBQUMsQ0FBQzZCO1lBQ0xyQyxZQUFZLENBQUNzQyxZQUFjO3VCQUFJQTtvQkFBV0Q7aUJBQVk7UUFDeEQsR0FDQ2xCLEtBQUssQ0FBQyxDQUFDQyxNQUFRZCxTQUFTYyxJQUFJQyxPQUFPO0lBQ3hDO0lBRUEsTUFBTWtCLGlCQUFpQixDQUFDQztRQUN0QixNQUFNQyxjQUFjO1lBQUUsR0FBR0QsSUFBSTtZQUFFdkIsYUFBYTtRQUFLO1FBRWpEVixNQUFNLEdBQVVpQyxPQUFQM0MsS0FBSSxLQUFXLE9BQVIyQyxLQUFLZCxFQUFFLEdBQUk7WUFDekJNLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDSztRQUN2QixHQUNHakMsSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNO1lBQ2xDLE9BQU9GLFNBQVNHLElBQUk7UUFDdEIsR0FDQ0osSUFBSSxDQUFDO1lBQ0pSLFlBQVksQ0FBQ3NDLFlBQ1hBLFVBQVV2QixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1UsRUFBRSxLQUFLYyxLQUFLZCxFQUFFO1lBRWhEeEIsWUFBWSxDQUFDd0MsV0FBYTt1QkFBSUE7b0JBQVVEO2lCQUFZO1FBQ3RELEdBQ0N0QixLQUFLLENBQUMsQ0FBQ0MsTUFBUWQsU0FBU2MsSUFBSUMsT0FBTztJQUN4QztJQUVBLHFCQUNFLDhEQUFDc0I7OzBCQUNDLDhEQUFDbEQsOERBQVVBOzs7OzswQkFDWCw4REFBQ2tEO2dCQUNDakIsSUFBRztnQkFDSGtCLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLGlCQUFpQjtvQkFDakJDLGVBQWU7b0JBQ2ZDLFlBQVk7b0JBQ1pDLGdCQUFnQjtnQkFDbEI7O2tDQUVBLDhEQUFDekQseURBQWlCQTt3QkFBQzBELFdBQVczQjs7Ozs7O2tDQUU5Qiw4REFBQ29CO3dCQUNDakIsSUFBRzt3QkFDSGtCLE9BQU87NEJBQ0xDLFNBQVM7NEJBQ1RFLGVBQWU7d0JBQ2pCOzswQ0FFQSw4REFBQzFELHdEQUFPQTs7a0RBQ04sOERBQUNDLHdEQUFPQTs7Ozs7a0RBQ1IsOERBQUNxRDt3Q0FDQ2pCLElBQUc7d0NBQ0hrQixPQUFPOzRDQUFFRSxpQkFBaUI7NENBQVFLLE9BQU87d0NBQVE7a0RBRWhEcEQsU0FBU3FELE1BQU0sS0FBSyxrQkFDbkI7OzhEQUNFLDhEQUFDQztvREFDQ0MsS0FBSTtvREFDSkMsS0FBSTtvREFDSlgsT0FBTzt3REFDTE8sT0FBTzt3REFDUEssUUFBUTt3REFDUkMsV0FBVzt3REFDWEMsWUFBWTtvREFDZDs7Ozs7OzhEQUVGLDhEQUFDZjtvREFBSUMsT0FBTzt3REFBRWUsV0FBVztvREFBUzs4REFBRzs7Ozs7OzhEQUNyQyw4REFBQ2hCO29EQUFJQyxPQUFPO3dEQUFFZSxXQUFXO29EQUFTOzhEQUFHOzs7Ozs7OzJEQUt2QzVELFNBQVM2RCxHQUFHLENBQUMsQ0FBQ3BCLHFCQUNaLDhEQUFDOUMsOERBQUlBO2dEQUVIbUUsT0FBT3JCLEtBQUtYLElBQUk7Z0RBQ2hCaUMsWUFBWSxJQUFNdkIsZUFBZUM7K0NBRjVCQSxLQUFLZCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBDQVF0Qiw4REFBQ25DLHdEQUFPQTs7a0RBQ04sOERBQUNILHdEQUFPQTs7Ozs7a0RBQ1IsOERBQUN1RDt3Q0FBSWpCLElBQUc7d0NBQVlrQixPQUFPOzRDQUFFRSxpQkFBaUI7d0NBQU87a0RBQ2xEN0MsU0FBU21ELE1BQU0sS0FBSyxrQkFDbkI7OzhEQUNFLDhEQUFDQztvREFDQ0MsS0FBSTtvREFDSkMsS0FBSTtvREFDSlgsT0FBTzt3REFDTE8sT0FBTzt3REFDUEssUUFBUTt3REFDUkMsV0FBVzt3REFDWEMsWUFBWTtvREFDZDs7Ozs7OzhEQUVGLDhEQUFDZjtvREFBSUMsT0FBTzt3REFBRWUsV0FBVztvREFBUzs4REFBRzs7Ozs7OzhEQUNyQyw4REFBQ2hCO29EQUFJQyxPQUFPO3dEQUFFZSxXQUFXO29EQUFTOzhEQUFHOzs7Ozs7OzJEQUt2QzFELFNBQVMyRCxHQUFHLENBQUMsQ0FBQ0csVUFBVUMsc0JBQ3RCLDhEQUFDckUsOERBQUlBO2dEQUFha0UsT0FBT0U7K0NBQWRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzdCO0dBbEt3QmxFO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvbWlud29vL2RldmVsb3AvQ29kZUl0L0NPREVJVF90YXNrMS9hcHAvKGhvbWUpL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb25lSW1nLCBNaWRkbGUxLCBUb2RvSW1nLCBNaWRkbGUyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZV90ZFwiO1xuaW1wb3J0IElucHV0QWRkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lucHV0XCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZS90b2RvXCI7XG5pbXBvcnQgRG9uZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZS9kb25lXCI7XG5cbi8vYXBpXG5jb25zdCB0ZW5hbnRJZCA9IFwiMjAyMTE1ODZcIjsgLy8g6rOg7JygIOyLneuzhOyekFxuY29uc3QgVVJMID0gYGh0dHBzOi8vYXNzaWdubWVudC10b2RvbGlzdC1hcGkudmVyY2VsLmFwcC9hcGkvJHt0ZW5hbnRJZH0vaXRlbXNgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkb25lTGlzdCwgc2V0RG9uZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIEFQSVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goVVJMKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmlzQ29tcGxldGVkKTtcbiAgICAgICAgY29uc3QgZG9uZXMgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pc0NvbXBsZXRlZCk7XG4gICAgICAgIHNldFRvZG9MaXN0KHRvZG9zKTtcbiAgICAgICAgc2V0RG9uZUxpc3QoZG9uZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRFcnJvcihlcnIubWVzc2FnZSkpXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XG4gIH0sIFtdKTtcblxuICAvLyBBZGQgYSBuZXcgdG9kb1xuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gKG5ld1RvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvSXRlbSA9IHtcbiAgICAgIGlkOiBEYXRlLm5vdygpLCAvLyDqs6DsnKAgSUQg7IOd7ISxXG4gICAgICB0ZW5hbnRJZCxcbiAgICAgIG5hbWU6IG5ld1RvZG8sXG4gICAgICBtZW1vOiBcIlwiLFxuICAgICAgaW1hZ2VVcmw6IFwiXCIsXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIGZldGNoKFVSTCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodG9kb0l0ZW0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGFkZCB0b2RvXCIpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChjcmVhdGVkVG9kbykgPT4ge1xuICAgICAgICBzZXRUb2RvTGlzdCgocHJldlRvZG9zKSA9PiBbLi4ucHJldlRvZG9zLCBjcmVhdGVkVG9kb10pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRFcnJvcihlcnIubWVzc2FnZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1hcmtEb25lID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHsgLi4udG9kbywgaXNDb21wbGV0ZWQ6IHRydWUgfTtcblxuICAgIGZldGNoKGAke1VSTH0vJHt0b2RvLmlkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRvZG8pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSB0b2RvXCIpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VG9kb0xpc3QoKHByZXZUb2RvcykgPT5cbiAgICAgICAgICBwcmV2VG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSB0b2RvLmlkKVxuICAgICAgICApO1xuICAgICAgICBzZXREb25lTGlzdCgocHJldkRvbmUpID0+IFsuLi5wcmV2RG9uZSwgdXBkYXRlZFRvZG9dKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gc2V0RXJyb3IoZXJyLm1lc3NhZ2UpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImJhY2tncm91bmRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgLy8g7IS466GcIOygleugrFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIC8vIOqwgOuhnCDrsKntlqUg7KSR7JWZIOygleugrFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW5wdXRBZGRDb250YWluZXIgb25BZGRUb2RvPXtoYW5kbGVBZGRUb2RvfSAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIiwgLy8g6rCA66GcIOygleugrFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1pZGRsZTE+XG4gICAgICAgICAgICA8VG9kb0ltZyAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cInRvZG9fbGlzdFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjhmXCIsIHdpZHRoOiBcIjU3MHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RvZG9MaXN0Lmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3RvZG9fYmFzaWNfbGFyZ2UucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwi7ZWgIOydvOydtCDsl4bsirXri4jri6QuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNjBweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Pu2VoCDsnbzsnbQg7JeG7Ja07JqUPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVE9ET+ulvCDsg4jroa3qsowg7LaU6rCA7ZW07KO87IS47JqUIVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdG9kb0xpc3QubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VG9Eb1xuICAgICAgICAgICAgICAgICAgICBrZXk9e3RvZG8uaWR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b2RvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uTWFya0RvbmU9eygpID0+IGhhbmRsZU1hcmtEb25lKHRvZG8pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9NaWRkbGUxPlxuICAgICAgICAgIDxNaWRkbGUyPlxuICAgICAgICAgICAgPERvbmVJbWcgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkb25lX2xpc3RcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZlwiIH19PlxuICAgICAgICAgICAgICB7ZG9uZUxpc3QubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZG9uZV9iYXNpY19sYXJnZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCLtlaAg7J287J20IOyXhuyKteuLiOuLpC5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE2MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+7ZWgIOydvOydtCDsl4bslrTsmpQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICBUT0RP66W8IOyDiOuhreqyjCDstpTqsIDtlbTso7zshLjsmpQhXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkb25lTGlzdC5tYXAoKGRvbmVJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPERvbmUga2V5PXtpbmRleH0gdmFsdWU9e2RvbmVJdGVtfSAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01pZGRsZTI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEb25lSW1nIiwiTWlkZGxlMSIsIlRvZG9JbWciLCJNaWRkbGUyIiwiSW5wdXRBZGRDb250YWluZXIiLCJOYXZpZ2F0aW9uIiwiVG9EbyIsIkRvbmUiLCJ0ZW5hbnRJZCIsIlVSTCIsIkhvbWVQYWdlIiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImRvbmVMaXN0Iiwic2V0RG9uZUxpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZGF0YSIsInRvZG9zIiwiZmlsdGVyIiwiaXRlbSIsImlzQ29tcGxldGVkIiwiZG9uZXMiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJmaW5hbGx5IiwiaGFuZGxlQWRkVG9kbyIsIm5ld1RvZG8iLCJ0b2RvSXRlbSIsImlkIiwiRGF0ZSIsIm5vdyIsIm5hbWUiLCJtZW1vIiwiaW1hZ2VVcmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVkVG9kbyIsInByZXZUb2RvcyIsImhhbmRsZU1hcmtEb25lIiwidG9kbyIsInVwZGF0ZWRUb2RvIiwicHJldkRvbmUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib25BZGRUb2RvIiwid2lkdGgiLCJsZW5ndGgiLCJpbWciLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIiwibWFwIiwidmFsdWUiLCJvbk1hcmtEb25lIiwiZG9uZUl0ZW0iLCJpbmRleCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/page.tsx\n"));

/***/ })

});