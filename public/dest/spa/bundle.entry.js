webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Vue = __webpack_require__(6);
	var VueRouter = __webpack_require__(8);
	var $ = __webpack_require__(9);

	Vue.use(VueRouter);

	new Vue({
	    data: function data() {
	        return {
	            bg: 'white',
	            watermark: viewData.watermark
	        };
	    },
	    render: function render(h) {
	        return h(__webpack_require__(10));
	    },
	    methods: {
	        setWaterMark: function setWaterMark() {
	            var self = this;
	            var _el = $('.J-WaterMarkBox');
	            var _str = '';
	            $('.J-WaterMark-P').remove();

	            setTimeout(function () {
	                for (var i = 0; i < ~~(_el.height() / 160) * 2; i++) {
	                    _str = _str + '<div class="water-mark">' + self.watermark + '</div>';
	                }

	                _el.children().addClass('water-mark-c');
	                _el.addClass('water-mark-p');
	                _el.prepend('<div class="J-WaterMark-P overflow bg-white" style="height:' + _el.children().height() + 'px;position: absolute;top: 0;left: 0;">' + _str + '</div>');
	            }, 100);
	        },
	        removeWaterMark: function removeWaterMark() {
	            var $el = $('.J-WaterMark-P');
	            $el.parent().removeClass('water-mark-p');
	            $el.children().removeClass('water-mark-c');
	            $el.remove();
	        },
	        showloading: function showloading() {
	            $('.J-Spiner').show();
	        },
	        hideloading: function hideloading() {
	            setTimeout(function () {
	                $('.J-Spiner').fadeOut();
	            }, 500);
	        }
	    },
	    router: new VueRouter({
	        routes: __webpack_require__(17).routes
	        // mode: 'history',
	    })
	}).$mount('#app');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(16)
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
	__vue_options__.__file = "D:\\MyConfiguration\\workspace\\Demo\\VueRouter2\\public\\spa\\components\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ebb730d6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ebb730d6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	__webpack_require__(12);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./app.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./app.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n/* Microsoft YaHei \\5FAE\\8F6F\\96C5\\9ED1  SimSun \\5B8B\\4F53 */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n * Remove default margin.\n */\nbody,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\ncode,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nblockquote,\nth,\ntd,\nhr,\nbutton,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  margin: 0;\n  padding: 0;\n  font-size: inherit;\n  font-style: inherit;\n  font-family: inherit;\n  outline: none!important;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background: transparent;\n}\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n  resize: none;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\nul,\nol,\nli {\n  list-style: none outside none;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/**\n * 工具class\n */\n.float-right {\n  float: right !important;\n}\n.float-left {\n  float: left !important;\n}\n.hide {\n  display: none;\n}\n.clear {\n  clear: both;\n}\ninput:focus,\nselect:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n.text-left {\n  text-align: left!important;\n}\n.text-center {\n  text-align: center!important;\n}\n.text-right {\n  text-align: right!important;\n}\n/* margin */\n.margin-left-5 {\n  margin-left: 5px !important;\n}\n.margin-right-5 {\n  margin-right: 5px !important;\n}\n.margin-bottom-5 {\n  margin-bottom: 5px !important;\n}\n.margin-top-5 {\n  margin-top: 5px !important;\n}\n.margin-left-10 {\n  margin-left: 10px !important;\n}\n.margin-right-10 {\n  margin-right: 10px !important;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px !important;\n}\n.margin-top-10 {\n  margin-top: 10px !important;\n}\n.margin-left-15 {\n  margin-left: 15px !important;\n}\n.margin-right-15 {\n  margin-right: 15px !important;\n}\n.margin-bottom-15 {\n  margin-bottom: 15px !important;\n}\n.margin-top-15 {\n  margin-top: 15px !important;\n}\n.margin-left-20 {\n  margin-left: 20px !important;\n}\n.margin-right-20 {\n  margin-right: 20px !important;\n}\n.margin-bottom-20 {\n  margin-bottom: 20px !important;\n}\n.margin-top-20 {\n  margin-top: 20px !important;\n}\n/* padding */\n.padding-left-5 {\n  padding-left: 5px !important;\n}\n.padding-right-5 {\n  padding-right: 5px !important;\n}\n.padding-bottom-5 {\n  padding-bottom: 5px !important;\n}\n.padding-top-5 {\n  padding-top: 5px !important;\n}\n.padding-left-10 {\n  padding-left: 10px !important;\n}\n.padding-right-10 {\n  padding-right: 10px !important;\n}\n.padding-bottom-10 {\n  padding-bottom: 10px !important;\n}\n.padding-top-10 {\n  padding-top: 10px !important;\n}\n.padding-left-15 {\n  padding-left: 15px !important;\n}\n.padding-right-15 {\n  padding-right: 15px !important;\n}\n.padding-bottom-15 {\n  padding-bottom: 15px !important;\n}\n.padding-top-15 {\n  padding-top: 15px !important;\n}\n.padding-left-20 {\n  padding-left: 20px !important;\n}\n.padding-right-20 {\n  padding-right: 20px !important;\n}\n.padding-bottom-20 {\n  padding-bottom: 20px !important;\n}\n.padding-top-20 {\n  padding-top: 20px !important;\n}\n/**\n * 清除浮动 兼容标准浏览器\n */\n.clearfix,\n.box .hd,\n.form-group,\n.cf {\n  zoom: 1;\n}\n.clearfix:before,\n.clearfix:after,\n.box .hd:before,\n.box .hd:after,\n.form-group:before,\n.form-group:after,\n.cf:before,\n.cf:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.box .hd:after,\n.form-group:after,\n.cf:after {\n  clear: both;\n}\nhtml {\n  font-size: 20px;\n}\nbody {\n  color: #333;\n  font-size: 0.7rem;\n  font-family: \"Helvetica Neue\", Helvetica, STHeiTi, sans-serif;\n  line-height: 1.6;\n}\na {\n  color: #333;\n  text-decoration: none;\n}\na.u {\n  text-decoration: underline;\n}\n/*工具类*/\n/*字体颜色*/\n.text-white {\n  color: #ffffff;\n}\n.text-red {\n  color: #fe2e2e;\n}\n.text-blue {\n  color: #3cb4f2;\n}\n.text-ink {\n  color: #398db8;\n}\n.text-gray {\n  color: #bebebe;\n}\n.text-gray-3 {\n  color: #333333;\n}\n.text-gray-6 {\n  color: #666666;\n}\n.text-gray-9 {\n  color: #999999;\n}\n/*背景颜色*/\n.bg-white {\n  background-color: #ffffff!important;\n}\n.bg-red {\n  background-color: #fe5153;\n}\n.bg-blue {\n  background-color: #3cb4f2;\n}\n.bg-skyblue {\n  background-color: #80d2fc;\n}\n.bg-ink {\n  background-color: #444a59;\n}\n.bg-gray {\n  background-color: #e9ecee;\n}\n.bg-gray-c {\n  background-color: #cccccc;\n}\n/*基础样式*/\n.full-width {\n  width: 100%;\n}\n.border-box {\n  box-sizing: border-box;\n}\n.overflow {\n  overflow: hidden;\n}\n.block {\n  display: block;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-left {\n  text-align: left;\n}\n.fixed {\n  position: fixed;\n}\n.fixed-bottom {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n}\n.flex-p {\n  display: -webkit-box;\n  display: flex;\n}\n.flex-c {\n  -webkit-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\nimg {\n  vertical-align: middle;\n}\n[v-cloak] {\n  display: none;\n}\n.bottom-tab-prev {\n  overflow: hidden;\n  margin-bottom: 80px;\n}\n.water-mark-p {\n  position: relative;\n  overflow-x: hidden;\n  z-index: 998;\n}\n.water-mark-p .water-mark {\n  float: left;\n  height: 200px;\n  line-height: 200px;\n  margin-right: 45px;\n  font-size: 50px;\n  color: #F9F9F9;\n  transform: rotate(-20deg);\n  transform-origin: 100% 10%;\n  z-index: 999;\n}\n.water-mark-p .water-mark-c {\n  position: relative;\n  z-index: 1000;\n}\n.spiner {\n  background-color: #ffffff!important;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1010;\n}\n.sk-spinner-wandering-cubes.sk-spinner {\n  margin-top: 50%!important;\n}\n.sk-spinner-wandering-cubes.sk-spinner {\n  margin-top: 50% !important;\n}\n.sk-spinner-rotating-plane.sk-spinner {\n  width: 30px;\n  height: 30px;\n  background-color: #1ab394;\n  margin: 0 auto;\n  -webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;\n  animation: sk-rotatePlane 1.2s infinite ease-in-out;\n}\n@-webkit-keyframes sk-rotatePlane {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0) rotateY(0);\n    transform: perspective(120px) rotateX(0) rotateY(0);\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0);\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0);\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n@keyframes sk-rotatePlane {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0) rotateY(0);\n    transform: perspective(120px) rotateX(0) rotateY(0);\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0);\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0);\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n.sk-spinner-double-bounce.sk-spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 0 auto;\n}\n.sk-spinner-double-bounce .sk-double-bounce1,\n.sk-spinner-double-bounce .sk-double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #1ab394;\n  opacity: .6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-doubleBounce 2s infinite ease-in-out;\n  animation: sk-doubleBounce 2s infinite ease-in-out;\n}\n.sk-spinner-double-bounce .sk-double-bounce2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n@-webkit-keyframes sk-doubleBounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes sk-doubleBounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.sk-spinner-wave.sk-spinner {\n  margin: 0 auto;\n  width: 50px;\n  height: 30px;\n  text-align: center;\n  font-size: 10px;\n}\n.sk-spinner-wave div {\n  background-color: #1ab394;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n  animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n}\n.sk-spinner-wave .sk-rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.sk-spinner-wave .sk-rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.sk-spinner-wave .sk-rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.sk-spinner-wave .sk-rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n@-webkit-keyframes sk-waveStretchDelay {\n  0%,\n  100%,\n  40% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n  }\n}\n@keyframes sk-waveStretchDelay {\n  0%,\n  100%,\n  40% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n  }\n}\n.sk-spinner-wandering-cubes.sk-spinner {\n  margin: 0 auto;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n.sk-spinner-wandering-cubes .sk-cube1,\n.sk-spinner-wandering-cubes .sk-cube2 {\n  background-color: #1ab394;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-wanderingCubeMove 1.8s infinite ease-in-out;\n  animation: sk-wanderingCubeMove 1.8s infinite ease-in-out;\n}\n.sk-spinner-wandering-cubes .sk-cube2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n@-webkit-keyframes sk-wanderingCubeMove {\n  25% {\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n  }\n  50.1% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n  75% {\n    -webkit-transform: translateX(0) translateY(42px) rotate(-270deg) scale(0.5);\n    transform: translateX(0) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n@keyframes sk-wanderingCubeMove {\n  25% {\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n  }\n  50.1% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n  75% {\n    -webkit-transform: translateX(0) translateY(42px) rotate(-270deg) scale(0.5);\n    transform: translateX(0) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n.sk-spinner-pulse.sk-spinner {\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n  background-color: #1ab394;\n  border-radius: 100%;\n  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\n  animation: sk-pulseScaleOut 1s infinite ease-in-out;\n}\n@-webkit-keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n.sk-spinner-chasing-dots.sk-spinner {\n  margin: 0 auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  text-align: center;\n  -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n  animation: sk-chasingDotsRotate 2s infinite linear;\n}\n.sk-spinner-chasing-dots .sk-dot1,\n.sk-spinner-chasing-dots .sk-dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: #1ab394;\n  border-radius: 100%;\n  -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n  animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n}\n.sk-spinner-chasing-dots .sk-dot2 {\n  top: auto;\n  bottom: 0;\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n@-webkit-keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes sk-chasingDotsBounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes sk-chasingDotsBounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.sk-spinner-three-bounce.sk-spinner {\n  margin: 0 auto;\n  width: 70px;\n  text-align: center;\n}\n.sk-spinner-three-bounce div {\n  width: 18px;\n  height: 18px;\n  background-color: #1ab394;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-threeBounceDelay 1.4s infinite ease-in-out;\n  animation: sk-threeBounceDelay 1.4s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.sk-spinner-three-bounce .sk-bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.sk-spinner-three-bounce .sk-bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n@-webkit-keyframes sk-threeBounceDelay {\n  0%,\n  100%,\n  80% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes sk-threeBounceDelay {\n  0%,\n  100%,\n  80% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.sk-spinner-circle.sk-spinner {\n  margin: 0 auto;\n  width: 22px;\n  height: 22px;\n  position: relative;\n}\n.sk-spinner-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.sk-spinner-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 20%;\n  height: 20%;\n  background-color: #1ab394;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.sk-spinner-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n.sk-spinner-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n.sk-spinner-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.sk-spinner-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n.sk-spinner-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n.sk-spinner-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.sk-spinner-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n.sk-spinner-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n.sk-spinner-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.sk-spinner-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n.sk-spinner-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n.sk-spinner-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.sk-spinner-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.sk-spinner-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.sk-spinner-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.sk-spinner-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.sk-spinner-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.sk-spinner-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.sk-spinner-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.sk-spinner-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.sk-spinner-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.sk-spinner-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n@-webkit-keyframes sk-circleBounceDelay {\n  0%,\n  100%,\n  80% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes sk-circleBounceDelay {\n  0%,\n  100%,\n  80% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.sk-spinner-cube-grid.sk-spinner {\n  width: 30px;\n  height: 30px;\n  margin: 0 auto;\n}\n.sk-spinner-cube-grid .sk-cube {\n  width: 33%;\n  height: 33%;\n  background-color: #1ab394;\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(1) {\n  -webkit-animation-delay: .2s;\n  animation-delay: 0.2s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(2) {\n  -webkit-animation-delay: .3s;\n  animation-delay: 0.3s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(3) {\n  -webkit-animation-delay: .4s;\n  animation-delay: 0.4s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(4) {\n  -webkit-animation-delay: .1s;\n  animation-delay: 0.1s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(5) {\n  -webkit-animation-delay: .2s;\n  animation-delay: 0.2s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(6) {\n  -webkit-animation-delay: .3s;\n  animation-delay: 0.3s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(7) {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(8) {\n  -webkit-animation-delay: .1s;\n  animation-delay: 0.1s;\n}\n.sk-spinner-cube-grid .sk-cube:nth-child(9) {\n  -webkit-animation-delay: .2s;\n  animation-delay: 0.2s;\n}\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%,\n  100%,\n  70% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n  }\n}\n@keyframes sk-cubeGridScaleDelay {\n  0%,\n  100%,\n  70% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n  }\n}\n.sk-spinner-wordpress.sk-spinner {\n  background-color: #1ab394;\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  position: relative;\n  margin: 0 auto;\n  -webkit-animation: sk-innerCircle 1s linear infinite;\n  animation: sk-innerCircle 1s linear infinite;\n}\n.sk-spinner-wordpress .sk-inner-circle {\n  display: block;\n  background-color: #fff;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  border-radius: 8px;\n  top: 5px;\n  left: 5px;\n}\n@-webkit-keyframes sk-innerCircle {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes sk-innerCircle {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n.sk-spinner-fading-circle.sk-spinner {\n  margin: 0 auto;\n  width: 22px;\n  height: 22px;\n  position: relative;\n}\n.sk-spinner-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.sk-spinner-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 18%;\n  height: 18%;\n  background-color: #1ab394;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.sk-spinner-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n.sk-spinner-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n.sk-spinner-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.sk-spinner-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n.sk-spinner-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n.sk-spinner-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.sk-spinner-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n.sk-spinner-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n.sk-spinner-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.sk-spinner-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n.sk-spinner-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n.sk-spinner-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.sk-spinner-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.sk-spinner-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.sk-spinner-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.sk-spinner-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.sk-spinner-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.sk-spinner-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.sk-spinner-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.sk-spinner-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.sk-spinner-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.sk-spinner-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n@-webkit-keyframes sk-circleFadeDelay {\n  0%,\n  100%,\n  39% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n@keyframes sk-circleFadeDelay {\n  0%,\n  100%,\n  39% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('router-view'), _vm._v(" "), _vm._m(0)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "spiner J-Spiner"
	  }, [_c('div', {
	    staticClass: "sk-spinner sk-spinner-wandering-cubes"
	  }, [_c('div', {
	    staticClass: "sk-cube1"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "sk-cube2"
	  })])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ebb730d6", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    routes: [{
	        path: '/',
	        component: function component(r) {
	            return __webpack_require__.e/* nsure */(1, function () {
	                return r(__webpack_require__(18));
	            });
	        }
	    }, {
	        path: '/overview',
	        components: {
	            default: function _default(r) {
	                return __webpack_require__.e/* nsure */(2, function () {
	                    return r(__webpack_require__(24));
	                });
	            }
	            // 可以使用复合视图的！
	            // bottomtab: require('components/bottomtab')
	        }
	    }, {
	        path: '/datalist',
	        component: function component(r) {
	            return __webpack_require__.e/* nsure */(3, function () {
	                return r(__webpack_require__(34));
	            });
	        }
	    }, {
	        path: '/img-box',
	        component: function component(r) {
	            return __webpack_require__.e/* nsure */(4, function () {
	                return r(__webpack_require__(41));
	            });
	        }
	    }]
	};

/***/ }
]);