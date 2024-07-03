import { createHashRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
const Layout = lazy(() => import("@/layout"));
const Home = lazy(() => import("@/views/home"));
const LargeScreen = lazy(() => import("@/views/largeScreen"));
const About = lazy(() => import("@/views/about"));
const Commection = lazy(() => import("@/views/connection"));
const Tool = lazy(() => import("@/views/tool"));

const router = createHashRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/largeScreen",
        element: <LargeScreen></LargeScreen>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/connection",
        element: <Commection></Commection>,
      },
      {
        path: "/tool",
        element: <Tool></Tool>,
      },
      // Custom redirect function
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
    ],
  },
]);
export default router;
