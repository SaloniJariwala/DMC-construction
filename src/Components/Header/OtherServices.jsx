import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { MenuText, ServiceWrapper } from './style';

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a href="#">
              <MenuText>First Menu</MenuText>
            </a>
          ),
        },
        {
            key: '2',
            label: (
              <a href="#">
                <MenuText className="link-style">Second Menu</MenuText>
              </a>
            ),
          },
      ]}
    />
  );

const  OtherServices = () => {
    return (
        <>
            <Dropdown overlay={menu}>
                <a onClick={e => e.preventDefault()}>
                    <Space style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: 'white' }}>Other Services</span>
                        <DownOutlined style={{ color: 'white' }} />
                    </Space>
                </a>
            </Dropdown>
        </>
    );
};

export default OtherServices;