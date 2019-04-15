import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

export const StaticHeader = props => (
  <Layout>
    <Header className="header">
      <h3>PHONE DIRECTORY</h3>
    </Header>
    <Layout>
      <Content>
        {props.children}
      </Content>

    </Layout>
  </Layout>
);
