import {
    Form, Icon, Input, Button, notification,
} from 'antd';
import * as React from "react";
import {AxiosInstance as axios} from "axios";

class GetForm extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.hello(values.id)
            }
        });
    };

     hello(id) {
        const data = new FormData();
        data.append("id", id);

         (async () => {
             const rawResponse = await fetch('/getPotatoInfo', {
                 method: 'POST',
                 body: data
             });
             const content = await rawResponse.json();

             console.log(content);
             notification.success({
                 message: 'Успешно!',
                 description: content,
                 duration: 100,
                 icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
             });
         })();
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

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        <span> Получить информацию о продукте </span>
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedGetForm = Form.create({ name: 'horizontal_login' })(GetForm);

export default WrappedGetForm;