/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(17), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".inputSelect {\n  width: 200px;\n  height: 17px;\n  text-align: center;\n  font-size: 12px;\n  font-style: italic;\n  border: none;\n  border-radius: 10px;\n  background-color: rgba(254, 247, 247, 0.8);\n}\n\n.upper-div {\n  margin: 15px 0 10px;\n}\n\n.bottom-div {\n  margin-bottom: 20px;\n}\n\n.paragraph-style {\n  margin-bottom: 5px;\n  font-size: 15px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  font-family: \"Montserrat\", sans-serif;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.navigation {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 75px;\n  background-color: rgba(226, 213, 213, 0.4509803922);\n}\n.navigation__date-hour, .navigation__arrival-weather, .navigation__login {\n  width: 100px;\n}\n.navigation__arrival-weather, .navigation__login {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navigation__arrival-weather, .navigation__date-hour {\n  font-size: 14px;\n  text-align: center;\n}\n.navigation__date-hour {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n}\n.navigation__date-hour__date--margin {\n  margin: 5px 0;\n}\n.navigation__date-hour__date--margin i {\n  margin-right: 5px;\n}\n.navigation__date-hour__time--padding {\n  margin-bottom: 5px;\n  padding-bottom: 3px;\n}\n.navigation__date-hour__time--padding i {\n  margin-right: 5px;\n}\n.navigation__login__login-button--colors {\n  padding: 7px 10px;\n  font-size: 14px;\n  font-style: italic;\n  font-weight: bold;\n  color: #fff;\n  background-color: rgba(55, 101, 240, 0.497);\n  border: 1px solid black;\n  border-radius: 5px;\n  box-shadow: 1px 1px 2px #fff;\n}\n.navigation__login-panel {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: none;\n  height: 800px;\n  width: 90vw;\n  border-radius: 20px;\n  z-index: 5;\n}\n.navigation__login-panel__inputs {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  z-index: 5;\n}\n.navigation__login-panel__inputs input {\n  margin: 10px 0;\n  padding: 5px;\n  width: 50%;\n}\n.navigation__login-panel__inputs button {\n  margin-top: 20px;\n  padding: 10px 30px;\n  font-size: 15px;\n  font-weight: bold;\n  color: #fff;\n  background-color: rgba(55, 101, 240, 0.497);\n  border: 2px solid rgba(254, 247, 247, 0.451);\n  border-radius: 15px;\n  transition: background-color 1s, color 1s, border 1s;\n}\n.navigation__login-panel__inputs button:hover {\n  color: royalblue;\n  background-color: #fff;\n  border: 1px solid royalblue;\n}\n.navigation__login-panel__inputs i {\n  position: absolute;\n  top: -60%;\n  right: 5%;\n  padding: 10px;\n  font-size: 30px;\n}\n.navigation__login-panel__error {\n  position: absolute;\n  top: -50%;\n  z-index: 6;\n  color: red;\n  font-size: 17px;\n}\n\n.header {\n  position: relative;\n  width: 100%;\n  height: 130px;\n  background-color: rgba(55, 101, 240, 0.497);\n}\n.header__text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.header__text__headline--font {\n  font-size: 24px;\n  text-align: center;\n}\n.header__text__paragraph--style {\n  margin-top: 8px;\n  text-align: center;\n  font-size: 16px;\n}\n\n.container {\n  position: relative;\n  height: 650px;\n}\n.container__panel {\n  height: 100%;\n  background-color: rgba(254, 247, 247, 0.451);\n}\n.container__panel__flight-places, .container__panel__passengers, .container__panel__travel-date {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.container__panel__flight-places__departure, .container__panel__flight-places__arrival {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n.container__panel__passengers__adults, .container__panel__passengers__childrens {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n.container__panel__travel-date__departure-date, .container__panel__travel-date__return-date {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n.container__panel__luggage {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container__panel__submit-button {\n  position: absolute;\n  left: 50%;\n  bottom: 3%;\n  transform: translateX(-50%);\n  padding: 2px 10px;\n  font-size: 25px;\n  border-radius: 5px;\n  background-color: transparent;\n  color: rgb(65, 105, 225);\n}\n.container__panel__info {\n  background-color: rgba(55, 101, 240, 0.497);\n  font-size: 1rem;\n  padding: 5px 0;\n  text-align: center;\n}\n.container__error {\n  display: none;\n  position: absolute;\n  bottom: 11%;\n  width: 100%;\n  font-size: 15px;\n  text-align: center;\n}\n\n.summary {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  display: none;\n  width: 100%;\n}\n.summary__informations {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 30%;\n  width: 100%;\n  padding: 5px;\n  border: 10px double rgba(55, 101, 240, 0.497);\n}\n.summary__informations__header {\n  text-align: center;\n  font-style: italic;\n  font-weight: 700;\n  color: rgba(55, 101, 240, 0.497);\n}\n.summary__informations__panel-first, .summary__informations__panel-second {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  margin-top: 5px;\n  padding: 7px 5px;\n  width: 100%;\n  background-color: rgba(55, 101, 240, 0.497);\n  color: rgb(233, 229, 229);\n  border-radius: 10px;\n  font-weight: 400;\n}\n.summary__informations__panel-first div, .summary__informations__panel-second div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 110px;\n  text-align: center;\n  font-size: 14px;\n}\n.summary__informations__panel-first i, .summary__informations__panel-second i {\n  margin-bottom: 5px;\n}\n.summary__informations__panel-first__departure-date div {\n  flex-direction: row;\n  margin-bottom: 5px;\n}\n.summary__informations__panel-first__departure-date div i {\n  margin: 0 5px;\n}\n.summary__informations__panel-second__return-date div {\n  flex-direction: row;\n  margin-bottom: 5px;\n}\n.summary__informations__panel-second__return-date div i {\n  margin: 0 5px;\n}\n.summary__informations__panel-second__passengers div {\n  display: inline-block;\n  margin: 2px 0;\n}\n.summary__informations__panel-second__passengers div i {\n  margin: 0 2px;\n}\n.summary__flights {\n  background-color: rgba(254, 247, 247, 0.451);\n  height: 80%;\n  width: 100%;\n}\n.summary__flights__flightInfo {\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  grid-template-rows: 1fr 3fr;\n  margin: 30px auto;\n  width: 90%;\n  height: 100px;\n  background-color: rgba(55, 101, 240, 0.497);\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid rgba(254, 247, 247, 0.451);\n}\n.summary__flights__flightInfo__paragraph {\n  margin-top: 10px;\n  font-size: 16px;\n  text-align: center;\n}\n.summary__flights__flightErrorInfo {\n  margin: 50px 20px 0;\n  font-size: 20px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.footer {\n  height: 50px;\n  width: 100%;\n  background-color: rgba(55, 101, 240, 0.497);\n  border-top: 1px solid black;\n}\n.footer__rights {\n  margin-top: 5px;\n  padding-bottom: 7px;\n  font-style: italic;\n  font-size: 12px;\n  text-align: center;\n}\n.footer .footer-links {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  margin-bottom: 10px;\n}\n.footer .footer-links__link {\n  margin: 0 8px;\n}\n.footer .footer-links__link i {\n  margin-right: 5px;\n}\n.footer .footer-links a {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 768px) {\n  .upper-div,\n  .bottom-div {\n    margin: 0px;\n  }\n  .inputSelect {\n    width: 260px;\n    height: 25px;\n    text-align: center;\n    font-size: 18px;\n    font-style: italic;\n    border: none;\n    border-radius: 10px;\n    background-color: rgba(254, 247, 247, 0.8);\n  }\n  .paragraph-style {\n    margin-bottom: 15px;\n    font-size: 20px;\n  }\n  body {\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n  .navigation {\n    height: 100px;\n  }\n  .navigation__date-hour, .navigation__arrival-weather, .navigation__login {\n    width: 140px;\n  }\n  .navigation__date-hour, .navigation__arrival-weather {\n    font-size: 20px;\n  }\n  .navigation__date-hour__date--margin, .navigation__arrival-weather__date--margin {\n    margin: 15px 0;\n  }\n  .navigation__date-hour__time--padding, .navigation__arrival-weather__time--padding {\n    margin-bottom: 10px;\n  }\n  .navigation__login__login-button--colors {\n    padding: 8px 15px;\n    font-size: 20px;\n  }\n  .navigation__login-panel {\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 1000px;\n  }\n  .navigation__login-panel__inputs input {\n    margin: 20px 0;\n    padding: 10px;\n  }\n  .navigation__login-panel__inputs button {\n    margin-top: 25px;\n    padding: 12px 40px;\n    font-size: 18px;\n  }\n  .navigation__login-panel__error {\n    font-size: 22px;\n  }\n  .header {\n    height: 165px;\n  }\n  .header__text__headline--font {\n    font-size: 35px;\n  }\n  .header__text__paragraph--style {\n    margin-top: 25px;\n    font-size: 22px;\n  }\n  .container {\n    position: relative;\n    height: 900px;\n  }\n  .container__panel__flight-places, .container__panel__passengers, .container__panel__travel-date {\n    height: 170px;\n    flex-direction: row;\n  }\n  .container__panel__submit-button {\n    bottom: 5%;\n    padding: 8px 21px;\n    font-size: 32px;\n    border-radius: 15px;\n  }\n  .container__panel__luggage {\n    height: 120px;\n  }\n  .container__panel__luggage__info,\n  .container__panel__luggage p {\n    margin-bottom: 20px;\n    font-size: 25px;\n  }\n  .container__panel__info {\n    background-color: rgba(55, 101, 240, 0.497);\n    font-size: 20px;\n    padding: 7px 0;\n    text-align: center;\n  }\n  .container__error {\n    display: none;\n    bottom: 16%;\n    font-size: 22px;\n  }\n  .summary__informations {\n    height: 30%;\n  }\n  .summary__informations__header {\n    font-size: 30px;\n  }\n  .summary__informations__panel-first, .summary__informations__panel-second {\n    padding: 10px 20px;\n  }\n  .summary__informations__panel-first div, .summary__informations__panel-second div {\n    width: 130px;\n    font-size: 16px;\n  }\n  .summary__flights__flightInfo {\n    margin: 35px auto;\n    height: 130px;\n  }\n  .summary__flights__flightInfo__paragraph {\n    margin-top: 15px;\n    font-size: 20px;\n  }\n  .summary__flights__flightErrorInfo {\n    margin: 50px 15px 0;\n    font-size: 23px;\n  }\n  .footer {\n    height: 75px;\n  }\n  .footer__rights {\n    margin-top: 10px;\n    font-size: 18px;\n  }\n  .footer .footer-links {\n    margin-top: 5px;\n    font-size: 13px;\n  }\n  .footer .footer-links__link {\n    margin: 0 50px;\n  }\n  .footer .footer-links__link i {\n    margin-right: 10px;\n  }\n}\n@media screen and (min-width: 992px) {\n  .paragraph-style {\n    margin-bottom: 20px;\n    font-size: 25px;\n  }\n  .inputSelect {\n    width: 400px;\n    height: 25px;\n    text-align: center;\n    font-size: 20px;\n    font-style: italic;\n    border: none;\n    border-radius: 10px;\n    background-color: rgba(254, 247, 247, 0.8);\n  }\n  body {\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 100%;\n  }\n  .navigation {\n    height: 130px;\n  }\n  .navigation__date-hour, .navigation__arrival-weather, .navigation__login {\n    width: 200px;\n  }\n  .navigation__date-hour {\n    font-size: 20px;\n  }\n  .navigation__date-hour__date--margin {\n    margin: 18px 0;\n  }\n  .navigation__date-hour__time--padding {\n    padding-bottom: 3px;\n    margin-bottom: 10px;\n  }\n  .navigation__login__login-button--colors {\n    font-size: 20px;\n    padding: 10px 20px;\n    transition: background-color 0.5s, color 0.5s;\n  }\n  .navigation__login__login-button--colors:hover {\n    padding: 9px 19px;\n    border: 2px solid black;\n    color: rgb(55, 101, 240);\n    background-color: transparent;\n  }\n  .navigation__login-panel {\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 90vh;\n    width: 75vw;\n  }\n  .navigation__login-panel__inputs input {\n    padding: 10px;\n    font-size: 15px;\n  }\n  .navigation__login-panel__inputs button {\n    padding: 15px 40px;\n    font-size: 25px;\n  }\n  .navigation__login-panel__error {\n    font-size: 25px;\n  }\n  .header {\n    height: 200px;\n  }\n  .header__text__headline--font {\n    font-size: 38px;\n  }\n  .header__text__paragraph--style {\n    margin-top: 15px;\n    font-size: 25px;\n  }\n  .container {\n    height: 1000px;\n  }\n  .container__panel__flight-places, .container__panel__passengers, .container__panel__travel-date {\n    height: 190px;\n  }\n  .container__panel__luggage {\n    height: 120px;\n  }\n  .container__panel__submit-button {\n    font-size: 35px;\n    bottom: 5%;\n    transition: padding 0.5s, color 0.5s, background-color 0.5s;\n  }\n  .container__panel__submit-button:hover {\n    padding: 8px 30px;\n    background-color: rgba(55, 101, 240, 0.497);\n    color: #fff;\n  }\n  .container__panel__submit-button:hover > #icon {\n    animation: discoverIcon 0.5s;\n    animation-fill-mode: forwards;\n  }\n  .container__panel__info {\n    font-size: 22px;\n  }\n  .container__error {\n    bottom: 15%;\n    font-size: 25px;\n  }\n  .summary {\n    flex-direction: row;\n  }\n  .summary__informations {\n    justify-content: flex-start;\n    height: 100%;\n    width: 30%;\n    border: none;\n  }\n  .summary__informations__header {\n    margin: 50px 0 15px;\n    color: royalblue;\n  }\n  .summary__informations__panel-first, .summary__informations__panel-second {\n    margin: 15px 0;\n    background: none;\n    color: royalblue;\n  }\n  .summary__informations__panel-first div, .summary__informations__panel-second div {\n    display: inline;\n    margin: 10px 0;\n    width: 220px;\n    height: 50px;\n    line-height: 50px;\n    text-align: left;\n    font-size: 20px;\n  }\n  .summary__informations__panel-first i, .summary__informations__panel-second i {\n    text-align: left;\n    margin-right: 20px;\n  }\n  .summary__flights {\n    position: relative;\n    background-color: rgba(254, 247, 247, 0.451);\n    height: 100%;\n    width: 80%;\n  }\n  .summary__flights__flightInfo {\n    margin: 30px auto 20px;\n    height: 170px;\n    border: 4px solid royalblue;\n    border-radius: 20px;\n    background: none;\n  }\n  .summary__flights__flightInfo :first-child {\n    border-top-left-radius: 16px;\n  }\n  .summary__flights__flightInfo :nth-child(4) {\n    border-top-right-radius: 16px;\n  }\n  .summary__flights__flightInfo :nth-child(-n+4) {\n    border-bottom: 2px outset royalblue;\n    background-color: royalblue;\n    color: #fff;\n  }\n  .summary__flights__flightInfo__paragraph {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: royalblue;\n    margin-top: 0;\n    font-size: 20px;\n  }\n  .summary__flights__flightErrorInfo {\n    position: absolute;\n    top: 50%;\n    margin: 0 10px;\n    transform: translateY(-50%);\n  }\n  .footer {\n    height: 80px;\n  }\n  .footer__rights {\n    font-size: 20px;\n  }\n  .footer .footer-links {\n    font-size: 15px;\n  }\n  .footer .footer-links__link {\n    margin: 0 64px;\n  }\n}\n.errorAnimation {\n  animation: showError 1s;\n  animation-fill-mode: forwards;\n}\n\n.errorInfoAnimation {\n  animation: showInfoError 2s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes discoverIcon {\n  from {\n    font-size: 0;\n  }\n  to {\n    font-size: 40px;\n  }\n}\n@keyframes showError {\n  from {\n    left: -100%;\n  }\n  to {\n    left: 0%;\n    margin: 0 auto;\n  }\n}\n@keyframes showInfoError {\n  from {\n    top: -50%;\n  }\n  to {\n    top: 30%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/partials/_mixins.scss","webpack://./src/scss/partials/_colors.scss"],"names":[],"mappings":"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","sourcesContent":["@import './partials/mixins';\r\n@import './partials/colors';\r\n\r\n$navFont: 14px;\r\n\r\n.inputSelect {\r\n\t@include inputStyle(200px, 17px, 12px);\r\n}\r\n.upper-div {\r\n\tmargin: 15px 0 10px;\r\n}\r\n.bottom-div {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.paragraph-style {\r\n\tmargin-bottom: 5px;\r\n\tfont-size: 15px;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\theight: 100vh;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\t@include imageCenter('/src/images/clouds640.jpg');\r\n}\r\n\r\n.navigation {\r\n\t@include dispayFlex(space-around, center);\r\n\theight: 75px;\r\n\tbackground-color: #e2d5d573;\r\n\r\n\t&__date-hour,\r\n\t&__arrival-weather,\r\n\t&__login {\r\n\t\twidth: 100px;\r\n\t}\r\n\r\n\t&__arrival-weather,\r\n\t&__login {\r\n\t\t@include flexCenter;\r\n\t}\r\n\r\n\t&__arrival-weather,\r\n\t&__date-hour {\r\n\t\tfont-size: $navFont;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t&__date-hour {\r\n\t\t@include dispayFlex(center, flex-start);\r\n\t\tflex-direction: column;\r\n\t\t&__date {\r\n\t\t\t&--margin {\r\n\t\t\t\tmargin: 5px 0;\r\n\t\t\t\ti {\r\n\t\t\t\t\tmargin-right: 5px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__time {\r\n\t\t\t&--padding {\r\n\t\t\t\tmargin-bottom: 5px;\r\n\t\t\t\tpadding-bottom: 3px;\r\n\t\t\t\ti {\r\n\t\t\t\t\tmargin-right: 5px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__login {\r\n\t\t&__login-button {\r\n\t\t\t&--colors {\r\n\t\t\t\tpadding: 7px 10px;\r\n\t\t\t\tfont-size: $navFont;\r\n\t\t\t\tfont-style: italic;\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\tcolor: $whiteColor;\r\n\t\t\t\tbackground-color: $primaryColor;\r\n\t\t\t\tborder: 1px solid black;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t\tbox-shadow: 1px 1px 2px #fff;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__login-panel {\r\n\t\t@include posAbsuluteCenter();\r\n\t\t@include dispayFlex(center, center);\r\n\t\t@include imageCenter('/src/images/Sky640.jpg');\r\n\t\tdisplay: none;\r\n\t\theight: 800px;\r\n\t\twidth: 90vw;\r\n\t\tborder-radius: 20px;\r\n\t\tz-index: 5;\r\n\r\n\t\t&__inputs {\r\n\t\t\tposition: relative;\r\n\t\t\t@include flexCenter();\r\n\t\t\tflex-direction: column;\r\n\t\t\twidth: 100%;\r\n\t\t\tz-index: 5;\r\n\t\t\tinput {\r\n\t\t\t\tmargin: 10px 0;\r\n\t\t\t\tpadding: 5px;\r\n\t\t\t\twidth: 50%;\r\n\t\t\t}\r\n\t\t\tbutton {\r\n\t\t\t\tmargin-top: 20px;\r\n\t\t\t\tpadding: 10px 30px;\r\n\t\t\t\tfont-size: 15px;\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\tcolor: $whiteColor;\r\n\t\t\t\tbackground-color: $primaryColor;\r\n\t\t\t\tborder: 2px solid $secondaryColor;\r\n\t\t\t\tborder-radius: 15px;\r\n\t\t\t\ttransition: background-color 1s, color 1s, border 1s;\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tcolor: royalblue;\r\n\t\t\t\t\tbackground-color: $whiteColor;\r\n\t\t\t\t\tborder: 1px solid royalblue;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\ti {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: -60%;\r\n\t\t\t\tright: 5%;\r\n\t\t\t\tpadding: 10px;\r\n\t\t\t\tfont-size: 30px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__error {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: -50%;\r\n\t\t\tz-index: 6;\r\n\t\t\tcolor: red;\r\n\t\t\tfont-size: 17px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.header {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 130px;\r\n\tbackground-color: $primaryColor;\r\n\t&__text {\r\n\t\t@include posAbsuluteCenter();\r\n\t\twidth: 100%;\r\n\t\t&__headline {\r\n\t\t\t&--font {\r\n\t\t\t\tfont-size: 24px;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__paragraph {\r\n\t\t\t&--style {\r\n\t\t\t\tmargin-top: 8px;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\tfont-size: 16px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.container {\r\n\tposition: relative;\r\n\theight: 650px;\r\n\t// display: none;\r\n\t&__panel {\r\n\t\theight: 100%;\r\n\t\tbackground-color: $secondaryColor;\r\n\r\n\t\t&__flight-places,\r\n\t\t&__passengers,\r\n\t\t&__travel-date {\r\n\t\t\t@include flexCenter();\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\t\t&__flight-places {\r\n\t\t\t&__departure,\r\n\t\t\t&__arrival {\r\n\t\t\t\t@include flexCenter();\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__passengers {\r\n\t\t\t&__adults,\r\n\t\t\t&__childrens {\r\n\t\t\t\t@include flexCenter();\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__travel-date {\r\n\t\t\t&__departure-date,\r\n\t\t\t&__return-date {\r\n\t\t\t\t@include flexCenter();\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__luggage {\r\n\t\t\t@include flexCenter();\r\n\t\t}\r\n\r\n\t\t&__submit-button {\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 50%;\r\n\t\t\tbottom: 3%;\r\n\t\t\ttransform: translateX(-50%);\r\n\t\t\tpadding: 2px 10px;\r\n\t\t\tfont-size: 25px;\r\n\t\t\tborder-radius: 5px;\r\n\t\t\tbackground-color: transparent;\r\n\t\t\tcolor: rgb(65, 105, 225);\r\n\t\t}\r\n\r\n\t\t&__info {\r\n\t\t\tbackground-color: $primaryColor;\r\n\t\t\tfont-size: 1rem;\r\n\t\t\tpadding: 5px 0;\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t}\r\n\r\n\t&__error {\r\n\t\tdisplay: none;\r\n\t\tposition: absolute;\r\n\t\tbottom: 11%;\r\n\t\twidth: 100%;\r\n\t\tfont-size: 15px;\r\n\t\ttext-align: center;\r\n\t}\r\n}\r\n.summary {\r\n\t@include posAbsuluteCenter;\r\n\t@include imageCenter('/src/images/clouds640.jpg');\r\n\t@include dispayFlex(center, flex-start);\r\n\tflex-direction: column;\r\n\tdisplay: none;\r\n\twidth: 100%;\r\n\t&__informations {\r\n\t\t&__header {\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-style: italic;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tcolor: $primaryColor;\r\n\t\t}\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: space-evenly;\r\n\t\theight: 30%;\r\n\t\twidth: 100%;\r\n\t\tpadding: 5px;\r\n\t\tborder: 10px double $primaryColor;\r\n\t\t&__panel-first,\r\n\t\t&__panel-second {\r\n\t\t\t@include dispayFlex(space-between, flex-start);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tmargin-top: 5px;\r\n\t\t\tpadding: 7px 5px;\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-color: $primaryColor;\r\n\t\t\tcolor: rgb(233, 229, 229);\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tfont-weight: 400;\r\n\t\t\tdiv {\r\n\t\t\t\t@include flexCenter;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\twidth: 110px;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t}\r\n\t\t\ti {\r\n\t\t\t\tmargin-bottom: 5px;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__panel-first {\r\n\t\t\t&__departure-date {\r\n\t\t\t\tdiv {\r\n\t\t\t\t\tflex-direction: row;\r\n\t\t\t\t\tmargin-bottom: 5px;\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tmargin: 0 5px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__panel-second {\r\n\t\t\t&__return-date {\r\n\t\t\t\tdiv {\r\n\t\t\t\t\tflex-direction: row;\r\n\t\t\t\t\tmargin-bottom: 5px;\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tmargin: 0 5px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__passengers {\r\n\t\t\t\tdiv {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\tmargin: 2px 0;\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tmargin: 0 2px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__flights {\r\n\t\tbackground-color: $secondaryColor;\r\n\t\theight: 80%;\r\n\t\twidth: 100%;\r\n\r\n\t\t&__flightInfo {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: repeat(4, auto);\r\n\t\t\tgrid-template-rows: 1fr 3fr;\r\n\t\t\tmargin: 30px auto;\r\n\t\t\twidth: 90%;\r\n\t\t\theight: 100px;\r\n\t\t\tbackground-color: $primaryColor;\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tcolor: $whiteColor;\r\n\t\t\tborder: 1px solid $secondaryColor;\r\n\t\t\t&__paragraph {\r\n\t\t\t\tmargin-top: 10px;\r\n\t\t\t\tfont-size: 16px;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__flightErrorInfo {\r\n\t\t\tmargin: 50px 20px 0;\r\n\t\t\tfont-size: 20px;\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-weight: 700;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.footer {\r\n\theight: 50px;\r\n\twidth: 100%;\r\n\tbackground-color: $primaryColor;\r\n\tborder-top: 1px solid black;\r\n\t&__rights {\r\n\t\tmargin-top: 5px;\r\n\t\tpadding-bottom: 7px;\r\n\t\tfont-style: italic;\r\n\t\tfont-size: 12px;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.footer-links {\r\n\t\t@include dispayFlex(center, center);\r\n\t\tfont-size: 10px;\r\n\t\tmargin-bottom: 10px;\r\n\t\t&__link {\r\n\t\t\tmargin: 0 8px;\r\n\t\t\ti {\r\n\t\t\t\tmargin-right: 5px;\r\n\t\t\t}\r\n\t\t}\r\n\t\ta {\r\n\t\t\tcolor: black;\r\n\t\t\ttext-decoration: none;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n\t.upper-div,\r\n\t.bottom-div {\r\n\t\tmargin: 0px;\r\n\t}\r\n\r\n\t.inputSelect {\r\n\t\t@include inputStyle(260px, 25px, 18px);\r\n\t}\r\n\r\n\t.paragraph-style {\r\n\t\tmargin-bottom: 15px;\r\n\t\tfont-size: 20px;\r\n\t}\r\n\tbody {\r\n\t\t@include imageCenter('/src/images/clouds1280.jpg');\r\n\t}\r\n\r\n\t.navigation {\r\n\t\theight: 100px;\r\n\t\t&__date-hour,\r\n\t\t&__arrival-weather,\r\n\t\t&__login {\r\n\t\t\twidth: 140px;\r\n\t\t}\r\n\t\t&__date-hour,\r\n\t\t&__arrival-weather {\r\n\t\t\tfont-size: 20px;\r\n\t\t\t&__date {\r\n\t\t\t\t&--margin {\r\n\t\t\t\t\tmargin: 15px 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__time {\r\n\t\t\t\t&--padding {\r\n\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__login {\r\n\t\t\t&__login-button {\r\n\t\t\t\t&--colors {\r\n\t\t\t\t\tpadding: 8px 15px;\r\n\t\t\t\t\tfont-size: 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__login-panel {\r\n\t\t\t@include imageCenter('/src/images/sky1280.jpg');\r\n\t\t\theight: 1000px;\r\n\t\t\t&__inputs {\r\n\t\t\t\tinput {\r\n\t\t\t\t\tmargin: 20px 0;\r\n\t\t\t\t\tpadding: 10px;\r\n\t\t\t\t}\r\n\t\t\t\tbutton {\r\n\t\t\t\t\tmargin-top: 25px;\r\n\t\t\t\t\tpadding: 12px 40px;\r\n\t\t\t\t\tfont-size: 18px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__error {\r\n\t\t\t\tfont-size: 22px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.header {\r\n\t\theight: 165px;\r\n\t\t&__text {\r\n\t\t\t&__headline {\r\n\t\t\t\t&--font {\r\n\t\t\t\t\tfont-size: 35px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__paragraph {\r\n\t\t\t\t&--style {\r\n\t\t\t\t\tmargin-top: 25px;\r\n\t\t\t\t\tfont-size: 22px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.container {\r\n\t\tposition: relative;\r\n\t\theight: 900px;\r\n\t\t&__panel {\r\n\t\t\t&__flight-places,\r\n\t\t\t&__passengers,\r\n\t\t\t&__travel-date {\r\n\t\t\t\theight: 170px;\r\n\t\t\t\tflex-direction: row;\r\n\t\t\t}\r\n\r\n\t\t\t&__submit-button {\r\n\t\t\t\tbottom: 5%;\r\n\t\t\t\tpadding: 8px 21px;\r\n\t\t\t\tfont-size: 32px;\r\n\t\t\t\tborder-radius: 15px;\r\n\t\t\t}\r\n\r\n\t\t\t&__luggage {\r\n\t\t\t\theight: 120px;\r\n\t\t\t\t&__info,\r\n\t\t\t\tp {\r\n\t\t\t\t\tmargin-bottom: 20px;\r\n\t\t\t\t\tfont-size: 25px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__info {\r\n\t\t\t\tbackground-color: $primaryColor;\r\n\t\t\t\tfont-size: 20px;\r\n\t\t\t\tpadding: 7px 0;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__error {\r\n\t\t\tdisplay: none;\r\n\t\t\tbottom: 16%;\r\n\t\t\tfont-size: 22px;\r\n\t\t}\r\n\t}\r\n\r\n\t.summary {\r\n\t\t&__informations {\r\n\t\t\theight: 30%;\r\n\t\t\t&__header {\r\n\t\t\t\tfont-size: 30px;\r\n\t\t\t}\r\n\t\t\t&__panel-first,\r\n\t\t\t&__panel-second {\r\n\t\t\t\tpadding: 10px 20px;\r\n\t\t\t\tdiv {\r\n\t\t\t\t\twidth: 130px;\r\n\t\t\t\t\tfont-size: 16px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__flights {\r\n\t\t\t&__flightInfo {\r\n\t\t\t\tmargin: 35px auto;\r\n\t\t\t\theight: 130px;\r\n\t\t\t\t&__paragraph {\r\n\t\t\t\t\tmargin-top: 15px;\r\n\t\t\t\t\tfont-size: 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__flightErrorInfo {\r\n\t\t\t\tmargin: 50px 15px 0;\r\n\t\t\t\tfont-size: 23px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.footer {\r\n\t\theight: 75px;\r\n\t\t&__rights {\r\n\t\t\tmargin-top: 10px;\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t\t.footer-links {\r\n\t\t\tmargin-top: 5px;\r\n\t\t\tfont-size: 13px;\r\n\t\t\t&__link {\r\n\t\t\t\tmargin: 0 50px;\r\n\t\t\t\ti {\r\n\t\t\t\t\tmargin-right: 10px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n\t.paragraph-style {\r\n\t\tmargin-bottom: 20px;\r\n\t\tfont-size: 25px;\r\n\t}\r\n\t.inputSelect {\r\n\t\t@include inputStyle(400px, 25px, 20px);\r\n\t}\r\n\tbody {\r\n\t\t@include imageCenter('/src/images/clouds1920.jpg');\r\n\t\theight: 100%;\r\n\t}\r\n\t.navigation {\r\n\t\theight: 130px;\r\n\t\t&__date-hour,\r\n\t\t&__arrival-weather,\r\n\t\t&__login {\r\n\t\t\twidth: 200px;\r\n\t\t}\r\n\t\t&__date-hour {\r\n\t\t\tfont-size: 20px;\r\n\t\t\t&__date {\r\n\t\t\t\t&--margin {\r\n\t\t\t\t\tmargin: 18px 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__time {\r\n\t\t\t\t&--padding {\r\n\t\t\t\t\tpadding-bottom: 3px;\r\n\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__login {\r\n\t\t\t&__login-button {\r\n\t\t\t\t&--colors {\r\n\t\t\t\t\tfont-size: 20px;\r\n\t\t\t\t\tpadding: 10px 20px;\r\n\t\t\t\t\ttransition: background-color 0.5s, color 0.5s;\r\n\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\tpadding: 9px 19px;\r\n\t\t\t\t\t\tborder: 2px solid black;\r\n\t\t\t\t\t\tcolor: rgb(55, 101, 240);\r\n\t\t\t\t\t\tbackground-color: transparent;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__login-panel {\r\n\t\t\t@include imageCenter('/src/images/sky1920.jpg');\r\n\t\t\theight: 90vh;\r\n\t\t\twidth: 75vw;\r\n\t\t\t&__inputs {\r\n\t\t\t\tinput {\r\n\t\t\t\t\tpadding: 10px;\r\n\t\t\t\t\tfont-size: 15px;\r\n\t\t\t\t}\r\n\t\t\t\tbutton {\r\n\t\t\t\t\tpadding: 15px 40px;\r\n\t\t\t\t\tfont-size: 25px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__error {\r\n\t\t\t\tfont-size: 25px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.header {\r\n\t\theight: 200px;\r\n\t\t&__text {\r\n\t\t\t&__headline {\r\n\t\t\t\t&--font {\r\n\t\t\t\t\tfont-size: 38px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__paragraph {\r\n\t\t\t\t&--style {\r\n\t\t\t\t\tmargin-top: 15px;\r\n\t\t\t\t\tfont-size: 25px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.container {\r\n\t\theight: 1000px;\r\n\t\t&__panel {\r\n\t\t\t&__flight-places,\r\n\t\t\t&__passengers,\r\n\t\t\t&__travel-date {\r\n\t\t\t\theight: 190px;\r\n\t\t\t}\r\n\t\t\t&__luggage {\r\n\t\t\t\theight: 120px;\r\n\t\t\t}\r\n\t\t\t&__submit-button {\r\n\t\t\t\tfont-size: 35px;\r\n\t\t\t\tbottom: 5%;\r\n\t\t\t\ttransition: padding 0.5s, color 0.5s, background-color 0.5s;\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\t> #icon {\r\n\t\t\t\t\t\tanimation: discoverIcon 0.5s;\r\n\t\t\t\t\t\tanimation-fill-mode: forwards;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tpadding: 8px 30px;\r\n\t\t\t\t\tbackground-color: $primaryColor;\r\n\t\t\t\t\tcolor: $whiteColor;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__info {\r\n\t\t\t\tfont-size: 22px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__error {\r\n\t\t\tbottom: 15%;\r\n\t\t\tfont-size: 25px;\r\n\t\t}\r\n\t}\r\n\r\n\t.summary {\r\n\t\tflex-direction: row;\r\n\r\n\t\t&__informations {\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 30%;\r\n\t\t\tborder: none;\r\n\t\t\t&__header {\r\n\t\t\t\tmargin: 50px 0 15px;\r\n\t\t\t\tcolor: royalblue;\r\n\t\t\t}\r\n\t\t\t&__panel-first,\r\n\t\t\t&__panel-second {\r\n\t\t\t\tmargin: 15px 0;\r\n\t\t\t\tbackground: none;\r\n\t\t\t\tcolor: royalblue;\r\n\t\t\t\tdiv {\r\n\t\t\t\t\tdisplay: inline;\r\n\t\t\t\t\tmargin: 10px 0;\r\n\t\t\t\t\twidth: 220px;\r\n\t\t\t\t\theight: 50px;\r\n\t\t\t\t\tline-height: 50px;\r\n\t\t\t\t\ttext-align: left;\r\n\t\t\t\t\tfont-size: 20px;\r\n\t\t\t\t}\r\n\t\t\t\ti {\r\n\t\t\t\t\ttext-align: left;\r\n\t\t\t\t\tmargin-right: 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__flights {\r\n\t\t\tposition: relative;\r\n\t\t\tbackground-color: $secondaryColor;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 80%;\r\n\r\n\t\t\t&__flightInfo {\r\n\t\t\t\tmargin: 30px auto 20px;\r\n\t\t\t\theight: 170px;\r\n\t\t\t\tborder: 4px solid royalblue;\r\n\t\t\t\tborder-radius: 20px;\r\n\t\t\t\tbackground: none;\r\n\r\n\t\t\t\t:first-child {\r\n\t\t\t\t\tborder-top-left-radius: 16px;\r\n\t\t\t\t}\r\n\t\t\t\t:nth-child(4) {\r\n\t\t\t\t\tborder-top-right-radius: 16px;\r\n\t\t\t\t}\r\n\t\t\t\t:nth-child(-n + 4) {\r\n\t\t\t\t\tborder-bottom: 2px outset royalblue;\r\n\t\t\t\t\tbackground-color: royalblue;\r\n\t\t\t\t\tcolor: $whiteColor;\r\n\t\t\t\t}\r\n\t\t\t\t&__paragraph {\r\n\t\t\t\t\t@include flexCenter;\r\n\t\t\t\t\tcolor: royalblue;\r\n\t\t\t\t\tmargin-top: 0;\r\n\t\t\t\t\tfont-size: 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&__flightErrorInfo {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tmargin: 0 10px;\r\n\t\t\t\ttransform: translateY(-50%);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.footer {\r\n\t\theight: 80px;\r\n\t\t&__rights {\r\n\t\t\tfont-size: 20px;\r\n\t\t}\r\n\t\t.footer-links {\r\n\t\t\tfont-size: 15px;\r\n\t\t\t&__link {\r\n\t\t\t\tmargin: 0 64px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.errorAnimation {\r\n\tanimation: showError 1s;\r\n\tanimation-fill-mode: forwards;\r\n}\r\n\r\n.errorInfoAnimation {\r\n\tanimation: showInfoError 2s;\r\n\tanimation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes discoverIcon {\r\n\tfrom {\r\n\t\tfont-size: 0;\r\n\t}\r\n\tto {\r\n\t\tfont-size: 40px;\r\n\t}\r\n}\r\n\r\n@keyframes showError {\r\n\tfrom {\r\n\t\tleft: -100%;\r\n\t}\r\n\tto {\r\n\t\tleft: 0%;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n}\r\n@keyframes showInfoError {\r\n\tfrom {\r\n\t\ttop: -50%;\r\n\t}\r\n\tto {\r\n\t\ttop: 30%;\r\n\t}\r\n}\r\n","@mixin flexCenter() {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n@mixin dispayFlex($jc, $ai) {\r\n\tdisplay: flex;\r\n\tjustify-content: $jc;\r\n\talign-items: $ai;\r\n}\r\n\r\n@mixin posAbsuluteCenter() {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate((-50%, -50%));\r\n}\r\n@mixin inputStyle($width, $height, $fontSize) {\r\n\twidth: $width;\r\n\theight: $height;\r\n\ttext-align: center;\r\n\tfont-size: $fontSize;\r\n\tfont-style: italic;\r\n\tborder: none;\r\n\tborder-radius: 10px;\r\n\tbackground-color: rgba(254, 247, 247, 0.8);\r\n}\r\n\r\n@mixin resetMarginPadding() {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@mixin imageCenter($url) {\r\n\theight: 100%;\r\n\tbackground-image: url($url);\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n","$primaryColor: rgba(55, 101, 240, 0.497);\r\n$secondaryColor: rgba(254, 247, 247, 0.451);\r\n$whiteColor: #fff;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cf90426eec82d249867.jpg";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "040ef16c46a1b800ea4e.jpg";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b52a9c4330de0410e047.jpg";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5d7e042d1c4d23c71f1.jpg";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3ba364f78aa11cd7e84.jpg";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "467edf68be4b0f737347.jpg";

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var currentDate = document.querySelector('.navigation__date-hour__date--margin');
var currentTime = document.querySelector('.navigation__date-hour__time--padding');
var loginButton = document.querySelector('#login-button');
var loginPanel = document.querySelector('.navigation__login-panel');
var loginCloseButton = document.querySelector('#login-close-button');
var signInButton = document.querySelector('#sign-in-button');
var login = document.querySelector('#login');
var password = document.querySelector('#password');
var signInErrorInfo = document.querySelector('.navigation__login-panel__error');
var departureCities = document.querySelector('#departureCities');
var arrivalCities = document.querySelector('#arrivalCities');
var adultsPassenegers = document.querySelector('#adultPass');
var childrenPassenegers = document.querySelector('#childrensPass');
var departureDate = new Date().toISOString().split('T')[0];
var inputDepartureDate = document.querySelector('#departureDate');
var inputReturnDate = document.querySelector('#returnDate');
inputDepartureDate.setAttribute('min', departureDate);
var luggageAmount = document.querySelector('#luggage');
var submitButton = document.querySelector('.container__panel__submit-button ');
var errorInfo = document.querySelector('.container__error');
var summaryPage = document.querySelector('.summary');
var summaryFlight = document.querySelector('.summary__flights');
var errorColor = 'red';
var welcomeColor = 'lawngreen';
var errorBorderStyle = "1px solid ".concat(errorColor);
var welcomeBorderStyle = "1px solid ".concat(welcomeColor);
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var actualHour = today.getHours();
var actualMin = today.getMinutes();
var actualTemp = 0;
today = dd + '.' + mm + '.' + yyyy;
currentDate.innerHTML = "<i class=\"fa-solid fa-calendar-days\"></i>  ".concat(today);
currentTime.innerHTML = "<i class=\"fa-solid fa-clock\"></i> ".concat(actualHour, ":").concat(actualMin < 10 ? "0".concat(actualMin) : actualMin);
var flightInfo = {
  arrivals: [],
  departures: [],
  durations: [],
  ticketPrices: []
};
var codeObj = {
  code: '',
  code1: ''
};
var selectedOption;
var selectedOption1;
function checkIfEmpty() {
  switch (true) {
    case departureCities.value === '0':
      showComunicate([departureCities], errorInfo, 'errorAnimation', 'Choose departure city!', errorBorderStyle, errorColor);
      break;
    case arrivalCities.value === '0':
      showComunicate([arrivalCities], errorInfo, 'errorAnimation', 'Choose arrival city!', errorBorderStyle, errorColor);
      break;
    case adultsPassenegers.value === '0':
      showComunicate([adultsPassenegers], errorInfo, 'errorAnimation', 'Choose at least one passenger', errorBorderStyle, errorColor);
      break;
    case inputDepartureDate.value === '':
      showComunicate([inputDepartureDate], errorInfo, 'errorAnimation', 'Select departure date', errorBorderStyle, errorColor);
      break;
    case inputReturnDate.value === '':
      showComunicate([inputReturnDate], errorInfo, 'errorAnimation', 'Select return date', errorBorderStyle, errorColor);
      break;
    case luggageAmount.value === '0':
      showComunicate([luggageAmount], errorInfo, 'errorAnimation', 'Please select luggage amount', errorBorderStyle, errorColor);
      break;
  }
}
var checkLogin = function checkLogin() {
  switch (true) {
    case login.value.length === 0:
      login.style.border = 'none';
      password.style.border = 'none';
      showComunicate([login], signInErrorInfo, 'errorInfoAnimation', 'Please enter login', errorBorderStyle, errorColor);
      break;
    case password.value.length === 0:
      login.style.border = 'none';
      password.style.border = 'none';
      showComunicate([password], signInErrorInfo, 'errorInfoAnimation', 'Please enter password', errorBorderStyle, errorColor);
      break;
    case login.value.length !== 0 && password.value.length !== 0:
      showComunicate([login, password], signInErrorInfo, 'errorInfoAnimation', "Welcome back ".concat(login.value, "!"), welcomeBorderStyle, welcomeColor);
  }
};
var showComunicate = function showComunicate(param1, param2, param3, param4, param5, param6) {
  if (param1.length === 1) {
    param1[0].style.border = param5;
  } else if (param1.length > 1) {
    var _iterator = _createForOfIteratorHelper(param1),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var param = _step.value;
        param.style.border = param5;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  param2.style.display = 'block';
  param2.style.color = param6;
  param2.classList.add(param3);
  param2.textContent = param4;
};
var hideError = function hideError(param1, param2, param3, param4) {
  var _iterator2 = _createForOfIteratorHelper(param1),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var param = _step2.value;
      param.style.border = 'none';
      param.style.color = 'none';
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(param2),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var nextParam = _step3.value;
      nextParam.style.display = 'none';
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  param3.classList.remove(param4);
};
fetch('https://raw.githubusercontent.com/Bartroz/ticket-reservation-JavaScript/main/endpoints/inital.json').then(function (res) {
  return res.json();
}).then(function (data) {
  return data.destination;
}).then(function (data) {
  data.forEach(function (el) {
    var option = document.createElement('option');
    option.setAttribute('value', el.value);
    option.setAttribute('data-code', el.code);
    departureCities.append(option);
    option.innerText = el.desc;
    var option2 = document.createElement('option');
    option2.setAttribute('value', el.value);
    option2.setAttribute('data-lat', el.lat);
    option2.setAttribute('data-lon', el.lon);
    option2.setAttribute('data-code', el.code);
    arrivalCities.append(option2);
    option2.innerText = el.desc;
  });
  departureCities.addEventListener('click', function () {
    var selectedValue = departureCities.value;
    var selectedValue2 = arrivalCities.value;
    for (var i = 0; i < arrivalCities.options.length; i++) {
      if (arrivalCities.options[i].value === selectedValue) {
        arrivalCities.options[i].disabled = true;
      } else {
        arrivalCities.options[i].disabled = false;
      }
    }
    for (var _i = 0; _i < departureCities.options.length; _i++) {
      if (departureCities.options[_i].value === selectedValue2) {
        departureCities.options[_i].disabled = true;
      } else {
        departureCities.options[_i].disabled = false;
      }
    }
  });
})["catch"](function (err) {
  return console.log(err);
});
var getCurrentTemperature = function getCurrentTemperature(lat, lon, APIKEY) {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(APIKEY, "&units=metric")).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data.main.temp;
  }).then(function (data) {
    return actualTemp = data;
  })["catch"](function (err) {
    return console.log(err);
  });
};
function getflight(_x, _x2, _x3, _x4) {
  return _getflight.apply(this, arguments);
}
function _getflight() {
  _getflight = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(adults, departure, destination, departureDate) {
    var url, options, response, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = "https://skyscanner44.p.rapidapi.com/search-extended?adults=".concat(adults, "&origin=").concat(departure, "&destination=").concat(destination, "&departureDate=").concat(departureDate, "&currency=EUR&stops=0%2C1%2C2&duration=50&startFrom=00%3A00&arriveTo=23%3A59&returnStartFrom=00%3A00&returnArriveTo=23%3A59");
          options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '4b3ba86928msh83cd6a7d580ee08p1b7cddjsn2c4894141241',
              'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            }
          };
          _context.prev = 2;
          _context.next = 5;
          return fetch(url, options);
        case 5:
          response = _context.sent;
          _context.next = 8;
          return response.json();
        case 8:
          result = _context.sent;
          getFlightInfo(result);
          console.log(result);
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          console.error(_context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 13]]);
  }));
  return _getflight.apply(this, arguments);
}
var getFlightInfo = function getFlightInfo(param) {
  var timeString;
  console.log(flightInfo);
  for (var i = 0; i <= 2; i++) {
    var _flightInfo$ticketPri;
    var resultsArr = param.itineraries.results[i].legs;
    resultsArr.forEach(function (el) {
      flightInfo.arrivals.push(el.arrival.slice(11, -3));
      flightInfo.departures.push(el.departure.slice(11, -3));
      var hours = Math.floor(el.durationInMinutes / 60);
      var minutes = el.durationInMinutes % 60;
      timeString = hours + " h " + (minutes < 10 ? minutes = "0".concat(minutes, " min") : minutes + ' min');
      flightInfo.durations.push(timeString);
    });
    var flightPrice = param.itineraries.results[i].pricing_options[0].price.amount;
    (_flightInfo$ticketPri = flightInfo.ticketPrices).push.apply(_flightInfo$ticketPri, [flightPrice, flightPrice]);
  }
  getFlightDataToDiv();
};
var createParagraph = function createParagraph(param1, param2) {
  param1.classList.add('summary__flights__flightInfo__paragraph');
  param1.textContent = param2;
};
var getFlightDataToDiv = function getFlightDataToDiv() {
  if (flightInfo.arrivals.length !== 0) {
    for (var i = 0; i <= 2; i++) {
      var summaryFlightDiv = document.createElement('div');
      var p1 = document.createElement('p');
      createParagraph(p1, 'Departure');
      summaryFlightDiv.appendChild(p1);
      var p2 = document.createElement('p');
      createParagraph(p2, 'Arrival');
      summaryFlightDiv.appendChild(p2);
      var p3 = document.createElement('p');
      createParagraph(p3, 'Duration');
      summaryFlightDiv.appendChild(p3);
      var p4 = document.createElement('p');
      createParagraph(p4, 'Price (€)');
      summaryFlightDiv.appendChild(p4);
      for (var arrayName in flightInfo) {
        var p = document.createElement('p');
        p.innerText = flightInfo[arrayName][i];
        p.classList.add('summary__flights__flightInfo__paragraph');
        summaryFlightDiv.appendChild(p);
      }
      summaryFlightDiv.classList.add('summary__flights__flightInfo');
      summaryFlight.appendChild(summaryFlightDiv);
    }
  } else {
    var summaryFlightError = document.createElement('p');
    summaryFlightError.classList.add('summary__flights__flightErrorInfo');
    summaryFlightError.textContent = 'There is no available flights corresponding to your selected options.';
    summaryFlight.appendChild(summaryFlightError);
  }
};
var createInnerHTML = function createInnerHTML(param, param1) {
  param.innerHTML = param1;
};
inputDepartureDate.addEventListener('change', function () {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  inputReturnDate.setAttribute('min', new Date(departureDate).addDays(1).toISOString().split('T')[0]);
  inputReturnDate.valueAsDate = null;
  inputReturnDate.setAttribute('min', new Date(inputDepartureDate.value).addDays(1).toISOString().split('T')[0]);
});
submitButton.addEventListener('click', function () {
  return checkIfEmpty();
});
loginButton.addEventListener('click', function (e) {
  loginPanel.style.display = 'flex';
  e.stopPropagation();
});
login.addEventListener('keyup', function (e) {
  if (e.target.value.length > 0) {
    login.style.border = 'none';
    signInErrorInfo.style.display = 'none';
  }
});
password.addEventListener('keyup', function (e) {
  if (e.target.value.length > 0) {
    password.style.border = 'none';
    signInErrorInfo.style.display = 'none';
  }
});
signInButton.addEventListener('click', checkLogin);
document.addEventListener('click', function (event) {
  if (!loginPanel.contains(event.target)) {
    hideError([login, password], [loginPanel, signInErrorInfo], signInErrorInfo, 'errorInfoAnimation');
  }
});
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && loginPanel.style.display === 'flex') {
    checkLogin();
  }
});
loginCloseButton.addEventListener('click', function () {
  hideError([login, password], [loginPanel, signInErrorInfo], signInErrorInfo, 'errorInfoAnimation');
});
departureCities.addEventListener('change', function () {
  return hideError([departureCities], [errorInfo], errorInfo, 'errorAnimation');
});
arrivalCities.addEventListener('change', function () {
  hideError([arrivalCities], [errorInfo], errorInfo, 'errorAnimation');
  var departureWeather = document.querySelector('.navigation__arrival-weather');
  var selectedOption = departureCities.options[departureCities.selectedIndex];
  var selectedOption1 = arrivalCities.options[arrivalCities.selectedIndex];
  var lon = selectedOption1.getAttribute('data-lon');
  var lat = selectedOption1.getAttribute('data-lat');
  var code = selectedOption.getAttribute('data-code');
  var code1 = selectedOption1.getAttribute('data-code');
  codeObj.code = code;
  codeObj.code1 = code1;
  var apiKey = '979e98cbfff2fda43447f846275c2d9e';
  getCurrentTemperature(lat, lon, apiKey);
  setTimeout(function () {
    departureWeather.innerHTML = "".concat(arrivalCities.value, " ").concat(actualTemp.toFixed(1), "\xB0C");
  }, 150);
});
adultsPassenegers.addEventListener('change', function () {
  return hideError([adultsPassenegers], [errorInfo], errorInfo, 'errorAnimation');
});
inputDepartureDate.addEventListener('change', function () {
  return hideError([inputDepartureDate], [errorInfo], errorInfo, 'errorAnimation');
});
inputReturnDate.addEventListener('change', function () {
  return hideError([inputReturnDate], [errorInfo], errorInfo, 'errorAnimation');
});
luggageAmount.addEventListener('change', function () {
  return hideError([luggageAmount], [errorInfo], errorInfo, 'errorAnimation');
});
submitButton.addEventListener('click', function () {
  if (departureCities.value !== '0' && arrivalCities.value !== '0' && adultsPassenegers.value !== '0' && inputDepartureDate.value !== '' && inputReturnDate.value !== '' && luggageAmount.value !== '0') {
    var container = document.querySelector('.container');
    var summaryDepartureCity = document.querySelector('.summary__informations__panel-first__departure-city');
    var summaryArrivalCity = document.querySelector('.summary__informations__panel-first__arrival-city');
    var summaryDepartureDate = document.querySelector('.summary__informations__panel-first__departure-date');
    var summaryReturnDate = document.querySelector('.summary__informations__panel-second__return-date');
    var summaryPassenger = document.querySelector('.summary__informations__panel-second__passengers');
    var summaryLuggage = document.querySelector('.summary__informations__panel-second__luggage');
    var secondSummaryPanel = document.querySelector('.summary__informations__panel-second');
    getflight(adultsPassenegers.value, codeObj.code, codeObj.code1, inputDepartureDate.value);
    setTimeout(function () {
      summaryPage.style.display = 'flex';
      container.style.display = 'none';
      createInnerHTML(summaryDepartureCity, "<i class=\"fa-sharp fa-solid fa-plane-departure\"></i> ".concat(departureCities.value));
      createInnerHTML(summaryArrivalCity, "<i class=\"fa-solid fa-plane-arrival\"></i> ".concat(arrivalCities.value));
      createInnerHTML(summaryDepartureDate, "<div> <i\n\t\t\t\tclass=\"fa-solid fa-calendar-days\"></i> <i class=\"fa-solid fa-arrow-right\"></i> </div> ".concat(inputDepartureDate.value));
      createInnerHTML(summaryReturnDate, "<div><i\n\t\t\t\tclass=\"fa-solid fa-calendar-days\"></i> <i class=\"fa-solid fa-arrow-left\"></i></div> ".concat(inputReturnDate.value));
      createInnerHTML(summaryPassenger, "<div><i class=\"fa-solid fa-user\"></i> ".concat(adultsPassenegers.value, " </div> ").concat(childrenPassenegers.value === '0' ? '' : "<div> <i class=\"fa-solid fa-child\"></i> ".concat(childrenPassenegers.value, "</div> ")));
      createInnerHTML(summaryLuggage, "<i class=\"fa-solid fa-suitcase\"></i> ".concat(luggageAmount.value));
    }, 500);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map