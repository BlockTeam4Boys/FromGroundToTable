import React from "react";
import {Button, Form, Icon, Input} from "antd";
import "./LoginPage.css";
import "antd/dist/antd.css"
import {withRouter} from "react-router-dom";
import Cookies from "js-cookie";
import {tryLogin} from "../../services/customerService";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.onSuccessLogin = this.onSuccessLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSuccessLogin() {
        Cookies.set("role", "user", {expires: 30});
        this.props.history.push("/");
    }

    redirectToRegistration = () => {
        this.props.history.push("/registration");
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                tryLogin(values.userName, values.password, this.onSuccessLogin);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator("userName", {
                        rules: [{required: true, message: "Please input your username!"}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>} placeholder="Username"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("password", {
                        rules: [{required: true, message: "Please input your Password!"}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Войти в систему
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button
                    onClick={this.redirectToRegistration}
                        type="primary" className="login-form-button">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default (withRouter(Form.create()(LoginPage)));
