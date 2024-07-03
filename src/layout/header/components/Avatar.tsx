import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
export default function AvatarIcon() {
    return (
        <div className='avatar_use_page'>
            <Avatar size="large" icon={<UserOutlined />} />
        </div>
    )
}