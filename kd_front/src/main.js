// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {post,get,patch,put,file} from './common/http'
import path from './common/config'
import {theConfirm,theAlert} from './components/confirm/confirm.js'
// import mui from './common/mui.js'
import Meta from "vue-meta";
Vue.prototype.$confirm = theConfirm;
Vue.prototype.$alert = theAlert;
// Vue.prototype.$mui = mui
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$file=file;
Vue.prototype.$ht_ip = path.ip;//全局后台接口ip
Vue.prototype.$path=path;
Vue.use(Meta);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
