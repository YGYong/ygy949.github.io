import { createBrowserRouter } from "react-router-dom";
import { LayoutIndex } from "@/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutIndex></LayoutIndex>,
    // children: [
    //   {
    //     path: "count",
    //     element: <div>About1111</div>,
    //   },
    // ],
  },
]);
export default router;
