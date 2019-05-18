import React from "react";
import "./AdminPage.css";
import {withRouter} from "react-router-dom";
import CreateProduct from "../../components/adminComponents/CreateProduct/CreateProduct";
import CustomersList from "../../components/adminComponents/CustomersList/CustomersList";
import {getAllCustomers} from "../../services/adminService";
import {message} from "antd";

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            is: false,
        };
        this.onSuccess = this.onSuccess.bind(this);
        this.onReject = this.onReject.bind(this);
    }

    componentDidMount() {
        getAllCustomers(this.onSuccess, this.onReject);
    }

    onSuccess(customers) {
        console.log(this.state.is)

        let arr = new Array()

        for (let i = 0; i < customers.data.length; i++) {
            arr.push(customers.data[i].name)
        }
        this.state = {
            data: arr,
            is: true
        };
        console.log(this.state.data)
    }

    onReject() {
        message.error('Упс, ошибка. Проверьте данные и повторите');
    }

    render() {
        return (
            <div>
                <CreateProduct/>
                {this.state.is && <CustomersList data={this.state.data}/>}
            </div>
        )
    }
}

export default (withRouter(AdminPage));
