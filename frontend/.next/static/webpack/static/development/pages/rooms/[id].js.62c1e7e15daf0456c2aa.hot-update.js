webpackHotUpdate("static/development/pages/rooms/[id].js",{

/***/ "./src/pages/rooms/[id].js":
/*!*********************************!*\
  !*** ./src/pages/rooms/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.js");
/* harmony import */ var _components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/presentational/ImagePanel */ "./src/components/presentational/ImagePanel.js");
/* harmony import */ var _components_presentational_HeaderCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/presentational/HeaderCard */ "./src/components/presentational/HeaderCard.js");
/* harmony import */ var _components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/wrapper/DetailSection */ "./src/components/wrapper/DetailSection.js");
/* harmony import */ var _components_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/containers/Reviews */ "./src/components/containers/Reviews.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.js");
/* harmony import */ var _components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/containers/HostedBy */ "./src/components/containers/HostedBy.js");
/* harmony import */ var _components_containers_Neighborhood__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/containers/Neighborhood */ "./src/components/containers/Neighborhood.js");
/* harmony import */ var _components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/containers/KeepInMind */ "./src/components/containers/KeepInMind.js");
/* harmony import */ var _components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/containers/MoreHomes */ "./src/components/containers/MoreHomes.js");
/* harmony import */ var _components_wrapper_Section__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/wrapper/Section */ "./src/components/wrapper/Section.js");
/* harmony import */ var _components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/containers/ToDoNear */ "./src/components/containers/ToDoNear.js");
/* harmony import */ var _components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/containers/MoreLocations */ "./src/components/containers/MoreLocations.js");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../public/img/high/staydetail1.jpg */ "./public/img/high/staydetail1.jpg");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_21__);



 // Components










 // Wrapper

 // Containers


 // Images






const staydata = apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      id
      title
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(staydata, {
    variables: {
      id: router.query.id
    }
  });
  if (loading) return 'loading...';
  if (error) return 'error...';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img1: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
    img2: _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
    img3: _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
    img4: _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
    img5: _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_21___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-5 md:px-10 lg:max-w-4xl xl:max-w-5xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-7/12 "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-between border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-3xl text-gray-750 font-semibold leading-none"
  }, "Douro Villa with swimming pool, Penafiel, Portugal"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 py-3"
  }, "Penafiel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pb-3 flex justify-start items-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 guests")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "4 bedrooms")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 beds")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "3 baths")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col justify-center items-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-center w-full"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "h-16 w-16 rounded-full",
    src: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_17___default.a
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mt-2 text-gray-650 text-center text-sm leading-snug"
  }, "Maria Henriqueta"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-6 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      paddingTop: 5
    },
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3 w-3",
    viewBox: "0 0 512.001 512.001",
    style: {
      fill: '#484848'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886 c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721 c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337 c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697 c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750"
  }, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "bg-blue-500"
  }, "You'll have the house to yourself."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3 w-3",
    viewBox: "0 0 512 512"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M407.335,74.217l-29.654-44.481C365.295,11.159,344.445,0,322.116,0H207.595h-50.087c-9.22,0-16.696,7.475-16.696,16.696 v33.391c0,9.22,7.475,16.696,16.696,16.696H190.9v16.696c0,17.065-6.653,33.12-18.717,45.195l-9.783,9.783 c-6.521,6.521-6.521,17.087,0,23.609c3.261,3.261,7.533,4.892,11.804,4.892s8.544-1.631,11.804-4.892l9.794-9.783 c14.369-14.387,23.663-32.48,27.04-52.108h1.448c18.442,0,33.391,14.949,33.391,33.391v33.391h-5.564 c-27.619,0-50.087,22.468-50.087,50.087v66.783c0,9.206-7.49,16.696-16.696,16.696h-33.391c-27.619,0-50.087,22.468-50.087,50.087 v16.696v94.609c0,27.619,22.468,50.087,50.087,50.087h200.348c27.619,0,50.087-22.468,50.087-50.087v-94.609V217.043 c0-27.619-22.468-50.087-50.087-50.087h-27.826v-33.391c0-18.442,14.949-33.391,33.391-33.391h35.587 c6.163,0,11.804-3.38,14.718-8.826C411.074,85.912,410.759,79.348,407.335,74.217z M268.813,367.304H135.248v-16.696 c0-9.206,7.49-16.696,16.696-16.696h33.391c27.619,0,50.087-22.468,50.087-50.087v-66.783c0-9.206,7.49-16.696,16.696-16.696 h16.696V367.304z M352.291,200.348c9.206,0,16.696,7.49,16.696,16.696v150.261h-66.783V200.348H352.291z"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "h-3 w-3",
    viewBox: "0 0 511.999 511.999",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    "clip-rule": "evenodd",
    "fill-rule": "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "h-3 w-3",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-center flex-wrap rounded-lg py-1 border border-gray-800"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Translate this description to English (Canada)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We invite you to come and visit our beautiful countryside hourse on the shores of the Douro river. You will have a full countryside experience with our restored rustic ouse, our farm animals, a salt water 12 meter pool and a unique view for the unforgettable landscape of the Douro river.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, "Read more about the space"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 18 18",
    className: "h-3 w-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: ""
  }, "Contact host"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Amenities"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "The host hasn't reported smoke or carbon monoxide detectors on the property"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "text-green-600"
  }, "Show all 32 amenities")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Sleeping arrangements"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-between my-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-500"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 480 480",
    className: "h-6 w-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328 c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16 H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672 C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112 c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8 v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16 s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368 v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16 c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64 c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64 c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16 c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z M464,384H16v-96h448V384z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Bedroom 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1 double bed"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-500"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 480 480",
    className: "h-6 w-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328 c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16 H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672 C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112 c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8 v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16 s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368 v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16 c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64 c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64 c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16 c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z M464,384H16v-96h448V384z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Bedroom 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1 double bed"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-500"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 480 480",
    className: "h-6 w-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328 c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16 H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672 C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112 c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8 v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16 s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368 v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16 c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64 c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64 c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16 c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z M464,384H16v-96h448V384z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Bedroom 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1 double bed"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Availability"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Enter your trip dates for accurate pricing and availability"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full h-64 bg-blue-500"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Neighborhood__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_12__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ml-5 w-4/12 bg-blue-500"
  }, "what"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "More homes you may like"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_13__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "Things to do near this home"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_15__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "Explore other options in and around Penafiel",
    phrase: "More place to stay in Penafiel: Apartments<span> . </span>Bed and breakfasts"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_16__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null));
});

/***/ })

})
//# sourceMappingURL=[id].js.62c1e7e15daf0456c2aa.hot-update.js.map