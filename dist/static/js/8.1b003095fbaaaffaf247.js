webpackJsonp([8],{

/***/ 107:
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
    // console.log(this.videoItem)
  },
  props: ['videoItem']
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_videoCard__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_videoCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_videoCard__);
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
    // https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/video-tunnel/1
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/video-tunnel/1').then(response => {
      // console.log(response.data)
      this.videoArr.push(response.data);
    }).catch(error => {
      console.log(error);
    });
  },
  data() {
    return {
      videoArr: [],
      // u请求url序号
      getNum: 1,
      // 刷新圈
      loading: false,
      allLoaded: false,
      // 页面容器高度
      wrapperHeight: 1000
    };
  },
  components: {
    'videoCard': __WEBPACK_IMPORTED_MODULE_0__public_videoCard___default.a
  },
  methods: {
    // 顶部下拉加载
    loadTop(id) {
      this.getNum++;
      let oList = document.querySelector('.mt-loadmore');
      let oldHeight = oList.scrollHeight;
      let that = this;
      // this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend'+this.getNum)
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/video-tunnel/2').then(response => {
        // console.log(response)
        // console.log(response.data.newArr[0][0])
        this.videoArr.push(response.data);
        setTimeout(function () {
          let newHeight = oList.scrollHeight;
          oList.scrollTop = newHeight - oldHeight;
        }, 100);
        this.$refs.loadmore.onTopLoaded(id);
        // console.log(this.videoArr)
      }).catch(function (error) {
        console.log(error);
      });
    },
    handleTopChange() {},
    // initfined下拉刷新
    loadMore() {
      this.loading = true;
      this.getNum++;
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/video-tunnel/2').then(response => {
        // console.log(response)
        // console.log(response.data.newArr[0][0])
        this.videoArr.push(response.data);
        this.loading = false;
        // console.log(this.videoArr)
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".card[data-v-14dd1ab9]{padding:0;width:100%;margin:0}.card .card__header[data-v-14dd1ab9]{height:1.166667rem;line-height:1.166667rem;color:#000}.card .card__header .header__left[data-v-14dd1ab9]{float:left;font-size:.42666667rem;margin-left:.266667rem;font-weight:400}.card .card__header .header__right[data-v-14dd1ab9]{float:right;position:relative;font-size:.23666667rem;margin-right:.52666666rem}.card .card__header .header__right[data-v-14dd1ab9]:after{content:\"\";display:block;height:.14667rem;width:.14667rem;position:absolute;top:.46667rem;right:-.2rem;border-top:.03rem solid #828597;border-right:.03rem solid #828597;transform:rotate(45deg)}.card .card__header[data-v-14dd1ab9]:after{content:\"\";display:table;clear:both;visibility:hidden}.card .card__centent .main__new .new__index[data-v-14dd1ab9]{width:100%;height:5.66666667rem;background-size:cover;background-repeat:no-repeat;position:relative}.card .card__centent .main__new .new__index .duration[data-v-14dd1ab9]{color:#fff;font-size:.3rem;font-weight:500;position:absolute;bottom:.13333rem;right:.13333rem}.card .card__centent .main__new .new__desc[data-v-14dd1ab9]{width:100%;padding:.133333rem;font-size:.42666667rem;color:#000}.card .card__centent .small__new-list[data-v-14dd1ab9]{width:100%;position:relative}.card .card__centent .small__new-list .small__new-item[data-v-14dd1ab9]{width:4.92rem;height:3.66666667rem;float:left;position:relative;margin-top:.2rem}.card .card__centent .small__new-list .small__new-item[data-v-14dd1ab9]:nth-child(odd){margin-right:.16rem}.card .card__centent .small__new-list .small__new-item .new-item__index[data-v-14dd1ab9]{width:100%;height:2.666666667rem;position:relative;background-size:cover}.card .card__centent .small__new-list .small__new-item .new-item__index .duration[data-v-14dd1ab9]{color:#fff;font-size:.3rem;font-weight:500;position:absolute;bottom:.13333rem;right:.13333rem}.card .card__centent .small__new-list .small__new-item .new-item__index[data-v-14dd1ab9]:after{content:\"\";display:table;clear:both;visibility:hidden}.card .card__centent .small__new-list .small__new-item .new-item__desc[data-v-14dd1ab9]{margin:.1rem;color:#000;white-space:normal}.card .card__centent .small__new-list[data-v-14dd1ab9]:after,.card[data-v-14dd1ab9]:after{content:\"\";display:table;clear:both;visibility:hidden}", "", {"version":3,"sources":["G:/workspace/Vue/tencent-sports/src/components/public/videoCard.vue"],"names":[],"mappings":"AACA,uBAEE,UAAW,AACX,WAAY,AACZ,QAAgB,CACjB,AACD,qCACE,mBAAoB,AACpB,wBAAyB,AACzB,UAAY,CACb,AACD,mDACE,WAAY,AACZ,uBAAyB,AACzB,uBAAyB,AACzB,eAAiB,CAClB,AACD,oDACE,YAAa,AACb,kBAAmB,AACnB,uBAAyB,AACzB,yBAA4B,CAC7B,AACD,0DACE,WAAY,AACZ,cAAe,AACf,iBAAmB,AACnB,gBAAkB,AAClB,kBAAmB,AACnB,cAAgB,AAChB,aAAe,AACf,gCAAkC,AAClC,kCAAoC,AACpC,uBAAyB,CAC1B,AACD,2CACE,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,iBAAmB,CACpB,AACD,6DACE,WAAY,AACZ,qBAAsB,AACtB,sBAAuB,AACvB,4BAA6B,AAC7B,iBAAmB,CACpB,AACD,uEACE,WAAY,AACZ,gBAAkB,AAClB,gBAAiB,AACjB,kBAAmB,AACnB,iBAAmB,AACnB,eAAkB,CACnB,AACD,4DACE,WAAY,AACZ,mBAAqB,AACrB,uBAAyB,AACzB,UAAY,CACb,AACD,uDACE,WAAY,AACZ,iBAAmB,CACpB,AACD,wEACE,cAAe,AACf,qBAAsB,AACtB,WAAY,AACZ,kBAAmB,AACnB,gBAAmB,CACpB,AACD,uFACE,mBAAsB,CACvB,AACD,yFACE,WAAY,AACZ,sBAAuB,AACvB,kBAAmB,AACnB,qBAAuB,CACxB,AACD,mGACE,WAAY,AACZ,gBAAkB,AAClB,gBAAiB,AACjB,kBAAmB,AACnB,iBAAmB,AACnB,eAAkB,CACnB,AACD,+FACE,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,iBAAmB,CACpB,AACD,wFACE,aAAe,AACf,WAAY,AACZ,kBAAoB,CACrB,AAOD,0FACE,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,iBAAmB,CACpB","file":"videoCard.vue","sourcesContent":["\n.card[data-v-14dd1ab9] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin: 0 0 0 0;\n}\n.card .card__header[data-v-14dd1ab9] {\n  height: 1.166667rem;\n  line-height: 1.166667rem;\n  color: #000;\n}\n.card .card__header .header__left[data-v-14dd1ab9] {\n  float: left;\n  font-size: 0.42666667rem;\n  margin-left: 0.266667rem;\n  font-weight: 400;\n}\n.card .card__header .header__right[data-v-14dd1ab9] {\n  float: right;\n  position: relative;\n  font-size: 0.23666667rem;\n  margin-right: 0.52666666rem;\n}\n.card .card__header .header__right[data-v-14dd1ab9]:after {\n  content: '';\n  display: block;\n  height: 0.14667rem;\n  width: 0.14667rem;\n  position: absolute;\n  top: 0.46667rem;\n  right: -0.2rem;\n  border-top: 0.03rem solid #828597;\n  border-right: 0.03rem solid #828597;\n  transform: rotate(45deg);\n}\n.card .card__header[data-v-14dd1ab9]:after {\n  content: '';\n  display: table;\n  clear: both;\n  visibility: hidden;\n}\n.card .card__centent .main__new .new__index[data-v-14dd1ab9] {\n  width: 100%;\n  height: 5.66666667rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.card .card__centent .main__new .new__index .duration[data-v-14dd1ab9] {\n  color: #fff;\n  font-size: 0.3rem;\n  font-weight: 500;\n  position: absolute;\n  bottom: 0.13333rem;\n  right: 0.13333rem;\n}\n.card .card__centent .main__new .new__desc[data-v-14dd1ab9] {\n  width: 100%;\n  padding: 0.133333rem;\n  font-size: 0.42666667rem;\n  color: #000;\n}\n.card .card__centent .small__new-list[data-v-14dd1ab9] {\n  width: 100%;\n  position: relative;\n}\n.card .card__centent .small__new-list .small__new-item[data-v-14dd1ab9] {\n  width: 4.92rem;\n  height: 3.66666667rem;\n  float: left;\n  position: relative;\n  margin-top: 0.2rem;\n}\n.card .card__centent .small__new-list .small__new-item[data-v-14dd1ab9]:nth-child(odd) {\n  margin-right: 0.16rem;\n}\n.card .card__centent .small__new-list .small__new-item .new-item__index[data-v-14dd1ab9] {\n  width: 100%;\n  height: 2.666666667rem;\n  position: relative;\n  background-size: cover;\n}\n.card .card__centent .small__new-list .small__new-item .new-item__index .duration[data-v-14dd1ab9] {\n  color: #fff;\n  font-size: 0.3rem;\n  font-weight: 500;\n  position: absolute;\n  bottom: 0.13333rem;\n  right: 0.13333rem;\n}\n.card .card__centent .small__new-list .small__new-item .new-item__index[data-v-14dd1ab9]:after {\n  content: '';\n  display: table;\n  clear: both;\n  visibility: hidden;\n}\n.card .card__centent .small__new-list .small__new-item .new-item__desc[data-v-14dd1ab9] {\n  margin: 0.1rem;\n  color: #000;\n  white-space: normal;\n}\n.card .card__centent .small__new-list[data-v-14dd1ab9]:after {\n  content: '';\n  display: table;\n  clear: both;\n  visibility: hidden;\n}\n.card[data-v-14dd1ab9]:after {\n  content: '';\n  display: table;\n  clear: both;\n  visibility: hidden;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".video[data-v-54f80a73]{position:absolute;top:1.5666667rem;width:100%;overflow-y:scroll;padding-bottom:2rem}.video .video-card[data-v-54f80a73]{background-color:#fff;margin-top:.2rem}", "", {"version":3,"sources":["G:/workspace/Vue/tencent-sports/src/components/tunnels/video.vue"],"names":[],"mappings":"AACA,wBACE,kBAAmB,AACnB,iBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,mBAAqB,CACtB,AACD,oCACE,sBAAuB,AACvB,gBAAmB,CACpB","file":"video.vue","sourcesContent":["\n.video[data-v-54f80a73] {\n  position: absolute;\n  top: 1.5666667rem;\n  width: 100%;\n  overflow-y: scroll;\n  padding-bottom: 2rem;\n}\n.video .video-card[data-v-54f80a73] {\n  background-color: #fff;\n  margin-top: 0.2rem;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("0b47d56d", content, true);

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("5ad8e5a9", content, true);

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(148)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(189),
  /* scopeId */
  "data-v-14dd1ab9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.videoItem.url
    }
  }, [_c('div', {
    staticClass: "card__header"
  }, [_c('div', {
    staticClass: "header__left"
  }, [_vm._v(_vm._s(_vm.videoItem.title))]), _vm._v(" "), _c('div', {
    staticClass: "header__right"
  }, [_vm._v("往期回顾")])]), _vm._v(" "), _c('div', {
    staticClass: "card__centent"
  }, [_c('div', {
    staticClass: "main__new"
  }, [_c('div', {
    staticClass: "new__index",
    style: ({
      backgroundImage: 'url(' + _vm.videoItem.img + ')'
    })
  }, [_c('span', {
    staticClass: "duration"
  }, [_vm._v(_vm._s(_vm.videoItem.time))])]), _vm._v(" "), _c('div', {
    staticClass: "new__desc"
  }, [_vm._v("\n          " + _vm._s(_vm.videoItem.desc) + "\n        ")])]), _vm._v(" "), _c('ul', {
    staticClass: "small__new-list"
  }, _vm._l((_vm.videoItem.more), function(item) {
    return _c('li', {
      staticClass: "small__new-item"
    }, [_c('router-link', {
      attrs: {
        "to": item.url
      }
    }, [_c('div', {
      staticClass: "new-item__index",
      style: ({
        backgroundImage: 'url(' + item.img + ')'
      })
    }, [_c('div', {
      staticClass: "duration"
    }, [_vm._v(_vm._s(item.time))])]), _vm._v(" "), _c('div', {
      staticClass: "new-item__desc"
    }, [_vm._v("\n              " + _vm._s(item.desc) + "\n            ")])])], 1)
  }))])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video"
  }, [_c('mt-loadmore', {
    ref: "loadmore",
    staticClass: "mt-loadmore",
    attrs: {
      "top-pull-text": "加载更多",
      "top-drop-text": "释放加载",
      "top-method": _vm.loadTop
    },
    on: {
      "top-status-change": _vm.handleTopChange
    }
  }, [_c('div', {
    directives: [{
      name: "infinite-scroll",
      rawName: "v-infinite-scroll",
      value: (_vm.loadMore),
      expression: "loadMore"
    }],
    staticClass: "new-list page-infinite-list",
    attrs: {
      "infinite-scroll-disabled": "loading",
      "infinite-scroll-distance": "50"
    }
  }, [_vm._l((_vm.videoArr), function(videoItem) {
    return _c('video-card', {
      staticClass: "video-card page-infinite-listitem",
      attrs: {
        "videoItem": videoItem
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
  })], 1)], 2)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(158)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(199),
  /* scopeId */
  "data-v-54f80a73",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=8.1b003095fbaaaffaf247.js.map