import React from 'react';
import { Layout, Row, Col, Statistic, Progress } from 'antd';

const { Content } = Layout;

const Dashboard = () => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Statistic title="Active Users" value={112893} />
            </Col>
            <Col span={12}>
              <Statistic title="Feedback" value={1128} />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
            <Progress percent={75} status="active" />
            <Progress percent={75} status="active" />
            <Progress percent={75} status="active" />
            <Progress percent={75} status="active" />
              <Progress percent={75} status="active" />
            </Col>
            <Col span={12}>
              <Progress type="circle" percent={70} />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;
