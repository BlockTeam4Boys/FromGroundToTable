import React, { Component } from 'react';
import './App.css';
import {Layout, Menu, Icon} from 'antd';
import "antd/dist/antd.css";
import { Steps } from 'antd';
import { Collapse } from 'antd';
import logo from './resources/logo.png';
import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;
const Panel = Collapse.Panel;
const Step = Steps.Step;
const { Header, Content} = Layout;
const { SubMenu } = Menu;

class App extends Component {

  render() {

     return (
         <Layout style={{ minHeight: '100vh' }}>
          <Header
              style={{height: 50, backgroundColor: '#181f8b', display: 'flex', flexFlow: 'row wrap'}}>
              <img  style={{width: '200px', height: "66px", marginRight: 0}} src={logo} alt={"ds"} />

              <Menu
                  mode="inline"
                  style={{ height: '100%', width: 230, marginLeft: 'auto', zIndex: '10'}}
              >
                  <SubMenu  style={{display: 'flex', flexFlow: 'row wrap'}}
                            key="sub1" title={<span><Icon type="user" />Василий Петрович</span>}>
                      <Menu.Item  key="1"><Icon type="book" /> Мой кабинет</Menu.Item>
                      <Menu.Item   key="2"><Icon type="plus" />Создать конракт</Menu.Item>
                      <Menu.Item   key="3"><Icon type="form" />Мои контракты</Menu.Item>
                      <Menu.Item  key="4"><Icon type="close-circle" />Выход</Menu.Item>
                  </SubMenu>
              </Menu>
          </Header>
          <Content >
              <div style={{ background: '#f9f9f9', paddingTop: 30, minHeight: '88vh', paddingLeft: '5vw' }}>
                  <Title>Ваши сделки</Title>

                  <Menu
                      style={{ background: '#f9f9f9'}}
                      onClick={this.handleClick}
                      mode="horizontal"
                  >
                      <Menu.Item key="app1">
                          <Icon type="appstore" />Ожидающие подтверждение
                      </Menu.Item>
                      <Menu.Item key="app2">
                          <Icon type="appstore" />Транспортируемые
                      </Menu.Item>
                      <Menu.Item key="app3">
                          <Icon type="appstore" />Доставленные
                      </Menu.Item>
                  </Menu>
                  <Collapse style={{maxWidth: '80vw'}} defaultActiveKey={['1']}>
                      <Panel header="Contract №185322" key="1">
                          <Steps current={1}>
                              <Step title="Ожидает отправления" />
                              <Step title="В пути"  />
                              <Step title="Товар получен"  />
                          </Steps>
                      </Panel>
                      <Panel header="Contract №432432" key="2">
                          <Steps current={2}>
                              <Step title="Ожидает отправления" />
                              <Step title="В пути"  />
                              <Step title="Товар получен"  />
                          </Steps>
                      </Panel>
                      <Panel header="Contract №353553" key="3">
                          <Steps current={0}>
                              <Step title="Ожидает отправления" />
                              <Step title="В пути"  />
                              <Step title="Товар получен"  />
                          </Steps>
                      </Panel>
                  </Collapse>
              </div>
          </Content>
      </Layout>
    );
  }
}

export default App;
