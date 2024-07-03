import React, { useState } from "react";
import avatar from "@/assets/images/header/avatar.jpg";
import { Avatar, Popover } from "antd";
export default function AvatarIcon() {
  const [avatarSize, setAvatarSize] = useState<"large" | 64>("large");
  //Popover显示隐藏的回调
  const onOpenChange = function (open: boolean) {
    if (open) {
      setAvatarSize(64);
    } else {
      setAvatarSize("large");
    }
  };
  const userContent = (
    <div className="user_info">
      <div  className="user_info_item">个人信息</div>
      <div  className="user_info_item">消息通知</div>
      <div  className="user_info_item">退出</div>
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
