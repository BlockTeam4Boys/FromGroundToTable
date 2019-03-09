import React, { Component } from 'react';
import './App.css';
import {
  Layout, Menu,
} from 'antd';
import "antd/dist/antd.css";
import WrappedFormAdd from "./FormAdd";
import WrappedGetForm from "./GetForm";

const {
  Header, Content, Footer, Sider,
} = Layout;

class App extends Component {

  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>

          <Layout >
            <Header style={{ color: 'gr', background: '#52a7f0', padding: 0 }}>
                <p className={"text"}>Food tracker</p>
            </Header>
              <Content className={'main-container'}>

                  <div className={"forms"}>
                  <WrappedFormAdd what = "продукт"/>
                  <WrappedFormAdd  what = "склад"/>
                      <WrappedGetForm/>

                  </div>
              </Content>

          </Layout>

        </Layout>
    );
  }
}

export default App;
