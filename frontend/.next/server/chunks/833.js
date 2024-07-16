"use strict";
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ToggleButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2632);


function ToggleButton({ enabled, setEnabled, enabledText, disabledText }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row items-center gap-1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__/* .Switch */ .r, {
                checked: enabled,
                onChange: setEnabled,
                className: `${enabled ? "bg-amber-400" : "bg-yellow-100"}
                relative inline-flex h-[28px] w-[51px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: `${enabled ? "translate-x-6" : "translate-x-0"}
                    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-in-out`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "transition-all duration-1000 ease-in-out",
                children: enabled ? enabledText : disabledText
            })
        ]
    });
}


/***/ }),

/***/ 9721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FormDropdownInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6371);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7515);
/* harmony import */ var _form_input_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3217);




function FormDropdownInput({ options, selectedOption, setSelectedOption, placeholder, inputValidation }) {
    const isInputInValid = inputValidation !== undefined && !inputValidation.isValid;
    const inputValidationCss = isInputInValid ? _form_input_validation__WEBPACK_IMPORTED_MODULE_1__/* .errorDisplayCss */ .q : "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Listbox */ .R, {
        value: selectedOption,
        onChange: setSelectedOption,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid-rows-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Listbox */ .R.Button, {
                    className: `${inputValidationCss} relative w-auto text-left rounded-md bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5`,
                    children: [
                        selectedOption === "" || selectedOption === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block truncate text-gray-700",
                            children: placeholder ? placeholder : "Select an option"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block truncate",
                            children: selectedOption
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "fill-current h-4 w-4",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Listbox */ .R.Options, {
                    className: "absolute z-20 mt-1 max-h-60 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                    children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Listbox */ .R.Option, {
                            value: option,
                            className: "relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 hover:bg-amber-100 hover:text-amber-900",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `block truncate ${option === selectedOption ? "font-medium" : "font-normal"}`,
                                    children: option
                                }),
                                option === selectedOption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        className: "h-5 w-5",
                                        "aria-hidden": "true"
                                    })
                                })
                            ]
                        }, option))
                }),
                isInputInValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-4 pr-8 py-1 text-red-400 text-xs",
                    children: inputValidation.errorMessage
                })
            ]
        })
    });
}


/***/ }),

/***/ 9531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FormMultiSelectDropdownInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6371);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7515);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_input_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3217);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function FormMultiSelectDropdownInput({ options, selectedOptions, setSelectedOptions, placeholder, inputValidation }) {
    const isInputInvalid = inputValidation !== undefined && !inputValidation.isValid;
    const inputValidationCss = isInputInvalid ? _form_input_validation__WEBPACK_IMPORTED_MODULE_2__/* .errorDisplayCss */ .q : "";
    const [isOptionsOpen, setIsOptionsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onSelect = (option)=>{
        if (selectedOptions.includes(option)) {
            removeSelectedOption(option);
        } else {
            setSelectedOptions([
                ...selectedOptions,
                option
            ]);
        }
    };
    const removeSelectedOption = (option)=>{
        setSelectedOptions(selectedOptions.filter((prevSelectedOption)=>prevSelectedOption !== option));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Listbox */ .R, {
        value: selectedOptions.map((option)=>{
            `\'${option}\'`;
        }).join(","),
        onChange: onSelect,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col relative",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Listbox */ .R.Button, {
                    onClick: ()=>setIsOptionsOpen(!isOptionsOpen),
                    className: `${inputValidationCss} relative min-w-full text-left rounded-md border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5`,
                    children: [
                        selectedOptions.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block inline flex flex-wrap flex-row justify-start gap-1",
                            children: selectedOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row justify-between items-center gap-1 bg-gray-50 p-1.5 border",
                                    children: [
                                        option,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                removeSelectedOption(option);
                                            },
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            stroke: "currentColor",
                                            className: "w-5 h-5 p-0.5 hover:bg-gray-100",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M6 18L18 6M6 6l12 12"
                                            })
                                        })
                                    ]
                                }, option))
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block truncate text-gray-700",
                            children: placeholder ? placeholder : "Select an option"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "fill-current h-4 w-4",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                })
                            })
                        })
                    ]
                }),
                isInputInvalid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "x-4 pr-8 py-1 text-red-400 text-xs",
                    children: inputValidation.errorMessage
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "static",
                    children: isOptionsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Listbox */ .R.Options, {
                        static: true,
                        className: "z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                        children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Listbox */ .R.Option, {
                                value: option,
                                className: "relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 hover:bg-amber-100 hover:text-amber-900",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `block truncate ${selectedOptions.includes(option) ? "font-medium" : "font-normal"}`,
                                        children: option
                                    }),
                                    selectedOptions.includes(option) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            className: "h-5 w-5",
                                            "aria-hidden": "true"
                                        })
                                    })
                                ]
                            }, option))
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 4587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FormNumberInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_input_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3217);


function FormNumberInput({ name, numInput, setNumInput, placeholder, disabled, description, inputValidation, min, max }) {
    const handleChange = (event)=>{
        setNumInput(parseInt(event.target.value));
    };
    const isInputInvalid = inputValidation !== undefined && !inputValidation.isValid;
    const inputValidationCss = isInputInvalid ? _form_input_validation__WEBPACK_IMPORTED_MODULE_1__/* .errorDisplayCss */ .q : "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${description ? "flex flex-row justify-between items-center" : ""} transition ease-in-out duration-150 sm:text-sm sm:leading-5`,
                children: [
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "transition-all duration-75 max-w-fit",
                        children: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        name: name,
                        placeholder: placeholder,
                        value: numInput,
                        min: min,
                        max: max,
                        onChange: handleChange,
                        className: `${description ? "w-24" : "min-w-full"} ${inputValidationCss} rounded-md hover:border-gray-500 border border-gray-400 text-left px-4 py-2 placeholder:text-gray-700`,
                        disabled: disabled
                    })
                ]
            }),
            isInputInvalid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-4 pr-8 py-1 text-red-400 text-xs",
                children: inputValidation.errorMessage
            })
        ]
    });
}


/***/ })

};
;