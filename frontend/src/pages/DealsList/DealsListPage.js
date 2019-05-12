import React, { Component } from 'react';
import './DealsListPage.css';
import {Layout, Menu, Icon} from 'antd';
import "antd/dist/antd.css";
import { Steps } from 'antd';
import { Collapse } from 'antd';
import { Typography } from 'antd';
import AppHeader from "../../components/AppHeader/AppHeader";
const { Title } = Typography;
const Panel = Collapse.Panel;
const Step = Steps.Step;
const { Content} = Layout;

class App extends Component {

    render() {

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <AppHeader/>
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
