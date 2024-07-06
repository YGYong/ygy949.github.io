// import React, { useState } from "react";
import { useSelector } from "react-redux";
import AsideIndex from "./aside";
import HeaderIndex from "./header";
import FooterIndex from "./footer";
import { Layout, Row, Col } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Sider, Footer, Content } = Layout;
export default function LayoutIndex() {
  // 获取header store里的值
  const headerStore = useSelector((state: any) => {
    return state.headerReducer;
  });
  return (
    <Layout style={{ height: "100%" }}>
      {/* 侧边栏 */}
      <Sider collapsible trigger={null} collapsed={headerStore.isCollapsed}>
        <AsideIndex></AsideIndex>
      </Sider>
      <Layout>
        {/* 头部内容 */}
        <Header style={{ padding: 0 }}>
          <HeaderIndex></HeaderIndex>
        </Header>
        {/* 主体内容 */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
            borderRadius: 10,
          }}
        >
          <Outlet></Outlet>
        </Content>
        {/* 底部内容 */}
        <Footer style={{ textAlign: "center" }}>
          <FooterIndex></FooterIndex>
        </Footer>
      </Layout>
    </Layout>

    // <Layout>
    //   {/* 头部内容 */}
    //   <Header style={{ width: "100%", padding: 0 }}>
    //     <Row>
    //       <Col span={20}>
    //         <AsideIndex></AsideIndex>
    //       </Col>
    //       <Col span={4}>
    //         <HeaderIndex></HeaderIndex>
    //       </Col>
    //     </Row>
    //   </Header>
    //   {/* 主体内容 */}
    //   <Content
    //     style={{
    //       margin: "24px 16px",
    //       padding: 24,
    //       minHeight: 280,
    //       background: "#fff",
    //       borderRadius: 10,
    //     }}
    //   >
    //     <Outlet></Outlet>
    //   </Content>
    //   {/* 底部内容 */}
    //   <Footer style={{ textAlign: "center" }}>
    //     <FooterIndex></FooterIndex>
    //   </Footer>
    // </Layout>
  );
}
