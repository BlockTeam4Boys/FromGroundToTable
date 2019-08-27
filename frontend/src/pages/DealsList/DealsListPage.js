import React, { Component } from 'react';
import './DealsListPage.css';
import {Layout} from 'antd';
import "antd/dist/antd.css";
import { Typography } from 'antd';
import AppHeader from "../../components/AppHeader/AppHeader";
import {consistentlyTransfer, getMe} from "../../services/customerService";
import Button from "antd/es/button";
import { Table, Tag } from 'antd';

const { Title } = Typography;
const { Content} = Layout;

class App extends Component {

     fromMeColumns = [
        {
            title: 'Идентификатор сделки',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Товар',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Кол-во',
            dataIndex: 'size',
            key: 'size',
        },
         {
            title: 'Дата начала',
            dataIndex: 'startDate',
            key: 'startDate',
        },
         {
            title: 'Дата конца',
            dataIndex: 'endDate',
            key: 'endDate',
        },
         {
             title: 'Согласие партнера',
             key: 'tag',
             dataIndex: 'tag',
             render: tag => (
                 <span>

                     {
                         <Tag color={tag === 'нет' ? 'volcano' : 'green'} key={tag}>
                         {tag}
                         </Tag>

                     }

      </span>
             ),
         },
    ];

    toMeColumns = [
        {
            title: 'Идентификатор сделки',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Товар',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Кол-во',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Дата начала',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'Дата конца',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'Мое согласие',
            key: 'tag',
            dataIndex: 'tag',
            render: tag => (
                <span>

                     {
                         tag ?

                             <div>
                                 {tag}
                             </div>
                     :
                             <Tag color={'green'} key={tag}>
                                 да
                             </Tag>
                     }

      </span>
            ),
        },
    ];

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
        let arr = [];
        for (let i = 0; i < customer.data.transfersFromMe.length; i++) {
            let item =
                {
                    id: customer.data.transfersFromMe[i].id,
                    product: customer.data.transfersFromMe[i].product.name,
                    size: customer.data.transfersFromMe[i].weight +
                        ' ' +
                        customer.data.transfersFromMe[i].unitType,
                    startDate: customer.data.transfersFromMe[i].startDate.substr(0, 10),
                    endDate: customer.data.transfersFromMe[i].endDate.substr(0, 10),
                    tag: customer.data.transfersFromMe[i].consistently ? 'да' : 'нет',
                };
            arr.push(item)
        }
        this.setState({dealsFromMe : arr});

        let crr = [];
        for (let i = 0; i < customer.data.transfersToMe.length; i++) {
            let item = {
                id: customer.data.transfersToMe[i].id,
                product: customer.data.transfersToMe[i].product.name,
                size: customer.data.transfersToMe[i].weight + ' кг',
                startDate: customer.data.transfersToMe[i].startDate.substr(0, 10),
                endDate: customer.data.transfersToMe[i].endDate.substr(0, 10),
                tag: customer.data.transfersToMe[i].consistently ? null :
                    <Button
                        onClick={() => {
                            consistentlyTransfer(customer.data.transfersToMe[i].id);
                            getMe(this.onSuccess);
                        }}
                        type="primary">
                        Дать согласие
                    </Button>,
            };
            crr.push(item)
        }
        this.setState({dealsToMe : crr});
    }
    render() {

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <AppHeader/>
                <Content >
                    <div style={{
                        background: '#f9f9f9',
                        paddingTop: 30,
                        minHeight: '88vh',
                        paddingLeft: '5vw',
                        paddingRight: '5vw',
                    }}>
                        <Title>Ваши сделки</Title>

                        <p style={{
                            fontSize: '22px',
                            fontWeight: '900',
                            color: 'black'
                        }}>
                            Отправленные Вами
                        </p>
                        <Table dataSource={this.state.dealsFromMe} columns={this.fromMeColumns}/>

                        <p style={{
                            fontSize: '22px',
                            fontWeight: '900',
                            color: 'black'
                        }}>
                            Принимаемые Вами
                        </p>
                        <Table dataSource={this.state.dealsToMe} columns={this.toMeColumns}/>

                    </div>
                </Content>
            </Layout>
        );
    }
}

export default App;
