import Vue from "vue";
import svgIcon from "@/components/svgIcon";
Vue.component("svg-icon", svgIcon); // 全局注册svgIcon

const req = require.context("@/assets/icons/svg", false, /\.svg$/);
const requireAll = (requireContext) => {
  // requireContext.keys()数据：['./404.svg', './agency.svg', './det.svg', './user.svg']
  requireContext.keys().map(requireContext);
};
requireAll(req);
