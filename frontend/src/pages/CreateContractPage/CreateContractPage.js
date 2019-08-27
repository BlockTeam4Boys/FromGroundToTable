import React, { Component } from 'react';
import './CreateContractPage.css';
import "antd/dist/antd.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import {Layout} from "antd";
import Title from "antd/es/skeleton/Avatar";
import WrappedCrateContractForm from "../../components/WrappedCrateContractForm/WrappedCrateContractForm";
import {getAllCustomers, getAllProducts} from "../../services/adminService";
const {Content} = Layout;

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCustomers: [],
            products: [],
        };
        this.onSuccessCustomer = this.onSuccessCustomer.bind(this);
        this.onSuccessProduct = this.onSuccessProduct.bind(this);
    }

    componentDidMount() {
        getAllCustomers(this.onSuccessCustomer);
        getAllProducts(this.onSuccessProduct);
        this.setState({dataCustomers : this.state.dataCustomers,
        products: this.state.products});
    }

    onSuccessProduct(products) {
        let arr = [];
        for (let i = 0; i < products.data.length; i++) {
            arr.push(products.data[i].name)
        }
        this.setState({dataCustomers : this.state.dataCustomers, products: arr
        });
    }

    onSuccessCustomer(customers) {
        let arr = [];
        for (let i = 0; i < customers.data.length; i++) {
            arr.push(customers.data[i].name)
        }
        this.setState({dataCustomers : arr, products : this.state.products});
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <AppHeader/>
                <Content>
                    <div style={{ background: '#f9f9f9', paddingTop: 30, minHeight: '88vh', paddingLeft: '5vw' }}>
                        <Title>Заключить контракт на поставку</Title>
                        {this.state.products.length > 1 && this.state.dataCustomers.length > 1 ?
                            <WrappedCrateContractForm
                                products = {this.state.products}
                                dataCustomers={this.state.dataCustomers}/>
                            : null }
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default App2;
