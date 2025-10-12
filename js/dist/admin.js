/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./js/src/admin/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('wszdb/flarum-autolock', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('wszdb-autolock').registerSetting({
    setting: 'wszdb-autolock.enabled',
    type: 'boolean',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('wszdb-autolock.admin.settings.enabled_label'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('wszdb-autolock.admin.settings.enabled_help')
  }).registerSetting({
    setting: 'wszdb-autolock.threshold',
    type: 'number',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('wszdb-autolock.admin.settings.threshold_label'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('wszdb-autolock.admin.settings.threshold_help'),
    min: 1,
    placeholder: '100'
  }).registerSetting(function () {
    var _this = this;
    var tags = flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().store.all('tags');
    var settingValue = this.setting('wszdb-autolock.exempt_tags')();
    var exemptTags = [];
    try {
      exemptTags = settingValue ? JSON.parse(settingValue) : [];
    } catch (e) {
      console.error('[Auto Lock] Failed to parse exempt tags:', e);
      exemptTags = [];
    }
    return m('div', {
      className: 'Form-group'
    }, [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('wszdb-autolock.admin.settings.exempt_tags_label')), m('div', {
      className: 'helpText'
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('wszdb-autolock.admin.settings.exempt_tags_help')), m('div', {
      style: 'margin-top: 10px;'
    }, tags.length > 0 ? tags.map(function (tag) {
      var tagId = parseInt(tag.id());
      var isChecked = exemptTags.includes(tagId);
      return m('div', {
        className: 'checkbox',
        style: 'margin-bottom: 8px;'
      }, [m('label', [m('input', {
        type: 'checkbox',
        checked: isChecked,
        onchange: function onchange(e) {
          var target = e.target;
          var newExemptTags = [].concat(exemptTags);
          if (target.checked) {
            if (!newExemptTags.includes(tagId)) {
              newExemptTags.push(tagId);
            }
          } else {
            newExemptTags = newExemptTags.filter(function (id) {
              return id !== tagId;
            });
          }

          // 保存到设置.
          var jsonValue = JSON.stringify(newExemptTags);
          _this.setting('wszdb-autolock.exempt_tags')(jsonValue);

          // 标记为已修改。
          _this.dirty = true;
        }
      }), m('span', {
        className: 'tagLabel',
        style: "background-color: " + tag.color() + "; color: #fff; padding: 2px 8px; border-radius: 3px; margin-left: 5px;"
      }, tag.name())])]);
    }) : m('div', {
      className: 'helpText'
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('wszdb-autolock.admin.settings.no_tags')))]);
  });
});
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map