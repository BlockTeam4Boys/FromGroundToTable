import React from "react";
import {Button, Form, Icon, Input, Layout} from "antd";
import "./LoginPage.css";
import "antd/dist/antd.css"
import {withRouter} from "react-router-dom";
import Cookies from "js-cookie";
import {getMe, tryLogin} from "../../services/customerService";
import LoginPageHeader from "../../components/LoginPageHeader/LoginPageHeader";
const {Content} = Layout;

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.onSuccessLogin = this.onSuccessLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSuccessGetMe = this.onSuccessGetMe.bind(this);
    }

    onSuccessGetMe(customer) {
        Cookies.set("name", customer.data.name, {expires: 30});
        if (customer.data.roles[0].name === 'farmer') {
            Cookies.set("role", 'farmer', {expires: 30});
            this.props.history.push("/");
        } else {
            Cookies.set("role", 'carrier', {expires: 30});
            this.props.history.push("/carrier");
        }
    }
    onSuccessLogin() {
        getMe(this.onSuccessGetMe)
    }

    redirectToRegistration = () => {
        this.props.history.push("/registration");
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                tryLogin(values.inn, values.password, this.onSuccessLogin);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <LoginPageHeader/>
                <Content>
                    <div style={{ display: 'flex', background: '#f9f9f9', paddingTop: 30, minHeight: '88vh', paddingLeft: '5vw' }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                            <p style={{ marginBottom: "20px", fontSize: '28px', fontWeight: "700" }}>Вход в систему</p>
                            </Form.Item>
                                <Form.Item>
                    {getFieldDecorator("inn", {
                        rules: [{required: true, message: "Пожалуйста, введите свой ИНН"}],
                    })(
                        <Input prefix={<Icon type="audit" style={{color: "rgba(0,0,0,.25)"}}/>} placeholder="ИНН"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("password", {
                        rules: [{required: true, message: "Пожалуйста, введите свой пароль"}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>} type="password"
                               placeholder="Пароль"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Войти в систему
                    </Button>
                </Form.Item>
                            <Form.Item >
                                <div style={{ width: "300px", display: "flex"}}>
                                    <p style={{margin: "auto 0 auto auto"}}>Еще нет аккаунта?</p>
                                    <Button style={{margin: "auto 0"}} onClick={this.redirectToRegistration} type="link">Зарегистрироваться</Button>
                                </div>
                            </Form.Item>
            </Form>
                    </div>

                </Content>
            </Layout>
        )
    }
}

export default (withRouter(Form.create()(LoginPage)));
