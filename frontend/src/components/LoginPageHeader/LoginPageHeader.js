import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import logo from './../../resources/logo.png';
import Layout from "antd/es/layout";
const { Header } = Layout;
class LoginPageHeader extends Component {

    render() {
        return (
            <Header
                style={{height: 50, backgroundColor: '#181f8b', display: 'flex', flexFlow: 'row wrap'}}>
                <img
                    style={{width: '200px', height: "66px", marginRight: 0}}
                    src={logo}
                    alt={"ds"}
                />
            </Header>
        );
    }
}


export default withRouter(LoginPageHeader);
