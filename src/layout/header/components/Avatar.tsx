import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "@/assets/images/header/avatar.jpg";
import { Avatar, Popover, message, Popconfirm } from "antd";
import type { PopconfirmProps } from "antd";
export default function AvatarIcon() {
  const navigate = useNavigate();
  const [avatarSize, setAvatarSize] = useState<"large" | 64>("large");
  //Popover显示隐藏的回调
  const onOpenChange = function (open: boolean) {
    if (open) {
      setAvatarSize(64);
    } else {
      setAvatarSize("large");
    }
  };
  // 退出当前系统
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    message.info("退出登录!");
    navigate("/");
  };
  const userContent = (
    <div className="user_info">
      <div className="user_info_item">个人信息</div>
      <div className="user_info_item">消息通知</div>
      <div className="user_info_item">
        <Popconfirm
          title="是否确认退出?"
          placement="left"
          onConfirm={confirm}
          okText="确定"
          cancelText="取消"
        >
          退出
        </Popconfirm>
      </div>
    </div>
  );
  return (
    <div className="avatar_use_page">
      <Popover
        placement="bottom"
        content={userContent}
        trigger="hover"
        onOpenChange={onOpenChange}
        overlayClassName="user_info_popover"
      >
        <Avatar size={avatarSize} src={avatar} />
      </Popover>
    </div>
  );
}
