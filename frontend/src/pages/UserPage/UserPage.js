import React from "react";
import {withRouter} from "react-router-dom";
import {Button, Form, Input} from "antd";
import {getStocks} from "../../services/userService";
import Icon from "antd/es/icon";
import List from "antd/es/list";
import "./UserPage.css";

class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        super(props);
        this.state = {
            stocks: [],
        };
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess(stocks) {
        console.log(stocks)

        let arr = [];
        for (let i = 0; i < stocks.data.length; i++) {
            let item = [
                'Дата прибытия - ' +  stocks.data[i].data.substr(4, 15),
                ', Номер дома - ' + stocks.data[i].place.physicalAddress.buildingNumber,
                ', Буква дома - ' + stocks.data[i].place.physicalAddress.buildingLetter,
                ', Улица - ' + stocks.data[i].place.physicalAddress.street.name,
                ', Город - ' + stocks.data[i].place.physicalAddress.street.city.name,
                ', Округ - ' + stocks.data[i].place.physicalAddress.street.city.district.name,
                ', Регион - ' + stocks.data[i].place.physicalAddress.street.city.district.region.name
            ];
            arr.push(item)
        }
        this.setState({stocks : arr});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                getStocks(values.id, this.onSuccess)
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div style={{
                display: 'flex'
            }} >
            <Form onSubmit={this.handleSubmit} className="get-form">
                <Form.Item>
                    {getFieldDecorator("id", {
                        rules: [{required: true, message: "Пожалуйтса, заполните поле!"}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                               placeholder="id сделки"/>
                    )}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Получить все точки товара
                    </Button>
                </Form.Item>

            </Form>
            <List
        style = {{width: '50vw',
            margin: '40px',
            marginLeft: '10vw'
        }}
        size="small"
        header={<div>Маршрут товара</div>}
        bordered
        dataSource={this.state.stocks}
        renderItem={item => <List.Item>{item}</List.Item>}
        />
        </div>
        )
    }
}

export default (withRouter(Form.create()(UserPage)));
