webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['articleIndex']
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_article_vHeader__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_article_vHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_public_article_vHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_public_article_vArticle__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_public_article_vArticle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_public_article_vArticle__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vHeader: __WEBPACK_IMPORTED_MODULE_0__components_public_article_vHeader___default.a,
    vArticle: __WEBPACK_IMPORTED_MODULE_1__components_public_article_vArticle___default.a
  },
  data() {
    return {
      articleIndex: {}
    };
  },
  mounted() {
    //  console.log(this.$route.params.id)
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/main-article' + this.$route.params.id).then(response => {
      this.articleIndex = response.data;
    }).catch(error => {
      console.log(error);
    });
  }
});

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".video[data-v-3b044f92]{height:5.6888rem;width:10rem;margin-top:1.2667rem}.head[data-v-3b044f92]{position:fixed;top:0;height:1.32666667rem;width:100%;background-color:#fff;background-color:#3466f6}.head[data-v-3b044f92]:after{content:\"\";position:absolute;top:1.32666667rem;left:0;height:1px;width:100%;background-color:#d2d2d2;transform:scaleY(.35);-webkit-transform:scaleY(.35)}.head .clearfix[data-v-3b044f92]{clear:both}.head .clearfix[data-v-3b044f92]:after{content:\"\";clear:both;display:table;visibility:hidden;height:0;zoom:1}.head .clearfix .head__left[data-v-3b044f92],.head .clearfix .head__main[data-v-3b044f92],.head .clearfix .head__right[data-v-3b044f92]{float:left;color:#fff}.head .clearfix .head__left[data-v-3b044f92]{height:1.32666667rem;margin-left:-100%;left:-1.32666667rem;width:1.32666667rem}.head .clearfix .head__left .goback[data-v-3b044f92]{display:block;margin:0 auto;margin-top:.4666667rem;width:.33333rem;height:.33333rem;border-top:1px solid #fff;border-left:1px solid #fff;transform:rotate(-45deg)}.head .clearfix .head__left img[data-v-3b044f92]{display:block;margin:0 auto;height:.8rem;width:.8rem;margin-top:.2rem}.head .clearfix .head__right[data-v-3b044f92]{height:1.32666667rem;width:2.72666667rem;margin-left:-2.72666667rem;right:-2.72666667rem;text-align:right}.head .clearfix .head__right img[data-v-3b044f92]{display:inline-block;height:.8rem;width:.8rem;margin-top:.2066667rem;margin-right:.5266667rem;vertical-align:middle}.head .clearfix .head__right .head__player[data-v-3b044f92]{margin-top:3.3266667rem;margin-right:.3266667rem;height:.6rem;width:.6rem}.head .clearfix .head__main[data-v-3b044f92]{text-align:center;width:100%;font-size:.43666667rem;font-weight:400;line-height:1.32666667rem;height:1.32666667rem}", "", {"version":3,"sources":["G:/workspace/Vue/tencent-sports/src/page/article/article.vue"],"names":[],"mappings":"AACA,wBACE,iBAAkB,AAClB,YAAa,AACb,oBAAsB,CACvB,AACD,uBACE,eAAgB,AAChB,MAAO,AACP,qBAAsB,AACtB,WAAY,AACZ,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,6BACE,WAAY,AACZ,kBAAmB,AACnB,kBAAmB,AACnB,OAAQ,AACR,WAAY,AACZ,WAAY,AACZ,yBAA0B,AAC1B,sBAAwB,AACxB,6BAAgC,CACjC,AACD,iCACE,UAAY,CACb,AACD,uCACE,WAAY,AACZ,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,SAAU,AACV,MAAQ,CACT,AACD,wIAGE,WAAY,AACZ,UAAY,CACb,AACD,6CACE,qBAAsB,AACtB,kBAAmB,AACnB,oBAAqB,AACrB,mBAAqB,CACtB,AACD,qDACE,cAAe,AACf,cAAe,AACf,uBAAyB,AACzB,gBAAkB,AAClB,iBAAmB,AACnB,0BAA2B,AAC3B,2BAA4B,AAC5B,wBAA0B,CAC3B,AACD,iDACE,cAAe,AACf,cAAe,AACf,aAAe,AACf,YAAc,AACd,gBAAmB,CACpB,AACD,8CACE,qBAAsB,AACtB,oBAAqB,AACrB,2BAA4B,AAC5B,qBAAsB,AACtB,gBAAkB,CACnB,AACD,kDACE,qBAAsB,AACtB,aAAe,AACf,YAAc,AACd,uBAAyB,AACzB,yBAA2B,AAC3B,qBAAuB,CACxB,AACD,4DACE,wBAAyB,AACzB,yBAA2B,AAC3B,aAAe,AACf,WAAc,CACf,AACD,6CACE,kBAAmB,AACnB,WAAY,AACZ,uBAAyB,AACzB,gBAAiB,AACjB,0BAA2B,AAC3B,oBAAsB,CACvB","file":"article.vue","sourcesContent":["\n.video[data-v-3b044f92] {\n  height: 5.6888rem;\n  width: 10rem;\n  margin-top: 1.2667rem;\n}\n.head[data-v-3b044f92] {\n  position: fixed;\n  top: 0;\n  height: 1.32666667rem;\n  width: 100%;\n  background-color: #fff;\n  background-color: #3466f6;\n}\n.head[data-v-3b044f92]:after {\n  content: '';\n  position: absolute;\n  top: 1.32666667rem;\n  left: 0;\n  height: 1px;\n  width: 100%;\n  background-color: #d2d2d2;\n  transform: scaleY(0.35);\n  -webkit-transform: scaleY(0.35);\n}\n.head .clearfix[data-v-3b044f92] {\n  clear: both;\n}\n.head .clearfix[data-v-3b044f92]:after {\n  content: '';\n  clear: both;\n  display: table;\n  visibility: hidden;\n  height: 0;\n  zoom: 1;\n}\n.head .clearfix .head__left[data-v-3b044f92],\n.head .clearfix .head__right[data-v-3b044f92],\n.head .clearfix .head__main[data-v-3b044f92] {\n  float: left;\n  color: #fff;\n}\n.head .clearfix .head__left[data-v-3b044f92] {\n  height: 1.32666667rem;\n  margin-left: -100%;\n  left: -1.32666667rem;\n  width: 1.32666667rem;\n}\n.head .clearfix .head__left .goback[data-v-3b044f92] {\n  display: block;\n  margin: 0 auto;\n  margin-top: 0.4666667rem;\n  width: 0.33333rem;\n  height: 0.33333rem;\n  border-top: 1px solid #fff;\n  border-left: 1px solid #fff;\n  transform: rotate(-45deg);\n}\n.head .clearfix .head__left img[data-v-3b044f92] {\n  display: block;\n  margin: 0 auto;\n  height: 0.8rem;\n  width: 0.8rem;\n  margin-top: 0.2rem;\n}\n.head .clearfix .head__right[data-v-3b044f92] {\n  height: 1.32666667rem;\n  width: 2.72666667rem;\n  margin-left: -2.72666667rem;\n  right: -2.72666667rem;\n  text-align: right;\n}\n.head .clearfix .head__right img[data-v-3b044f92] {\n  display: inline-block;\n  height: 0.8rem;\n  width: 0.8rem;\n  margin-top: 0.2066667rem;\n  margin-right: 0.5266667rem;\n  vertical-align: middle;\n}\n.head .clearfix .head__right .head__player[data-v-3b044f92] {\n  margin-top: 3.3266667rem;\n  margin-right: 0.3266667rem;\n  height: 0.6rem;\n  width: 0.6rem;\n}\n.head .clearfix .head__main[data-v-3b044f92] {\n  text-align: center;\n  width: 100%;\n  font-size: 0.43666667rem;\n  font-weight: 400;\n  line-height: 1.32666667rem;\n  height: 1.32666667rem;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".article[data-v-5f657b0a]{background-color:#fff;margin-top:1.2667rem}.article .header[data-v-5f657b0a]{padding:.4rem}.article .header h2[data-v-5f657b0a]{font-size:.544444rem}.article .header p[data-v-5f657b0a]{margin-top:.2rem;color:#828696;margin-bottom:.3rem}.article .video-group[data-v-5f657b0a]{margin-bottom:.3rem}.article .video-group .video-desc[data-v-5f657b0a]{padding:.3rem;text-align:center;color:#828696;font-size:.3rem}.article .main-content[data-v-5f657b0a]{padding:0 .4rem 2rem}.article .main-content .article-content[data-v-5f657b0a]{font-size:.5rem;letter-spacing:1px}", "", {"version":3,"sources":["G:/workspace/Vue/tencent-sports/src/components/public/article/vArticle.vue"],"names":[],"mappings":"AACA,0BACE,sBAAuB,AACvB,oBAAsB,CACvB,AACD,kCACE,aAAgB,CACjB,AACD,qCACE,oBAAuB,CACxB,AACD,oCACE,iBAAmB,AACnB,cAAe,AACf,mBAAsB,CACvB,AACD,uCACE,mBAAsB,CACvB,AACD,mDACE,cAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,eAAkB,CACnB,AACD,wCACE,oBAA8B,CAC/B,AACD,yDACE,gBAAkB,AAClB,kBAAoB,CACrB","file":"vArticle.vue","sourcesContent":["\n.article[data-v-5f657b0a] {\n  background-color: #fff;\n  margin-top: 1.2667rem;\n}\n.article .header[data-v-5f657b0a] {\n  padding: 0.4rem;\n}\n.article .header h2[data-v-5f657b0a] {\n  font-size: 0.544444rem;\n}\n.article .header p[data-v-5f657b0a] {\n  margin-top: 0.2rem;\n  color: #828696;\n  margin-bottom: 0.3rem;\n}\n.article .video-group[data-v-5f657b0a] {\n  margin-bottom: 0.3rem;\n}\n.article .video-group .video-desc[data-v-5f657b0a] {\n  padding: 0.3rem;\n  text-align: center;\n  color: #828696;\n  font-size: 0.3rem;\n}\n.article .main-content[data-v-5f657b0a] {\n  padding: 0 0.4rem 2rem 0.4rem;\n}\n.article .main-content .article-content[data-v-5f657b0a] {\n  font-size: 0.5rem;\n  letter-spacing: 1px;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("7640a2a4", content, true);

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("a42825ac", content, true);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(154)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(195),
  /* scopeId */
  "data-v-3b044f92",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(160)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(201),
  /* scopeId */
  "data-v-5f657b0a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "article"
  }, [_c('v-header'), _vm._v(" "), _c('v-article', {
    attrs: {
      "articleIndex": _vm.articleIndex
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "article"
  }, [_c('header', {
    staticClass: "header main-title"
  }, [_c('h2', [_vm._v(_vm._s(_vm.articleIndex.title))]), _vm._v(" "), _c('p', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.articleIndex.time))])]), _vm._v(" "), _c('div', {
    staticClass: "video-group"
  }, [_c('video', {
    staticClass: "video",
    attrs: {
      "src": _vm.articleIndex.video,
      "width": "100%",
      "controls": "",
      "autoplay": "autoplay"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "video-desc"
  }, [_vm._v(_vm._s(_vm.articleIndex.video_desc))])]), _vm._v(" "), _c('article', {
    staticClass: "main-content"
  }, [_c('p', {
    staticClass: "article-content"
  }, [_vm._v("\n      " + _vm._s(_vm.articleIndex.article) + "\n    ")])])])
},staticRenderFns: []}

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    // goback返回
    goback() {
      console.log(1);
      window.history.go(-1);
    }
  }
});

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".head[data-v-22df31d0]{position:fixed;top:0;height:1.32666667rem;width:100%;z-index:999;background-color:#fff;background-color:#3466f6}.head[data-v-22df31d0]:after{content:\"\";position:absolute;top:1.32666667rem;left:0;height:1px;width:100%;background-color:#d2d2d2;transform:scaleY(.35);-webkit-transform:scaleY(.35)}.head .clearfix[data-v-22df31d0]{clear:both}.head .clearfix[data-v-22df31d0]:after{content:\"\";clear:both;display:table;visibility:hidden;height:0;zoom:1}.head .clearfix .head__left[data-v-22df31d0],.head .clearfix .head__main[data-v-22df31d0],.head .clearfix .head__right[data-v-22df31d0]{float:left;color:#fff}.head .clearfix .head__left[data-v-22df31d0]{height:1.32666667rem;margin-left:-100%;left:-1.32666667rem;width:1.32666667rem}.head .clearfix .head__left .goback[data-v-22df31d0]{display:block;margin:0 auto;margin-top:.4666667rem;width:.33333rem;height:.33333rem;border-top:1px solid #fff;border-left:1px solid #fff;transform:rotate(-45deg)}.head .clearfix .head__left img[data-v-22df31d0]{display:block;margin:0 auto;height:.8rem;width:.8rem;margin-top:.2rem}.head .clearfix .head__right[data-v-22df31d0]{height:1.32666667rem;width:2.72666667rem;margin-left:-2.72666667rem;right:-2.72666667rem;text-align:right}.head .clearfix .head__right img[data-v-22df31d0]{display:inline-block;height:.8rem;width:.8rem;margin-top:.2066667rem;margin-right:.5266667rem;vertical-align:middle}.head .clearfix .head__right .head__player[data-v-22df31d0]{margin-top:3.3266667rem;margin-right:.3266667rem;height:.6rem;width:.6rem}.head .clearfix .head__main[data-v-22df31d0]{text-align:center;width:100%;font-size:.43666667rem;font-weight:400;line-height:1.32666667rem;height:1.32666667rem}", "", {"version":3,"sources":["G:/workspace/Vue/tencent-sports/src/components/public/article/vHeader.vue"],"names":[],"mappings":"AACA,uBACE,eAAgB,AAChB,MAAO,AACP,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,6BACE,WAAY,AACZ,kBAAmB,AACnB,kBAAmB,AACnB,OAAQ,AACR,WAAY,AACZ,WAAY,AACZ,yBAA0B,AAC1B,sBAAwB,AACxB,6BAAgC,CACjC,AACD,iCACE,UAAY,CACb,AACD,uCACE,WAAY,AACZ,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,SAAU,AACV,MAAQ,CACT,AACD,wIAGE,WAAY,AACZ,UAAY,CACb,AACD,6CACE,qBAAsB,AACtB,kBAAmB,AACnB,oBAAqB,AACrB,mBAAqB,CACtB,AACD,qDACE,cAAe,AACf,cAAe,AACf,uBAAyB,AACzB,gBAAkB,AAClB,iBAAmB,AACnB,0BAA2B,AAC3B,2BAA4B,AAC5B,wBAA0B,CAC3B,AACD,iDACE,cAAe,AACf,cAAe,AACf,aAAe,AACf,YAAc,AACd,gBAAmB,CACpB,AACD,8CACE,qBAAsB,AACtB,oBAAqB,AACrB,2BAA4B,AAC5B,qBAAsB,AACtB,gBAAkB,CACnB,AACD,kDACE,qBAAsB,AACtB,aAAe,AACf,YAAc,AACd,uBAAyB,AACzB,yBAA2B,AAC3B,qBAAuB,CACxB,AACD,4DACE,wBAAyB,AACzB,yBAA2B,AAC3B,aAAe,AACf,WAAc,CACf,AACD,6CACE,kBAAmB,AACnB,WAAY,AACZ,uBAAyB,AACzB,gBAAiB,AACjB,0BAA2B,AAC3B,oBAAsB,CACvB","file":"vHeader.vue","sourcesContent":["\n.head[data-v-22df31d0] {\n  position: fixed;\n  top: 0;\n  height: 1.32666667rem;\n  width: 100%;\n  z-index: 999;\n  background-color: #fff;\n  background-color: #3466f6;\n}\n.head[data-v-22df31d0]:after {\n  content: '';\n  position: absolute;\n  top: 1.32666667rem;\n  left: 0;\n  height: 1px;\n  width: 100%;\n  background-color: #d2d2d2;\n  transform: scaleY(0.35);\n  -webkit-transform: scaleY(0.35);\n}\n.head .clearfix[data-v-22df31d0] {\n  clear: both;\n}\n.head .clearfix[data-v-22df31d0]:after {\n  content: '';\n  clear: both;\n  display: table;\n  visibility: hidden;\n  height: 0;\n  zoom: 1;\n}\n.head .clearfix .head__left[data-v-22df31d0],\n.head .clearfix .head__right[data-v-22df31d0],\n.head .clearfix .head__main[data-v-22df31d0] {\n  float: left;\n  color: #fff;\n}\n.head .clearfix .head__left[data-v-22df31d0] {\n  height: 1.32666667rem;\n  margin-left: -100%;\n  left: -1.32666667rem;\n  width: 1.32666667rem;\n}\n.head .clearfix .head__left .goback[data-v-22df31d0] {\n  display: block;\n  margin: 0 auto;\n  margin-top: 0.4666667rem;\n  width: 0.33333rem;\n  height: 0.33333rem;\n  border-top: 1px solid #fff;\n  border-left: 1px solid #fff;\n  transform: rotate(-45deg);\n}\n.head .clearfix .head__left img[data-v-22df31d0] {\n  display: block;\n  margin: 0 auto;\n  height: 0.8rem;\n  width: 0.8rem;\n  margin-top: 0.2rem;\n}\n.head .clearfix .head__right[data-v-22df31d0] {\n  height: 1.32666667rem;\n  width: 2.72666667rem;\n  margin-left: -2.72666667rem;\n  right: -2.72666667rem;\n  text-align: right;\n}\n.head .clearfix .head__right img[data-v-22df31d0] {\n  display: inline-block;\n  height: 0.8rem;\n  width: 0.8rem;\n  margin-top: 0.2066667rem;\n  margin-right: 0.5266667rem;\n  vertical-align: middle;\n}\n.head .clearfix .head__right .head__player[data-v-22df31d0] {\n  margin-top: 3.3266667rem;\n  margin-right: 0.3266667rem;\n  height: 0.6rem;\n  width: 0.6rem;\n}\n.head .clearfix .head__main[data-v-22df31d0] {\n  text-align: center;\n  width: 100%;\n  font-size: 0.43666667rem;\n  font-weight: 400;\n  line-height: 1.32666667rem;\n  height: 1.32666667rem;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("3d591332", content, true);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(92),
  /* scopeId */
  "data-v-22df31d0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "head"
  }, [_c('div', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "head__main"
  }, [_c('span', [_vm._t("default", [_vm._v("资讯详情")])], 2)]), _vm._v(" "), _c('div', {
    staticClass: "head__left"
  }, [_c('router-link', {
    staticClass: "goback",
    attrs: {
      "to": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.goback($event)
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "head__right"
  })])])
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=0.da2fad6035f18153491b.js.map