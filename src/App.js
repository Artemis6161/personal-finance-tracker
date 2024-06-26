import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Dashboard from './component/dashboard';
import Expenses from './component/expenses';
import Home from "./component/home"
import Sample from "./component/sample"

const { Header, Content } = Layout;

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Layout>
      <Home/>
      <Content >
        <Routes>
        <Route path="/" element={<Dashboard/>} />
          {/* <Route path="/" element={<Sample/>}/> */}
          <Route path="/expenses" element={<Expenses/>}/>
         
        </Routes>
        </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
