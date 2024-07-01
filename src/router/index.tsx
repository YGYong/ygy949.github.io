import { createHashRouter } from "react-router-dom";
import { LayoutIndex } from "@/layout";

const router = createHashRouter([
  {
    path: "/",
    element: <LayoutIndex></LayoutIndex>,
    children: [
      {
        path: "count",
        element: <div>About1111</div>,
      },
    ],
  },
]);
export default router;
