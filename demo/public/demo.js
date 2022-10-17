/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/tile.png */ "./src/assets/tile.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    height: 100%;\n    padding: 0;\n    margin: 0;\n}\n\n.left {\n    float: left;\n    width: 328px;\n    height: 100%;\n    padding-left: 20px;\n}\n\n.right {\n    float: right;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: repeat;\n    background-size: 30px 30px;\n    background-color: #ecebeb;\n    width: calc(100% - 348px);\n    height: 100%;\n    min-height: 100%;\n}\n\n.dragitems {\n    height: 100%;\n    overflow: auto;\n}\n\n#header {\n    font-size: 20px;\n    font-family: Roboto, monospace;\n    font-weight: bold;\n    color: #393C44;\n}\n\n#footer {\n    position: absolute;\n    left: 0;\n    padding-left: 20px;\n    line-height: 40px;\n    bottom: 0;\n    width: 348px;\n    border: 1px solid #E8E8EF;\n    height: 67px;\n    box-sizing: border-box;\n    background-color: #FFF;\n    font-family: Roboto, monospace;\n    font-size: 14px;\n}\n\n#footer a {\n    text-decoration: none;\n    color: #393C44;\n    transition: all .2s cubic-bezier(.05,.03,.35,1);\n}\n#footer a:hover {\n    opacity: .5;\n}\n#footer span {\n    color: #808292;\n}\n#footer p {\n    display: inline-block;\n    color: #808292;\n}\n#footer img {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.blockelem:first-child {\n    margin-top: 20px\n}\n.blockelem {\n    padding-top: 10px;\n    width: 318px;\n    border: 1px solid transparent;\n    transition-property: box-shadow, height;\n    transition-duration: .2s;\n    transition-timing-function: cubic-bezier(.05,.03,.35,1);\n    border-radius: 5px;\n    box-shadow: 0 0 30px rgba(22, 33, 74, 0);\n    box-sizing: border-box;\n}\n\n.blockelem:hover {\n    box-shadow: 0 4px 30px rgba(22, 33, 74, 0.08);\n    border-radius: 5px;\n    background-color: #FFF;\n    cursor: pointer;\n}\n\n.grabme, .blockico {\n    display: inline-block;\n}\n.grabme {\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-bottom: -14px;\n    width: 15px;\n}\n\n.blockin {\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 12px;\n}\n.blockico {\n    width: 36px;\n    height: 36px;\n    background-color: #F1F4FC;\n    border-radius: 5px;\n    text-align: center;\n    white-space: nowrap;\n}\n.blockico span {\n    height: 100%;\n    width: 0;\n    display: inline-block;\n    vertical-align: middle;\n}\n.blockico img {\n    vertical-align: middle;\n    margin-left: auto;\n    margin-right: auto;\n    display: inline-block;\n}\n.blocktext {\n    display: inline-block;\n    width: 220px;\n    vertical-align: top;\n    margin-left: 12px\n}\n.blocktitle {\n    margin: 0 !important;\n    padding: 0 !important;\n    font-family: Roboto, monospace;\n    font-weight: 500;\n    font-size: 16px;\n    color: #393C44;\n}\n.blockdesc {\n    margin-top: 5px;\n    font-family: Roboto, monospace;\n    color: #808292;\n    font-size: 14px;\n    line-height: 21px;\n}\n\n/* Toolbox */\n#toolbox{\n    position: absolute;\n    bottom: 0;\n    left: 348px;\n    margin-bottom: 0.5em;\n    margin-left: 1em;\n    border: 2px solid #a8a1a1;\n    border-radius: 5px;\n    padding: 6px;\n    background-color: #d5d5d5;\n}\n\n#toolbox input{\n    width: 30px;\n    opacity: 0.4;\n}\n#toolbox input:hover{\n    opacity: 1;\n    cursor: pointer;\n}\n\n#hidden-file-upload{\n    display: none;\n}\n\n#download-input{\n    margin: 0 0.5em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,UAAU;IACV,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,yDAAsC;IACtC,yBAAyB;IACzB,0BAA0B;IAC1B,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;IACT,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,+CAA+C;AACnD;AACA;IACI,WAAW;AACf;AACA;IACI,cAAc;AAClB;AACA;IACI,qBAAqB;IACrB,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI;AACJ;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,6BAA6B;IAC7B,uCAAuC;IACvC,wBAAwB;IACxB,uDAAuD;IACvD,kBAAkB;IAClB,wCAAwC;IACxC,sBAAsB;AAC1B;;AAEA;IACI,6CAA6C;IAC7C,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,QAAQ;IACR,qBAAqB;IACrB,sBAAsB;AAC1B;AACA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;AACzB;AACA;IACI,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;IACnB;AACJ;AACA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;IACf,cAAc;AAClB;AACA;IACI,eAAe;IACf,8BAA8B;IAC9B,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;;AAEA,YAAY;AACZ;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,oBAAoB;IACpB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["html, body {\n    height: 100%;\n    padding: 0;\n    margin: 0;\n}\n\n.left {\n    float: left;\n    width: 328px;\n    height: 100%;\n    padding-left: 20px;\n}\n\n.right {\n    float: right;\n    background-image: url(assets/tile.png);\n    background-repeat: repeat;\n    background-size: 30px 30px;\n    background-color: #ecebeb;\n    width: calc(100% - 348px);\n    height: 100%;\n    min-height: 100%;\n}\n\n.dragitems {\n    height: 100%;\n    overflow: auto;\n}\n\n#header {\n    font-size: 20px;\n    font-family: Roboto, monospace;\n    font-weight: bold;\n    color: #393C44;\n}\n\n#footer {\n    position: absolute;\n    left: 0;\n    padding-left: 20px;\n    line-height: 40px;\n    bottom: 0;\n    width: 348px;\n    border: 1px solid #E8E8EF;\n    height: 67px;\n    box-sizing: border-box;\n    background-color: #FFF;\n    font-family: Roboto, monospace;\n    font-size: 14px;\n}\n\n#footer a {\n    text-decoration: none;\n    color: #393C44;\n    transition: all .2s cubic-bezier(.05,.03,.35,1);\n}\n#footer a:hover {\n    opacity: .5;\n}\n#footer span {\n    color: #808292;\n}\n#footer p {\n    display: inline-block;\n    color: #808292;\n}\n#footer img {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.blockelem:first-child {\n    margin-top: 20px\n}\n.blockelem {\n    padding-top: 10px;\n    width: 318px;\n    border: 1px solid transparent;\n    transition-property: box-shadow, height;\n    transition-duration: .2s;\n    transition-timing-function: cubic-bezier(.05,.03,.35,1);\n    border-radius: 5px;\n    box-shadow: 0 0 30px rgba(22, 33, 74, 0);\n    box-sizing: border-box;\n}\n\n.blockelem:hover {\n    box-shadow: 0 4px 30px rgba(22, 33, 74, 0.08);\n    border-radius: 5px;\n    background-color: #FFF;\n    cursor: pointer;\n}\n\n.grabme, .blockico {\n    display: inline-block;\n}\n.grabme {\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-bottom: -14px;\n    width: 15px;\n}\n\n.blockin {\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 12px;\n}\n.blockico {\n    width: 36px;\n    height: 36px;\n    background-color: #F1F4FC;\n    border-radius: 5px;\n    text-align: center;\n    white-space: nowrap;\n}\n.blockico span {\n    height: 100%;\n    width: 0;\n    display: inline-block;\n    vertical-align: middle;\n}\n.blockico img {\n    vertical-align: middle;\n    margin-left: auto;\n    margin-right: auto;\n    display: inline-block;\n}\n.blocktext {\n    display: inline-block;\n    width: 220px;\n    vertical-align: top;\n    margin-left: 12px\n}\n.blocktitle {\n    margin: 0 !important;\n    padding: 0 !important;\n    font-family: Roboto, monospace;\n    font-weight: 500;\n    font-size: 16px;\n    color: #393C44;\n}\n.blockdesc {\n    margin-top: 5px;\n    font-family: Roboto, monospace;\n    color: #808292;\n    font-size: 14px;\n    line-height: 21px;\n}\n\n/* Toolbox */\n#toolbox{\n    position: absolute;\n    bottom: 0;\n    left: 348px;\n    margin-bottom: 0.5em;\n    margin-left: 1em;\n    border: 2px solid #a8a1a1;\n    border-radius: 5px;\n    padding: 6px;\n    background-color: #d5d5d5;\n}\n\n#toolbox input{\n    width: 30px;\n    opacity: 0.4;\n}\n#toolbox input:hover{\n    opacity: 1;\n    cursor: pointer;\n}\n\n#hidden-file-upload{\n    display: none;\n}\n\n#download-input{\n    margin: 0 0.5em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "../dist/dag.debug.js":
/*!****************************!*\
  !*** ../dist/dag.debug.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomInputVertexConnector": () => (/* binding */ __webpack_exports__CustomInputVertexConnector),
/* harmony export */   "Graph": () => (/* binding */ __webpack_exports__Graph),
/* harmony export */   "GraphSerializable": () => (/* binding */ __webpack_exports__GraphSerializable),
/* harmony export */   "MouseCoordinate": () => (/* binding */ __webpack_exports__MouseCoordinate),
/* harmony export */   "OutputVertexConnector": () => (/* binding */ __webpack_exports__OutputVertexConnector),
/* harmony export */   "ShapeSize": () => (/* binding */ __webpack_exports__ShapeSize),
/* harmony export */   "Vertex": () => (/* binding */ __webpack_exports__Vertex)
/* harmony export */ });
/* unused harmony exports EdgeSerializable, InputVertexConnector, VertexConnectorSerializable, VertexSerializable */
/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dag.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dag.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __nested_webpack_require_331__) => {

/* harmony export */ __nested_webpack_require_331__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_331__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_331__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_331__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_331__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* SPDX-License-Identifier: GPL-3.0-only */\n\n/* Vertex */\n.vertex {\n    fill: white;\n}\n\n.vertex > .title {\n    fill: white;\n    font-weight: bold;\n}\n\n.vertex > .title-box {\n    fill: blue;\n}\n\n.vertex:hover {\n    cursor: move;\n}\n\n.vertex > .label {\n    fill: black;\n    font-weight: bold;\n}\n\n.vertex.selected > rect.outerbox {\n    fill: aliceblue;\n}\n\n/* Edge connectors*/\n.edge_connector.name {\n    fill: blue;\n}\n\n.edge_connector.separator {\n    fill: black;\n}\n\n.edge_connector.type {\n    fill: green;\n}\n\n.edge_connector.input {\n    --width: 14;\n    fill: #61CAC6FF;\n    stroke: black;\n}\n\n.edge_connector.output {\n    fill: #66a6d0;\n    stroke: black;\n}\n\n.edge_connector.connector:hover {\n    filter: invert(0.5);\n    cursor: pointer;\n}\n\n.edge_connector.selected {\n    fill: rgb(163, 158, 158);\n}\n\n/* Edges */\n.link {\n    stroke: #333;\n    stroke-width: 3px;\n    cursor: pointer;\n}\n\n.edge.selected > .link {\n    stroke: #66a6d0\n}\n\n.link.bad{\n    stroke: red;\n    cursor: no-drop;\n}\n\n.link.good{\n    stroke: green;\n    cursor: auto;\n}\n", "",{"version":3,"sources":["webpack://./src/dag.css"],"names":[],"mappings":"AAAA,0CAA0C;;AAE1C,WAAW;AACX;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,UAAU;AACV;IACI,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB","sourcesContent":["/* SPDX-License-Identifier: GPL-3.0-only */\n\n/* Vertex */\n.vertex {\n    fill: white;\n}\n\n.vertex > .title {\n    fill: white;\n    font-weight: bold;\n}\n\n.vertex > .title-box {\n    fill: blue;\n}\n\n.vertex:hover {\n    cursor: move;\n}\n\n.vertex > .label {\n    fill: black;\n    font-weight: bold;\n}\n\n.vertex.selected > rect.outerbox {\n    fill: aliceblue;\n}\n\n/* Edge connectors*/\n.edge_connector.name {\n    fill: blue;\n}\n\n.edge_connector.separator {\n    fill: black;\n}\n\n.edge_connector.type {\n    fill: green;\n}\n\n.edge_connector.input {\n    --width: 14;\n    fill: #61CAC6FF;\n    stroke: black;\n}\n\n.edge_connector.output {\n    fill: #66a6d0;\n    stroke: black;\n}\n\n.edge_connector.connector:hover {\n    filter: invert(0.5);\n    cursor: pointer;\n}\n\n.edge_connector.selected {\n    fill: rgb(163, 158, 158);\n}\n\n/* Edges */\n.link {\n    stroke: #333;\n    stroke-width: 3px;\n    cursor: pointer;\n}\n\n.edge.selected > .link {\n    stroke: #66a6d0\n}\n\n.link.bad{\n    stroke: red;\n    cursor: no-drop;\n}\n\n.link.good{\n    stroke: green;\n    cursor: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/dag.css":
/*!*********************!*\
  !*** ./src/dag.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __nested_webpack_require_8420__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_8420__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_8420__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_8420__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_8420__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_8420__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_8420__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_8420__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_8420__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_8420__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_8420__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_8420__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_8420__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dag_css__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_8420__(/*! !!../node_modules/css-loader/dist/cjs.js!./dag.css */ "./node_modules/css-loader/dist/cjs.js!./src/dag.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dag_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dag_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dag_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dag_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_18416__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =   true ? __nested_webpack_require_18416__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/datastructures/edge-container.js":
/*!**********************************************!*\
  !*** ./src/datastructures/edge-container.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_21371__) => {

/* harmony export */ __nested_webpack_require_21371__.d(__webpack_exports__, {
/* harmony export */   "EdgeContainer": () => (/* binding */ EdgeContainer)
/* harmony export */ });
/* harmony import */ var _events_base_action_listener__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21371__(/*! ../events/base-action-listener */ "./src/events/base-action-listener.js");
/* harmony import */ var _events_event__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_21371__(/*! ../events/event */ "./src/events/event.js");
/* harmony import */ var _vertices_connector__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_21371__(/*! ../vertices/connector */ "./src/vertices/connector.js");
/* harmony import */ var _kahn_topological_sort__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_21371__(/*! ./kahn-topological-sort */ "./src/datastructures/kahn-topological-sort.js");
/* SPDX-License-Identifier: GPL-3.0-only */







class EdgeContainer extends _events_base_action_listener__WEBPACK_IMPORTED_MODULE_0__.BaseActionListener {
    constructor() {
        super();
        this.edges = [];
    }

    /**
     * Append edge to the list of edges that a graph holds if that doesn't exist yet
     * @param {Edge} edge - Edge instance containing references to both vertices
     * @returns true if item is appended or false if item is already in the list
     */
    append(edge) {
        // check for duplicates        
        let uuia_a = edge.vertexHolderA.connector._uuid;
        let uuia_b = edge.vertexHolderB.connector._uuid;
        let exists = this.edges.some((i) =>
            i.vertexHolderA.connector._uuid == uuia_a &&
            i.vertexHolderB.connector._uuid == uuia_b);

        if (!exists) {
            this.edges.push(edge);
            this.triggerEvent(_events_event__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE.EDGE_ADDED_ACTION, [edge]);
        }

        return !exists;
    }

    /**
     * Check if input connector is already being used
     * @param {EdgeConnector} connector - input connector 
     * @returns true if connector is being used, false otherwise
     */
    isInputConnectorUsed(connector) {
        if (![_vertices_connector__WEBPACK_IMPORTED_MODULE_2__.ConnectorType.INPUT, _vertices_connector__WEBPACK_IMPORTED_MODULE_2__.ConnectorType.CUSTOM_INPUT].includes(connector.connectorType))
            throw `connector provided isn't of type Input`;

        // input connectors always the only ones to receive edge connection, 
        // hence they are always the vertexHolder B       
        return (this.edges.some((i) => i.vertexHolderB.connector._uuid === connector._uuid))
    }

    /**
     * Check if adding the specified edge would cause a graph cycle
     * @param {Edge} edgeCandidate - edge that we want to add
     * @returns true if cycle would be created, false otherwise
     */
    predictCycle(edgeCandidate) {
        let futureEdges = [...this.edges, edgeCandidate];

        const connDegree = new Map();

        // get a map of vertex dependencies
        futureEdges.forEach((ed) => {
            let vertexA = ed.vertexHolderA.vertex;
            let vertexB = ed.vertexHolderB.vertex;

            if (!connDegree.has(vertexA._uuid)) {
                connDegree.set(vertexA._uuid, new _kahn_topological_sort__WEBPACK_IMPORTED_MODULE_3__.ConnectionDegree([], []));
            }

            if (!connDegree.has(vertexB._uuid)) {
                connDegree.set(vertexB._uuid, new _kahn_topological_sort__WEBPACK_IMPORTED_MODULE_3__.ConnectionDegree([], []));
            }

            let connVetA = connDegree.get(vertexA._uuid);
            connVetA.outputEdges.push(vertexB._uuid);

            let connVetB = connDegree.get(vertexB._uuid);
            connVetB.inputEdges.push(vertexA._uuid);

            connDegree.set(vertexA._uuid, connVetA);
            connDegree.set(vertexB._uuid, connVetB);
        });

        try {
            let sorted = _kahn_topological_sort__WEBPACK_IMPORTED_MODULE_3__.KahnTopologicalSort.sort(new Map(connDegree));
            console.debug('topological sort would be', sorted);
            return false;
        } catch (error) {
            return true;
        }
    }

    iterate(callback) {
        this.edges.forEach((value) => callback(value));
    }

    /**
     * Remove existing edges between vertices in which on of them is
     * the vertex specified
     * @param {Vertex} vertex 
     */
    removeEdgesByVertex(vertex) {
        const selectionCriteria = (edge) => {
            const vA = edge.vertexHolderA.vertex;
            const vB = edge.vertexHolderB.vertex;
            return [vA._uuid, vB._uuid].includes(vertex._uuid);
        };

        this.remove(selectionCriteria);
    }

    remove(criteria) {
        let holder = [];
        
        // remove from svg
        this.edges
            .filter((i) => criteria(i))
            .forEach((i) => {
                i.remove();
                holder.push(i);                
            });

        // remove from list
        this.edges = this.edges.filter((i) => !criteria(i));

        // bubble up events (this has to be the last step to avoid a variety of issues)
        holder.forEach((i) => this.triggerEvent(_events_event__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE.EDGE_REMOVED_ACTION, [i]));
    }

    removeSelected() {
        const criteria = (i) => i.isSelected();
        this.remove(criteria);
    }

    removeAll() {
        this.remove(() => true);
    }
}

/***/ }),

/***/ "./src/datastructures/kahn-topological-sort.js":
/*!*****************************************************!*\
  !*** ./src/datastructures/kahn-topological-sort.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_27121__) => {

/* harmony export */ __nested_webpack_require_27121__.d(__webpack_exports__, {
/* harmony export */   "ConnectionDegree": () => (/* binding */ ConnectionDegree),
/* harmony export */   "KahnTopologicalSort": () => (/* binding */ KahnTopologicalSort)
/* harmony export */ });
/* SPDX-License-Identifier: GPL-3.0-only */


class ConnectionDegree {

    constructor(inputEdges, outputEdges){
        this.inputEdges = inputEdges;
        this.outputEdges = outputEdges;
    }

}

/**
 * One of the most well-known topological sorting algorithms, invented in 1962
 * Implementation inspired by: https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm
 */
class KahnTopologicalSort {
    
    /**
     * Perform a topological sort of vertices using Kahn's algorithm
     * @param {ConnectionDegree} connDegMap - connection degree map of all vertices and edges
     */
    static sort(connDegMap){
        let stack = [];
        let sorted = [];

        for (const [key, value] of connDegMap) {
            if(value.inputEdges.length === 0){
                stack.push({key: key, value: value});
                connDegMap.delete(key);
            }                    
        }
        
        while(stack.length !== 0){
            let item = stack.pop();
            sorted.push(item.key);          

            item.value.outputEdges.forEach((outVetId)=> {
                let connDeg = connDegMap.get(outVetId);

                if(connDeg && connDeg.inputEdges.length > 0){
                    let idx = connDeg.inputEdges.indexOf(item.key);
                    connDeg.inputEdges.splice(idx, 1);                                       

                    if(connDeg.inputEdges.length == 0){
                        stack.push({key: outVetId, value: connDeg});
                        connDegMap.delete(outVetId);
                    } else {
                        connDegMap.set(outVetId, connDeg);
                    }                        
                }
            });
        }

        if(connDegMap.size > 0){
            throw "at least a cycle was found, hence topological sort isn't possible"
        }        
        return sorted;        
    }
}

/***/ }),

/***/ "./src/datastructures/vertex-container.js":
/*!************************************************!*\
  !*** ./src/datastructures/vertex-container.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_29598__) => {

/* harmony export */ __nested_webpack_require_29598__.d(__webpack_exports__, {
/* harmony export */   "VertexConnectorHolder": () => (/* binding */ VertexConnectorHolder),
/* harmony export */   "VertexContainer": () => (/* binding */ VertexContainer)
/* harmony export */ });
/* harmony import */ var _events_base_action_listener__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_29598__(/*! ../events/base-action-listener */ "./src/events/base-action-listener.js");
/* harmony import */ var _events_event__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_29598__(/*! ../events/event */ "./src/events/event.js");
/* SPDX-License-Identifier: GPL-3.0-only */





class VertexContainer extends _events_base_action_listener__WEBPACK_IMPORTED_MODULE_0__.BaseActionListener {

    constructor() {
        super();
        this.vertices = [];
    }

    append(vertex) {
        // Add default listeners                
        const eventsOfInterest = [
            _events_event__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE.CUSTOM_INPUT_EDGE_CONN_CLICK_ACTION,
            _events_event__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION,
            _events_event__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION,
            _events_event__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION,
            _events_event__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE.VERT_DRAGGING_ACTION
        ];             
        this.listeners
            .filter((e) => eventsOfInterest.includes(e.type))
            .forEach((e) => vertex.addActionListener(e.type, e.callback, e.params));

        this.vertices.push(vertex);        
        this.triggerEvent(_events_event__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE.VERT_ADDED_ACTION, [vertex]);
    }

    findVertexConnectorByUUID(uuid) {
        let helper = (arr, uuid) => arr.find((item) => item._uuid === uuid);

        for (let i = 0; i < this.vertices.length; i++) {
            const tmpVertex = this.vertices[i];

            let tmpConnector = null;
            if (!(tmpConnector = helper(tmpVertex.inputs, uuid)))
                tmpConnector = helper(tmpVertex.outputs, uuid);

            if (tmpConnector)
                return new VertexConnectorHolder(tmpVertex, tmpConnector);

        }
        return null;
    }

    iterate(callback) {
        this.vertices.forEach((value) => callback(value));
    }

    findAllSelected() {
        return this.vertices.filter((i) => i.isSelected());
    }

    remove(criteria) {
        let holder = [];
        
        // remove from svg
        this.vertices
            .filter((i) => criteria(i))
            .forEach((i) => {
                i.remove();
                holder.push(i);                
            });

        // remove from list
        this.vertices = this.vertices.filter((i) => !criteria(i));

        // bubble up events (this has to be the last step to avoid a variety of issues)
        holder.forEach((i) => this.triggerEvent(_events_event__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE.VERT_REMOVED_ACTION, [i]));
    }

    removeSelected() {
        const criteria = (i) => i.isSelected();
        this.remove(criteria);
    }

    removeAll() {
        this.remove(() => true);
    }

}

class VertexConnectorHolder {

    constructor(vertex, connector) {
        this.vertex = vertex;
        this.connector = connector;
    }
}

/***/ }),

/***/ "./src/edges/edge.js":
/*!***************************!*\
  !*** ./src/edges/edge.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_33192__) => {

/* harmony export */ __nested_webpack_require_33192__.d(__webpack_exports__, {
/* harmony export */   "Edge": () => (/* binding */ Edge)
/* harmony export */ });
/* harmony import */ var _events_event__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_33192__(/*! ../events/event */ "./src/events/event.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_33192__(/*! ./line */ "./src/edges/line.js");
/* harmony import */ var _serialization_serialize__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_33192__(/*! ../serialization/serialize */ "./src/serialization/serialize.js");
/* SPDX-License-Identifier: GPL-3.0-only */






class Edge {
    
    static SELECTED_CLASS = 'selected';

    constructor(vertexHolderA, vertexHolderB) {
        this.vertexHolderA = vertexHolderA;
        this.vertexHolderB = vertexHolderB;

        this.drawingContext = null;
    }

    draw(graph) {
        // group drawing context
        this.drawingContext = graph.svgMainG.append("g").classed('edge', true);

        const vertexA = this.vertexHolderA.vertex;
        const vertexB = this.vertexHolderB.vertex;

        const connectorA = this.vertexHolderA.connector;
        const connectorB = this.vertexHolderB.connector;

        const translateA = (0,_events_event__WEBPACK_IMPORTED_MODULE_0__.translationMat)(vertexA.drawingContext.node());
        const translateB = (0,_events_event__WEBPACK_IMPORTED_MODULE_0__.translationMat)(vertexB.drawingContext.node());

        connectorA.setSelected(true);
        connectorB.setSelected(true);

        let bboxVertA = connectorA.edgeConnectorEl.node().getBBox();
        let bboxVertB = connectorB.edgeConnectorEl.node().getBBox();

        let line = new _line__WEBPACK_IMPORTED_MODULE_1__.EdgeLine(this.drawingContext, _events_event__WEBPACK_IMPORTED_MODULE_0__.EMPTY_TRANSLATION_MAT);

        line.draw(
            // pointer1
            {
                x: bboxVertA.x + translateA.e + (bboxVertA.width / 2),
                y: bboxVertA.y + translateA.f + (bboxVertA.height / 2),
            },
            // pointer2
            {
                x: bboxVertB.x + translateB.e + (bboxVertB.width / 2),
                y: bboxVertB.y + translateB.f + (bboxVertB.height / 2),
            },
        );

        // add support for selecting invididual edges
        this.setupClickEvents(graph);
    }

    setupClickEvents(graph) {
        this.drawingContext.on('click', (event) => {            
            event.stopPropagation();            
            
            /* ignore event if graph is in readOnly mode */
            if(graph.readOnly) return;
            
            this.setSelected(!this.isSelected());
        });
    }

    setSelected(value){
        this.drawingContext.classed(Edge.SELECTED_CLASS, value);
    }

    isSelected() {
        return this.drawingContext.classed(Edge.SELECTED_CLASS);
    }

    remove() {
        if (this.drawingContext) {
            // deselect (sigh) edge connectors of vertices involved
            const connectorA = this.vertexHolderA.connector;
            const connectorB = this.vertexHolderB.connector;

            connectorA.setSelected(false);
            connectorB.setSelected(false);
            
            this.drawingContext.remove();
        }
    }

    serialize() {
        return new _serialization_serialize__WEBPACK_IMPORTED_MODULE_2__.EdgeSerializable(
            this.vertexHolderA.connector._uuid,
            this.vertexHolderB.connector._uuid
        );
    }
}

/***/ }),

/***/ "./src/edges/line.js":
/*!***************************!*\
  !*** ./src/edges/line.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_36915__) => {

/* harmony export */ __nested_webpack_require_36915__.d(__webpack_exports__, {
/* harmony export */   "EdgeLine": () => (/* binding */ EdgeLine),
/* harmony export */   "EdgeLineState": () => (/* binding */ EdgeLineState)
/* harmony export */ });
/* SPDX-License-Identifier: GPL-3.0-only */


const EdgeLineState = {
    DEFAULT:    1,
    ALLOW:      2,
    FORBID:     3,
};

class EdgeLine {
    constructor(drawingContext, translationMatrix){
        this.drawingContext = drawingContext;    
        this.translationMatrix = translationMatrix;    
        this.lineEl = null;
        this.setup();
    }

    setup(){
        this.lineEl = this.drawingContext
            .append('svg:path')
            .attr('class', 'link')
            .style('marker-end', 'url(#mark-end-arrow)');
    }

    draw(pointer1, pointer2){
        this.lineEl.attr('d', `M ${pointer1.x},${pointer1.y} L ${pointer2.x},${pointer2.y}`);
        this.lineEl.attr('transform', `translate(${this.translationMatrix.e},${this.translationMatrix.f})`);
    }

    changeStatus(status){
        switch(status){
            case EdgeLineState.ALLOW:
                this.lineEl.classed("bad", false);
                this.lineEl.classed("good", true);
                break;
            case EdgeLineState.FORBID:
                this.lineEl.classed("bad", true);
                this.lineEl.classed("good", false);
                break;
            default:
                this.lineEl.classed("bad", false);
                this.lineEl.classed("good", false);
        }
    }

    cleanUp(){
        this.lineEl.remove();
    }


}

/***/ }),

/***/ "./src/events/base-action-listener.js":
/*!********************************************!*\
  !*** ./src/events/base-action-listener.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_38800__) => {

/* harmony export */ __nested_webpack_require_38800__.d(__webpack_exports__, {
/* harmony export */   "BaseActionListener": () => (/* binding */ BaseActionListener)
/* harmony export */ });
/* unused harmony export GenericActionHolder */
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_38800__(/*! ./event */ "./src/events/event.js");
/* SPDX-License-Identifier: GPL-3.0-only */




class GenericActionHolder {

    constructor(type, callback, params) {
        this.type = type;
        this.callback = callback;
        this.params = params || [];
    }

    /**
     * utility function to invoke the callback
     * @param additionalParams - additional parameters to be passed to the callback
     */
    invoke(additionalParams) {
        const jointParams = [this.type, ...this.params, ...additionalParams];
        this.callback.apply(this, jointParams);
    }

}

class BaseActionListener {

    constructor() {
        this.listeners = [];
    }

    /**
     * Add a callback listener for a specific action
     * @param type - type of action the listener must be added to
     * @param callback - callback function
     * @param params - initial parameters. Useful for passing the context(this) around.
     */
    addActionListener(type, callback, params) {
        // sanity checks
        if (!Object.values(_event__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPE).includes(type))
            throw `Action Listener '${type}' isn't supported for '${this.constructor.name}'`;
        else if (!(0,_event__WEBPACK_IMPORTED_MODULE_0__.isFunction)(callback))
            throw `callback must contain a function reference`;

        this.listeners.push(new GenericActionHolder(type, callback, params));        
    }

    /**
     * Remove all listeners this object subscribed to
     */
    removeAllListeners(){
        this.listeners = [];
    }

    /**
     * Trigger listeners for a given event type
     * @param type - Type of listener to be triggered
     * @param additionalParams - array of parameters to bubble up the listening chain
     */
    triggerEvent(type, additionalParams) {
        this.listeners
            .filter((i) => i.type === type)
            .forEach((value) => value.invoke(additionalParams));
    }
}


/***/ }),

/***/ "./src/events/edge-draw-listener.js":
/*!******************************************!*\
  !*** ./src/events/edge-draw-listener.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_41332__) => {

/* harmony export */ __nested_webpack_require_41332__.d(__webpack_exports__, {
/* harmony export */   "EdgeDrawEvent": () => (/* binding */ EdgeDrawEvent)
/* harmony export */ });
/* harmony import */ var _datastructures_vertex_container__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_41332__(/*! ../datastructures/vertex-container */ "./src/datastructures/vertex-container.js");
/* harmony import */ var _edges_line__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_41332__(/*! ../edges/line */ "./src/edges/line.js");
/* harmony import */ var _edges_edge__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_41332__(/*! ../edges/edge */ "./src/edges/edge.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_41332__(/*! ./event */ "./src/events/event.js");
/* SPDX-License-Identifier: GPL-3.0-only */







class EdgeDrawEvent {

    constructor(graph) {
        this.graph = graph;
        this.drawingContext = graph.svgMainG;

        this.vertexHolderA = null;
        this.vertexHolderB = null;

        this.line = null;
        this.dragStart2DCoord = null;
    }

    dragStartEventHandler(pointer, vertex, edgeConnector) {
        this.vertexHolderA = new _datastructures_vertex_container__WEBPACK_IMPORTED_MODULE_0__.VertexConnectorHolder(vertex, edgeConnector);
        edgeConnector.setSelected(true);

        this.line = new _edges_line__WEBPACK_IMPORTED_MODULE_1__.EdgeLine(this.drawingContext, (0,_event__WEBPACK_IMPORTED_MODULE_2__.translationMat)(vertex.drawingContext.node()));                        
        this.dragStart2DCoord = pointer;        
    }

    draggingEventHandler(pointer, vertex, edgeConnector, updateLineOnly) {
        this.line.draw(this.dragStart2DCoord, pointer);
        /*
            due to SVG rendering order, sometimes the mouse point will think it's above the arrow
            rather than over the edge connector spot. We still have to update the line coordinates
            otherwise the UI looks sluggish
         */
        if (updateLineOnly)
            return;

        // adapt UI to guide user to the right edge connector drop spot
        if (!vertex && !edgeConnector) {
            // change arrow back to normal if pointer isn't hovering an actual drop spot
            this.line.changeStatus(_edges_line__WEBPACK_IMPORTED_MODULE_1__.EdgeLineState.DEFAULT);
            this.vertexHolderB = null;
        } else if (this.validateDroppableTarget(this.vertexHolderA, new _datastructures_vertex_container__WEBPACK_IMPORTED_MODULE_0__.VertexConnectorHolder(vertex, edgeConnector))) {
            this.line.changeStatus(_edges_line__WEBPACK_IMPORTED_MODULE_1__.EdgeLineState.FORBID);
            this.vertexHolderB = null;
        } else {
            this.line.changeStatus(_edges_line__WEBPACK_IMPORTED_MODULE_1__.EdgeLineState.ALLOW);
            this.vertexHolderB = new _datastructures_vertex_container__WEBPACK_IMPORTED_MODULE_0__.VertexConnectorHolder(vertex, edgeConnector);
        }
    }

    dragEndEventHandler() {
        /*
            User dropped it outside of the draggable are which is equivalent to cancel the operation OR
            User has infringed any of the DAG rules
         */
        if (!this.vertexHolderB || this.validateDroppableTarget(this.vertexHolderA, this.vertexHolderB)) {
            console.debug("dragEndEventHandler: cancelling edge connection");
            
            if (this.vertexHolderA?.connector)
                this.vertexHolderA.connector.setSelected(false);
            if (this.vertexHolderB?.connector)
                this.vertexHolderB.connector.setSelected(false);
            
            this.cleanUp();
            return;
        }
        console.debug("dragEndEventHandler: accepting edge connection");

        // let graph handle edge insertion into its internal data structure (including drawing)
        this.graph.edgeConnectorIsAdded(this.vertexHolderA, this.vertexHolderB);

        this.cleanUp();
    }

    /**
     * Validate possible connection against the DAG cardinal sins =)
     * @param holderA - Vertex Holder
     * @param holderB - Vertex Holder
     * @returns {boolean} true if that connection infringes any rule, false otherwise.
     */
    validateDroppableTarget(holderA, holderB) {
        let infringeRule = false;

        // input edge connectors can only bind to output ones (and vice versa)
        if (holderA.connector.connectorType === holderB.connector.connectorType)
            infringeRule = true;
        // you can't connect input <-> output if they are in the same vertex (for obvious reasons)
        else if (holderA.vertex._uuid === holderB.vertex._uuid)
            infringeRule = true;
        // output connector type must be exactly the same as input connector type
        else if (holderA.connector.type !== holderB.connector.type)
            infringeRule = true;
        // if the input connector is already being used, you can't re-use it
        else if(this.graph.edges.isInputConnectorUsed(holderB.connector))
            infringeRule = true;
        // ensure that no cycles exist, then again, this is a DAG
        else if(this.graph.edges.predictCycle(new _edges_edge__WEBPACK_IMPORTED_MODULE_3__.Edge(holderA, holderB)))
            infringeRule = true;

        return infringeRule;
    }

    cleanUp() {        
        console.debug('cleanUp');
        this.vertexHolderA = null;
        this.vertexHolderB = null;
        this.line.cleanUp();
    }
}

/***/ }),

/***/ "./src/events/event.js":
/*!*****************************!*\
  !*** ./src/events/event.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_47004__) => {

/* harmony export */ __nested_webpack_require_47004__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPE": () => (/* binding */ ACTION_TYPE),
/* harmony export */   "EMPTY_TRANSLATION_MAT": () => (/* binding */ EMPTY_TRANSLATION_MAT),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "translationMat": () => (/* binding */ translationMat)
/* harmony export */ });
/* SPDX-License-Identifier: GPL-3.0-only */


const ACTION_TYPE = {
    /* Edge connector drag events */
    EDGE_CONN_DRAG_START_ACTION: 1,
    EDGE_CONN_DRAG_END_ACTION: 2,
    EDGE_CONN_DRAGGING_ACTION: 3,

    /* Vertex drag events */
    VERT_DRAGGING_ACTION: 4,

    /* Public-facing vertex events */
    VERT_ADDED_ACTION: 5,
    VERT_REMOVED_ACTION: 6,

    /* Public-facing edge events */
    EDGE_ADDED_ACTION: 7,
    EDGE_REMOVED_ACTION: 8,

    /* Public-facing edge connector events */
    CUSTOM_INPUT_EDGE_CONN_CLICK_ACTION: 9,
};

function isFunction(value) {
    return typeof value === typeof Function;
}

function translationMat(nodeEl) {
    return nodeEl.transform.baseVal.getItem(0).matrix;
}

const EMPTY_TRANSLATION_MAT = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0,
};

/***/ }),

/***/ "./src/graphs/graph.js":
/*!*****************************!*\
  !*** ./src/graphs/graph.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48449__) => {

/* harmony export */ __nested_webpack_require_48449__.d(__webpack_exports__, {
/* harmony export */   "Graph": () => (/* binding */ Graph)
/* harmony export */ });
/* harmony import */ var _events_event__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_48449__(/*! ../events/event */ "./src/events/event.js");
/* harmony import */ var _events_edge_draw_listener__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_48449__(/*! ../events/edge-draw-listener */ "./src/events/edge-draw-listener.js");
/* harmony import */ var _datastructures_vertex_container__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_48449__(/*! ../datastructures/vertex-container */ "./src/datastructures/vertex-container.js");
/* harmony import */ var _vertices_connector__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_48449__(/*! ../vertices/connector */ "./src/vertices/connector.js");
/* harmony import */ var _edges_edge_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_48449__(/*! ../edges/edge.js */ "./src/edges/edge.js");
/* harmony import */ var _datastructures_edge_container__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_48449__(/*! ../datastructures/edge-container */ "./src/datastructures/edge-container.js");
/* harmony import */ var _serialization_serialize__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_48449__(/*! ../serialization/serialize */ "./src/serialization/serialize.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48449__(/*! d3 */ "./node_modules/d3/src/index.js");
/* SPDX-License-Identifier: GPL-3.0-only */












class Graph {
    static MAIN_G_CLASS = 'graph';

    constructor(containerSelector) {
        this.containerSelector = containerSelector;
        this.svg = null
        this.svgMainG = null

        this.vertices = new _datastructures_vertex_container__WEBPACK_IMPORTED_MODULE_1__.VertexContainer();
        this.edges = new _datastructures_edge_container__WEBPACK_IMPORTED_MODULE_2__.EdgeContainer();
        this.readOnly = false;

        /* internal-only listeners */
        this.edgeDrawListener = null;

        this.init();
    }

    init() {
        // validate SVG holder
        if (document.querySelector(this.containerSelector) === null) throw "Container Selector isn't valid";

        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__.select(this.containerSelector).append("svg");
        this.svgMainG = this.svg.append("g").classed(Graph.MAIN_G_CLASS, true);

        this.edgeDrawListener = new _events_edge_draw_listener__WEBPACK_IMPORTED_MODULE_3__.EdgeDrawEvent(this);
        this.resize();
        this.addSymbolicDefs();
        this.addListenerDefaults();
    }

    /* public-facing listeners */
    addVertexAddedListener(vertexAddedCallback) {
        this.vertices.addActionListener(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.VERT_ADDED_ACTION, vertexAddedCallback, [this]);
    }

    addVertexRemovedListener(vertexRemovedCallback) {
        this.vertices.addActionListener(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.VERT_REMOVED_ACTION, vertexRemovedCallback, [this]);
    }

    addEdgeAddedListener(edgeAddedCallback) {
        this.edges.addActionListener(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_ADDED_ACTION, edgeAddedCallback, [this]);
    }

    addEdgeRemovedListener(edgeRemovedCallback) {
        this.edges.addActionListener(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_REMOVED_ACTION, edgeRemovedCallback, [this]);
    }

    addCustomInputEdgeConnectorClickedListener(edgeConnectorClickedCallback) {
        this.vertices.addActionListener(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.CUSTOM_INPUT_EDGE_CONN_CLICK_ACTION, edgeConnectorClickedCallback, [this]);
    }

    /**
     * Set SVG to container's dimensions
     */
    resize() {
        let el = document.querySelector(this.containerSelector);
        this.svg
            .attr("width", el.clientWidth)
            .attr("height", el.clientHeight);
    }

    zoom(event) {
        this.svgMainG.attr('transform', event.transform);
        return true;
    }

    /**
     * SVG defs can be referenced by name across the elements
     */
    addSymbolicDefs() {
        // define arrow markers for graph links
        let defs = this.svg.append('svg:defs');
        defs.append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', "32")
            .attr('markerWidth', 3.5)
            .attr('markerHeight', 3.5)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');

        // define arrow markers for leading arrow
        defs.append('svg:marker')
            .attr('id', 'mark-end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 7)
            .attr('markerWidth', 3.5)
            .attr('markerHeight', 3.5)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');
    }

    /**
     * Add listeners to events that graph should handle by default
     */
    addListenerDefaults() {
        // add listener handler for resize events
        window.onresize = () => {
            this.resize();
        };

        // Zoom listener
        let zoomCallback = d3__WEBPACK_IMPORTED_MODULE_0__.zoom()
            .scaleExtent([0.3, 2])
            .on("zoom", (event) => this.zoom(event))
            .on("start", function () {
                d3__WEBPACK_IMPORTED_MODULE_0__.select('body').style("cursor", "move");
            })
            .on("end", function () {
                d3__WEBPACK_IMPORTED_MODULE_0__.select('body').style("cursor", "auto");
            });
        this.svg.call(zoomCallback).on("dblclick.zoom", null);

        // remove selection of all vertices and edges when user clicks in the svg parent
        this.svg.on('click', (event) => {
            event.stopPropagation();

            this.vertices.iterate((v) => v.setSelected(false));
            this.edges.iterate((v) => v.setSelected(false));
        });

        // delete vertices/edges components
        d3__WEBPACK_IMPORTED_MODULE_0__.select(window).on("keydown", (event) => {
            /* ignore event if graph is in readOnly mode */
            if(this.readOnly) return;

            if ([46 /* delete */, 8 /* backspace */].includes(event.keyCode)) {
                // delete dependent edges on doomed vertices
                this.vertices
                    .findAllSelected()
                    .forEach((i) => this.edges.removeEdgesByVertex(i));

                // delete selected elements
                this.vertices.removeSelected();
                this.edges.removeSelected();
            }
        });

        // internal vertex-related events that graph must handle for every vertex
        this.vertices.addActionListener(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION, this.edgeConnectorGenericDragHandler, [this]);
        this.vertices.addActionListener(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION, this.edgeConnectorGenericDragHandler, [this]);
        this.vertices.addActionListener(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION, this.edgeConnectorGenericDragHandler, [this]);
        this.vertices.addActionListener(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.VERT_DRAGGING_ACTION, this.vertexDragHandler, [this]);
    }

    appendVertex(vertex) {
        this.vertices.append(vertex);
    }

    appendEdge(edge) {
        //TODO add validations in case this comes from import method...
        if (this.edges.append(edge)) {
            this.update();
        }
    }

    update() {
        let that = this;
        this.vertices.iterate(function (value) {
            value.draw(that);
        });
        this.edges.iterate(function (value) {
            value.remove();
            value.draw(that);
        });
    }

    translateCoordinates(event) {
        return d3__WEBPACK_IMPORTED_MODULE_0__.pointer(event, this.svgMainG.node());
    }

    export() {
        let vertices = [];
        this.vertices.iterate((value) => {
            vertices.push(value.serialize());
        });

        let edges = [];
        this.edges.iterate((value) => {
            edges.push(value.serialize());
        });

        return new _serialization_serialize__WEBPACK_IMPORTED_MODULE_5__.GraphSerializable(
            vertices,
            edges,
        );
    }

    import(graphSerializable) {
        this.clear();

        graphSerializable.vertices.forEach((value) => {
            const vertexSer = Object.assign(new _serialization_serialize__WEBPACK_IMPORTED_MODULE_5__.VertexSerializable, value);
            const vertex = vertexSer.deserialize();
            this.appendVertex(vertex);
        });

        graphSerializable.edges.forEach((value) => {
            const edgeSer = Object.assign(new _serialization_serialize__WEBPACK_IMPORTED_MODULE_5__.EdgeSerializable, value);
            this.appendEdge(new _edges_edge_js__WEBPACK_IMPORTED_MODULE_6__.Edge(
                this.vertices.findVertexConnectorByUUID(edgeSer.from_connector),
                this.vertices.findVertexConnectorByUUID(edgeSer.to_connector),
            ));
        });

        this.update();
    }

    clear() {
        this.edges.removeAll();
        this.vertices.removeAll();
    }

    /* callbacks for events */

    edgeConnectorGenericDragHandler(type, that, event) {
        /* ignore event if graph is in readOnly mode */
        if(that.readOnly) return;

        let vertex = null;
        let connector = null;
        let uuid = null;
        let targetEl = d3__WEBPACK_IMPORTED_MODULE_0__.select(event.sourceEvent.composedPath()[0]);

        //check if that's not a line
        let updateLineOnly = false;

        if (targetEl.classed("link")) {
            updateLineOnly = true;
        } else {
            uuid = targetEl.attr(_vertices_connector__WEBPACK_IMPORTED_MODULE_7__.EdgeConnector.UUID_ATTR) || null;

            if (uuid) {
                let holder = that.vertices.findVertexConnectorByUUID(uuid);
                vertex = holder.vertex;
                connector = holder.connector;
            }
        }

        if (type === _events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION)
            that.edgeDrawListener.dragStartEventHandler(event, vertex, connector);
        else if (type === _events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION)
            that.edgeDrawListener.draggingEventHandler(event, vertex, connector, updateLineOnly);
        else if (type === _events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION)
            that.edgeDrawListener.dragEndEventHandler();
    }

    edgeConnectorIsAdded(vertexHolderA, vertexHolderB) {
        this.appendEdge(new _edges_edge_js__WEBPACK_IMPORTED_MODULE_6__.Edge(vertexHolderA, vertexHolderB));
    }

    vertexDragHandler(type, that) {
        if (type === _events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.VERT_DRAGGING_ACTION)
            that.update();
    }    
}

/***/ }),

/***/ "./src/misc/pojo.js":
/*!**************************!*\
  !*** ./src/misc/pojo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_59836__) => {

/* harmony export */ __nested_webpack_require_59836__.d(__webpack_exports__, {
/* harmony export */   "MouseCoordinate": () => (/* binding */ MouseCoordinate),
/* harmony export */   "ShapeSize": () => (/* binding */ ShapeSize)
/* harmony export */ });
/* SPDX-License-Identifier: GPL-3.0-only */


class MouseCoordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ShapeSize {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }
}

/***/ }),

/***/ "./src/misc/text-overflow.js":
/*!***********************************!*\
  !*** ./src/misc/text-overflow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_60587__) => {

/* harmony export */ __nested_webpack_require_60587__.d(__webpack_exports__, {
/* harmony export */   "TextOverflow": () => (/* binding */ TextOverflow)
/* harmony export */ });
/* SPDX-License-Identifier: GPL-3.0-only */


class TextOverflow {

    /**
     * Trim text's content if that overflows the desired width
     * @param text - reference to d3.js SVG element
     * @param width - max width that the text can be before overflow
     * @param content - list of words/chars to be tried out to see how many of them fit in the chosen width
     * @param join_sep - string separator to be added between elements of list of contents
     */
    static calculateTextOverflow(text, width, content, join_sep) {
        // calculate ellipsis size
        const ellipsis = '...';
        text.text(ellipsis);
        const ellipsisWidth = text.node().getBBox().width;
        width -= ellipsisWidth;

        // try best fit
        let curr;
        let list = [];
        while ((curr = content.pop()) !== undefined) {
            list.push(curr);
            let attempt = list.join(join_sep);
            attempt.substring(0, attempt.length - join_sep.length);

            text.text(attempt);
            if (text.node().getBBox().width > width) {
                list.pop();
                list.push(ellipsis);

                attempt = list.join(join_sep);
                attempt.substring(0, attempt.length - join_sep.length);
                text.text(attempt);
                break;
            }
        }
    }

    /**
     * Trim text's words if that overflows the desired width
     * @param text - reference to d3.js SVG element
     * @param width - max width that the text can be before overflow
     */
    static calculateWordsOverflow(text, width) {
        const content = text.text().split(/\s+/).reverse();
        TextOverflow.calculateTextOverflow(text, width, content, ' ');
    }

    /**
     * Trim text's characters if that overflows the desired width
     * @param text - reference to d3.js SVG element
     * @param width - max width that the text can be before overflow
     */
    static calculateCharsOverflow(text, width) {
        const content = text.text().split('').reverse();
        TextOverflow.calculateTextOverflow(text, width, content, '');
    }

}

/***/ }),

/***/ "./src/serialization/serialize.js":
/*!****************************************!*\
  !*** ./src/serialization/serialize.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_63146__) => {

/* harmony export */ __nested_webpack_require_63146__.d(__webpack_exports__, {
/* harmony export */   "EdgeSerializable": () => (/* binding */ EdgeSerializable),
/* harmony export */   "GraphSerializable": () => (/* binding */ GraphSerializable),
/* harmony export */   "VertexConnectorSerializable": () => (/* binding */ VertexConnectorSerializable),
/* harmony export */   "VertexSerializable": () => (/* binding */ VertexSerializable)
/* harmony export */ });
/* harmony import */ var _misc_pojo__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_63146__(/*! ../misc/pojo */ "./src/misc/pojo.js");
/* harmony import */ var _vertices_connector__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_63146__(/*! ../vertices/connector */ "./src/vertices/connector.js");
/* harmony import */ var _vertices_vertex__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63146__(/*! ../vertices/vertex */ "./src/vertices/vertex.js");
/* SPDX-License-Identifier: GPL-3.0-only */







class GraphSerializable {

    constructor(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
    }

}

class VertexSerializable {

    constructor(uuid, coordinate, size, title, inputs, outputs) {
        this.uuid = uuid;
        this.coordinate = coordinate;
        this.size = size;
        this.title = title;
        this.inputs = inputs;
        this.outputs = outputs;
    }

    deserialize() {
        let vertex = new _vertices_vertex__WEBPACK_IMPORTED_MODULE_0__.Vertex(
            new _misc_pojo__WEBPACK_IMPORTED_MODULE_1__.MouseCoordinate(this.coordinate.x, this.coordinate.y),
            new _misc_pojo__WEBPACK_IMPORTED_MODULE_1__.ShapeSize(this.size.width, this.size.height),
            this.title,
            this.inputs.map((i) => new VertexConnectorSerializable(
                i.uuid, 
                i.connectorType, 
                i.order, 
                i.name, 
                i.type,
                i.customValue,
            ).deserialize()),
            this.outputs.map((i) => new VertexConnectorSerializable(
                i.uuid, 
                i.connectorType, 
                i.order, 
                i.name, 
                i.type, 
                i.customValue,
            ).deserialize()),
        );

        vertex.uuid = this.uuid;

        return vertex;
    }

}

class VertexConnectorSerializable {

    constructor(uuid, connectorType, order, name, type, customValue) {
        this.uuid = uuid;
        this.connectorType = connectorType;
        this.order = order;
        this.name = name;
        this.type = type;
        this.customValue = customValue;
    }

    deserialize() {
        let connector = null;
        if (this.connectorType === _vertices_connector__WEBPACK_IMPORTED_MODULE_2__.ConnectorType.INPUT) {
            connector = new _vertices_connector__WEBPACK_IMPORTED_MODULE_2__.InputVertexConnector(this.order, this.name, this.type);
        } else if (this.connectorType === _vertices_connector__WEBPACK_IMPORTED_MODULE_2__.ConnectorType.CUSTOM_INPUT) {
            connector = new _vertices_connector__WEBPACK_IMPORTED_MODULE_2__.CustomInputVertexConnector(this.order, this.name, this.type, this.customValue);
        } else if (this.connectorType === _vertices_connector__WEBPACK_IMPORTED_MODULE_2__.ConnectorType.OUTPUT) {
            connector = new _vertices_connector__WEBPACK_IMPORTED_MODULE_2__.OutputVertexConnector(this.order, this.name, this.type);
        } else { // ensuring exaustive search            
            throw 'Unknown connector type';
        }
        connector.uuid = this.uuid;
        return connector;
    }
}

class EdgeSerializable {

    constructor(from_connector, to_connector) {
        this.from_connector = from_connector;
        this.to_connector = to_connector;
    }

}

/***/ }),

/***/ "./src/vertices/connector.js":
/*!***********************************!*\
  !*** ./src/vertices/connector.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_67168__) => {

/* harmony export */ __nested_webpack_require_67168__.d(__webpack_exports__, {
/* harmony export */   "ConnectorType": () => (/* binding */ ConnectorType),
/* harmony export */   "CustomInputVertexConnector": () => (/* binding */ CustomInputVertexConnector),
/* harmony export */   "EdgeConnector": () => (/* binding */ EdgeConnector),
/* harmony export */   "InputVertexConnector": () => (/* binding */ InputVertexConnector),
/* harmony export */   "OutputVertexConnector": () => (/* binding */ OutputVertexConnector)
/* harmony export */ });
/* harmony import */ var _misc_text_overflow__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_67168__(/*! ../misc/text-overflow */ "./src/misc/text-overflow.js");
/* harmony import */ var _unique_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_67168__(/*! ./unique-component */ "./src/vertices/unique-component.js");
/* harmony import */ var _serialization_serialize__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_67168__(/*! ../serialization/serialize */ "./src/serialization/serialize.js");
/* harmony import */ var _events_event__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_67168__(/*! ../events/event */ "./src/events/event.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67168__(/*! d3 */ "./node_modules/d3/src/index.js");
/* SPDX-License-Identifier: GPL-3.0-only */








const ConnectorType = {
    INPUT: 1,
    CUSTOM_INPUT: 2,
    OUTPUT: 3,
}

class EdgeConnector extends _unique_component__WEBPACK_IMPORTED_MODULE_1__.UniqueComponent {

    static FONT_SIZE = { parameters: 12 };
    static MARGIN = { left: 15, right: 15 };
    static SEPARATOR_WIDTH = 10;
    static EDGE_CONNECTOR_SIZE = { width: 14, height: 14 };
    static UUID_ATTR = 'connector-uuid';
    static SELECTED_CLASS = 'selected';

    constructor(connectorType, order, name, type) {
        super(EdgeConnector.UUID_ATTR);
        this.connectorType = connectorType;
        this.order = order;
        this.name = name;
        this.type = type;

        this.drawingContext = null;
        this.nameEl = null;
        this.separatorEl = null;
        this.typeEl = null;
        this.edgeConnectorEl = null;
    }

    /**
     * Calculate space available for the label/value components
     * @param maxWidth - max available width
     */
    calculateLabelWidth(maxWidth) {
        // sanity check
        const minWidthReq = EdgeConnector.MARGIN.left + EdgeConnector.MARGIN.right + EdgeConnector.SEPARATOR_WIDTH;
        if (maxWidth < minWidthReq)
            throw `Shape.width can't be smaller than ${minWidthReq}`

        return Math.floor((maxWidth - minWidthReq) / 2) - 1;
    }

    /**
     * Abstract method to be implemented on each subclass of EdgeConnector
     */
    getConfig() {
        throw new Error('You have to implement the method getConfig(x, y, maxWidth) in your subclass!');
    }

    draw(drawingContext, x, y, maxWidth) {
        this.drawingContext = drawingContext.append('g');

        const labelWidth = this.calculateLabelWidth(maxWidth);

        // name
        this.nameEl = this.drawingContext
            .append('text')
            .classed('edge_connector', true)
            .classed('name', true)
            .attr('font-size', EdgeConnector.FONT_SIZE.parameters)
            .attr('x', x)
            .attr('y', y)
            .attr('dx', EdgeConnector.MARGIN.left)
            .text(this.name);
        this.nameEl.call(_misc_text_overflow__WEBPACK_IMPORTED_MODULE_2__.TextOverflow.calculateCharsOverflow, labelWidth);

        // separator (I may need a clip path / text overflow here)
        this.separatorEl = this.drawingContext
            .append('text')
            .classed('edge_connector', true)
            .classed('separator', true)
            .attr('font-size', EdgeConnector.FONT_SIZE.parameters)
            .attr('x', this.nameEl.node().getBBox().x + labelWidth)
            .attr('y', y)
            .attr('width', EdgeConnector.SEPARATOR_WIDTH)
            .text(" : ");

        // type
        this.typeEl = this.drawingContext
            .append('text')
            .classed('edge_connector', true)
            .classed('type', true)
            .attr('font-size', EdgeConnector.FONT_SIZE.parameters)
            .attr('x', this.separatorEl.node().getBBox().x + EdgeConnector.SEPARATOR_WIDTH)
            .attr('y', y)
            .text(this.type);
        this.typeEl.call(_misc_text_overflow__WEBPACK_IMPORTED_MODULE_2__.TextOverflow.calculateCharsOverflow, labelWidth);

        // edge connector
        const edgeConnector = this.getConfig(x, y, maxWidth);

        this.edgeConnectorEl = this.drawingContext
            .append('rect')
            .classed('edge_connector', true)
            .classed('connector', true)
            .classed(edgeConnector.class, true)
            .attr('transform', `rotate(-45 ${edgeConnector.x + (edgeConnector.width / 2)} ${edgeConnector.y + (edgeConnector.height / 2)})`)
            .attr('x', edgeConnector.x)
            .attr('y', edgeConnector.y)
            .attr('width', edgeConnector.width)
            .attr('height', edgeConnector.height);

        this.animateEdgeConnector();
        this.markNode(this.edgeConnectorEl);

        return this.drawingContext;
    }

    animateEdgeConnector() {
        const minWidth = 1;
        const maxWidth = 3;
        const intervalInMs = 180;
        let loops = 3;

        const expandStrokeWidth = () => {
            loops--;
            if (loops > 0) {
                this.edgeConnectorEl
                    .transition()
                    .duration(intervalInMs)
                    .attr("stroke-width", maxWidth)
                    .on('end', shrinkStrokeWidth);
            }
        };

        const shrinkStrokeWidth = () => {
            this.edgeConnectorEl
                .transition()
                .duration(intervalInMs)
                .attr("stroke-width", minWidth)
                .on('end', expandStrokeWidth);
        };

        expandStrokeWidth();
    }

    setSelected(value) {
        this.edgeConnectorEl
            .classed(EdgeConnector.SELECTED_CLASS, value);
    }

    isSelected() {
        return this.edgeConnectorEl
            .classed(EdgeConnector.SELECTED_CLASS);
    }

    serialize() {
        return new _serialization_serialize__WEBPACK_IMPORTED_MODULE_3__.VertexConnectorSerializable(
            this._uuid,
            this.connectorType,
            this.order,
            this.name,
            this.type,
        );
    }
}

class InputVertexConnector extends EdgeConnector {

    constructor(order, name, type) {
        super(ConnectorType.INPUT, order, name, type);
    }

    getConfig(x, y) {
        return {
            x: x - (EdgeConnector.EDGE_CONNECTOR_SIZE.width / 2),
            y: y - (EdgeConnector.EDGE_CONNECTOR_SIZE.height / 1.5),
            class: 'input',
            width: EdgeConnector.EDGE_CONNECTOR_SIZE.width,
            height: EdgeConnector.EDGE_CONNECTOR_SIZE.height,
        };
    }

}

/**
 * Custom Input Vertex Connector fills the void for edge connections in which
 * a custom value can be entered instead of linking 2 vertices. 
 * 
 * This is meant for a very specific case and I assume that 99% of users should
 * be happy enoughwith the regular InputVertexConnector implementation
 */
class CustomInputVertexConnector extends InputVertexConnector {

    constructor(order, name, type, customValue) {
        super(order, name, type);
        this.connectorType = ConnectorType.CUSTOM_INPUT;

        // container that holds a possible value entered manually        
        this.customValue = customValue;
    }

    draw(drawingContext, x, y, maxWidth) {
        super.draw(drawingContext, x, y, maxWidth);
        this.setupEvents();
        return this.drawingContext;
    }

    setupEvents() {
        this.edgeConnectorEl.on('click', (event) => {
            event.stopPropagation();
            this.triggerEvent(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.CUSTOM_INPUT_EDGE_CONN_CLICK_ACTION, [this, event])
        });
    }

    getConfig(x, y) {
        //TODO change css so that users know straight away that this is a custom input
        return {
            x: x - (EdgeConnector.EDGE_CONNECTOR_SIZE.width / 2),
            y: y - (EdgeConnector.EDGE_CONNECTOR_SIZE.height / 1.5),
            class: 'input',
            width: EdgeConnector.EDGE_CONNECTOR_SIZE.width,
            height: EdgeConnector.EDGE_CONNECTOR_SIZE.height,
        };
    }

    serialize() {
        return new _serialization_serialize__WEBPACK_IMPORTED_MODULE_3__.VertexConnectorSerializable(
            this._uuid,
            this.connectorType,
            this.order,
            this.name,
            this.type,
            this.customValue,
        );
    }
}

class OutputVertexConnector extends EdgeConnector {

    constructor(order, name, type) {
        super(ConnectorType.OUTPUT, order, name, type);
    }

    draw(drawingContext, x, y, maxWidth) {
        super.draw(drawingContext, x, y, maxWidth);
        this.setupEvents();
        return this.drawingContext;
    }

    setupEvents() {
        this.edgeConnectorEl.call(d3__WEBPACK_IMPORTED_MODULE_0__.drag()
            .on('start', (event) => this.triggerEvent(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION, [event]))
            .on('drag', (event) => this.triggerEvent(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION, [event]))
            .on('end', (event) => this.triggerEvent(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION, [event])));
    }

    getConfig(x, y, maxWidth) {
        return {
            x: x + maxWidth - (EdgeConnector.EDGE_CONNECTOR_SIZE.width / 2),
            y: y - (EdgeConnector.EDGE_CONNECTOR_SIZE.height / 1.5),
            class: 'output',
            width: EdgeConnector.EDGE_CONNECTOR_SIZE.width,
            height: EdgeConnector.EDGE_CONNECTOR_SIZE.height,
        };
    }
}

/***/ }),

/***/ "./src/vertices/unique-component.js":
/*!******************************************!*\
  !*** ./src/vertices/unique-component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_77460__) => {

/* harmony export */ __nested_webpack_require_77460__.d(__webpack_exports__, {
/* harmony export */   "UniqueComponent": () => (/* binding */ UniqueComponent)
/* harmony export */ });
/* harmony import */ var _events_base_action_listener__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_77460__(/*! ../events/base-action-listener */ "./src/events/base-action-listener.js");
/* SPDX-License-Identifier: GPL-3.0-only */




/**
 * UniqueComponent provide utility functions to mark SVG nodes
 * with a UUID value. This comes in handy when implementing action
 * listeners such as click, drag and so on as you need to retrieve
 * the object references from internal data structures.
 */
class UniqueComponent extends _events_base_action_listener__WEBPACK_IMPORTED_MODULE_0__.BaseActionListener{

    constructor(uuid_attr) {
        super();
        this.uuid_attr = uuid_attr;
        this._uuid = crypto.randomUUID();
    }

    set uuid(value) {
        this._uuid = value;
    }

    markNode(svgNode) {
        // sanity check
        if(svgNode === undefined || svgNode === null)
            throw "svgNode can't be null/undefined"

        svgNode.attr(this.uuid_attr, this._uuid);
    }
}

/***/ }),

/***/ "./src/vertices/vertex.js":
/*!********************************!*\
  !*** ./src/vertices/vertex.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78874__) => {

/* harmony export */ __nested_webpack_require_78874__.d(__webpack_exports__, {
/* harmony export */   "Vertex": () => (/* binding */ Vertex)
/* harmony export */ });
/* harmony import */ var _misc_text_overflow__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_78874__(/*! ../misc/text-overflow */ "./src/misc/text-overflow.js");
/* harmony import */ var _events_event__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_78874__(/*! ../events/event */ "./src/events/event.js");
/* harmony import */ var _unique_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_78874__(/*! ./unique-component */ "./src/vertices/unique-component.js");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_78874__(/*! ./connector */ "./src/vertices/connector.js");
/* harmony import */ var _serialization_serialize__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_78874__(/*! ../serialization/serialize */ "./src/serialization/serialize.js");
/* harmony import */ var _misc_pojo__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_78874__(/*! ../misc/pojo */ "./src/misc/pojo.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78874__(/*! d3 */ "./node_modules/d3/src/index.js");
/* SPDX-License-Identifier: GPL-3.0-only */










class Vertex extends _unique_component__WEBPACK_IMPORTED_MODULE_1__.UniqueComponent {

    static MARGIN = { top: 5, left: 5, bottom: 5, right: 5 };
    static FONT_SIZE = { title: 15, section: 14 };
    static UUID_ATTR = "vertex-uuid";
    static SELECTED_CLASS = 'selected';

    constructor(coordinate, size, title, inputs, outputs) {
        super(Vertex.UUID_ATTR);
        // sanity checks
        if (size.width < (Vertex.MARGIN.left + Vertex.MARGIN.right))
            throw "Size can't be smaller than default padding values";

        if (inputs === null || inputs === undefined)
            inputs = [];

        if (outputs === null || outputs === undefined)
            outputs = [];

        if (inputs.length === 0 && outputs.length === 0)
            throw "Either inputs or outputs can be empty but not both";

        this.inputs = inputs;
        this.outputs = outputs;

        this.coordinate = coordinate;
        this.size = size;
        this.title = title;
        this.drawingContext = null;
    }

    /**
     * Draw the Edge into the Graph
     * @param graph - graph instance in which this edge will be drawn
     */
    draw(graph) {
        if (this.drawingContext)
            return;

        // group drawing context
        this.drawingContext = graph.svgMainG
            .append("g")
            .classed('vertex', true)
            .attr('transform', `translate(${this.coordinate.x}, ${this.coordinate.y})`);

        // rounded corner mask
        const clipPathId = crypto.randomUUID();
        let outerBoxMaskEl = this.drawingContext
            .append('clipPath')
            .attr('id', clipPathId)
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', this.size.width)
            .attr('height', this.size.height)
            .attr('rx', 5);

        // outer box
        let outerBoxEl = this.drawingContext
            .append('rect')
            .classed('outerbox', true)
            .attr('width', this.size.width)
            .attr('height', this.size.height)
            .attr('x', 0)
            .attr('y', 0)
            .attr('clip-path', 'url(#' + clipPathId + ')');

        // title
        this.drawingContext
            .append('rect')
            .classed('title-box', true)
            .attr('clip-path', 'url(#' + clipPathId + ')');

        this.drawingContext
            .append('text')
            .classed('title', true)
            .attr('font-size', Vertex.FONT_SIZE.title)
            .attr('x', 0)
            .attr('y', 0)
            .attr("dy", Vertex.FONT_SIZE.title + Vertex.MARGIN.top)
            .attr("dx", Vertex.MARGIN.left)
            .text(this.title)
            .call(_misc_text_overflow__WEBPACK_IMPORTED_MODULE_2__.TextOverflow.calculateWordsOverflow, this.size.width - Vertex.MARGIN.left - Vertex.MARGIN.right);

        const titleElRect = this.drawingContext.select('.title').node().getBBox();

        let titleBox = this.drawingContext.select('.title-box')
            .attr('width', this.size.width)
            .attr('height', (titleElRect.height) + Vertex.MARGIN.bottom)
            .attr('x', 0)
            .attr('y', 0);

        // inputs
        let inputLabel = this.drawingContext
            .append('text')
            .classed('label', true)
            .attr('font-size', Vertex.FONT_SIZE.section)
            .attr('x', 0)
            .attr('y', titleBox.node().getBBox().height)
            .attr("dy", Vertex.FONT_SIZE.section + Vertex.MARGIN.top)
            .attr("dx", Vertex.MARGIN.left)
            .text("Inputs:")

        let next_y = inputLabel.node().getBBox().y +
            inputLabel.node().getBBox().height + Vertex.FONT_SIZE.section;

        this.inputs.forEach((value) => next_y += this.drawConnector(value, next_y));

        // outputs
        let outputLabel = this.drawingContext
            .append('text')
            .classed('label', true)
            .attr('font-size', Vertex.FONT_SIZE.section)
            .attr('x', 0)
            .attr('y', next_y)
            .attr("dy", +Vertex.MARGIN.top)
            .attr("dx", Vertex.MARGIN.left)
            .text("Output:")

        next_y = outputLabel.node().getBBox().y +
            outputLabel.node().getBBox().height +
            Vertex.FONT_SIZE.section;

        this.outputs.forEach((value) => next_y += this.drawConnector(value, next_y));

        // adjust outer box if needed
        const requiredHeight = next_y;
        if (requiredHeight > this.size.height) {
            outerBoxEl.attr('height', requiredHeight);
            outerBoxMaskEl.attr('height', requiredHeight);
        }

        // add support for moving individual vertices
        this.setupDragEvents();

        // add support for selecting invididual vertices
        this.setupClickEvents(graph);
    }

    drawConnector(connector, next_y) {
        if (connector.connectorType === _connector__WEBPACK_IMPORTED_MODULE_3__.ConnectorType.OUTPUT) {
            // only output connectors can initiate drag events. That ensures that the DAG flows from Output -> Input
            const eventsOfInterest = [
                _events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION,
                _events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION,
                _events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION
            ];

            // pass down events of interest that might be relevant for this component
            this.listeners
                .filter((e) => eventsOfInterest.includes(e.type))
                .forEach((e) => connector.addActionListener(e.type, e.callback, e.params));

        } else if (connector.connectorType === _connector__WEBPACK_IMPORTED_MODULE_3__.ConnectorType.CUSTOM_INPUT) {
            this.listeners
                .filter((e) => [_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.CUSTOM_INPUT_EDGE_CONN_CLICK_ACTION].includes(e.type))
                .forEach((e) => connector.addActionListener(e.type, e.callback, [...e.params, this]));
        }

        // draw
        const wrapper = connector.draw(this.drawingContext, 0, next_y, this.size.width);

        // return vertical space consumed
        return wrapper.node().getBBox().height + Vertex.MARGIN.top;
    }

    setupDragEvents() {
        let that = this;
        // this must be added to the SVG g level so I need to tweak translate only once
        this.drawingContext.call(d3__WEBPACK_IMPORTED_MODULE_0__.drag()
            .subject(function () {
                var t = d3__WEBPACK_IMPORTED_MODULE_0__.select(this);
                let coord = (0,_events_event__WEBPACK_IMPORTED_MODULE_4__.translationMat)(t.node());
                return {
                    x: t.attr("x") + coord.e,
                    y: t.attr("y") + coord.f
                };
            })
            .on('drag', function (event) {
                // drag / move element
                var t = d3__WEBPACK_IMPORTED_MODULE_0__.select(this);
                t.attr('transform', `translate(${event.x},${event.y})`);

                // tell graph to update edges
                that.triggerEvent(_events_event__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPE.VERT_DRAGGING_ACTION, []);
            }));
    }

    setupClickEvents(graph) {
        this.drawingContext.on('click', (event) => {
            event.stopPropagation();

            /* ignore event if graph is in readOnly mode */
            if(graph.readOnly) return;
            
            this.setSelected(!this.isSelected());
        });
    }

    setSelected(value) {
        this.drawingContext.classed(Vertex.SELECTED_CLASS, value);
    }

    isSelected() {
        return this.drawingContext.classed(Vertex.SELECTED_CLASS);
    }

    remove() {
        if (this.drawingContext) {
            this.drawingContext.remove();
        }
    }

    serialize() {
        const mat = (0,_events_event__WEBPACK_IMPORTED_MODULE_4__.translationMat)(this.drawingContext.node());
        return new _serialization_serialize__WEBPACK_IMPORTED_MODULE_5__.VertexSerializable(
            this._uuid,
            new _misc_pojo__WEBPACK_IMPORTED_MODULE_6__.MouseCoordinate(mat.e, mat.f),
            this.size,
            this.title,
            this.inputs.map((i) => i.serialize()),
            this.outputs.map((i) => i.serialize()),
        );
    }
}

/***/ }),

/***/ "./node_modules/d3-brush/src/brush.js":
/*!********************************************!*\
  !*** ./node_modules/d3-brush/src/brush.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_88822__) => {

/* unused harmony exports brushSelection, brushX, brushY */
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_88822__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_88822__(/*! d3-drag */ "./node_modules/d3-drag/src/nodrag.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_88822__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_88822__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_88822__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88822__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_88822__(/*! ./constant.js */ "./node_modules/d3-brush/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_88822__(/*! ./event.js */ "./node_modules/d3-brush/src/event.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_88822__(/*! ./noevent.js */ "./node_modules/d3-brush/src/noevent.js");









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

const {abs, max, min} = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) { return xy == null ? null : number2(xy); },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush(X);
}

function brushY() {
  return brush(Y);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return brush(XY);
}

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_4__["default"])("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          (0,d3_selection__WEBPACK_IMPORTED_MODULE_5__["default"])(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection, event) {
    if (group.tween) {
      group
          .on("start.brush", function(event) { emitter(this, arguments).beforestart().start(event); })
          .on("interrupt.brush end.brush", function(event) { emitter(this, arguments).end(event); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_6__["default"])(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
          });
    }
  };

  brush.clear = function(group, event) {
    brush.move(group, null, event);
  };

  function redraw() {
    var group = (0,d3_selection__WEBPACK_IMPORTED_MODULE_5__["default"])(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type, event, mode) {
      var d = (0,d3_selection__WEBPACK_IMPORTED_MODULE_5__["default"])(this.that).datum();
      listeners.call(
        type,
        this.that,
        new _event_js__WEBPACK_IMPORTED_MODULE_2__["default"](type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
          const i = t.identifier;
          t = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(t, that);
          t.point0 = t.slice();
          t.identifier = i;
          return t;
        });

    (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[
          w0 = dim === Y ? W : min(pts[0][0], pts[1][0]),
          n0 = dim === X ? N : min(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y ? E : max(pts[0][0], pts[1][0]),
          s0 = dim === X ? S : max(pts[0][1], pts[1][1])
        ]];
      if (points.length > 1) move(event);
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = (0,d3_selection__WEBPACK_IMPORTED_MODULE_5__["default"])(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = (0,d3_selection__WEBPACK_IMPORTED_MODULE_5__["default"])(event.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)

      ;(0,d3_drag__WEBPACK_IMPORTED_MODULE_8__["default"])(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point of points)
        if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
      move(event);
    }

    function move(event) {
      const point = points[0], point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
            if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
          if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_3__.nopropagation)(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        (0,d3_drag__WEBPACK_IMPORTED_MODULE_8__.yesdrag)(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move(event);
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move(event);
          }
          break;
        }
        default: return;
      }
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move(event);
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move(event);
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move(event);
          }
          break;
        }
        default: return;
      }
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}


/***/ }),

/***/ "./node_modules/d3-brush/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-brush/src/constant.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_109474__) => {

/* harmony export */ __nested_webpack_require_109474__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-brush/src/event.js":
/*!********************************************!*\
  !*** ./node_modules/d3-brush/src/event.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_110015__) => {

/* harmony export */ __nested_webpack_require_110015__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrushEvent)
/* harmony export */ });
function BrushEvent(type, {
  sourceEvent,
  target,
  selection,
  mode,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    selection: {value: selection, enumerable: true, configurable: true},
    mode: {value: mode, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}


/***/ }),

/***/ "./node_modules/d3-brush/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-brush/src/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __nested_webpack_require_110991__) => {

/* harmony import */ var _brush_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_110991__(/*! ./brush.js */ "./node_modules/d3-brush/src/brush.js");



/***/ }),

/***/ "./node_modules/d3-brush/src/noevent.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-brush/src/noevent.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_111446__) => {

/* harmony export */ __nested_webpack_require_111446__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nopropagation": () => (/* binding */ nopropagation)
/* harmony export */ });
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_112222__) => {

/* harmony export */ __nested_webpack_require_112222__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color),
/* harmony export */   "rgb": () => (/* binding */ rgb)
/* harmony export */ });
/* unused harmony exports Color, darker, brighter, rgbConvert, Rgb, hslConvert, hsl */
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_112222__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_124176__) => {

/* harmony export */ __nested_webpack_require_124176__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extend": () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_125127__) => {

/* harmony export */ __nested_webpack_require_125127__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ "./node_modules/d3-drag/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-drag/src/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_128390__) => {

/* harmony export */ __nested_webpack_require_128390__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-drag/src/drag.js":
/*!******************************************!*\
  !*** ./node_modules/d3-drag/src/drag.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_128923__) => {

/* harmony export */ __nested_webpack_require_128923__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_128923__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_128923__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_128923__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var _nodrag_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_128923__(/*! ./nodrag.js */ "./node_modules/d3-drag/src/nodrag.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_128923__(/*! ./noevent.js */ "./node_modules/d3-drag/src/noevent.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_128923__(/*! ./constant.js */ "./node_modules/d3-drag/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_128923__(/*! ./event.js */ "./node_modules/d3-drag/src/event.js");







// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(event, d) {
  return d == null ? {x: event.x, y: event.y} : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassive)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned(event, d) {
    if (touchending || !filter.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    (0,d3_selection__WEBPACK_IMPORTED_MODULE_2__["default"])(event.view)
      .on("mousemove.drag", mousemoved, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture)
      .on("mouseup.drag", mouseupped, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
    (0,_nodrag_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event.view);
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__.nopropagation)(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }

  function mousemoved(event) {
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    (0,d3_selection__WEBPACK_IMPORTED_MODULE_2__["default"])(event.view).on("mousemove.drag mouseup.drag", null);
    (0,_nodrag_js__WEBPACK_IMPORTED_MODULE_3__.yesdrag)(event.view, mousemoving);
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    gestures.mouse("end", event);
  }

  function touchstarted(event, d) {
    if (!filter.call(this, event, d)) return;
    var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__.nopropagation)(event);
        gesture("start", event, touches[i]);
      }
    }
  }

  function touchmoved(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
        gesture("drag", event, touches[i]);
      }
    }
  }

  function touchended(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__.nopropagation)(event);
        gesture("end", event, touches[i]);
      }
    }
  }

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__["default"])(touch || event, container), dx, dy,
        s;

    if ((s = subject.call(that, new _event_js__WEBPACK_IMPORTED_MODULE_5__["default"]("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch
      }), d)) == null) return;

    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;

    return function gesture(type, event, touch) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[identifier] = gesture, n = active++; break;
        case "end": delete gestures[identifier], --active; // falls through
        case "drag": p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__["default"])(touch || event, container), n = active; break;
      }
      dispatch.call(
        type,
        that,
        new _event_js__WEBPACK_IMPORTED_MODULE_5__["default"](type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch
        }),
        d
      );
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__["default"])(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__["default"])(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
}


/***/ }),

/***/ "./node_modules/d3-drag/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-drag/src/event.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_136797__) => {

/* harmony export */ __nested_webpack_require_136797__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragEvent)
/* harmony export */ });
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x, y, dx, dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    subject: {value: subject, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    identifier: {value: identifier, enumerable: true, configurable: true},
    active: {value: active, enumerable: true, configurable: true},
    x: {value: x, enumerable: true, configurable: true},
    y: {value: y, enumerable: true, configurable: true},
    dx: {value: dx, enumerable: true, configurable: true},
    dy: {value: dy, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};


/***/ }),

/***/ "./node_modules/d3-drag/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-drag/src/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_138221__) => {

/* harmony export */ __nested_webpack_require_138221__.d(__webpack_exports__, {
/* harmony export */   "drag": () => (/* reexport safe */ _drag_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_138221__(/*! ./drag.js */ "./node_modules/d3-drag/src/drag.js");




/***/ }),

/***/ "./node_modules/d3-drag/src/nodrag.js":
/*!********************************************!*\
  !*** ./node_modules/d3-drag/src/nodrag.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_138864__) => {

/* harmony export */ __nested_webpack_require_138864__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "yesdrag": () => (/* binding */ yesdrag)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_138864__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_138864__(/*! ./noevent.js */ "./node_modules/d3-drag/src/noevent.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(view) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),

/***/ "./node_modules/d3-drag/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-drag/src/noevent.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_140945__) => {

/* harmony export */ __nested_webpack_require_140945__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nonpassive": () => (/* binding */ nonpassive),
/* harmony export */   "nonpassivecapture": () => (/* binding */ nonpassivecapture),
/* harmony export */   "nopropagation": () => (/* binding */ nopropagation)
/* harmony export */ });
// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const nonpassive = {passive: false};
const nonpassivecapture = {capture: true, passive: false};

function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_142080__) => {

/* harmony export */ __nested_webpack_require_142080__.d(__webpack_exports__, {
/* harmony export */   "cubicInOut": () => (/* binding */ cubicInOut)
/* harmony export */ });
/* unused harmony exports cubicIn, cubicOut */
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_142802__) => {

/* harmony export */ __nested_webpack_require_142802__.d(__webpack_exports__, {
/* harmony export */   "genericArray": () => (/* binding */ genericArray)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_142802__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_142802__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return ((0,_numberArray_js__WEBPACK_IMPORTED_MODULE_0__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = (0,_value_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_144236__) => {

/* harmony export */ __nested_webpack_require_144236__.d(__webpack_exports__, {
/* harmony export */   "basis": () => (/* binding */ basis),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_145469__) => {

/* harmony export */ __nested_webpack_require_145469__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_145469__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__.basis)((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_146548__) => {

/* harmony export */ __nested_webpack_require_146548__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nogamma),
/* harmony export */   "gamma": () => (/* binding */ gamma)
/* harmony export */ });
/* unused harmony export hue */
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_146548__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_148071__) => {

/* harmony export */ __nested_webpack_require_148071__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_148632__) => {

/* harmony export */ __nested_webpack_require_148632__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_149335__) => {

/* harmony export */ __nested_webpack_require_149335__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/numberArray.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/numberArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_150024__) => {

/* harmony export */ __nested_webpack_require_150024__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isNumberArray": () => (/* binding */ isNumberArray)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_150985__) => {

/* harmony export */ __nested_webpack_require_150985__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_150985__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = (0,_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_152093__) => {

/* harmony export */ __nested_webpack_require_152093__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports rgbBasis, rgbBasisClosed */
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_152093__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_152093__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_152093__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_152093__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.gamma)(y);

  function rgb(start, end) {
    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_154714__) => {

/* harmony export */ __nested_webpack_require_154714__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_154714__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_157255__) => {

/* harmony export */ __nested_webpack_require_157255__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_158582__) => {

/* harmony export */ __nested_webpack_require_158582__.d(__webpack_exports__, {
/* harmony export */   "interpolateTransformCss": () => (/* binding */ interpolateTransformCss),
/* harmony export */   "interpolateTransformSvg": () => (/* binding */ interpolateTransformSvg)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_158582__(/*! ../number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_158582__(/*! ./parse.js */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseSvg, ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_161889__) => {

/* harmony export */ __nested_webpack_require_161889__.d(__webpack_exports__, {
/* harmony export */   "parseCss": () => (/* binding */ parseCss),
/* harmony export */   "parseSvg": () => (/* binding */ parseSvg)
/* harmony export */ });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_161889__(/*! ./decompose.js */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity : (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
  value = value.matrix;
  return (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_163452__) => {

/* harmony export */ __nested_webpack_require_163452__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_163452__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_163452__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_163452__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_163452__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_163452__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_163452__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_163452__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_163452__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_163452__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      : t === "string" ? ((c = (0,d3_color__WEBPACK_IMPORTED_MODULE_2__["default"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_3__["default"]) : _string_js__WEBPACK_IMPORTED_MODULE_4__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_2__["default"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      : (0,_numberArray_js__WEBPACK_IMPORTED_MODULE_6__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_6__["default"]
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_7__.genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_8__["default"]
      : _number_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a, b);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_166441__) => {

/* harmony export */ __nested_webpack_require_166441__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      }
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      }
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4));


/***/ }),

/***/ "./node_modules/d3-selection/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/array.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_168616__) => {

/* harmony export */ __nested_webpack_require_168616__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ array)
/* harmony export */ });
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_169649__) => {

/* harmony export */ __nested_webpack_require_169649__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_170276__) => {

/* harmony export */ __nested_webpack_require_170276__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_170276__(/*! ./namespace.js */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_170276__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_171875__) => {

/* harmony export */ __nested_webpack_require_171875__.d(__webpack_exports__, {
/* harmony export */   "pointer": () => (/* reexport safe */ _pointer_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "select": () => (/* reexport safe */ _select_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _pointer_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_171875__(/*! ./pointer.js */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_171875__(/*! ./select.js */ "./node_modules/d3-selection/src/select.js");

















/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_172840__) => {

/* harmony export */ __nested_webpack_require_172840__.d(__webpack_exports__, {
/* harmony export */   "childMatcher": () => (/* binding */ childMatcher),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_173682__) => {

/* harmony export */ __nested_webpack_require_173682__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_173682__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_174811__) => {

/* harmony export */ __nested_webpack_require_174811__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "xhtml": () => (/* binding */ xhtml)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/pointer.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/pointer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_175655__) => {

/* harmony export */ __nested_webpack_require_175655__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_175655__(/*! ./sourceEvent.js */ "./node_modules/d3-selection/src/sourceEvent.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event, node) {
  event = (0,_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_177074__) => {

/* harmony export */ __nested_webpack_require_177074__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_177074__(/*! ./selection/index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.root);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_178200__) => {

/* harmony export */ __nested_webpack_require_178200__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_178200__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_179189__) => {

/* harmony export */ __nested_webpack_require_179189__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_179189__(/*! ../namespace.js */ "./node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_181405__) => {

/* harmony export */ __nested_webpack_require_181405__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_182134__) => {

/* harmony export */ __nested_webpack_require_182134__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_184461__) => {

/* harmony export */ __nested_webpack_require_184461__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_185497__) => {

/* harmony export */ __nested_webpack_require_185497__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_185497__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_185497__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_185497__(/*! ../constant.js */ "./node_modules/d3-selection/src/constant.js");




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_190793__) => {

/* harmony export */ __nested_webpack_require_190793__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_191524__) => {

/* harmony export */ __nested_webpack_require_191524__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_191524__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_193158__) => {

/* harmony export */ __nested_webpack_require_193158__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_194034__) => {

/* harmony export */ __nested_webpack_require_194034__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return !this.node();
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_194674__) => {

/* harmony export */ __nested_webpack_require_194674__.d(__webpack_exports__, {
/* harmony export */   "EnterNode": () => (/* binding */ EnterNode),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_194674__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_194674__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__["default"]), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_196451__) => {

/* harmony export */ __nested_webpack_require_196451__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_196451__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_196451__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__["default"]), this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_197558__) => {

/* harmony export */ __nested_webpack_require_197558__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_197558__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_197558__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_199022__) => {

/* harmony export */ __nested_webpack_require_199022__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_200129__) => {

/* harmony export */ __nested_webpack_require_200129__.d(__webpack_exports__, {
/* harmony export */   "Selection": () => (/* binding */ Selection),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "root": () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_200129__(/*! ./select.js */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_200129__(/*! ./selectAll.js */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_200129__(/*! ./selectChild.js */ "./node_modules/d3-selection/src/selection/selectChild.js");
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_200129__(/*! ./selectChildren.js */ "./node_modules/d3-selection/src/selection/selectChildren.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_200129__(/*! ./filter.js */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_200129__(/*! ./data.js */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_200129__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_200129__(/*! ./exit.js */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_200129__(/*! ./join.js */ "./node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_200129__(/*! ./merge.js */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_200129__(/*! ./order.js */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_200129__(/*! ./sort.js */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_200129__(/*! ./call.js */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_200129__(/*! ./nodes.js */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_200129__(/*! ./node.js */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_200129__(/*! ./size.js */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_200129__(/*! ./empty.js */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_200129__(/*! ./each.js */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_200129__(/*! ./attr.js */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_200129__(/*! ./style.js */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_200129__(/*! ./property.js */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_200129__(/*! ./classed.js */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_200129__(/*! ./text.js */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_200129__(/*! ./html.js */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_200129__(/*! ./raise.js */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_200129__(/*! ./lower.js */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __nested_webpack_require_200129__(/*! ./append.js */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __nested_webpack_require_200129__(/*! ./insert.js */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __nested_webpack_require_200129__(/*! ./remove.js */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __nested_webpack_require_200129__(/*! ./clone.js */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __nested_webpack_require_200129__(/*! ./datum.js */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __nested_webpack_require_200129__(/*! ./on.js */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __nested_webpack_require_200129__(/*! ./dispatch.js */ "./node_modules/d3-selection/src/selection/dispatch.js");
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __nested_webpack_require_200129__(/*! ./iterator.js */ "./node_modules/d3-selection/src/selection/iterator.js");



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  data: _data_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  join: _join_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  selection: selection_selection,
  order: _order_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  call: _call_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  node: _node_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  size: _size_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  each: _each_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  property: _property_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_22__["default"],
  html: _html_js__WEBPACK_IMPORTED_MODULE_23__["default"],
  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__["default"],
  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__["default"],
  append: _append_js__WEBPACK_IMPORTED_MODULE_26__["default"],
  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__["default"],
  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__["default"],
  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__["default"],
  on: _on_js__WEBPACK_IMPORTED_MODULE_31__["default"],
  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__["default"],
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__["default"]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_208857__) => {

/* harmony export */ __nested_webpack_require_208857__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_208857__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_208857__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_210267__) => {

/* harmony export */ __nested_webpack_require_210267__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_211081__) => {

/* harmony export */ __nested_webpack_require_211081__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_212177__) => {

/* harmony export */ __nested_webpack_require_212177__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(lower);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_212935__) => {

/* harmony export */ __nested_webpack_require_212935__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_212935__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(merges, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_214324__) => {

/* harmony export */ __nested_webpack_require_214324__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_215169__) => {

/* harmony export */ __nested_webpack_require_215169__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_215801__) => {

/* harmony export */ __nested_webpack_require_215801__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_218415__) => {

/* harmony export */ __nested_webpack_require_218415__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_219394__) => {

/* harmony export */ __nested_webpack_require_219394__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_220598__) => {

/* harmony export */ __nested_webpack_require_220598__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(raise);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_221327__) => {

/* harmony export */ __nested_webpack_require_221327__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(remove);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_222071__) => {

/* harmony export */ __nested_webpack_require_222071__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_222071__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_222071__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select !== "function") select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_223663__) => {

/* harmony export */ __nested_webpack_require_223663__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_223663__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_223663__(/*! ../array.js */ "./node_modules/d3-selection/src/array.js");
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_223663__(/*! ../selectorAll.js */ "./node_modules/d3-selection/src/selectorAll.js");




function arrayAll(select) {
  return function() {
    return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(select.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(subgroups, parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChild.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChild.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_225503__) => {

/* harmony export */ __nested_webpack_require_225503__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_225503__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChildren.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChildren.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_226687__) => {

/* harmony export */ __nested_webpack_require_226687__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_226687__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_227849__) => {

/* harmony export */ __nested_webpack_require_227849__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_228566__) => {

/* harmony export */ __nested_webpack_require_228566__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_228566__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_230002__) => {

/* harmony export */ __nested_webpack_require_230002__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {
  return new Array(update.length);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_230660__) => {

/* harmony export */ __nested_webpack_require_230660__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styleValue": () => (/* binding */ styleValue)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_230660__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_232435__) => {

/* harmony export */ __nested_webpack_require_232435__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_233522__) => {

/* harmony export */ __nested_webpack_require_233522__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_234245__) => {

/* harmony export */ __nested_webpack_require_234245__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_234987__) => {

/* harmony export */ __nested_webpack_require_234987__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_235671__) => {

/* harmony export */ __nested_webpack_require_235671__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_236428__) => {

/* harmony export */ __nested_webpack_require_236428__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_236428__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_237356__) => {

/* harmony export */ __nested_webpack_require_237356__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_240863__) => {

/* harmony export */ __nested_webpack_require_240863__.d(__webpack_exports__, {
/* harmony export */   "interrupt": () => (/* reexport safe */ _interrupt_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_240863__(/*! ./selection/index.js */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_240863__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");






/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_241755__) => {

/* harmony export */ __nested_webpack_require_241755__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_241755__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.STARTING && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDING;
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __nested_webpack_require_243325__) => {

/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_243325__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_243325__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_243325__(/*! ./transition.js */ "./node_modules/d3-transition/src/selection/transition.js");




d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__["default"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_244479__) => {

/* harmony export */ __nested_webpack_require_244479__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_244479__(/*! ../interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  return this.each(function() {
    (0,_interrupt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, name);
  });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_245402__) => {

/* harmony export */ __nested_webpack_require_245402__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_245402__(/*! ../transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_245402__(/*! ../transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_245402__(/*! d3-ease */ "./node_modules/d3-ease/src/cubic.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_245402__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_0__.cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition) {
    id = name._id, name = name._name;
  } else {
    id = (0,_transition_index_js__WEBPACK_IMPORTED_MODULE_1__.newId)(), (timing = defaultTiming).time = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__.now)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0,_transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(groups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_247858__) => {

/* harmony export */ __nested_webpack_require_247858__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_247858__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_247858__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_247858__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_247858__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__.interpolateTransformSvg : _interpolate_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_3__.tweenValue)(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_251792__) => {

/* harmony export */ __nested_webpack_require_251792__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_251792__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_253701__) => {

/* harmony export */ __nested_webpack_require_253701__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_253701__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function delayFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).delay;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_255089__) => {

/* harmony export */ __nested_webpack_require_255089__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_255089__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function durationFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).duration;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_256480__) => {

/* harmony export */ __nested_webpack_require_256480__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_256480__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).ease;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/easeVarying.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/easeVarying.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_257673__) => {

/* harmony export */ __nested_webpack_require_257673__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_257673__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/end.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/end.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_258799__) => {

/* harmony export */ __nested_webpack_require_258799__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_258799__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_260413__) => {

/* harmony export */ __nested_webpack_require_260413__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_260413__(/*! d3-selection */ "./node_modules/d3-selection/src/matcher.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_260413__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(subgroups, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_261915__) => {

/* harmony export */ __nested_webpack_require_261915__.d(__webpack_exports__, {
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "newId": () => (/* binding */ newId)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_261915__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_261915__(/*! ./attr.js */ "./node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_261915__(/*! ./attrTween.js */ "./node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_261915__(/*! ./delay.js */ "./node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_261915__(/*! ./duration.js */ "./node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_261915__(/*! ./ease.js */ "./node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_261915__(/*! ./easeVarying.js */ "./node_modules/d3-transition/src/transition/easeVarying.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_261915__(/*! ./filter.js */ "./node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_261915__(/*! ./merge.js */ "./node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_261915__(/*! ./on.js */ "./node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_261915__(/*! ./remove.js */ "./node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_261915__(/*! ./select.js */ "./node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_261915__(/*! ./selectAll.js */ "./node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_261915__(/*! ./selection.js */ "./node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_261915__(/*! ./style.js */ "./node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_261915__(/*! ./styleTween.js */ "./node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_261915__(/*! ./text.js */ "./node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_261915__(/*! ./textTween.js */ "./node_modules/d3-transition/src/transition/textTween.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_261915__(/*! ./transition.js */ "./node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_261915__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_261915__(/*! ./end.js */ "./node_modules/d3-transition/src/transition/end.js");






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  easeVarying: _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  end: _end_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_268186__) => {

/* harmony export */ __nested_webpack_require_268186__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_268186__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_268186__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_268186__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_268186__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/string.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["default"]
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_1__["default"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"]
      : (c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"])(a, b);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_269872__) => {

/* harmony export */ __nested_webpack_require_269872__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_269872__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(merges, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_271273__) => {

/* harmony export */ __nested_webpack_require_271273__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_271273__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__.init : _schedule_js__WEBPACK_IMPORTED_MODULE_0__.set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_272981__) => {

/* harmony export */ __nested_webpack_require_272981__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.on("end.remove", removeFunction(this._id));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_273872__) => {

/* harmony export */ __nested_webpack_require_273872__.d(__webpack_exports__, {
/* harmony export */   "ENDED": () => (/* binding */ ENDED),
/* harmony export */   "ENDING": () => (/* binding */ ENDING),
/* harmony export */   "STARTING": () => (/* binding */ STARTING),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "set": () => (/* binding */ set)
/* harmony export */ });
/* unused harmony exports CREATED, SCHEDULED, STARTED, RUNNING */
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_273872__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_273872__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_273872__(/*! d3-timer */ "./node_modules/d3-timer/src/timeout.js");



var emptyOn = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_279990__) => {

/* harmony export */ __nested_webpack_require_279990__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_279990__(/*! d3-selection */ "./node_modules/d3-selection/src/selector.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_279990__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_279990__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(subgroup[i], name, id, i, subgroup, (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_281982__) => {

/* harmony export */ __nested_webpack_require_281982__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_281982__(/*! d3-selection */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_281982__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_281982__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_284028__) => {

/* harmony export */ __nested_webpack_require_284028__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_284028__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.constructor;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new Selection(this._groups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_284965__) => {

/* harmony export */ __nested_webpack_require_284965__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_284965__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_284965__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_284965__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_284965__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_284965__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name),
        string1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.set)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.interpolateTransformCss : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_4__.tweenValue)(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_289376__) => {

/* harmony export */ __nested_webpack_require_289376__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_290709__) => {

/* harmony export */ __nested_webpack_require_290709__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_290709__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction((0,_tween_js__WEBPACK_IMPORTED_MODULE_0__.tweenValue)(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/textTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/textTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_291962__) => {

/* harmony export */ __nested_webpack_require_291962__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_293176__) => {

/* harmony export */ __nested_webpack_require_293176__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_293176__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_293176__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var name = this._name,
      id0 = this._id,
      id1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newId)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id0);
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(groups, this._parents, name, id1);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_294886__) => {

/* harmony export */ __nested_webpack_require_294886__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tweenValue": () => (/* binding */ tweenValue)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_294886__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(node, id).value[name];
  };
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-zoom/src/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_297875__) => {

/* harmony export */ __nested_webpack_require_297875__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-zoom/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/event.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_298412__) => {

/* harmony export */ __nested_webpack_require_298412__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomEvent)
/* harmony export */ });
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    transform: {value: transform, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_299294__) => {

/* harmony export */ __nested_webpack_require_299294__.d(__webpack_exports__, {
/* harmony export */   "zoom": () => (/* reexport safe */ _zoom_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_299294__(/*! ./zoom.js */ "./node_modules/d3-zoom/src/zoom.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_299294__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");




/***/ }),

/***/ "./node_modules/d3-zoom/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-zoom/src/noevent.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_300097__) => {

/* harmony export */ __nested_webpack_require_300097__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nopropagation": () => (/* binding */ nopropagation)
/* harmony export */ });
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/transform.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-zoom/src/transform.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_300885__) => {

/* harmony export */ __nested_webpack_require_300885__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ Transform),
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
/* unused harmony export default */
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/zoom.js":
/*!******************************************!*\
  !*** ./node_modules/d3-zoom/src/zoom.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_302806__) => {

/* harmony export */ __nested_webpack_require_302806__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_302806__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_302806__(/*! d3-drag */ "./node_modules/d3-drag/src/nodrag.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_302806__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_302806__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_302806__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_302806__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_302806__(/*! ./constant.js */ "./node_modules/d3-zoom/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_302806__(/*! ./event.js */ "./node_modules/d3-zoom/src/event.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_302806__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_302806__(/*! ./noevent.js */ "./node_modules/d3-zoom/src/noevent.js");










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || _transform_js__WEBPACK_IMPORTED_MODULE_3__.identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_5__["default"],
      listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_6__["default"])("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(_transform_js__WEBPACK_IMPORTED_MODULE_3__.identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this.that).datum();
      listeners.call(
        type,
        this.that,
        new _event_js__WEBPACK_IMPORTED_MODULE_2__["default"](type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
      g.start();
    }

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    (0,d3_drag__WEBPACK_IMPORTED_MODULE_9__["default"])(event.view);
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
    g.mouse = [p, this.__zoom.invert(p)];
    (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
    g.start();

    function mousemoved(event) {
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      (0,d3_drag__WEBPACK_IMPORTED_MODULE_9__.yesdrag)(event.view, g.moved);
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
    if (duration > 0) (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this).transition().duration(duration).call(schedule, t1, p0, event);
    else (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}


/***/ }),

/***/ "./node_modules/d3/src/index.js":
/*!**************************************!*\
  !*** ./node_modules/d3/src/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_321835__) => {

/* harmony export */ __nested_webpack_require_321835__.d(__webpack_exports__, {
/* harmony export */   "drag": () => (/* reexport safe */ d3_drag__WEBPACK_IMPORTED_MODULE_1__.drag),
/* harmony export */   "pointer": () => (/* reexport safe */ d3_selection__WEBPACK_IMPORTED_MODULE_2__.pointer),
/* harmony export */   "select": () => (/* reexport safe */ d3_selection__WEBPACK_IMPORTED_MODULE_2__.select),
/* harmony export */   "zoom": () => (/* reexport safe */ d3_zoom__WEBPACK_IMPORTED_MODULE_4__.zoom)
/* harmony export */ });
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_321835__(/*! d3-brush */ "./node_modules/d3-brush/src/index.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_321835__(/*! d3-drag */ "./node_modules/d3-drag/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_321835__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_321835__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_321835__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");
































/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_323366__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_323366__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_323366__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__nested_webpack_require_323366__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nested_webpack_require_323366__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nested_webpack_require_323366__.o(definition, key) && !__nested_webpack_require_323366__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nested_webpack_require_323366__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__nested_webpack_require_323366__.nc = undefined;
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/dag.js ***!
  \********************/
/* harmony export */ __nested_webpack_require_323366__.d(__webpack_exports__, {
/* harmony export */   "CustomInputVertexConnector": () => (/* reexport safe */ _vertices_connector__WEBPACK_IMPORTED_MODULE_3__.CustomInputVertexConnector),
/* harmony export */   "EdgeSerializable": () => (/* reexport safe */ _serialization_serialize__WEBPACK_IMPORTED_MODULE_4__.EdgeSerializable),
/* harmony export */   "Graph": () => (/* reexport safe */ _graphs_graph__WEBPACK_IMPORTED_MODULE_1__.Graph),
/* harmony export */   "GraphSerializable": () => (/* reexport safe */ _serialization_serialize__WEBPACK_IMPORTED_MODULE_4__.GraphSerializable),
/* harmony export */   "InputVertexConnector": () => (/* reexport safe */ _vertices_connector__WEBPACK_IMPORTED_MODULE_3__.InputVertexConnector),
/* harmony export */   "MouseCoordinate": () => (/* reexport safe */ _misc_pojo__WEBPACK_IMPORTED_MODULE_2__.MouseCoordinate),
/* harmony export */   "OutputVertexConnector": () => (/* reexport safe */ _vertices_connector__WEBPACK_IMPORTED_MODULE_3__.OutputVertexConnector),
/* harmony export */   "ShapeSize": () => (/* reexport safe */ _misc_pojo__WEBPACK_IMPORTED_MODULE_2__.ShapeSize),
/* harmony export */   "Vertex": () => (/* reexport safe */ _vertices_vertex__WEBPACK_IMPORTED_MODULE_0__.Vertex),
/* harmony export */   "VertexConnectorSerializable": () => (/* reexport safe */ _serialization_serialize__WEBPACK_IMPORTED_MODULE_4__.VertexConnectorSerializable),
/* harmony export */   "VertexSerializable": () => (/* reexport safe */ _serialization_serialize__WEBPACK_IMPORTED_MODULE_4__.VertexSerializable)
/* harmony export */ });
/* harmony import */ var _vertices_vertex__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_323366__(/*! ./vertices/vertex */ "./src/vertices/vertex.js");
/* harmony import */ var _graphs_graph__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_323366__(/*! ./graphs/graph */ "./src/graphs/graph.js");
/* harmony import */ var _misc_pojo__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_323366__(/*! ./misc/pojo */ "./src/misc/pojo.js");
/* harmony import */ var _vertices_connector__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_323366__(/*! ./vertices/connector */ "./src/vertices/connector.js");
/* harmony import */ var _serialization_serialize__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_323366__(/*! ./serialization/serialize */ "./src/serialization/serialize.js");
/* harmony import */ var _dag_css__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_323366__(/*! ./dag.css */ "./src/dag.css");
/* SPDX-License-Identifier: GPL-3.0-only */


/* basic usage */





/* import/export */


/* styles */

})();

var __webpack_exports__CustomInputVertexConnector = __webpack_exports__.CustomInputVertexConnector;
var __webpack_exports__EdgeSerializable = __webpack_exports__.EdgeSerializable;
var __webpack_exports__Graph = __webpack_exports__.Graph;
var __webpack_exports__GraphSerializable = __webpack_exports__.GraphSerializable;
var __webpack_exports__InputVertexConnector = __webpack_exports__.InputVertexConnector;
var __webpack_exports__MouseCoordinate = __webpack_exports__.MouseCoordinate;
var __webpack_exports__OutputVertexConnector = __webpack_exports__.OutputVertexConnector;
var __webpack_exports__ShapeSize = __webpack_exports__.ShapeSize;
var __webpack_exports__Vertex = __webpack_exports__.Vertex;
var __webpack_exports__VertexConnectorSerializable = __webpack_exports__.VertexConnectorSerializable;
var __webpack_exports__VertexSerializable = __webpack_exports__.VertexSerializable;


//# sourceMappingURL=dag.debug.js.map

/***/ }),

/***/ "./src/assets/tile.png":
/*!*****************************!*\
  !*** ./src/assets/tile.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbe7a47e69fceb215897.png";

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// no jsonp function
/******/ })();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__webpack_require__.nc = undefined;
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/* harmony import */ var dag_builder_js_dist_dag_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dag-builder-js/dist/dag.debug */ "../dist/dag.debug.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






/* Catalog of actions */
const catalog = [
    {
        title: 'Dataset Reader',
        inputs: [
            { order: 0, name: 'path', type: 'str' },
        ],
        outputs: [
            { order: 0, name: 'dataset', type: 'List[List[float]]' },
        ],
    },
    {
        title: 'Split Dataset',
        inputs: [
            { order: 0, name: 'dataset', type: 'List[List[float]]' },
        ],
        outputs: [
            { order: 0, name: 'train_dataset', type: 'List[List[float]]' },
            { order: 1, name: 'test_dataset', type: 'List[List[float]]' },
        ],
    },
    {
        title: 'Shuffle Dataset',
        inputs: [
            { order: 0, name: 'dataset', type: 'List[List[float]]' },
        ],
        outputs: [
            { order: 0, name: 'shuffled_dataset', type: 'List[List[float]]' },
        ],
    },
    {
        title: 'Normalise Dataset',
        inputs: [
            { order: 0, name: 'dataset', type: 'List[List[float]]' },
        ],
        outputs: [
            { order: 0, name: 'norm_dataset', type: 'List[List[float]]' },
        ],
    },
    {
        title: 'ResNet CNN Model',
        inputs: [
            { order: 0, name: 'layers', type: 'List[Layers]' },
        ],
        outputs: [
            { order: 0, name: 'model', type: 'Model' },
        ],
    },
    {
        title: 'Train',
        inputs: [
            { order: 0, name: 'model', type: 'Model' },
            { order: 1, name: 'train_dataset', type: 'List[List[float]]' },
            { order: 2, name: 'test_dataset', type: 'List[List[float]]' },
        ],
        outputs: [
            { order: 0, name: 'results', type: 'List[List[float]]' },
        ],
    },
];

/* Dag-build-js initialisation */
const graph = new dag_builder_js_dist_dag_debug__WEBPACK_IMPORTED_MODULE_2__.Graph('#graph');
graph.readOnly = true;

graph.addVertexAddedListener((_type, _graph, vertex) => console.log('onVertexAdded', vertex)); // optional
graph.addVertexRemovedListener((_type, _graph, vertex) => console.log('onVertexRemoved', vertex)); // optional
graph.addEdgeAddedListener((_type, _graph, edge) => console.log('onEdgeAdded', edge)); // optional
graph.addEdgeRemovedListener((_type, _graph, edge) => console.log('onEdgeRemoved', edge)); // optional

/* Custom Input event */
graph.addCustomInputEdgeConnectorClickedListener((_type, _graph, vertex, edge, event) => {
    console.log('customInputClickHandler', vertex, edge, event);
    edge.customValue = edge.customValue ? edge.customValue + 1 : 1;
}); // optional

/* Drag and Drop events */
const graphEl = document.getElementById('graph');

document.addEventListener('dragstart', (event) => {
    const catalogId = event.target.getAttribute('catalog-id');
    event.dataTransfer.setData("text/plain", catalogId);
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
});

graphEl.addEventListener('drop', (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData("text/plain");
    const item = catalog[parseInt(data)];

    let pointer = graph.translateCoordinates(event);
    let shape = new dag_builder_js_dist_dag_debug__WEBPACK_IMPORTED_MODULE_2__.ShapeSize(200, 150);

    graph.appendVertex(new dag_builder_js_dist_dag_debug__WEBPACK_IMPORTED_MODULE_2__.Vertex(
        new dag_builder_js_dist_dag_debug__WEBPACK_IMPORTED_MODULE_2__.MouseCoordinate(pointer[0] - shape.width / 2, pointer[1]),
        shape,
        item.title,
        item.inputs.map((i) => new dag_builder_js_dist_dag_debug__WEBPACK_IMPORTED_MODULE_2__.CustomInputVertexConnector(i.order, i.name, i.type)),
        item.outputs.map((i) => new dag_builder_js_dist_dag_debug__WEBPACK_IMPORTED_MODULE_2__.OutputVertexConnector(i.order, i.name, i.type)),
    ));

    graph.update();

});

/* Toolbox actions */
document.getElementById('upload-input').addEventListener('click', () => {
    document.getElementById('hidden-file-upload').click();
});

document.getElementById('hidden-file-upload').addEventListener('change', (event) => {
    const inputFile = document.getElementById('hidden-file-upload');
    const [file] = inputFile.files;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        const txtRes = reader.result;
        const jsonObj = JSON.parse(txtRes);
        const graphSerializable = Object.assign(new dag_builder_js_dist_dag_debug__WEBPACK_IMPORTED_MODULE_2__.GraphSerializable, jsonObj);
        graph.import(graphSerializable);
    }, false);

    if (file) {
        reader.readAsText(file);
        inputFile.value = '';
    }
});

document.getElementById('download-input').addEventListener('click', () => {
    const output = graph.export();
    const blob = new Blob([JSON.stringify(output)], { type: "text/plain;charset=utf-8" });
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "dag.json");
});

document.getElementById('delete-graph').addEventListener('click', () => {
    graph.clear();
});
})();


//# sourceMappingURL=demo.js.map