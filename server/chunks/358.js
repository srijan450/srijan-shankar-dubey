exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 570:
/***/ ((module) => {

// Exports
module.exports = {
	"nav-container": "header_nav-container__W9Rhe",
	"nav": "header_nav__8vsjF",
	"nav-items": "header_nav-items__HnVM_",
	"show-items": "header_show-items__1pHEq"
};


/***/ }),

/***/ 835:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "menuIcon_menu__6_qBD",
	"hover": "menuIcon_hover__V6D_j",
	"click": "menuIcon_click__VNfpW"
};


/***/ }),

/***/ 358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./Components/Header/header.module.scss
var header_module = __webpack_require__(570);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./utility/Menu-Icon/menuIcon.module.scss
var menuIcon_module = __webpack_require__(835);
var menuIcon_module_default = /*#__PURE__*/__webpack_require__.n(menuIcon_module);
;// CONCATENATED MODULE: ./utility/Menu-Icon/menuIcon.jsx


const MenuIcon = ({ showNavItems  })=>{
    const setHover = (e)=>{
        if (e.target.classList.contains((menuIcon_module_default()).hover) && e.type === "mouseleave") e.target.classList.remove((menuIcon_module_default()).hover);
        else if (e.type === "mouseover" || !e.target.classList.contains((menuIcon_module_default()).hover)) e.target.classList.add((menuIcon_module_default()).hover);
    };
    const setClick = (e)=>{
        showNavItems((prev)=>!prev);
        document.getElementById("menu-icon").classList.toggle((menuIcon_module_default()).click);
        document.getElementById("page").classList.toggle("page-rotate");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (menuIcon_module_default()).menu,
        onMouseOver: setHover,
        onMouseLeave: setHover,
        onClick: setClick,
        title: "Click to open menu",
        id: "menu-icon",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("i", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("i", {})
        ]
    });
};
/* harmony default export */ const menuIcon = (MenuIcon);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./Components/Header/header.jsx




const Header = ()=>{
    const [showNavItems, setShowNavItems] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (header_module_default())["nav-container"],
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: `${(header_module_default()).nav} ${showNavItems ? (header_module_default())["show-nav-animation"] : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(menuIcon, {
                    showNavItems: setShowNavItems
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(header_module_default())["nav-items"]} ${showNavItems ? (header_module_default())["show-items"] : ""}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                style: {
                                    "--i": 1
                                },
                                children: "About"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                style: {
                                    "--i": 1.2
                                },
                                children: "home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                style: {
                                    "--i": 1.4
                                },
                                children: "projects"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                style: {
                                    "--i": 1.5
                                },
                                children: "connect"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const header = (Header);


/***/ })

};
;