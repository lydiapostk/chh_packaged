"use strict";
exports.id = 690;
exports.ids = [690];
exports.modules = {

/***/ 5956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ ButtonColourToCSS)
/* harmony export */ });
const ButtonColourToCSS = {
    "grey": "bg-gray-400 bg-opacity-20 text-gray-700 hover:bg-opacity-30",
    "blue": "bg-blue-100 text-blue-900 hover:bg-blue-200",
    "yellow": "bg-yellow-300 text-yellow-700 hover:bg-yellow-200",
    "green": "bg-lime-300 text-lime-700 hover:bg-lime-200 focus:ring-0",
    "red": "bg-red-300 text-red-700 hover:bg-red-200"
};


/***/ }),

/***/ 9389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CloseButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CloseButton({ onClick }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "outline-none bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100",
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: "Close"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "h-6 w-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12"
                })
            })
        ]
    });
}


/***/ }),

/***/ 8975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FormInputField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function FormInputField({ title, description, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col my-2 w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: "tracking-wide text-gray-700 text-m mb-2",
                children: [
                    title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col flex-nowrap relative w-auto gap-1",
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 3217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ errorDisplayCss)
/* harmony export */ });
/* unused harmony export FormErrorMessageDisplay */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const errorDisplayCss = "ring-offset-2 ring-1 ring-red-400";
function FormErrorMessageDisplay(errorMessage) {
    return /*#__PURE__*/ _jsx("div", {
        className: "px-4 pr-8 py-1 text-red-400 text-xs",
        children: errorMessage.toString()
    });
}


/***/ }),

/***/ 6062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Spinner({ width, height }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        "aria-hidden": "true",
        className: `${width} ${height} mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`,
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill"
            })
        ]
    });
}


/***/ }),

/***/ 4645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TableBody)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TableBody({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "table-row-group border-spacing-y-1",
        children: children
    });
}


/***/ }),

/***/ 504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TableCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const COLOURS = {
    "teal": "border-2 border-teal-400 bg-teal-200 rounded-md text-center",
    "cyan": "border-2 border-cyan-400 bg-cyan-200 rounded-md text-center",
    "sky": "border-2 border-sky-400 bg-sky-200 rounded-md text-center",
    "blue": "border-2 border-blue-400 bg-blue-200 rounded-md text-center",
    "indigo": "border-2 border-indigo-400 bg-indigo-200 rounded-md text-center",
    "violet": "border-2 border-violet-400 bg-violet-200 rounded-md text-center",
    "purple": "border-2 border-purple-400 bg-purple-200 rounded-md text-center",
    "fuchsia": "border-2 border-fuchsia-400 bg-fuchsia-200 rounded-md text-center",
    "pink": "border-2 border-pink-400 bg-pink-200 rounded-md text-center",
    "orange": "border-2 border-orange-400 bg-orange-200 rounded-md text-center",
    "slate": "border-2 border-slate-400 bg-slate-200 rounded-md text-center",
    "stone": "border-2 border-stone-400 bg-stone-200 rounded-md text-center"
};
function TableCell({ content, colourIndex }) {
    var borderCSS = colourIndex != undefined ? Object.values(COLOURS)[colourIndex] : undefined;
    // console.log(borderCSS, colourIndex ? colourIndex % 12 : "")
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `table-cell px-6`,
        children: [
            borderCSS && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: borderCSS,
                children: content
            }),
            !borderCSS && content
        ]
    });
}


/***/ }),

/***/ 6955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TableHeaderCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TableHeaderCell({ content }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "table-cell align-bottom px-6",
        children: content
    });
}


/***/ }),

/***/ 9308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TableHeaderRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TableHeaderRow({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sticky z-20 top-0 table-header-group font-semibold bg-gray-50",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "table-row",
            children: children
        })
    });
}


/***/ }),

/***/ 6321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TableRow({ children, className, onClick }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `table-row ${className} hover:bg-gray-50`,
        onClick: onClick,
        children: children
    });
}


/***/ }),

/***/ 7898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ BiStringMap)
/* harmony export */ });
class BiStringMap {
    constructor(init){
        this.map = new Map();
        this.keyList = [];
        this.inverseMap = new Map();
        this.map = new Map();
        this.inverseMap = new Map();
        for(let key in init){
            var value = init[key];
            if (this.hasKey(key) || this.hasValue(value)) {
                throw new Error("Key or Value already exists");
            }
            this.keyList.push(key);
            this.map.set(key, value);
            this.inverseMap.set(value, key);
        }
    }
    clear() {
        this.map.clear();
        this.inverseMap.clear();
    }
    hasKey(key) {
        return this.map.has(key);
    }
    hasValue(value) {
        return this.inverseMap.has(value);
    }
    deleteKey(key) {
        if (!this.hasKey(key)) {
            return false;
        }
        this.keyList = this.keyList.splice(this.keyList.indexOf(key));
        const value = this.getValue(key);
        this.inverseMap.delete(value);
        return this.map.delete(key);
    }
    deleteValue(value) {
        if (!this.hasValue(value)) {
            return false;
        }
        const key = this.getKey(value);
        this.keyList = this.keyList.splice(this.keyList.indexOf(key));
        return this.map.delete(key) && this.inverseMap.delete(value);
    }
    entries() {
        return this.map.entries();
    }
    getKey(value) {
        return this.inverseMap.get(value);
    }
    getValue(key) {
        return this.map.get(key);
    }
    getIndexOfKey(key) {
        return this.keyList.indexOf(key);
    }
    getIndexOfValue(value) {
        var key = this.inverseMap.get(value);
        if (key == undefined) {
            return -1;
        }
        return this.keyList.indexOf(key);
    }
    getKeyList() {
        return this.keyList;
    }
    keys() {
        return this.map.keys();
    }
    values() {
        return this.inverseMap.keys();
    }
    set(key, value) {
        if (this.hasKey(key) || this.hasValue(value)) {
            throw new Error("Key or Value already exists");
        }
        this.keyList.push(key);
        this.map.set(key, value);
        this.inverseMap.set(value, key);
    }
    get size() {
        return this.map.size;
    }
    get isEmpty() {
        return this.size === 0;
    }
}


/***/ })

};
;