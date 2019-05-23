import {Form, DatePicker, Button} from 'antd';
import "antd/dist/antd.css";
import * as React from "react";
import { Select } from 'antd';
import { message } from 'antd';
import {createTransfers} from "../../services/customerService";
import InputNumber from "antd/es/input-number";
const {RangePicker } = DatePicker;
const Option = Select.Option;

class CrateContractForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            weight: 1,
            type: '',
            startDate: '',
            endDate: '',
        };
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeSecondPlayer = this.onChangeSecondPlayer.bind(this);
        this.onChangeProductionType = this.onChangeProductionType.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onClick = this.onClick.bind(this);

    }
    customers = [];
    products = [];

    onChangeWeight(value) {
        this.setState({weight : value});
        console.log(this.state.weight)
    }
    onChangeProductionType(value) {
        this.setState({type : value});
    }
    onChangeSecondPlayer(value) {
        this.setState({name : value});
    }
    onChangeDate(date, dateString) {
        this.setState({startDate : dateString[0]});
        this.setState({endDate : dateString[1]});
    }
    onClick() {
        createTransfers(
            this.state.name,
            this.state.weight,
            this.state.type,
            this.state.startDate,
            this.state.endDate,
            this.onSuccess)
    }
    onSuccess() {
        message.success("Удачно")
    }
    componentDidMount() {
        for (let i = 0; i < this.props.dataCustomers.length; i++) {
            let val = this.props.dataCustomers[i];
            this.customers.push(<Option value={val}>{val}</Option>)
        }

        for (let i = 0; i < this.props.products.length; i++) {
            let val = this.props.products[i];
            this.products.push(<Option value={val}>{val}</Option>)
        }
    }

    render() {
        return (
            <div style={{paddingLeft:'40px',  width : '40vw'}}>
                <Form layout={"horizontal"}>
                    <span>Выберите второго участника сделки</span>
                    <div></div>
                    <Select
                        showSearch
                        onChange={this.onChangeSecondPlayer}
                        style={{ width: 200 }}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {this.customers}
                    </Select>
                <Form.Item
                    label="Дата начала и конца">
                    <RangePicker
                    onChange={this.onChangeDate}/>
                </Form.Item>
                        <span>Укажите тип поставляемой продукции</span>
                    <div></div>

                    <Select
                            showSearch
                            onChange={this.onChangeProductionType}
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {this.products}
                        </Select>

                    <Form.Item>
                        <span>Укажите количество килограмм продукции</span>
                        <div></div>
                        <InputNumber
                            min={1}
                            max={1000}
                            defaultValue={1}
                            onChange={this.onChangeWeight}/>

                    </Form.Item>

                    <Form.Item
                    style={{marginTop: "16px" }}>
                    <Button
                        onClick={this.onClick}
                        type="primary"
                        htmlType="submit">
                        Готово
                    </Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}

const WrappedCrateContractForm = Form.create({ name: 'time_related_controls' })(CrateContractForm);

export default WrappedCrateContractForm;