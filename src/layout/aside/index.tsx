import React, { useState, useEffect, startTransition } from "react";
import "./index.less";
import router from "@/router";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  ProfileOutlined,
  DesktopOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Logo from "./Logo";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "/ygyong/home", icon: <HomeOutlined />, label: "首页" },
  { key: "/ygyong/largeScreen", icon: <DesktopOutlined />, label: "大屏" },
  { key: "/ygyong/tool", icon: <ProfileOutlined />, label: "功能" },
  { key: "/ygyong/connection", icon: <PhoneOutlined />, label: "联系我们" },
  { key: "/ygyong/about", icon: <GlobalOutlined />, label: "关于" },
];
export default function HeaderIndex() {
  console.log(router,"111111");
  
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  // 编程式导航
  const navigate = useNavigate();  
  // 路由信息
  const { pathname } = useLocation();
  // 页面刷新时menu菜单保持高亮
  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);
  // 点击menu菜单事件
  const menuClick: MenuProps["onClick"] = (e) => {
    startTransition(() => {
      navigate(e.key);
      setSelectedKeys([pathname]);
    });
  };
  return (
    <div className="aside_page">
      <Logo></Logo>
      <Menu
        selectedKeys={selectedKeys}
        mode="inline"
        theme="dark"
        items={items}
        onClick={menuClick}
      />
    </div>
  );
}
