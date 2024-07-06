import React from "react";
import router from "./router";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import "@/style/index.less";
function App() {
  // 获取header store里的值
  const themeStore = useSelector((state: any) => {
    return state.globalThemeReducer;
  });
  return (
    <div className="App">
      <ConfigProvider theme={themeStore.theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
