import React from "react";
import {Button, Form, Icon, Input, message} from "antd";
import "./RegistrationPage.css";
import {withRouter} from "react-router-dom";
import {tryRegistration} from "../../services/customerService";

class RegistrationPage extends React.Component {

    constructor(props) {
        super(props);
        this.onSuccessRegistration = this.onSuccessRegistration.bind(this);
        this.onFailureRegistration = this.onFailureRegistration.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSuccessRegistration() {
        this.props.history.push("/login");
    }

    onFailureRegistration() {
        message.error('Упс, ошибка. Проверьте данные и повторите');
    }

    redirectToLogin = () => {
        this.props.history.push("/login");
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                tryRegistration(values.userName,
                    values.password,
                    values.inn,
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
                    {getFieldDecorator("userName", {
                        rules: [{required: true, message: "Пожалуйтса, введите свое юзернейм!"}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                               placeholder="юзернейм"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("password", {
                        rules: [{required: true, message: "Пожалуйтса, введите свой пароль!"}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>} type="password"
                               placeholder="Пароль"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("inn", {
                        rules: [{required: true, message: "Пожалуйтса, введите свой ИНН!"}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>} type="password"
                               placeholder="ИНН"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button
                        onClick={this.redirectToLogin}
                        type="primary" className="login-form-button">
                        Войти в систему
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default (withRouter(Form.create()(RegistrationPage)));
