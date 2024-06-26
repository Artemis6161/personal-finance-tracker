import React, { useState } from 'react';
import {Layout, Button, Modal, Form, Input} from 'antd';
import "./nav.css"
const { Header } = Layout;

const Nav = () => {

    
    const [isModalVisible, setIsModalVisible] = useState(false);
 

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
    <Layout>
      
 <Button type="primary" className="login-button" onClick={showModal}> Signup</Button>
      <Modal title="Signup" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="Signup"
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
    </Layout>
  );
};

export default Nav;