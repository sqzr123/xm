import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/reset.less"; // 引入全局样式
import "./styles/compatibility.less"; // 解决兼容性布局
import "./styles/common.less"; // 解决兼容性布局
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import "@/assets/icons/svg/index";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
