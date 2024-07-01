// import { Outlet } from "react-router-dom";
import HeaderIndex from "./header";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Footer, Content } = Layout;
export function LayoutIndex() {
  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: "red" }}>
          <HeaderIndex></HeaderIndex>
        </Header>
        <Content>
            <Outlet></Outlet>
        </Content>
        <Footer>底部功能</Footer>
      </Layout>
    </div>
  );
}
