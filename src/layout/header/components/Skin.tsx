import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeHeaderBgColor,
  changeAsideBgColor,
  changeAsideItemBgColor,
  resetHeaderBgColor,
  resetAsideBgColor,
} from "@/store/global";
import { SkinOutlined } from "@ant-design/icons";
import { Drawer, Divider, ColorPicker, Radio } from "antd";
export default function SkinIcon() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = React.useState<string>("inline");
  // 获取store值
  const dispatch = useDispatch();
  // 实现全屏
  const showDrawerFun = () => {
    setOpenDrawer(true);
  };
  // 主题推荐色
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
        <div className="theme_disposition">
          <h2>框架配置</h2>
          <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
            <Radio value="inline">inline</Radio>
            <Radio value="horizontal">
              horizontal <span style={{ color: "red" }}>(暂不支持)</span>{" "}
            </Radio>
          </Radio.Group>
        </div>
        <Divider />
        <div className="theme_disposition">
          <h2>头部主题</h2>
          <div className="theme_color">
            {themeColor.map((item, index) => (
              <div
                key={index}
                className="every_bgc"
                style={{ backgroundColor: item.color }}
                onClick={() => dispatch(changeHeaderBgColor(item.color))}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="custom_theme">
            <span>自定义主题</span>
            <ColorPicker
              defaultValue="#fff"
              onChange={(Color, hex) => dispatch(changeHeaderBgColor(hex))}
            />
          </div>
          <div
            className="reset_theme"
            onClick={() => dispatch(resetHeaderBgColor())}
          >
            重置主题
          </div>
        </div>
        <Divider />
        <div className="theme_disposition">
          <h2>侧边主题</h2>
          <div className="aside_theme">
            <div className="custom_theme">
              <span>背景颜色</span>
              <ColorPicker
                defaultValue="#001529"
                onChange={(Color, hex) => dispatch(changeAsideBgColor(hex))}
              />
            </div>
            <div className="custom_theme">
              <span>菜单项背景颜色</span>
              <ColorPicker
                defaultValue="#1677ff"
                onChange={(Color, hex) => dispatch(changeAsideItemBgColor(hex))}
              />
            </div>
          </div>
          <div
            className="reset_theme"
            onClick={() => dispatch(resetAsideBgColor())}
          >
            重置主题
          </div>
        </div>
      </Drawer>
    </div>
  );
}
