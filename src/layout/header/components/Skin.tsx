import React, { useState } from "react";
import { SkinOutlined } from "@ant-design/icons";
import { Drawer, Divider, ColorPicker } from "antd";
export default function SkinIcon() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawerFun = () => {
    setOpenDrawer(true);
  };
  const themeColor = [
    {
      name: "默认",
      color: "#1890ff",
    },
    {
      name: "健康",
      color: "#1abc9c",
    },
    // {
    //   name: "优雅",
    //   color: "#722ed1",
    // },
    {
      name: "热情",
      color: "#f44336",
    },
    {
      name: "宁静",
      color: "#00bcd4",
    },
  ];
  return (
    <div className="skin_use_page">
      <SkinOutlined onClick={showDrawerFun} />
      <Drawer
        title="主题配置"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        className="drawer_auto"
      >
        <div>
          <p>框架配置</p>
        </div>
        <Divider />
        <div className="theme_disposition">
          <h2>主题推荐</h2>
          <div className="theme_color">
            {themeColor.map((item, index) => (
              <div
                key={index}
                className="every_bgc"
                style={{ backgroundColor: item.color }}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="custom_theme">
            <span>自定义主题</span>
            <ColorPicker defaultValue="#1677ff" />
          </div>
          <div className="reset_theme">重置主题</div>
        </div>
        <Divider />
        <p>字体样式配置</p>
      </Drawer>
    </div>
  );
}
