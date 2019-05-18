import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Cookies from "js-cookie";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import Icon from "antd/es/icon";
import {Button, Form, Input, message} from "antd";
import {createProduct} from "../../../services/adminService";
const { Header } = Layout;
const { SubMenu } = Menu;

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.onSuccessRegistration = this.onSuccessRegistration.bind(this);
        this.onFailureRegistration = this.onFailureRegistration.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSuccessRegistration() {
        message.success('Успешно!');
    }

    onFailureRegistration() {
        message.error('Упс, ошибка. Проверьте данные и повторите');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                createProduct(values.name,
                    this.onSuccessRegistration,
                    this.onFailureRegistration);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator("name", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                               placeholder="Название"/>
                    )}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Добавить товар
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

export default (withRouter(Form.create()(CreateProduct)));
