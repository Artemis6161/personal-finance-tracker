import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Drawer, Modal, Form, Input } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import "./nav.css"
const { Header } = Layout;

const NavigationBar = () => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Header className="header">
      <div className="logo" />
      <Button className="menu-button" type="primary" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <div className="desktop-menu-container">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="desktop-menu">
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/expenses">Expense</Link></Menu.Item>
        <Menu.Item key="3">
            <Button type="primary" className="login-button" onClick={showModal}>Login</Button>
          </Menu.Item>
        </Menu>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="vertical">
          <Menu.Item key="1" onClick={onClose}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2" onClick={onClose}><Link to="/expenses">expense</Link></Menu.Item>
          
          <Menu.Item key="3" onClick={onClose}>
            <Button type="primary" className="login-button" onClick={showModal}>Login</Button>
          </Menu.Item>
        </Menu>
      </Drawer>
      <Modal title="Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="login"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
        </Form>
      </Modal>
    </Header>
  );
};

export default NavigationBar;
