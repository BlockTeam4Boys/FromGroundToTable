import {
    Form, Icon, Input, Button,
} from 'antd';
import * as React from "react";
import { notification } from 'antd';


class FormAdd extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log(values.id)
                this.hello(values.id, values.name)
            }
        });
    }

    async hello(id, name) {
        const data = new FormData();
        data.append("id", id);
        data.append("name", name);

       let  url = '/addPotato'
        if (this.props.what !== 'продукт') {
            url = '/addStock'
        }
        fetch(url, {
            method: "POST",
            body: new URLSearchParams(data)
        })
            .then(v => {
                notification.success({
                    message: 'Успешно!',
                    description: 'Запись о ' + this.props.what + 'е добавлена в реестр.',
                    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
                });
            })

    };

    render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item
                >
                    {getFieldDecorator('id', {
                        rules: [{ required: true, message: 'Please input id of your ' + this.props.what }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="id" />
                    )}
                </Form.Item>
                <Form.Item
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input name of your product!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="Name" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        <span> Добавить запись о {this.props.what}е </span>
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedFormAdd = Form.create({ name: 'horizontal_login' })(FormAdd);

export default WrappedFormAdd;