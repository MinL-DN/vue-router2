webpackJsonp([2],{24:function(t,a,i){var s,e;s=i(25);var o=i(33);e=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(e=s=s.default),"function"==typeof e&&(e=e.options),e.render=o.render,e.staticRenderFns=o.staticRenderFns,t.exports=s},25:function(t,a,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var e=i(26),o=s(e);i(31),a.default={data:function(){return{data:{},flag:1,chartrate:1}},mounted:function(){this.getData()},methods:{getData:function(t){var a=this;t=t||1,a.$root.bg=3==t?"white":"gray",a.flag=t,a.$root.showloading(),a.$root.removeWaterMark();var i=3!=t?{PersonCount:3789,GMV:966.66,GrossMargin:63.45,CustomerPrice:2551.23,OrderCount:2015,GrossMarginRate:6.56,PaymentRate:49.53,UV:267928,GMVGrowthRate:85.42,PersonCountGrowthRate:68.4,UVConversionRate:132.97,TargetDate:"",PersonCountTarget:0,GrossMarginTarget:0,GMVAccumulatedRate:0,GMVExpectedCompletionRate:0,PersonCountCompletionRate:0,GrossMarginCompletionRate:0,GMVTarget:0,ExpectedGMV:0}:{PersonCount:91456,GMV:23216.04,GrossMargin:1447.85,CustomerPrice:0,OrderCount:0,GrossMarginRate:.062364,PaymentRate:0,UV:0,GMVGrowthRate:0,PersonCountGrowthRate:0,UVConversionRate:0,TargetDate:"07",PersonCountTarget:133928,GrossMarginTarget:2054.65,GMVAccumulatedRate:67.93,GMVExpectedCompletionRate:81.52,PersonCountCompletionRate:68.29,GrossMarginCompletionRate:70.47,GMVTarget:34176.57,ExpectedGMV:27859.24};console.log(i),a.$root.setWaterMark(),3==t&&a.setRate(i),a.data=i,a.$root.hideloading()},setRate:function(t){var a=this,i=["GMVAccumulatedRate","GMVExpectedCompletionRate","PersonCountCompletionRate","GrossMarginCompletionRate","GrossMarginRate"],s=0,e=1;$.each(i,function(a,i){t[i]>s&&(s=t[i])}),s>100&&(e=100/s),a.chartrate=e}},components:{bottomtab:o.default}}},26:function(t,a,i){var s,e;s=i(27);var o=i(30);e=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(e=s=s.default),"function"==typeof e&&(e=e.options),e.render=o.render,e.staticRenderFns=o.staticRenderFns,t.exports=s},27:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),i(28),a.default={data:function(){return{tablist:["实时","昨日","本月"],flag:0}},methods:{go:function(t){var a=this;a.flag!=t&&(a.flag=t,a.$parent.getData(t))}}}},28:function(t,a,i){var s=i(29);"string"==typeof s&&(s=[[t.id,s,""]]);i(16)(s,{});s.locals&&(t.exports=s.locals)},29:function(t,a,i){a=t.exports=i(15)(),a.push([t.id,"ul.fixed-bottom-tab{position:fixed;bottom:0;left:0;width:100%;background-color:#444a59;height:64px;line-height:64px;font-size:18px;z-index:1001}ul.fixed-bottom-tab li{text-align:center!important;text-align:center;color:#fff;float:left;box-sizing:border-box;width:33.33333%;height:100%;border-right:1px solid #646464}ul.fixed-bottom-tab li:last-child{border-right:0}ul.fixed-bottom-tab .two-line{line-height:20px;padding-top:9px}ul.fixed-bottom-tab li.active{background-color:#3cb4f2}",""])},30:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ul",{staticClass:"fixed-bottom-tab"},t._l(t.tablist,function(a,s){return i("li",{class:{active:t.flag==s},on:{click:function(a){t.go(s)}}},[t._v(t._s(a))])}))},staticRenderFns:[]}},31:function(t,a,i){var s=i(32);"string"==typeof s&&(s=[[t.id,s,""]]);i(16)(s,{});s.locals&&(t.exports=s.locals)},32:function(t,a,i){a=t.exports=i(15)(),a.push([t.id,".dashboard li{width:100%;overflow:hidden;box-sizing:border-box;font-size:18px;padding:22px 0;border-bottom:8px solid #e9ecee}.dashboard li .panel{text-align:center!important;text-align:center;float:left;width:49%}.dashboard li .panel .text-gray-6{font-size:19px}.dashboard li .line{background-color:#ccc;float:left;width:1px;height:45px;margin-top:10px}.dashboard li.col-4 .panel{width:33%}.color-cue{width:100%;overflow:hidden;margin-top:10px}.color-cue li{float:left;color:#999;height:12px;line-height:12px;font-size:12px}.color-cue li .cue,.color-cue li .cue-red{float:left;display:inline-block;margin-right:4px;width:12px;height:12px}.color-cue li .cue-red{background-color:#fe5153;margin-left:15px}.color-cue li .cue-blue{float:left;display:inline-block;margin-right:4px;width:12px;height:12px;background-color:#80d2fc;margin-left:12px}.title{color:#333;text-align:center!important;text-align:center;margin-top:28px;font-size:17px}.mid,.title{width:100%}.mid .mid-title{color:#333;font-size:14px;padding:28px 0 14px 30px}.mid .mid-body .col-p .col{overflow:hidden}.mid .mid-body .col-p .col *{float:left}.mid .mid-body .col-p .col .static{text-align:right!important;text-align:right;height:16px;line-height:16px;width:24%}.mid .mid-body .col-p .col .p-p{width:50%;box-sizing:border-box;display:inline-block;padding-left:11px}.mid .mid-body .col-p .col .p-p p{height:16px;position:relative}.mid .mid-body .col-p .col .p-p p span{position:absolute;top:0;right:-70px;height:16px;line-height:16px;width:65px}.mid .mid-body .col-p .col-up{overflow:hidden}.mid .mid-body .col-p .col-up *{float:left}.mid .mid-body .col-p .col-up .static{text-align:right!important;text-align:right;height:16px;line-height:16px;width:24%}.mid .mid-body .col-p .col-up .p-p{width:50%;box-sizing:border-box;display:inline-block;padding-left:11px}.mid .mid-body .col-p .col-up .p-p p{height:16px;position:relative}.mid .mid-body .col-p .col-up .p-p p span{position:absolute;top:0;right:-70px;height:16px;line-height:16px;width:65px}.mid .mid-body .col-p .col-up p{background-color:#fe5153}.mid .mid-body .col-p .col-down{overflow:hidden}.mid .mid-body .col-p .col-down *{float:left}.mid .mid-body .col-p .col-down .static{text-align:right!important;text-align:right;height:16px;line-height:16px;width:24%}.mid .mid-body .col-p .col-down .p-p{width:50%;box-sizing:border-box;display:inline-block;padding-left:11px}.mid .mid-body .col-p .col-down .p-p p{height:16px;position:relative}.mid .mid-body .col-p .col-down .p-p p span{position:absolute;top:0;right:-70px;height:16px;line-height:16px;width:65px}.mid .mid-body .col-p .col-down p{background-color:#80d2fc}.mid-hr{border:none;background-color:#ccc;height:1px;width:88%;margin:30px auto}",""])},33:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"overflow"},[i("div",{staticClass:"J-WaterMarkBox"},[3==t.flag?i("div",{staticStyle:{"padding-bottom":"80px"}},[t._m(0),t._v(" "),i("p",{staticClass:"title"},[t._v("GMV完成情况")]),t._v(" "),i("div",{staticClass:"mid"},[i("div",{staticClass:"mid-title",staticStyle:{"padding-top":"20px"}},[t._v("\n                    累计"),i("span",{staticClass:"text-red"},[t._v(t._s(t.data.TargetDate)+"月")]),t._v("GMV(KPI)完成情况（单位：万）\n                ")]),t._v(" "),i("div",{staticClass:"mid-body"},[i("div",{staticClass:"col-p"},[i("div",{staticClass:"col-up"},[i("label",{staticClass:"static"},[t._v(t._s(t.data.GMV))]),t._v(" "),i("div",{staticClass:"p-p"},[i("p",{style:{width:t.data.GMVAccumulatedRate*t.chartrate+"%"}},[i("span",[t._v(t._s(t.data.GMVAccumulatedRate)+"%")])])])]),t._v(" "),i("div",{staticClass:"col-down"},[i("label",{staticClass:"static"},[t._v(t._s(t.data.GMVTarget))]),t._v(" "),i("div",{staticClass:"p-p"},[i("p",{style:{width:100*t.chartrate+"%"}})])])])])]),t._v(" "),i("div",{staticClass:"mid"},[i("div",{staticClass:"mid-title"},[t._v("\n                    预计"),i("span",{staticClass:"text-red"},[t._v(t._s(t.data.TargetDate)+"月")]),t._v("GMV(KPI)完成情况（单位：万）\n                ")]),t._v(" "),i("div",{staticClass:"mid-body"},[i("div",{staticClass:"col-p"},[i("div",{staticClass:"col-up"},[i("label",{staticClass:"static"},[t._v(t._s(t.data.ExpectedGMV))]),t._v(" "),i("div",{staticClass:"p-p"},[i("p",{style:{width:t.data.GMVExpectedCompletionRate*t.chartrate+"%"}},[i("span",[t._v(t._s(t.data.GMVExpectedCompletionRate)+"%")])])])]),t._v(" "),i("div",{staticClass:"col-down"},[i("label",{staticClass:"static"},[t._v(t._s(t.data.GMVTarget))]),t._v(" "),i("div",{staticClass:"p-p"},[i("p",{style:{width:100*t.chartrate+"%"}})])])])])]),t._v(" "),i("hr",{staticClass:"mid-hr"}),t._v(" "),i("p",{staticClass:"title"},[t._v("人头及佣金完成情况")]),t._v(" "),i("div",{staticClass:"mid"},[i("div",{staticClass:"mid-title",staticStyle:{"padding-top":"20px"}},[t._v("\n                    人头完成情况（单位：人）\n                ")]),t._v(" "),i("div",{staticClass:"mid-body"},[i("div",{staticClass:"col-p"},[i("div",{staticClass:"col-up"},[i("label",{staticClass:"static"},[t._v(t._s(t.data.PersonCount))]),t._v(" "),i("div",{staticClass:"p-p"},[i("p",{style:{width:t.data.PersonCountCompletionRate*t.chartrate+"%"}},[i("span",[t._v(t._s(t.data.PersonCountCompletionRate)+"%")])])])]),t._v(" "),i("div",{staticClass:"col-down"},[i("label",{staticClass:"static"},[t._v(t._s(t.data.PersonCountTarget))]),t._v(" "),i("div",{staticClass:"p-p"},[i("p",{style:{width:100*t.chartrate+"%"}})])])])])]),t._v(" "),i("div",{staticClass:"mid"},[i("div",{staticClass:"mid-title"},[t._v("\n                    佣金完成情况（单位：万）\n                ")]),t._v(" "),i("div",{staticClass:"mid-body"},[i("div",{staticClass:"col-p"},[i("div",{staticClass:"col-up"},[i("label",{staticClass:"static"},[t._v(t._s(t.data.GrossMargin))]),t._v(" "),i("div",{staticClass:"p-p"},[i("p",{style:{width:t.data.GrossMarginCompletionRate*t.chartrate+"%"}},[i("span",[t._v(t._s(t.data.GrossMarginCompletionRate)+"%")])])])]),t._v(" "),i("div",{staticClass:"col-down"},[i("label",{staticClass:"static"},[t._v(t._s(t.data.GrossMarginTarget))]),t._v(" "),i("div",{staticClass:"p-p"},[i("p",{style:{width:100*t.chartrate+"%"}})])])])])])]):t.flag&&3!=t.flag?i("ul",{staticClass:"dashboard bottom-tab-prev"},[i("li",[i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("GMV")]),t._v(" "),i("p",{staticClass:"text-ink"},[t._v(t._s(t.data.GMV)+"万")])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("环比上月增长")]),t._v(" "),i("p",{staticClass:"text-red"},[t._v(t._s(t.data.GMVGrowthRate)+"%")])])]),t._v(" "),i("li",[i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("人头数")]),t._v(" "),i("p",{staticClass:"text-ink"},[t._v(t._s(t.data.PersonCount))])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("环比上月增长")]),t._v(" "),i("p",{staticClass:"text-red"},[t._v(t._s(t.data.PersonCountGrowthRate)+"%")])])]),t._v(" "),i("li",[i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("佣金")]),t._v(" "),i("p",{staticClass:"text-ink"},[t._v(t._s(t.data.GrossMargin)+"万")])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("佣金率")]),t._v(" "),i("p",{staticClass:"text-red"},[t._v(t._s(t.data.GrossMarginRate)+"%")])])]),t._v(" "),i("li",[i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("客单价")]),t._v(" "),i("p",{staticClass:"text-ink"},[t._v(t._s(t.data.CustomerPrice))])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("付款率")]),t._v(" "),i("p",{staticClass:"text-red"},[t._v(t._s(t.data.PaymentRate)+"%")])])]),t._v(" "),i("li",{staticClass:"col-4"},[i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("产品UV")]),t._v(" "),i("p",{staticClass:"text-ink"},[t._v(t._s(t.data.UV))])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("创建订单数")]),t._v(" "),i("p",{staticClass:"text-ink"},[t._v(t._s(t.data.OrderCount))])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"panel"},[i("p",{staticClass:"text-gray-6"},[t._v("转化")]),t._v(" "),i("p",{staticClass:"text-red"},[t._v(t._s(t.data.UVConversionRate))])])])]):t._e()]),t._v(" "),i("bottomtab")],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ul",{staticClass:"color-cue"},[i("li",[i("span",{staticClass:"cue-red"}),t._v("实际完成")]),t._v(" "),i("li",[i("span",{staticClass:"cue-blue"}),t._v("目标值")])])}]}}});