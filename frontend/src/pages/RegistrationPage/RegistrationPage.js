import React from "react";
import {Button, Form, Icon, Input, Layout, message} from "antd";
import "./RegistrationPage.css";
import {withRouter} from "react-router-dom";
import {tryRegistration} from "../../services/customerService";
import { Radio } from 'antd';
import LoginPageHeader from "../../components/LoginPageHeader/LoginPageHeader";
const {Content} = Layout;

const RadioGroup = Radio.Group;

class RegistrationPage extends React.Component {

    constructor(props) {
        super(props);
        this.onSuccessRegistration = this.onSuccessRegistration.bind(this);
        this.onFailureRegistration = this.onFailureRegistration.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        value: 1,
    };

    onChangeRadion = e => {
        this.setState({
            value: e.target.value,
        });
    };

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
                    this.state.value === 1 ? 'farmer' : 'carrier',
                    this.onSuccessRegistration,
                    this.onFailureRegistration);
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
                            <p style={{ marginBottom: "20px", fontSize: '28px', fontWeight: "700" }}>Регистрация</p>

                <Form.Item>
                    {getFieldDecorator("userName", {
                        rules: [{required: true, message: "Пожалуйтса, введите имя пользователя"}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                               placeholder="Имя пользователя"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("password", {
                        rules: [{required: true, message: "Пожалуйтса, введите пароль"}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>} type="password"
                               placeholder="Пароль"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("inn", {
                        rules: [{required: true, message: "Пожалуйтса, введите свой ИНН"}],
                    })(
                        <Input prefix={<Icon type="audit" style={{color: "rgba(0,0,0,.25)"}}/>}
                               placeholder="ИНН"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <RadioGroup onChange={this.onChangeRadion} value={this.state.value}>
                        <Radio value={1}>Производитель</Radio>
                        <Radio value={2}>Представитель склада</Radio>
                    </RadioGroup>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                        <Form.Item >
                            <div style={{ width: "300px", display: "flex"}}>
                                <p style={{margin: "auto 0 auto auto"}}>Уже зарегистрировались?</p>
                                <Button style={{margin: "auto auto auto 0"}} onClick={this.redirectToLogin} type="link">Войти</Button>
                            </div>
                        </Form.Item>

            </Form>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default (withRouter(Form.create()(RegistrationPage)));
