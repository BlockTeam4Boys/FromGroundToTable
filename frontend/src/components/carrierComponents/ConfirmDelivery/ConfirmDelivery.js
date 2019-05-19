import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Icon from "antd/es/icon";
import {Button, Form, Input, message} from "antd";
import {confirmDelivery} from "../../../services/carrierService";


class ConfirmDelivery extends Component {
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
                confirmDelivery(values.productId, values.stockId,
                    this.onSuccessRegistration,
                    this.onFailureRegistration);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="confirm-form">
                <span>Подтвердить прибытие товара</span>
                <Form.Item>
                    {getFieldDecorator("productId", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                               placeholder="id сделки"/>
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator("stockId", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                               placeholder="id склада"/>
                    )}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Подтвердить
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

export default (withRouter(Form.create()(ConfirmDelivery)));
