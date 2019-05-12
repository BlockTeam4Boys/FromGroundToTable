import React, { Component } from 'react';
import './CreateContractPage.css';
import "antd/dist/antd.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import {Layout} from "antd";
import Title from "antd/es/skeleton/Avatar";
import WrappedCrateContractForm from "../../components/WrappedCrateContractForm/WrappedCrateContractForm";
const {Content} = Layout;

class App2 extends Component {

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <AppHeader/>
                <Content>
                    <div style={{ background: '#f9f9f9', paddingTop: 30, minHeight: '88vh', paddingLeft: '5vw' }}>
                        <Title>Заключить контракт на поставку</Title>
                        <WrappedCrateContractForm/>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default App2;
