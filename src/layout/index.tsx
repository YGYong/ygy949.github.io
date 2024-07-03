// import React, { useState } from "react";
import { useSelector } from "react-redux";
import AsideIndex from "./aside";
import HeaderIndex from "./header";
import FooterIndex from "./footer";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Sider, Footer, Content } = Layout;
export default function LayoutIndex() {
  // 获取header store里的值
  const headerStore = useSelector((state:any) =>{
    return state.headerReducer
  });
  return (
    <Layout style={{ height: "100%" }}>
      <Sider collapsible trigger={null} collapsed={headerStore.isCollapsed}>
        <AsideIndex></AsideIndex>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
          <HeaderIndex></HeaderIndex>
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <FooterIndex></FooterIndex>
        </Footer>
      </Layout>
    </Layout>
  );
}
