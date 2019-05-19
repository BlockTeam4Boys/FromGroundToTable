import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Cookies from "js-cookie";
import logo from './../../resources/logo.png';
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import Icon from "antd/es/icon";
const { Header } = Layout;
const { SubMenu } = Menu;

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.onRelocateToContracts = this.onRelocateToContracts.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onRelocateToMainPage = this.onRelocateToMainPage.bind(this);
    }

    onRelocateToContracts() {
        this.props.history.push("/");
    }

    onLogout() {
        Cookies.remove("role");
        this.props.history.push("/login");
    }

    onRelocateToMainPage() {
        this.props.history.push("/create");
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
                        style={{ height: '100%', width: 230, marginLeft: 'auto', zIndex: '10'}}
                    >
                        <SubMenu  style={{display: 'flex', flexFlow: 'row wrap'}}
                                  key="sub1"
                                  title={<span><Icon type="user" />{Cookies.get("name")}</span>}>

                            <Menu.Item
                                onClick={this.onRelocateToMainPage}
                                key="2">
                                <Icon type="plus"/>
                                Создать конракт
                                </Menu.Item>
                            <Menu.Item

                                onClick={this.onRelocateToContracts}
                                key="3">
                                <Icon type="form" />
                                Мои контракты
                                </Menu.Item>
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


export default withRouter(AppHeader);
