// import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeCollapsed } from "@/store/header";
import "./index.less";
import { Button, Col, Row } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import AvatarIcon from "./components/Avatar";
import ScreenIcon from "./components/FullScreen";
import SkinIcon from "./components/Skin";
export default function HeaderIndex() {
  const dispatch = useDispatch();
  const headerStore = useSelector((state: any) => {
    return state.headerReducer;
  });
  return (
    <div className="header_page">
      <Row>
        <Col span={4}>
          <Button
            type="text"
            icon={
              headerStore.isCollapsed ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
              )
            }
            onClick={() => dispatch(changeCollapsed())}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Col>
        <Col span={4} offset={16}>
          <div className="fun_icons">
            <SkinIcon></SkinIcon>
            <ScreenIcon></ScreenIcon>
            <AvatarIcon></AvatarIcon>
          </div>
        </Col>
      </Row>
    </div>
  );
}
