// import { Outlet } from "react-router-dom";
import HeaderIndex from "./header";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;
export function LayoutIndex() {
  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: "red" }}>
          <HeaderIndex></HeaderIndex>
        </Header>
        <Content>主要内容</Content>
        <Footer>底部功能</Footer>
      </Layout>
    </div>
  );
}
