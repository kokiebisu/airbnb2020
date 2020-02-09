webpackHotUpdate("static/development/pages/experiences.js",{

/***/ "./src/components/Hosts.js":
/*!*********************************!*\
  !*** ./src/components/Hosts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopRatedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopRatedCard */ "./src/components/TopRatedCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _components_HostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HostCard */ "./src/components/HostCard.js");
/* harmony import */ var _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/high/experience1.jpg */ "./public/img/high/experience1.jpg");
/* harmony import */ var _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/high/experience2.jpg */ "./public/img/high/experience2.jpg");
/* harmony import */ var _public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/high/experience3.jpg */ "./public/img/high/experience3.jpg");
/* harmony import */ var _public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/high/experience4.jpg */ "./public/img/high/experience4.jpg");
/* harmony import */ var _public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_experience4_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/img/low/experience1-low.jpg */ "./public/img/low/experience1-low.jpg");
/* harmony import */ var _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/img/low/experience2-low.jpg */ "./public/img/low/experience2-low.jpg");
/* harmony import */ var _public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience2_low_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/img/low/experience3-low.jpg */ "./public/img/low/experience3-low.jpg");
/* harmony import */ var _public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience3_low_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/img/low/experience4-low.jpg */ "./public/img/low/experience4-low.jpg");
/* harmony import */ var _public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_experience4_low_jpg__WEBPACK_IMPORTED_MODULE_11__);
 // Components



 // Images
// High Resolution




 // Low Resolution





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const hosts = [{
    img: _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    description: 'Handmade pasta class with grandma',
    location: 'Rome, Italy'
  }, {
    img: _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    description: 'Handmade pasta class with grandma',
    location: 'Rome, Italy'
  }, {
    img: _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    description: 'Handmade pasta class with grandma',
    location: 'Rome, Italy'
  }, {
    img: _public_img_high_experience1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    imglow: _public_img_low_experience1_low_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    description: 'Handmade pasta class with grandma',
    location: 'Rome, Italy'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap w-full"
  }, hosts.map(({
    id,
    img,
    imglow,
    description,
    location
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      img: img,
      imglow: imglow,
      description: description,
      location: location
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show all experiences"
  }));
});

/***/ })

})
//# sourceMappingURL=experiences.js.bfa2b426cbbf3b85981d.hot-update.js.map