/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ (() => {

eval("const topInner = document.querySelector('.welcome .clothes__inner.top'),\n      topItems = document.querySelectorAll('.welcome .clothes__item.top'),\n      midInner = document.querySelector('.welcome .clothes__inner.mid'),\n      midItems = document.querySelectorAll('.welcome .clothes__item.mid'),\n      botInner = document.querySelector('.welcome .clothes__inner.bot'),\n      botItems = document.querySelectorAll('.welcome .clothes__item.bot');\nlet itemWidth = 261.99,\n    offset,\n    width;\n\nfunction scroll(items) {\n  width = (items.length - 1) * parseInt(window.getComputedStyle(items[0]).width), offset = 0;\n  /* setInterval(() => {\r\n    if (offset >= (width - itemWidth)) {\r\n      offset = 0;\r\n      inner.style.transform = `translateX(${-offset}px)`;\r\n    }\r\n    else {\r\n      offset += itemWidth;\r\n      inner.style.transform = `translateX(${-offset}px)`;\r\n    }\r\n  }, 2000);  */\n\n  intervalScroll(topInner);\n}\n\nscroll(topItems);\n/*   setTimeout(() => {\r\n    \r\n  }, timeout); */\n\nfunction intervalScroll(inner) {\n  if (offset >= width - itemWidth) {\n    offset = 0;\n    inner.style.transform = `translateX(${-offset}px)`;\n  } else {\n    offset += itemWidth;\n    inner.style.transform = `translateX(${-offset}px)`;\n  }\n\n  setTimeout(() => {\n    intervalScroll(inner);\n  }, 2000);\n}\n\n//# sourceURL=webpack://weclothes/./src/js/animation.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _js_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/animation */ \"./src/js/animation.js\");\n/* harmony import */ var _js_animation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_animation__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* import '../js/citylist';\r\n */\n\n/* document.addEventListener('DOMContentLoaded', (e) => {\r\nfetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + \"ef3cafdc19ad63f7dcd948574a123802\")\r\n.then(response => response.json())\r\n.then(response => console.log(response)); */\n\n//# sourceURL=webpack://weclothes/./src/js/index.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weclothes/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weclothes/./src/css/index.css?");

/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;