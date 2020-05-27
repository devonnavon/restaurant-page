/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createElements.js":
/*!*******************************!*\
  !*** ./src/createElements.js ***!
  \*******************************/
/*! exports provided: createElement, addHeading, addImage, addParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addHeading\", function() { return addHeading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addImage\", function() { return addImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addParagraph\", function() { return addParagraph; });\nconst createElement = (id) => {\n    const elem = document.createElement('div');\n    elem.id = id;\n    return elem;\n}\n\nconst addImage = (parent, src, alt = '') => {\n    const img = document.createElement('img');\n    img.setAttribute('src', src);\n    img.setAttribute('alt', alt);\n    parent.appendChild(img);\n}\n\nconst addParagraph = (parent, text) => {\n    const p = document.createElement('p');\n    p.innerHTML = text;\n    parent.appendChild(p)\n}\n\nconst addHeading = (parent, text) => {\n    const heading = document.createElement('h2');\n    heading.innerHTML = text;\n    parent.appendChild(heading)\n}\n\n\n\n//# sourceURL=webpack:///./src/createElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n\n\nObject(_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"loadPage\"])('home')\n\nconst homeNav = document.getElementById('home-nav').querySelector('input')\nconst locationNav = document.getElementById('location-nav').querySelector('input')\nconst menuNav = document.getElementById('menu-nav').querySelector('input')\n\nhomeNav.addEventListener('click', e=>{\n    // e.preventDefault()\n    Object(_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"loadPage\"])('home');\n})\n\nlocationNav.addEventListener('click', e=>{\n    // e.preventDefault()\n    Object(_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"loadPage\"])('location');\n})\n\nmenuNav.addEventListener('click', e=>{\n    // e.preventDefault()\n    Object(_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"loadPage\"])('menu');\n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/*! exports provided: loadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPage\", function() { return loadPage; });\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ \"./src/createElements.js\");\n//loadPage.js\n\n\n\n\nconst content = document.getElementById('content');\n\nconst loadPage = (option) => {\n    clearContent()\n    if(option === 'home') loadHome();\n    if(option === 'location') loadLocation();\n    if(option === 'menu') loadMenu();\n\n}\n\nconst clearContent = () => {\n    while (content.firstChild){\n        content.removeChild(content.lastChild);\n    }\n    \n}\n\n\nconst loadHome = () => {\n    const home = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('home');\n    \n    const mainImage = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('main-image');\n    const header = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('header');\n    const mainDescription = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('main-description');\n    \n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addImage\"])(mainImage,'img/koi.jpg', 'koi');\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addHeading\"])(header, 'The Pond')\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addParagraph\"])(mainDescription, 'We have some koi in our restaurant. Don\\'t spell it coy or they\\'ll get offended')\n\n    home.appendChild(mainImage);\n    home.appendChild(header);\n    home.appendChild(mainDescription);\n    content.appendChild(home)\n}\n\nconst loadLocation = () => {\n    const location = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('location');\n    \n    const image = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('location-image');\n    const header = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('location-header');\n    const mainDescription = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('location-description');\n    \n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addImage\"])(image,'img/whereweat.jpg', 'the place to be');\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addHeading\"])(header, 'The Pond')\n\n    const text = 'We are located in the hills. It is quite nice up in the hills. Lots of greens.'\n\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addParagraph\"])(mainDescription,text)\n\n    location.appendChild(header);\n    location.appendChild(mainDescription);\n    location.appendChild(image);\n    content.appendChild(location);\n}\n\nconst loadMenu = () => {\n    \n    const menu = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('menu');\n    \n    const item1 = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('sushi')\n    const item2 = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('burrito')\n    const item3 = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('fish')\n    const item4 = Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('veggies')\n\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addHeading\"])(item1, 'sushi')\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addParagraph\"])(item1, 'we got sushi, dog.')\n\n\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addHeading\"])(item2, 'burrito')\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addParagraph\"])(item2, 'we\\'re makin burritos out here' )\n\n\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addHeading\"])(item3, 'fish')\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addParagraph\"])(item3, 'we got fish, dog.')\n    \n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addHeading\"])(item4, 'veggies')\n    Object(_createElements__WEBPACK_IMPORTED_MODULE_0__[\"addParagraph\"])(item4, 'veggies for you my lord...')\n    \n    menu.appendChild(item1);\n    menu.appendChild(item2);\n    menu.appendChild(item3);\n    menu.appendChild(item4);\n    \n    content.appendChild(menu);\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/loadPage.js?");

/***/ })

/******/ });