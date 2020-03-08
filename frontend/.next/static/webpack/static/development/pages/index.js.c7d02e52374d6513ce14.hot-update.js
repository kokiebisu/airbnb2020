webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/layout/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/Header.tsx ***!
  \******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_HeaderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/HeaderCard */ "./src/components/functions/HeaderCard.tsx");
/* harmony import */ var _modals_RegisterModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/RegisterModal */ "./src/components/modals/RegisterModal.tsx");
/* harmony import */ var _modals_HelpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/HelpModal */ "./src/components/modals/HelpModal.tsx");
/* harmony import */ var _modals_CurrencyModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/CurrencyModal */ "./src/components/modals/CurrencyModal.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Component




 // Images

var background = __webpack_require__(/*! ../../../public/img/high/airbnb-background.jpg */ "./public/img/high/airbnb-background.jpg");

var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      registerModal = _useState[0],
      setRegisterModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      helpModal = _useState2[0],
      setHelpModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      currencyModal = _useState3[0],
      setCurrencyModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      type = _useState4[0],
      setType = _useState4[1];

  var switchRegisterModal = function switchRegisterModal() {
    setRegisterModal(!registerModal);
  };

  var switchHelpModal = function switchHelpModal() {
    setHelpModal(!helpModal);
  };

  var switchCurrencyModal = function switchCurrencyModal(_boolean) {
    setCurrencyModal(_boolean);
  };

  var switchType = function switchType(type) {
    setType(type);
  };

  var configureScroll = function configureScroll(name) {
    document.body.style.overflow = name;
  };

  return __jsx("header", {
    style: {
      backgroundImage: "url(".concat(background, ")"),
      maxHeight: '80rem'
    },
    className: "w-screen md:h-screen md:min-h-80 relative bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "m-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Airbnb"), __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-8 w-8 block",
    style: {
      fill: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))))), __jsx("div", {
    className: "hidden lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("nav", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex items-center justify-around flex-wrap text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "flex items-center justify-start text-sm mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("svg", {
    className: "relative self-center h-3 w-3",
    style: {
      fill: '#ffffff',
      right: 5
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "English(CA)"))), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return switchCurrencyModal(true);
    },
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "$CAD")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Host a home")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Host an experience")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return switchHelpModal();
    },
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Help")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      switchType('Sign up');
      switchRegisterModal();
    },
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Sign up")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      switchType('Log in');
      switchRegisterModal();
    },
    className: "text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Log in"))))), __jsx("div", {
    className: "md:ml-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("h3", {
    className: "md:hidden px-4 pb-4 pt-16 text-white inline-block font-sans text-3xl font-bold leading-tight w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Book unique places to stay and things to do."), __jsx(_functions_HeaderCard__WEBPACK_IMPORTED_MODULE_1__["HeaderCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), __jsx("div", {
    className: "hidden md:block absolute bottom-0 right-0 mr-8 mb-8 text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-sm text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Over 300 unique places ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), "to stay in Japan")), registerModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, true ? configureScroll('hidden') : undefined, type == 'Log in' ? __jsx(_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_2__["RegisterModal"], {
    setRegisterModal: setRegisterModal,
    type: "Log in",
    nottype: "Sign up",
    phrase: "Don't",
    setType: switchType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }) : __jsx(_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_2__["RegisterModal"], {
    setRegisterModal: setRegisterModal,
    type: "Sign up",
    nottype: "Log in",
    phrase: "Already",
    setType: switchType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, true ? configureScroll('auto') : undefined), helpModal ? __jsx(_modals_HelpModal__WEBPACK_IMPORTED_MODULE_3__["HelpModal"], {
    setHelpModal: switchHelpModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }) : null, currencyModal ? __jsx(_modals_CurrencyModal__WEBPACK_IMPORTED_MODULE_4__["CurrencyModal"], {
    switchCurrencyModal: switchCurrencyModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }) : null);
};

/***/ })

})
//# sourceMappingURL=index.js.c7d02e52374d6513ce14.hot-update.js.map