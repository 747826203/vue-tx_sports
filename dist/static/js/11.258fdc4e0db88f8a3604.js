webpackJsonp([11],{

/***/ 100:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    document.querySelectorAll('.item')[0].classList.add('selected');
  },
  methods: {
    // 显示不同的状态
    selecteItem() {
      let oUrl = event.currentTarget.dataset.url;
      this.selected = oUrl;
      if (document.querySelector('.selected')) {
        document.querySelector('.selected').classList.remove('selected');
      }
      event.currentTarget.classList.add('selected');
      this.$emit('switchNav', oUrl);
    }
  },
  data() {
    return {
      selected: '',
      navArr: [{
        name: '推荐',
        url: 'recommend'
      }, {
        name: 'NBA社区',
        url: 'nba'
      }, {
        name: '篮球社区',
        url: 'basketball'
      }, {
        name: '中国足球',
        url: 'chinafootball'
      }, {
        name: '国际足球',
        url: 'interfootball'
      }, {
        name: '综合体育',
        url: 'total'
      }, {
        name: '电竞娱乐',
        url: 'game'
      }, {
        name: '生活',
        url: 'life'
      }, {
        name: '版务',
        url: 'things'
      }]
    };
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".all[data-v-13da3077]{position:absolute;top:1.266667rem;display:flex;flex-direction:row}.all .content[data-v-13da3077]{flex:1;position:relative;width:7.3333333rem;background-color:#fff;opacity:.95;height:16rem;overflow-y:scroll}.all .content .content-item[data-v-13da3077]{display:flex;flex-direction:row;width:100%;position:relative;margin-bottom:.1rem}.all .content .content-item .item__left img[data-v-13da3077]{width:.98rem;height:1rem;padding:.1rem;border-radius:999px;margin-left:.3rem;margin-top:.2rem}.all .content .content-item .item__center[data-v-13da3077]{flex:1}.all .content .content-item .item__center h3[data-v-13da3077]{font-size:.4rem;margin-left:.3rem;margin-top:.2rem}.all .content .content-item .item__center p[data-v-13da3077]{font-size:.2rem;color:#8e8e8f;margin-left:.3rem}.all .content .content-item .item__right p[data-v-13da3077]{margin-right:.3rem;margin-top:.4rem;font-size:.4rem;padding:.02rem .12rem;border-radius:50px;color:#cfcfd4;border:1px solid #cfcfd4}.all .content .content-item .item__right .isSelect[data-v-13da3077]{background-color:#3466f5;color:#fff}.all .content .content-item[data-v-13da3077]:after{content:\"\";position:absolute;bottom:0;left:.26667rem;background-color:#ecf0f4;height:1px;width:95%;transform:scaleY(.5)}", "", {"version":3,"sources":["G:/workspace/Vue/tencent-sports/src/components/community/all.vue"],"names":[],"mappings":"AACA,sBACE,kBAAmB,AACnB,gBAAiB,AACjB,aAAc,AACd,kBAAoB,CACrB,AACD,+BACE,OAAQ,AACR,kBAAmB,AACnB,mBAAoB,AACpB,sBAAuB,AACvB,YAAc,AACd,aAAc,AACd,iBAAmB,CACpB,AACD,6CACE,aAAc,AACd,mBAAoB,AACpB,WAAY,AACZ,kBAAmB,AACnB,mBAAsB,CACvB,AACD,6DACE,aAAe,AACf,YAAa,AACb,cAAgB,AAChB,oBAAqB,AACrB,kBAAoB,AACpB,gBAAmB,CACpB,AACD,2DACE,MAAQ,CACT,AACD,8DACE,gBAAkB,AAClB,kBAAoB,AACpB,gBAAmB,CACpB,AACD,6DACE,gBAAkB,AAClB,cAAe,AACf,iBAAoB,CACrB,AACD,4DACE,mBAAqB,AACrB,iBAAmB,AACnB,gBAAkB,AAClB,sBAAyB,AACzB,mBAAoB,AACpB,cAAe,AACf,wBAA0B,CAC3B,AACD,oEACE,yBAA0B,AAC1B,UAAY,CACb,AACD,mDACE,WAAY,AACZ,kBAAmB,AACnB,SAAU,AACV,eAAiB,AACjB,yBAA0B,AAC1B,WAAY,AACZ,UAAW,AACX,oBAAuB,CACxB","file":"all.vue","sourcesContent":["\n.all[data-v-13da3077] {\n  position: absolute;\n  top: 1.266667rem;\n  display: flex;\n  flex-direction: row;\n}\n.all .content[data-v-13da3077] {\n  flex: 1;\n  position: relative;\n  width: 7.3333333rem;\n  background-color: #fff;\n  opacity: 0.95;\n  height: 16rem;\n  overflow-y: scroll;\n}\n.all .content .content-item[data-v-13da3077] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  position: relative;\n  margin-bottom: 0.1rem;\n}\n.all .content .content-item .item__left img[data-v-13da3077] {\n  width: 0.98rem;\n  height: 1rem;\n  padding: 0.1rem;\n  border-radius: 999px;\n  margin-left: 0.3rem;\n  margin-top: 0.2rem;\n}\n.all .content .content-item .item__center[data-v-13da3077] {\n  flex: 1;\n}\n.all .content .content-item .item__center h3[data-v-13da3077] {\n  font-size: 0.4rem;\n  margin-left: 0.3rem;\n  margin-top: 0.2rem;\n}\n.all .content .content-item .item__center p[data-v-13da3077] {\n  font-size: 0.2rem;\n  color: #8e8e8f;\n  margin-left: 0.3rem;\n}\n.all .content .content-item .item__right p[data-v-13da3077] {\n  margin-right: 0.3rem;\n  margin-top: 0.4rem;\n  font-size: 0.4rem;\n  padding: 0.02rem 0.12rem;\n  border-radius: 50px;\n  color: #cfcfd4;\n  border: 1px solid #cfcfd4;\n}\n.all .content .content-item .item__right .isSelect[data-v-13da3077] {\n  background-color: #3466f5;\n  color: #fff;\n}\n.all .content .content-item[data-v-13da3077]:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0.26667rem;\n  background-color: #ecf0f4;\n  height: 1px;\n  width: 95%;\n  transform: scaleY(0.5);\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".side-nav[data-v-5867d601]{width:2.6667rem;height:14rem;overflow-y:scroll;padding-bottom:1.66667rem}.side-nav .item[data-v-5867d601]{padding:.43333333rem .63333rem;line-height:.66667rem;text-align:center;font-size:.4867rem;background-color:#ecf0f4;transition:all .2s ease}.side-nav .selected[data-v-5867d601]{background-color:#fff;color:#3466f6;transform:scale(1.05)}", "", {"version":3,"sources":["G:/workspace/Vue/tencent-sports/src/components/community/layout/sideNav.vue"],"names":[],"mappings":"AACA,2BACE,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,yBAA2B,CAC5B,AACD,iCACE,+BAAkC,AAClC,sBAAwB,AACxB,kBAAmB,AACnB,mBAAqB,AACrB,yBAA0B,AAC1B,uBAA0B,CAC3B,AACD,qCACE,sBAAuB,AACvB,cAAe,AACf,qBAAuB,CACxB","file":"sideNav.vue","sourcesContent":["\n.side-nav[data-v-5867d601] {\n  width: 2.6667rem;\n  height: 14rem;\n  overflow-y: scroll;\n  padding-bottom: 1.66667rem;\n}\n.side-nav .item[data-v-5867d601] {\n  padding: 0.43333333rem 0.63333rem;\n  line-height: 0.66667rem;\n  text-align: center;\n  font-size: 0.4867rem;\n  background-color: #ecf0f4;\n  transition: all 0.2s ease;\n}\n.side-nav .selected[data-v-5867d601] {\n  background-color: #fff;\n  color: #3466f6;\n  transform: scale(1.05);\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("5b772225", content, true);

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("90d7699a", content, true);

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(159)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(200),
  /* scopeId */
  "data-v-5867d601",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "all"
  }, [_c('side-nav', {
    staticClass: "side-nav",
    on: {
      "switchNav": _vm.switchNav
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.clubItems), function(item) {
    return _c('div', {
      staticClass: "content-item"
    }, [_c('div', {
      staticClass: "item__left"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (item.img),
        expression: "item.img"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "item__center"
    }, [_c('h3', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.fans) + "粉丝")])]), _vm._v(" "), _c('div', {
      staticClass: "item__right"
    }, [_c('p', {
      class: {
        isSelect: item.selected
      },
      attrs: {
        "data-index": item.index
      },
      on: {
        "click": _vm.switchSelect
      }
    }, [_vm._v("✓")])])])
  }))], 1)
},staticRenderFns: []}

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "side-nav"
  }, _vm._l((_vm.navArr), function(navItem) {
    return _c('p', {
      staticClass: "item",
      attrs: {
        "data-url": navItem.url
      },
      on: {
        "click": _vm.selecteItem
      }
    }, [_vm._v("\n     " + _vm._s(navItem.name) + "\n  ")])
  }))
},staticRenderFns: []}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(147)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(188),
  /* scopeId */
  "data-v-13da3077",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_sideNav__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_sideNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layout_sideNav__);
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
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/club/recommend').then(response => {
      let tempclubItems = response.data.map(item => {
        let oItem = item;
        this.$store.state.clubs.forEach(club => {
          if (club.name == item.name) {
            item.selected = true;
          }
        });
      });
      this.clubItems = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  },
  data() {
    return {
      clubItems: []
    };
  },
  components: {
    sideNav: __WEBPACK_IMPORTED_MODULE_0__layout_sideNav___default.a
  },
  methods: {
    // 改变选择与否状态
    switchSelect() {
      // console.log(event.target.dataset)
      let oClub = this.clubItems[event.target.dataset.index];
      if (oClub.selected === false) {
        // 加入社团
        // console.log(oClub)
        this.$store.dispatch('add_club', oClub);
      } else {
        this.$store.dispatch('delete_club', oClub);
      }
      this.clubItems[event.target.dataset.index].selected = !oClub.selected;
    },
    // 对比store和请求块
    switchNav(url) {
      // console.log(url)
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/club/' + url).then(response => {
        // 选出选中的
        let tempclubItems = response.data.map(item => {
          let oItem = item;
          this.$store.state.clubs.forEach(club => {
            if (club.name == item.name) {
              item.selected = true;
            }
          });
        });
        this.clubItems = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ })

});
//# sourceMappingURL=11.258fdc4e0db88f8a3604.js.map