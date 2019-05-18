import React, { Component } from 'react';
import { List } from 'antd';
import {withRouter} from "react-router-dom";

class CustomersList extends Component {

    render() {
        console.log(this.props.data)
        return (

                <List
                    size="small"
                header={<span>Все пользователи</span>}
                bordered
                dataSource={this.props.data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        )
    }
}

export default (withRouter(CustomersList));
