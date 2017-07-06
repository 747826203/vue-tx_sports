webpackJsonp([19],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 未定制增加
const ADD_NOSUBSCRIBED = 'ADD_NOSUBSCRIBED';
/* harmony export (immutable) */ __webpack_exports__["a"] = ADD_NOSUBSCRIBED;

// 未定制减少
const DELETE_NOSUBSCRIBED = 'DELETE_NOSUBSCRIBED';
/* harmony export (immutable) */ __webpack_exports__["b"] = DELETE_NOSUBSCRIBED;

// 定制增加
const ADD_SUBSCRIBED = 'ADD_SUBSCRIBED';
/* harmony export (immutable) */ __webpack_exports__["c"] = ADD_SUBSCRIBED;

// 定制减少
const DELETE_SUBSCRIBED = 'DELETE_SUBSCRIBED';
/* harmony export (immutable) */ __webpack_exports__["d"] = DELETE_SUBSCRIBED;

// 更新页面和数据
const UPDATE_ALL = 'UPDATE_ALL';
/* harmony export (immutable) */ __webpack_exports__["e"] = UPDATE_ALL;

// 社团增加
const ADD_CLUB = 'ADD_CLUB';
/* harmony export (immutable) */ __webpack_exports__["f"] = ADD_CLUB;

// 社团减少
const DELETE_CLUB = 'DELETE_CLUB';
/* harmony export (immutable) */ __webpack_exports__["g"] = DELETE_CLUB;


/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);


// ajax请求过期时间，最长五秒，超时不候
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.timeout = 5000;

// 将axios 放入到Vue的原型链中，所有的组件都可以使用
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui_lib_style_css__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui_lib_style_css__);


// css ? webpack 将一切看成资源
// css 打包成js

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_mint_ui___default.a);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(50);


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/article-video/:id',
    component: resolve => __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(67)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }, {
    path: '/article/:id',
    component: resolve => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(17)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }, {
    path: '/',
    name: 'Index',
    component: resolve => __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(72)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    redirect: '/competition/recommend',
    children: [{
      path: '/competition',
      name: 'competition',
      component: resolve => __webpack_require__.e/* require */(14).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(70)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
      children: [{
        path: '/competition/recommend',
        name: 'recommend',
        component: resolve => __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(65)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }, {
        path: '/competition/video',
        name: 'video',
        component: resolve => __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(66)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }, {
        path: '/competition/nba',
        name: 'nba',
        component: resolve => __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(64)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }]
    }, {
      path: '/community',
      name: 'community',
      component: resolve => __webpack_require__.e/* require */(15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(69)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
      children: [{
        path: '/community/hotpost',
        name: 'hotpost',
        component: resolve => __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(61)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }, {
        path: '/community/mycircle',
        name: 'mycircle',
        component: resolve => __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(62)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }, {
        path: '/community/activies',
        name: 'activies',
        component: resolve => __webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(59)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }, {
        path: '/community/all',
        name: 'communityall',
        component: resolve => __webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(60)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }, {
        path: '/community/article/:id',
        component: resolve => __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(17)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
        redirect: '/article/:id'
      }]
    }, {
      path: '/agenda',
      name: 'agenda',
      component: resolve => __webpack_require__.e/* require */(16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(68)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
      children: [{
        path: '/agenda/focus',
        name: 'focus',
        component: resolve => __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(57)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }, {
        path: '/agenda/all',
        name: 'agendaall',
        component: resolve => __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(56)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }, {
        path: '/agenda/popular',
        name: 'popular',
        component: resolve => __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(58)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }]
    }, {
      path: '/mine',
      name: 'Mine',
      component: resolve => __webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(71)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
      redirect: '/mine/index',
      children: [{
        path: '/mine/index',
        component: resolve => __webpack_require__.e/* require */(17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(63)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
      }]
    }]
  }]
}));
// import Competition from '@/page/home/competition'
// import Community from '@/page/home/community'
// import Agenda from '@/page/home/agenda'
// import Mine from '@/page/home/mine'
// import Index from '@/page/index.vue'
// import Article from '@/page/article/article'
// import ArticleVideo from '@/page/article/article-video'
// import Recommend from '@/components/tunnels/recommend'
// import Video from '@/components/tunnels/video'
// import NBA from '@/components/tunnels/nba'
// import Hotpost from '@/components/community/hotpost'
// import Mycircle from '@/components/community/mycircle'
// import Activies from '@/components/community/activies'
// import CommunityAll from '@/components/community/all'
// import Focus from '@/components/agenda/focus'
// import AgendaAll from '@/components/agenda/all'
// import Popular from '@/components/agenda/popular'
// import MineIndex from '@/components/mine/index'

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__(40);






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]); // this.$store对象

const state = {
  // 社团
  clubs: [],
  // 路由结构
  routes: [[{
    name: '推荐',
    url: '/competition/recommend'
  }, {
    name: '视频',
    url: '/competition/video'
  }], [{
    name: '热帖',
    url: '/community/hotpost'
  }, {
    name: '我的圈子',
    url: '/community/mycircle'
  }, {
    name: '活动',
    url: '/community/activies'
  }, {
    name: '全部',
    url: '/community/all'
  }], [{
    name: '关注',
    url: '/agenda/focus'
  }, {
    name: '全部',
    url: '/agenda/all'
  }, {
    name: '热门',
    url: '/agenda/popular'
  }]],
  // 订阅
  subscribed: [],
  // 还未订阅的
  noSubscribed: [{
    name: 'NBA',
    url: '/competition/nba',
    img: 'http://xurenjie.cn:3000/img/tunnels/nba.png'
  }, {
    name: 'CBA',
    url: '/competition/cba',
    img: 'http://xurenjie.cn:3000/img/tunnels/cba.png'
  }, {
    name: 'NCAA',
    url: '/competition/ncaa',
    img: 'http://xurenjie.cn:3000/img/tunnels/ncaa.png'
  }, {
    name: 'NFL',
    url: '/competition/nfl',
    img: 'http://xurenjie.cn:3000/img/tunnels/nfl.png'
  }, {
    name: '中超',
    url: '/competition/csl',
    img: 'http://xurenjie.cn:3000/img/tunnels/中超.png'
  }, {
    name: '法网',
    url: '/competition/prg',
    img: 'http://xurenjie.cn:3000/img/tunnels/法网.png'
  }, {
    name: '西甲',
    url: '/competition/lfp',
    img: 'http://xurenjie.cn:3000/img/tunnels/西甲.png'
  }, {
    name: '欧冠',
    url: '/competition/ofc',
    img: 'http://xurenjie.cn:3000/img/tunnels/欧冠.png'
  }, {
    name: '英超',
    url: '/competition/esl',
    img: 'http://xurenjie.cn:3000/img/tunnels/英超.png'
  }, {
    name: '亚冠',
    url: '/competition/afc',
    img: 'http://xurenjie.cn:3000/img/tunnels/亚冠.png'
  }, {
    name: '综合',
    url: '/competition/total',
    img: 'http://xurenjie.cn:3000/img/tunnels/综合.png'
  }]
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state, // 状态 存放
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__["a" /* default */], // 修改、改变、切换、下一个改变的定义
  getters: __WEBPACK_IMPORTED_MODULE_4__getters__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* default */] // 动作，组件不能直接改变state，改变谁？
}));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_mint__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_axios__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_api_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_api_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_js_api_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_js_util_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_js_util_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_js_util_js__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.api = __WEBPACK_IMPORTED_MODULE_6__assets_js_api_js___default.a;



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.util = __WEBPACK_IMPORTED_MODULE_7__assets_js_util_js___default.a;
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  mint: __WEBPACK_IMPORTED_MODULE_3__lib_mint__["default"],
  store: __WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */],
  axios: __WEBPACK_IMPORTED_MODULE_5__lib_axios__["default"],
  // sortable,
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App___default.a
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["a"] = ({
  // 未定制增加
  add_nosubscribed: ({ commit }, index) => {
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* ADD_NOSUBSCRIBED */], index);
  },
  // 未定制减少
  delete_nosubscribed: ({ commit }, index) => {
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* DELETE_NOSUBSCRIBED */], index);
  },
  // 定制增加
  add_subscribed: ({ commit }, index) => {
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* ADD_SUBSCRIBED */], index);
  },
  // 定制减少
  delete_subscribed: ({ commit }, index) => {
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* DELETE_SUBSCRIBED */], index);
  },
  // 更新页面和数据
  update_all: ({ commit }, obj) => {
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* UPDATE_ALL */], obj);
  },
  // 社团增加
  add_club: ({ commit }, obj) => {
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["f" /* ADD_CLUB */], obj);
  },
  // 社团减少
  delete_club: ({ commit }, obj) => {
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* DELETE_CLUB */], obj);
  }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  getRoutes(state) {
    return state.routes;
  }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = ({
  // 添加社团
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["f" /* ADD_CLUB */]](state, obj) {
    if (!state.clubs.includes(obj)) state.clubs.push(obj);
    return;
  },
  // 删除社团
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* DELETE_CLUB */]](state, obj) {
    let oIndex = state.clubs.findIndex(item => {
      return item.name == obj.name;
    });
    state.clubs.splice(oIndex, 1);
  },
  // 添加未订阅
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* ADD_NOSUBSCRIBED */]](state, index) {
    console.log(index);
  },
  // 删除未订阅
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* DELETE_NOSUBSCRIBED */]](state, index) {
    console.log(index);
  },
  // 添加订阅
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* ADD_SUBSCRIBED */]](state, index) {
    console.log(index);
    let temp = state.noSubscribed[index];
    state.noSubscribed.splice(index, 1);
    state.subscribed.push(temp);
    state.routes[0].push(temp);
  },
  // 删除订阅
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* DELETE_SUBSCRIBED */]](state, index) {
    // console.log(index)
    let oIndex = parseInt(index) + 2;
    let temp = state.subscribed[index];
    state.subscribed.splice(index, 1);
    state.routes[0].splice(oIndex, 1);
    // console.log(state.noSubscribed)
    state.noSubscribed.push(temp);
  },
  // 用数据块更新
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* UPDATE_ALL */]](state, obj) {
    // console.log(obj)
    // console.log(obj.temp_NoSubscribedArr)
    // console.log(obj.temp_subscribedArr)
    state.subscribed = obj.temp_subscribedArr;
    state.noSubscribed = obj.temp_NoSubscribedArr;
    // console.log(state.subscribed)
    // console.log(state.noSubscribed)
    state.routes[0] = [{
      name: '推荐',
      url: '/competition/recommend'
    }, {
      name: '视频',
      url: '/competition/video'
    }];
    // console.log(state.subscribed)
    state.subscribed.map(item => {
      // console.log(item)
      // console.log(state.routes[0])
      state.routes[0].push(item);
    });
    // console.log(state.routes[0])
  }
});

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ })
],[38]);
//# sourceMappingURL=app.d0f9afa27ff0cb84bda5.js.map