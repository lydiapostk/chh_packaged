exports.id = 486;
exports.ids = [486];
exports.modules = {

/***/ 8399:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1739))

/***/ }),

/***/ 1739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/navigation/dsai-signature.tsx


function DSAISignature() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-end justify-end place-items-center gap-2 pl-16 pointer-events-none",
        children: [
            "By",
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/dsai_logo.png",
                alt: "DSAI Logo",
                className: "dark:invert",
                width: 55,
                height: 24,
                priority: true
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/navigation/nav-dropdown-button.tsx


function DropdownButton({ open, onClick }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `flex items-end align-end place-items-center p-2`,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: "/navbar_dropdown.png",
            alt: "Dropdown Menu",
            className: `${open ? "rotate-180 brightness-0" : ""} self-center transition-all ease-in-out hover:brightness-50 lg:hidden`,
            width: 22,
            height: 22,
            onClick: onClick
        })
    });
}

;// CONCATENATED MODULE: ./src/components/navigation/nav-bar.tsx




function NavBar({ title, children }) {
    const [navbarOpen, setNavbarOpen] = (0,react_.useState)(false);
    const onClickNavbarDropdown = ()=>{
        setNavbarOpen(!navbarOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-fit flex justify-stretch flex-col place-content-center mt-4 mb-0 lg:flex-row lg:place-content-start",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "self-start w-full flex flex-row justify-between lg:self-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        className: "w-fit self-center border-transparent",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl text-left font-semibold lg:pr-4",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DropdownButton, {
                        open: navbarOpen,
                        onClick: onClickNavbarDropdown
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${navbarOpen ? "bg-gray-300 h-46" : "h-0"} justify-evenly transition-all duration-300 delay-150 overflow-hidden w-full flex-auto flex flex-col self-center lg:grid lg:grid-cols-3 lg:min-w-min lg:h-auto lg:bg-inherit`,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "invisible self-center flex-shrink h-0 lg:visible lg:min-w-fit lg:h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(DSAISignature, {})
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./src/components/navigation/nav-item.tsx


function NavItem({ href, title }) {
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        className: `${pathname == href ? "bg-gray-100 pointer-events-none" : ""} min-h-fit min-w-full self-stretch text-left grid content-center border-transparent transition-colors hover:bg-amber-400 hover:text-slate-100`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
            className: `text-lg font-semibold px-6 py-4`,
            children: [
                title,
                " "
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/allocations/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen flex flex-col justify-start justify-items-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-gray-200 max-h-fit items-center p-4 lg:px-24 lg:pb-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavBar, {
                    title: "CHH Caseworker Allocation",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                            href: "/allocations/crs",
                            title: "CRS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                            href: "/allocations/settings",
                            title: "Configure Settings"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                            href: "/allocations/generate",
                            title: "Generate Allocation"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-4 lg:px-24",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "sticky p-2 min-w-max lg:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(DSAISignature, {})
            })
        ]
    });
}


/***/ }),

/***/ 8492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Lydia\Documents\Optimisation\chh\CRSGUI - Generic\frontend\src\app\allocations\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;