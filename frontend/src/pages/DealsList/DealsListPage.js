import React, { Component } from 'react';
import './DealsListPage.css';
import {Layout} from 'antd';
import "antd/dist/antd.css";
import { Typography } from 'antd';
import AppHeader from "../../components/AppHeader/AppHeader";
import {consistentlyTransfer, getMe} from "../../services/customerService";
import List from "antd/es/list";
import Button from "antd/es/button";
const { Title } = Typography;
const { Content} = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dealsFromMe: [],
            dealsToMe: [],
        };
        this.onSuccess = this.onSuccess.bind(this);
    }

    componentDidMount() {
        getMe(this.onSuccess)
    }

    onSuccess(customer) {
        console.log(customer)
        let arr = [];
        for (let i = 0; i < customer.data.transfersFromMe.length; i++) {
            let item = [
                'Идетификатор сделки - ' +  customer.data.transfersFromMe[i].id,
                ', Товар - ' + customer.data.transfersFromMe[i].product.name,
                ', Вес - ' + customer.data.transfersFromMe[i].weight + ' кг',
                ', Дата начала - ' + customer.data.transfersFromMe[i].startDate.substr(0, 10),
                ', Дата конца - ' + customer.data.transfersFromMe[i].endDate.substr(0, 10),
                ', Согласие второй стороны - ',  customer.data.transfersFromMe[i].consistently ? 'да' : "нет",

            ];
            arr.push(item)
        }
        this.setState({dealsFromMe : arr});

        let crr = [];
        for (let i = 0; i < customer.data.transfersToMe.length; i++) {
            let item = [
                'Идетификатор сделки - ' +  customer.data.transfersToMe[i].id,
                ', Товар - ' + customer.data.transfersToMe[i].product.name,
                ', Вес - ' + customer.data.transfersToMe[i].weight + ' кг',
                ', Дата начала - ' + customer.data.transfersToMe[i].startDate.substr(0, 10),
                ', Дата конца - ' + customer.data.transfersToMe[i].endDate.substr(0, 10),
                ', Мое согласие - ' , customer.data.transfersToMe[i].consistently ? 'да' :

                <Button onClick={consistentlyTransfer(customer.data.transfersToMe[i].id)}
                        type="primary">
                    Дать согласие
                </Button>,


            ];
            crr.push(item)
        }
        this.setState({dealsToMe : crr});
    }
    render() {

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <AppHeader/>
                <Content >
                    <div style={{ background: '#f9f9f9',paddingTop: 30, minHeight: '88vh', paddingLeft: '5vw' }}>
                        <Title>Ваши сделки</Title>

                                <List style = {{width: '80vw'}}
                                    size="small"
                                    header={<div>Отправленные мной</div>}
                                    bordered
                                    dataSource={this.state.dealsFromMe}
                                    renderItem={item => <List.Item>{item}</List.Item>}
                                />

                        <div style = {{padding: '3vw'}}>
                        </div>

                        <List
                            style = {{width: '80vw'}}
                            size="small"
                            header={<div>Отправленные мне</div>}
                            bordered
                            dataSource={this.state.dealsToMe}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />

                    </div>
                </Content>
            </Layout>
        );
    }
}

export default App;
