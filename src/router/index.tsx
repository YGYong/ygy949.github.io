import { createHashRouter } from "react-router-dom";
import { routes } from "./modules";
// 创建路由器，不需要类型参数
const router = createHashRouter(routes);
export default router;
