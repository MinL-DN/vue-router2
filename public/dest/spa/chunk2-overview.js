webpackJsonp([2],{

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(25)

	/* template */
	var __vue_template__ = __webpack_require__(33)
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
	__vue_options__.__file = "D:\\MyConfiguration\\workspace\\Demo\\VueRouter2\\public\\spa\\components\\overview.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-45b7c1b5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-45b7c1b5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] overview.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _bottomtab = __webpack_require__(26);

	var _bottomtab2 = _interopRequireDefault(_bottomtab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	//
	//
	//

	__webpack_require__(31);
	exports.default = {
	    data: function data() {
	        return {
	            data: {},
	            flag: 1,
	            chartrate: 1
	        };
	    },
	    mounted: function mounted() {
	        this.getData();
	    },

	    methods: {
	        getData: function getData(flag) {
	            var self = this;
	            flag = flag || 1;
	            self.$root.bg = flag == 3 ? 'white' : 'gray';
	            self.flag = flag;
	            self.$root.showloading();
	            self.$root.removeWaterMark();

	            var re = flag != 3 ? { "PersonCount": 3789, "GMV": 966.66, "GrossMargin": 63.45, "CustomerPrice": 2551.23, "OrderCount": 2015, "GrossMarginRate": 6.56, "PaymentRate": 49.53, "UV": 267928, "GMVGrowthRate": 85.42, "PersonCountGrowthRate": 68.40, "UVConversionRate": 132.97, "TargetDate": "", "PersonCountTarget": 0, "GrossMarginTarget": 0, "GMVAccumulatedRate": 0, "GMVExpectedCompletionRate": 0, "PersonCountCompletionRate": 0, "GrossMarginCompletionRate": 0, "GMVTarget": 0, "ExpectedGMV": 0 } : { "PersonCount": 91456, "GMV": 23216.04, "GrossMargin": 1447.85, "CustomerPrice": 0, "OrderCount": 0, "GrossMarginRate": 0.062364, "PaymentRate": 0, "UV": 0, "GMVGrowthRate": 0, "PersonCountGrowthRate": 0, "UVConversionRate": 0, "TargetDate": "07", "PersonCountTarget": 133928.00, "GrossMarginTarget": 2054.65, "GMVAccumulatedRate": 67.93, "GMVExpectedCompletionRate": 81.52, "PersonCountCompletionRate": 68.29, "GrossMarginCompletionRate": 70.47, "GMVTarget": 34176.57, "ExpectedGMV": 27859.24 };
	            console.log(re);
	            self.$root.setWaterMark();
	            if (flag == 3) self.setRate(re);

	            self.data = re;
	            self.$root.hideloading();
	        },
	        setRate: function setRate(re) {
	            var self = this;
	            var _arr = ['GMVAccumulatedRate', 'GMVExpectedCompletionRate', 'PersonCountCompletionRate', 'GrossMarginCompletionRate', 'GrossMarginRate'];
	            var _num = 0;
	            var _rate = 1;
	            $.each(_arr, function (i, v) {
	                if (re[v] > _num) _num = re[v];
	            });
	            if (_num > 100) _rate = 100 / _num;
	            self.chartrate = _rate;
	        }
	    },
	    components: {
	        bottomtab: _bottomtab2.default
	    }
	};

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(30)
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
	__vue_options__.__file = "D:\\MyConfiguration\\workspace\\Demo\\VueRouter2\\public\\spa\\components\\bottomtab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-490b8d7e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-490b8d7e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] bottomtab.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 27:
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

	__webpack_require__(28);
	exports.default = {
	    data: function data() {
	        return {
	            tablist: ['实时', '昨日', '本月'],
	            flag: 0
	        };
	    },
	    methods: {
	        go: function go($index) {
	            var self = this;
	            if (self.flag == $index) return;
	            self.flag = $index;
	            self.$parent.getData($index);
	        }
	    }
	};

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./bottomtab.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./bottomtab.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "ul.fixed-bottom-tab {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #444a59;\n  height: 64px;\n  line-height: 64px;\n  font-size: 18px;\n  z-index: 1001;\n}\nul.fixed-bottom-tab li {\n  text-align: center!important;\n  text-align: center;\n  color: #ffffff;\n  float: left;\n  box-sizing: border-box;\n  width: 33.33333%;\n  height: 100%;\n  border-right: 1px solid #646464;\n}\nul.fixed-bottom-tab li:last-child {\n  border-right: 0px;\n}\nul.fixed-bottom-tab .two-line {\n  line-height: 20px;\n  padding-top: 9px;\n}\nul.fixed-bottom-tab li.active {\n  background-color: #3cb4f2;\n}\n", ""]);

	// exports


/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "fixed-bottom-tab"
	  }, _vm._l((_vm.tablist), function(v, i) {
	    return _c('li', {
	      class: {
	        'active': _vm.flag == i
	      },
	      on: {
	        "click": function($event) {
	          _vm.go(i)
	        }
	      }
	    }, [_vm._v(_vm._s(v))])
	  }))
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-490b8d7e", module.exports)
	  }
	}

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./overview.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./overview.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".dashboard li {\n  width: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 22px 0;\n  border-bottom: 8px solid #e9ecee;\n}\n.dashboard li .panel {\n  text-align: center!important;\n  text-align: center;\n  float: left;\n  width: 49%;\n}\n.dashboard li .panel .text-gray-6 {\n  font-size: 19px;\n}\n.dashboard li .line {\n  background-color: #cccccc;\n  float: left;\n  width: 1px;\n  height: 45px;\n  margin-top: 10px;\n}\n.dashboard li.col-4 .panel {\n  width: 33%;\n}\n.color-cue {\n  width: 100%;\n  overflow: hidden;\n  margin-top: 10px;\n}\n.color-cue li {\n  float: left;\n  color: #999999;\n  height: 12px;\n  line-height: 12px;\n  font-size: 12px;\n}\n.color-cue li .cue {\n  float: left;\n  display: inline-block;\n  margin-right: 4px;\n  width: 12px;\n  height: 12px;\n}\n.color-cue li .cue-red {\n  float: left;\n  display: inline-block;\n  margin-right: 4px;\n  width: 12px;\n  height: 12px;\n  background-color: #fe5153;\n  margin-left: 15px;\n}\n.color-cue li .cue-blue {\n  float: left;\n  display: inline-block;\n  margin-right: 4px;\n  width: 12px;\n  height: 12px;\n  background-color: #80d2fc;\n  margin-left: 12px;\n}\n.title {\n  color: #333333;\n  width: 100%;\n  text-align: center!important;\n  text-align: center;\n  margin-top: 28px;\n  font-size: 17px;\n}\n.mid {\n  width: 100%;\n}\n.mid .mid-title {\n  color: #333333;\n  font-size: 14px;\n  padding: 28px 0 14px 30px;\n}\n.mid .mid-body .col-p .col {\n  overflow: hidden;\n}\n.mid .mid-body .col-p .col * {\n  float: left;\n}\n.mid .mid-body .col-p .col .static {\n  text-align: right!important;\n  text-align: right;\n  height: 16px;\n  line-height: 16px;\n  width: 24%;\n}\n.mid .mid-body .col-p .col .p-p {\n  width: 50%;\n  box-sizing: border-box;\n  display: inline-block;\n  padding-left: 11px;\n}\n.mid .mid-body .col-p .col .p-p p {\n  height: 16px;\n  position: relative;\n}\n.mid .mid-body .col-p .col .p-p p span {\n  position: absolute;\n  top: 0;\n  right: -70px;\n  height: 16px;\n  line-height: 16px;\n  width: 65px;\n}\n.mid .mid-body .col-p .col-up {\n  overflow: hidden;\n}\n.mid .mid-body .col-p .col-up * {\n  float: left;\n}\n.mid .mid-body .col-p .col-up .static {\n  text-align: right!important;\n  text-align: right;\n  height: 16px;\n  line-height: 16px;\n  width: 24%;\n}\n.mid .mid-body .col-p .col-up .p-p {\n  width: 50%;\n  box-sizing: border-box;\n  display: inline-block;\n  padding-left: 11px;\n}\n.mid .mid-body .col-p .col-up .p-p p {\n  height: 16px;\n  position: relative;\n}\n.mid .mid-body .col-p .col-up .p-p p span {\n  position: absolute;\n  top: 0;\n  right: -70px;\n  height: 16px;\n  line-height: 16px;\n  width: 65px;\n}\n.mid .mid-body .col-p .col-up p {\n  background-color: #fe5153;\n}\n.mid .mid-body .col-p .col-down {\n  overflow: hidden;\n}\n.mid .mid-body .col-p .col-down * {\n  float: left;\n}\n.mid .mid-body .col-p .col-down .static {\n  text-align: right!important;\n  text-align: right;\n  height: 16px;\n  line-height: 16px;\n  width: 24%;\n}\n.mid .mid-body .col-p .col-down .p-p {\n  width: 50%;\n  box-sizing: border-box;\n  display: inline-block;\n  padding-left: 11px;\n}\n.mid .mid-body .col-p .col-down .p-p p {\n  height: 16px;\n  position: relative;\n}\n.mid .mid-body .col-p .col-down .p-p p span {\n  position: absolute;\n  top: 0;\n  right: -70px;\n  height: 16px;\n  line-height: 16px;\n  width: 65px;\n}\n.mid .mid-body .col-p .col-down p {\n  background-color: #80d2fc;\n}\n.mid-hr {\n  border: none;\n  background-color: #ccc;\n  height: 1px ;\n  width: 88%;\n  margin: 30px auto;\n}\n", ""]);

	// exports


/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "overflow"
	  }, [_c('div', {
	    staticClass: "J-WaterMarkBox"
	  }, [(_vm.flag == 3) ? _c('div', {
	    staticStyle: {
	      "padding-bottom": "80px"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('p', {
	    staticClass: "title"
	  }, [_vm._v("GMV完成情况")]), _vm._v(" "), _c('div', {
	    staticClass: "mid"
	  }, [_c('div', {
	    staticClass: "mid-title",
	    staticStyle: {
	      "padding-top": "20px"
	    }
	  }, [_vm._v("\n                    累计"), _c('span', {
	    staticClass: "text-red"
	  }, [_vm._v(_vm._s(_vm.data.TargetDate) + "月")]), _vm._v("GMV(KPI)完成情况（单位：万）\n                ")]), _vm._v(" "), _c('div', {
	    staticClass: "mid-body"
	  }, [_c('div', {
	    staticClass: "col-p"
	  }, [_c('div', {
	    staticClass: "col-up"
	  }, [_c('label', {
	    staticClass: "static"
	  }, [_vm._v(_vm._s(_vm.data.GMV))]), _vm._v(" "), _c('div', {
	    staticClass: "p-p"
	  }, [_c('p', {
	    style: ({
	      width: _vm.data.GMVAccumulatedRate * _vm.chartrate + '%'
	    })
	  }, [_c('span', [_vm._v(_vm._s(_vm.data.GMVAccumulatedRate) + "%")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "col-down"
	  }, [_c('label', {
	    staticClass: "static"
	  }, [_vm._v(_vm._s(_vm.data.GMVTarget))]), _vm._v(" "), _c('div', {
	    staticClass: "p-p"
	  }, [_c('p', {
	    style: ({
	      width: 100 * _vm.chartrate + '%'
	    })
	  })])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "mid"
	  }, [_c('div', {
	    staticClass: "mid-title"
	  }, [_vm._v("\n                    预计"), _c('span', {
	    staticClass: "text-red"
	  }, [_vm._v(_vm._s(_vm.data.TargetDate) + "月")]), _vm._v("GMV(KPI)完成情况（单位：万）\n                ")]), _vm._v(" "), _c('div', {
	    staticClass: "mid-body"
	  }, [_c('div', {
	    staticClass: "col-p"
	  }, [_c('div', {
	    staticClass: "col-up"
	  }, [_c('label', {
	    staticClass: "static"
	  }, [_vm._v(_vm._s(_vm.data.ExpectedGMV))]), _vm._v(" "), _c('div', {
	    staticClass: "p-p"
	  }, [_c('p', {
	    style: ({
	      width: _vm.data.GMVExpectedCompletionRate * _vm.chartrate + '%'
	    })
	  }, [_c('span', [_vm._v(_vm._s(_vm.data.GMVExpectedCompletionRate) + "%")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "col-down"
	  }, [_c('label', {
	    staticClass: "static"
	  }, [_vm._v(_vm._s(_vm.data.GMVTarget))]), _vm._v(" "), _c('div', {
	    staticClass: "p-p"
	  }, [_c('p', {
	    style: ({
	      width: 100 * _vm.chartrate + '%'
	    })
	  })])])])])]), _vm._v(" "), _c('hr', {
	    staticClass: "mid-hr"
	  }), _vm._v(" "), _c('p', {
	    staticClass: "title"
	  }, [_vm._v("人头及佣金完成情况")]), _vm._v(" "), _c('div', {
	    staticClass: "mid"
	  }, [_c('div', {
	    staticClass: "mid-title",
	    staticStyle: {
	      "padding-top": "20px"
	    }
	  }, [_vm._v("\n                    人头完成情况（单位：人）\n                ")]), _vm._v(" "), _c('div', {
	    staticClass: "mid-body"
	  }, [_c('div', {
	    staticClass: "col-p"
	  }, [_c('div', {
	    staticClass: "col-up"
	  }, [_c('label', {
	    staticClass: "static"
	  }, [_vm._v(_vm._s(_vm.data.PersonCount))]), _vm._v(" "), _c('div', {
	    staticClass: "p-p"
	  }, [_c('p', {
	    style: ({
	      width: _vm.data.PersonCountCompletionRate * _vm.chartrate + '%'
	    })
	  }, [_c('span', [_vm._v(_vm._s(_vm.data.PersonCountCompletionRate) + "%")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "col-down"
	  }, [_c('label', {
	    staticClass: "static"
	  }, [_vm._v(_vm._s(_vm.data.PersonCountTarget))]), _vm._v(" "), _c('div', {
	    staticClass: "p-p"
	  }, [_c('p', {
	    style: ({
	      width: 100 * _vm.chartrate + '%'
	    })
	  })])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "mid"
	  }, [_c('div', {
	    staticClass: "mid-title"
	  }, [_vm._v("\n                    佣金完成情况（单位：万）\n                ")]), _vm._v(" "), _c('div', {
	    staticClass: "mid-body"
	  }, [_c('div', {
	    staticClass: "col-p"
	  }, [_c('div', {
	    staticClass: "col-up"
	  }, [_c('label', {
	    staticClass: "static"
	  }, [_vm._v(_vm._s(_vm.data.GrossMargin))]), _vm._v(" "), _c('div', {
	    staticClass: "p-p"
	  }, [_c('p', {
	    style: ({
	      width: _vm.data.GrossMarginCompletionRate * _vm.chartrate + '%'
	    })
	  }, [_c('span', [_vm._v(_vm._s(_vm.data.GrossMarginCompletionRate) + "%")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "col-down"
	  }, [_c('label', {
	    staticClass: "static"
	  }, [_vm._v(_vm._s(_vm.data.GrossMarginTarget))]), _vm._v(" "), _c('div', {
	    staticClass: "p-p"
	  }, [_c('p', {
	    style: ({
	      width: 100 * _vm.chartrate + '%'
	    })
	  })])])])])])]) : (_vm.flag && _vm.flag != 3) ? _c('ul', {
	    staticClass: "dashboard bottom-tab-prev"
	  }, [_c('li', [_c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("GMV")]), _vm._v(" "), _c('p', {
	    staticClass: "text-ink"
	  }, [_vm._v(_vm._s(_vm.data.GMV) + "万")])]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("环比上月增长")]), _vm._v(" "), _c('p', {
	    staticClass: "text-red"
	  }, [_vm._v(_vm._s(_vm.data.GMVGrowthRate) + "%")])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("人头数")]), _vm._v(" "), _c('p', {
	    staticClass: "text-ink"
	  }, [_vm._v(_vm._s(_vm.data.PersonCount))])]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("环比上月增长")]), _vm._v(" "), _c('p', {
	    staticClass: "text-red"
	  }, [_vm._v(_vm._s(_vm.data.PersonCountGrowthRate) + "%")])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("佣金")]), _vm._v(" "), _c('p', {
	    staticClass: "text-ink"
	  }, [_vm._v(_vm._s(_vm.data.GrossMargin) + "万")])]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("佣金率")]), _vm._v(" "), _c('p', {
	    staticClass: "text-red"
	  }, [_vm._v(_vm._s(_vm.data.GrossMarginRate) + "%")])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("客单价")]), _vm._v(" "), _c('p', {
	    staticClass: "text-ink"
	  }, [_vm._v(_vm._s(_vm.data.CustomerPrice))])]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("付款率")]), _vm._v(" "), _c('p', {
	    staticClass: "text-red"
	  }, [_vm._v(_vm._s(_vm.data.PaymentRate) + "%")])])]), _vm._v(" "), _c('li', {
	    staticClass: "col-4"
	  }, [_c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("产品UV")]), _vm._v(" "), _c('p', {
	    staticClass: "text-ink"
	  }, [_vm._v(_vm._s(_vm.data.UV))])]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("创建订单数")]), _vm._v(" "), _c('p', {
	    staticClass: "text-ink"
	  }, [_vm._v(_vm._s(_vm.data.OrderCount))])]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "panel"
	  }, [_c('p', {
	    staticClass: "text-gray-6"
	  }, [_vm._v("转化")]), _vm._v(" "), _c('p', {
	    staticClass: "text-red"
	  }, [_vm._v(_vm._s(_vm.data.UVConversionRate))])])])]) : _vm._e()]), _vm._v(" "), _c('bottomtab')], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "color-cue"
	  }, [_c('li', [_c('span', {
	    staticClass: "cue-red"
	  }), _vm._v("实际完成")]), _vm._v(" "), _c('li', [_c('span', {
	    staticClass: "cue-blue"
	  }), _vm._v("目标值")])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-45b7c1b5", module.exports)
	  }
	}

/***/ }

});