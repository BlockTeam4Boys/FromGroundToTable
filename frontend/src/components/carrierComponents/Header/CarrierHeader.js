import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Cookies from "js-cookie";
import logo from './../../../resources/logo.png';
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import Icon from "antd/es/icon";
const { Header } = Layout;
const { SubMenu } = Menu;

class CarrierHeader extends Component {
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        Cookies.remove("role");
        this.props.history.push("/login");
    }

    render() {
        return (
            <Header
                style={{height: 50, backgroundColor: '#181f8b', display: 'flex', flexFlow: 'row wrap'}}>
                <img
                    style={{width: '200px', height: "66px", marginRight: 0}}
                    src={logo}
                    alt={"ds"} />

                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRadius: '5px',  width: 230, marginLeft: 'auto', zIndex: '10'}}
                >
                    <SubMenu  style={{display: 'flex', flexFlow: 'row wrap'}}
                              key="sub1"
                              title={<span><Icon type="user" />{Cookies.get("name")}</span>}>
                        <Menu.Item
                            onClick={this.onLogout}
                            key="4">
                            <Icon type="close-circle"/>
                            Выход
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}


export default withRouter(CarrierHeader);
