import { Navigate } from "react-router-dom";
import { lazy } from "react";
const Layout = lazy(() => import("@/layout"));
const Login = lazy(() => import("@/views/login"));
const ErrorPage = lazy(() => import("@/views/404"));
const Home = lazy(() => import("@/views/home"));
const LargeScreen = lazy(() => import("@/views/largeScreen"));
const About = lazy(() => import("@/views/about"));
const Commection = lazy(() => import("@/views/connection"));
const Tool = lazy(() => import("@/views/tool"));
export const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/ygyong",
    element: <Layout></Layout>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
        meta: {
          title: "首页",
        },
      },
      {
        path: "largeScreen",
        element: <LargeScreen></LargeScreen>,
        meta: {
          title: "大屏",
        },
      },
      {
        path: "about",
        element: <About></About>,
        meta: {
          title: "功能",
        },
      },
      {
        path: "connection",
        element: <Commection></Commection>,
        meta: {
          title: "联系我们",
        },
      },
      {
        path: "tool",
        element: <Tool></Tool>,
        meta: {
          title: "关于",
        },
      },
    ],
  },
];