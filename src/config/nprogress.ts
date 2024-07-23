import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  minimum: 0.15,
  speed: 200,
  showSpinner: false,
  trickleSpeed: 200,
//   parent: "#nprogress-container",
});
export default NProgress