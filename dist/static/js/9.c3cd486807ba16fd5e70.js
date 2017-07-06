webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_communityArticle__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_communityArticle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_communityArticle__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    if (sessionStorage.getItem('swiper')) {
      this.swiperItems = sessionStorage.getItem('swiper');
    } else {
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/swiper').then(response => {
        // console.log(response.data.swiper)
        sessionStorage.setItem('swiper', response.data.swiper);
        this.swiperItems = response.data.swiper;
      }).catch(function (error) {
        console.log(error);
      });
    }

    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/article').then(response => {
      this.articleArr = response.data.articles;
    }).catch(function (error) {
      console.log(error);
    });
  },
  data() {
    return {
      clubsArr: this.$store.state.clubs,
      swiperItems: [],
      articleArr: [],
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 1000
    };
  },
  methods: {
    // 加载更多
    loadMore() {
      this.loading = true;
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/article1').then(response => {
        response.data.articles.map(item => {
          this.articleArr.push(item);
          this.loading = false;
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  components: {
    communityArticle: __WEBPACK_IMPORTED_MODULE_0__public_communityArticle___default.a
  }
});

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".mycircle[data-v-3318f816]{position:absolute;top:1.2667rem;width:100%;background-color:#fff;overflow-x:hidden}.mycircle .circle-content[data-v-3318f816]{position:relative;width:100%}.mycircle .circle-content .header[data-v-3318f816]{font-size:.506666rem;padding:.2rem;font-weight:400}.mycircle .circle-content .circles[data-v-3318f816]{margin-top:.1rem;width:100%;display:flex;padding-bottom:.2rem}.mycircle .circle-content .circles .circles-left[data-v-3318f816]{height:1.2rem;width:1.2rem;text-align:center;margin-left:.3rem;margin-right:.7rem;font-size:.888888rem;color:#cfcfcf;border-radius:999px;background-color:#f0f0f0}.mycircle .circle-content .circles .circles-right[data-v-3318f816]{white-space:nowrap;overflow-x:scroll;width:12rem;flex:1}.mycircle .circle-content .circles .circles-right .circle__item[data-v-3318f816]{display:inline-block;white-space:nowrap;overflow-x:scroll;margin-right:.7rem}.mycircle .circle-content .circles .circles-right .circle__item img[data-v-3318f816]{width:1.2rem;height:1.2rem;border-radius:999px}.mycircle .circle-content .circles .circles-right .circle__item p[data-v-3318f816]{font-size:.2rem;color:#333;text-align:center}.mycircle .circle-content .circles .circles-right[data-v-3318f816]:after{content:\"\";display:table;visibility:hidden;clear:both}", "", {"version":3,"sources":["G:/workspace/Vue/tencent-sports/src/components/community/mycircle.vue"],"names":[],"mappings":"AACA,2BACE,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,sBAAuB,AACvB,iBAAmB,CACpB,AACD,2CACE,kBAAmB,AACnB,UAAY,CACb,AACD,mDACE,qBAAuB,AACvB,cAAgB,AAChB,eAAiB,CAClB,AACD,oDACE,iBAAmB,AACnB,WAAY,AACZ,aAAc,AACd,oBAAuB,CACxB,AACD,kEACE,cAAe,AACf,aAAc,AACd,kBAAmB,AACnB,kBAAoB,AACpB,mBAAqB,AACrB,qBAAuB,AACvB,cAAe,AACf,oBAAqB,AACrB,wBAA0B,CAC3B,AACD,mEACE,mBAAoB,AACpB,kBAAmB,AACnB,YAAa,AACb,MAAQ,CACT,AACD,iFACE,qBAAsB,AACtB,mBAAoB,AACpB,kBAAmB,AACnB,kBAAqB,CACtB,AACD,qFACE,aAAc,AACd,cAAe,AACf,mBAAqB,CACtB,AACD,mFACE,gBAAkB,AAClB,WAAY,AACZ,iBAAmB,CACpB,AACD,yEACE,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,UAAY,CACb","file":"mycircle.vue","sourcesContent":["\n.mycircle[data-v-3318f816] {\n  position: absolute;\n  top: 1.2667rem;\n  width: 100%;\n  background-color: #fff;\n  overflow-x: hidden;\n}\n.mycircle .circle-content[data-v-3318f816] {\n  position: relative;\n  width: 100%;\n}\n.mycircle .circle-content .header[data-v-3318f816] {\n  font-size: 0.506666rem;\n  padding: 0.2rem;\n  font-weight: 400;\n}\n.mycircle .circle-content .circles[data-v-3318f816] {\n  margin-top: 0.1rem;\n  width: 100%;\n  display: flex;\n  padding-bottom: 0.2rem;\n}\n.mycircle .circle-content .circles .circles-left[data-v-3318f816] {\n  height: 1.2rem;\n  width: 1.2rem;\n  text-align: center;\n  margin-left: 0.3rem;\n  margin-right: 0.7rem;\n  font-size: 0.888888rem;\n  color: #cfcfcf;\n  border-radius: 999px;\n  background-color: #f0f0f0;\n}\n.mycircle .circle-content .circles .circles-right[data-v-3318f816] {\n  white-space: nowrap;\n  overflow-x: scroll;\n  width: 12rem;\n  flex: 1;\n}\n.mycircle .circle-content .circles .circles-right .circle__item[data-v-3318f816] {\n  display: inline-block;\n  white-space: nowrap;\n  overflow-x: scroll;\n  margin-right: 0.7rem;\n}\n.mycircle .circle-content .circles .circles-right .circle__item img[data-v-3318f816] {\n  width: 1.2rem;\n  height: 1.2rem;\n  border-radius: 999px;\n}\n.mycircle .circle-content .circles .circles-right .circle__item p[data-v-3318f816] {\n  font-size: 0.2rem;\n  color: #333;\n  text-align: center;\n}\n.mycircle .circle-content .circles .circles-right[data-v-3318f816]:after {\n  content: '';\n  display: table;\n  visibility: hidden;\n  clear: both;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("4be93dd8", content, true);

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mycircle"
  }, [_c('div', {
    staticClass: "circle-content"
  }, [_c('header', {
    staticClass: "header"
  }, [_vm._v("\n      已关注的圈子\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "circles"
  }, [_c('router-link', {
    staticClass: "circles-left",
    attrs: {
      "to": "/community/all"
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('ul', {
    staticClass: "circles-right"
  }, _vm._l((_vm.clubsArr), function(club) {
    return _c('li', {
      staticClass: "circle__item"
    }, [_c('img', {
      attrs: {
        "src": club.img,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(club.name))])])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "circle-article"
  }, [_c('div', {
    directives: [{
      name: "infinite-scroll",
      rawName: "v-infinite-scroll",
      value: (_vm.loadMore),
      expression: "loadMore"
    }],
    staticClass: "article-list page-infinite-list",
    attrs: {
      "infinite-scroll-disabled": "loading",
      "infinite-scroll-distance": "50"
    }
  }, [_vm._l((_vm.articleArr), function(article) {
    return _c('community-article', {
      staticClass: "community-article page-infinite-listitem",
      attrs: {
        "article": article
      }
    })
  }), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "page-infinite-loading"
  }, [_c('mt-spinner', {
    attrs: {
      "type": "fading-circle"
    }
  }), _vm._v("\n        加载中\n      ")], 1)], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(152)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(193),
  /* scopeId */
  "data-v-3318f816",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 79:
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['article']
});

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".article[data-v-dddd4ea2]{background-color:#fff;padding:.4rem .4rem .02rem .2rem;position:relative}.article .header h2[data-v-dddd4ea2]{color:#333;font-size:.43666666rem;margin-bottom:.2rem}.article .desc[data-v-dddd4ea2]{font-size:.3333333rem;color:#818597;margin-bottom:.3rem}.article .content .content__img--double[data-v-dddd4ea2]{display:block;float:left;width:2.96rem;margin-right:.1666667rem;margin-bottom:.166667rem;height:2.3333rem}.article .content .content__img[data-v-dddd4ea2]{width:5.2rem;height:4.3333rem;margin-bottom:.166667rem}.article .content[data-v-dddd4ea2]:after{content:\"\";display:table;visibility:hidden;clear:both}.article .footer[data-v-dddd4ea2]{font-size:.3rem}.article .footer .article__author--left[data-v-dddd4ea2]{float:left}.article .footer .article__author--left p[data-v-dddd4ea2]{color:#a7aaab;margin-top:.1rem;margin-bottom:.2rem}.article .footer .article__author--left p .author__name[data-v-dddd4ea2]{margin-right:.1rem;color:#3466f6}.article .footer .article__author--left p .author__posi[data-v-dddd4ea2]{margin-left:.1rem;color:#3466f6}.article .footer .article__commit--right[data-v-dddd4ea2]{margin-top:.1rem;float:right;color:#a7aaab}.article .footer[data-v-dddd4ea2]:after{content:\"\";display:table;visibility:hidden;clear:both}.article[data-v-dddd4ea2]:after{position:absolute;content:\"\";height:1px;width:100%;transform:scaleY(.5);background-color:#edeff2}", "", {"version":3,"sources":["G:/workspace/Vue/tencent-sports/src/components/public/communityArticle.vue"],"names":[],"mappings":"AACA,0BACE,sBAAuB,AACvB,iCAAsC,AACtC,iBAAmB,CACpB,AACD,qCACE,WAAY,AACZ,uBAAyB,AACzB,mBAAsB,CACvB,AACD,gCACE,sBAAwB,AACxB,cAAe,AACf,mBAAsB,CACvB,AACD,yDACE,cAAe,AACf,WAAY,AACZ,cAAe,AACf,yBAA2B,AAC3B,yBAA2B,AAC3B,gBAAkB,CACnB,AACD,iDACE,aAAc,AACd,iBAAkB,AAClB,wBAA2B,CAC5B,AACD,yCACE,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,UAAY,CACb,AACD,kCACE,eAAkB,CACnB,AACD,yDACE,UAAY,CACb,AACD,2DACE,cAAe,AACf,iBAAmB,AACnB,mBAAsB,CACvB,AACD,yEACE,mBAAqB,AACrB,aAAe,CAChB,AACD,yEACE,kBAAoB,AACpB,aAAe,CAChB,AACD,0DACE,iBAAmB,AACnB,YAAa,AACb,aAAe,CAChB,AACD,wCACE,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,UAAY,CACb,AACD,gCACE,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,WAAY,AACZ,qBAAuB,AACvB,wBAA0B,CAC3B","file":"communityArticle.vue","sourcesContent":["\n.article[data-v-dddd4ea2] {\n  background-color: #fff;\n  padding: 0.4rem 0.4rem 0.02rem 0.2rem;\n  position: relative;\n}\n.article .header h2[data-v-dddd4ea2] {\n  color: #333;\n  font-size: 0.43666666rem;\n  margin-bottom: 0.2rem;\n}\n.article .desc[data-v-dddd4ea2] {\n  font-size: 0.3333333rem;\n  color: #818597;\n  margin-bottom: 0.3rem;\n}\n.article .content .content__img--double[data-v-dddd4ea2] {\n  display: block;\n  float: left;\n  width: 2.96rem;\n  margin-right: 0.1666667rem;\n  margin-bottom: 0.166667rem;\n  height: 2.3333rem;\n}\n.article .content .content__img[data-v-dddd4ea2] {\n  width: 5.2rem;\n  height: 4.3333rem;\n  margin-bottom: 0.166667rem;\n}\n.article .content[data-v-dddd4ea2]:after {\n  content: '';\n  display: table;\n  visibility: hidden;\n  clear: both;\n}\n.article .footer[data-v-dddd4ea2] {\n  font-size: 0.3rem;\n}\n.article .footer .article__author--left[data-v-dddd4ea2] {\n  float: left;\n}\n.article .footer .article__author--left p[data-v-dddd4ea2] {\n  color: #a7aaab;\n  margin-top: 0.1rem;\n  margin-bottom: 0.2rem;\n}\n.article .footer .article__author--left p .author__name[data-v-dddd4ea2] {\n  margin-right: 0.1rem;\n  color: #3466f6;\n}\n.article .footer .article__author--left p .author__posi[data-v-dddd4ea2] {\n  margin-left: 0.1rem;\n  color: #3466f6;\n}\n.article .footer .article__commit--right[data-v-dddd4ea2] {\n  margin-top: 0.1rem;\n  float: right;\n  color: #a7aaab;\n}\n.article .footer[data-v-dddd4ea2]:after {\n  content: '';\n  display: table;\n  visibility: hidden;\n  clear: both;\n}\n.article[data-v-dddd4ea2]:after {\n  position: absolute;\n  content: '';\n  height: 1px;\n  width: 100%;\n  transform: scaleY(0.5);\n  background-color: #edeff2;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("63b73087", content, true);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  "data-v-dddd4ea2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-link', {
    attrs: {
      "to": _vm.article.url
    }
  }, [_c('div', {
    staticClass: "article"
  }, [_c('header', {
    staticClass: "header"
  }, [_c('h2', [_vm._v(_vm._s(_vm.article.title))])]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v("\r\n      " + _vm._s(_vm.article.desc) + "\r\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._l((_vm.article.imgArr), function(img) {
    return (_vm.article.imgArr.length <= 1) ? _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (img),
        expression: "img"
      }],
      staticClass: "content__img",
      attrs: {
        "alt": ""
      }
    }) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.article.imgArr), function(img) {
    return (_vm.article.imgArr.length > 1) ? _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (img),
        expression: "img"
      }],
      staticClass: "content__img--double",
      attrs: {
        "alt": ""
      }
    }) : _vm._e()
  })], 2), _vm._v(" "), _c('footer', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "article__author--left"
  }, [_c('p', [_c('span', {
    staticClass: "author__name"
  }, [_vm._v(_vm._s(_vm.article.author))]), _vm._v("来自"), _c('span', {
    staticClass: "author__posi"
  }, [_vm._v(_vm._s(_vm.article.posi))])])]), _vm._v(" "), _c('div', {
    staticClass: "article__commit--right"
  }, [_vm._v("\r\n        211\r\n      ")])])])])
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=9.c3cd486807ba16fd5e70.js.map