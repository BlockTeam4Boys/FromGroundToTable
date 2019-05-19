import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {Button, Form, Input, message} from "antd";
import "./CreatePlace.css";
import {createPlace} from "../../../services/carrierService";

class CreatePlace extends Component {
    constructor(props) {
        super(props);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSuccess() {
        message.success('Успешно!');
    }

    onFailure() {
        message.error('Упс, ошибка. Проверьте данные и повторите');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                createPlace(
                    values.physicalRegion,
                    values.physicalDistrict,
                    values.physicalCity,
                    values.physicalStreet,
                    values.physicalNumber,
                    values.physicalLetter,
                    values.legalRegion,
                    values.legalDistrict,
                    values.legalCity,
                    values.legalStreet,
                    values.legalNumber,
                    values.legalLetter,
                    this.onSuccess,
                    this.onFailure);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="create-form">
                <span>Физический адрес</span>
                <Form.Item>
                    {getFieldDecorator("physicalRegion", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Регион"/>)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("physicalDistrict", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Район"/>)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("physicalCity", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Город"/>)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("physicalStreet", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Улица"/>)}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator("physicalNumber", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Номер дома"/>)}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator("physicalLetter", {
                        rules: [{required: false}],
                    })(<Input placeholder="Литера дома"/>)}
                </Form.Item>


                <span>Юридический адрес</span>
                <Form.Item>
                    {getFieldDecorator("legalRegion", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Регион"/>)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("legalDistrict", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Район"/>)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("legalCity", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Город"/>)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("legalStreet", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Улица"/>)}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator("legalNumber", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(<Input placeholder="Номер дома"/>)}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator("legalLetter", {
                        rules: [{required: false}],
                    })(<Input placeholder="Литера дома"/>)}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Добавить склад
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

export default (withRouter(Form.create()(CreatePlace)));
