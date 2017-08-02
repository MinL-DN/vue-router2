webpackJsonp([4],{

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(42)

	/* template */
	var __vue_template__ = __webpack_require__(45)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\MyConfiguration\\workspace\\Demo\\VueRouter2\\public\\spa\\components\\img-box.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e694ff96", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e694ff96", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] img-box.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	__webpack_require__(43);
	exports.default = {
	    data: function data() {
	        return {
	            tablist: 30,
	            flag: false
	        };
	    },
	    mounted: function mounted() {
	        this.$root.hideloading();
	    }
	};

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./img-box.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./img-box.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".open-btn {\n  width: 80%;\n  background: #3385ff;\n  height: 30px;\n  color: #fff;\n  display: block;\n  border-radius: 2px;\n  margin: 50px auto 0;\n  text-align: center;\n}\n.img-box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.img-box .img-mask {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n}\n.img-box .label-box {\n  position: absolute;\n  background: #fff;\n  border-radius: 5px;\n  bottom: 60px;\n  top: 40px;\n  left: 40px;\n  right: 40px;\n  overflow: auto;\n}\n.img-box .label-box li {\n  border: 1px solid #f00;\n  margin: 5px;\n  padding: 2px 8px;\n}\n", ""]);

	// exports


/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('a', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.flag),
	      expression: "!flag"
	    }],
	    staticClass: "open-btn",
	    attrs: {
	      "href": "javascript:;"
	    },
	    on: {
	      "click": function($event) {
	        _vm.flag = true
	      }
	    }
	  }, [_vm._v("开启")]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.flag),
	      expression: "flag"
	    }],
	    staticClass: "img-box"
	  }, [_c('div', {
	    staticClass: "img-mask",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.flag = false
	      }
	    }
	  }), _vm._v(" "), _c('ul', {
	    staticClass: "label-box"
	  }, _vm._l((_vm.tablist), function(v, i) {
	    return _c('li', {
	      class: {
	        'active': !i
	      }
	    }, [_vm._v(_vm._s(v))])
	  }))])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e694ff96", module.exports)
	  }
	}

/***/ }

});