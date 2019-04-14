import {Form, DatePicker, Button} from 'antd';
import "antd/dist/antd.css";
import { Cascader } from 'antd';
import * as React from "react";
import Input from "antd/es/input";
import Icon from "antd/es/icon";
const {RangePicker } = DatePicker;

class TimeRelatedForm extends React.Component {
    render() {
        const options = [{
            value: 'зерновые',
            label: 'зерновые',
        },
            {
                value: 'корнеплоды',
                label: 'корнеплоды',
                children: [{
                    value: 'морковь',
                    label: 'морковь',

                },
                    {value: 'свекла',
                        label: 'свекла',},
                    {value: 'редис',
                        label: 'редис',}
                ],

            },
            {
            value: 'бобовые',
            label: 'бобовые',

        }, {
            value: 'кормовые',
            label: 'кормовые',

        },
        ];
        this.state = {
            formLayout: 'horizontal',
        };

        return (
            <div style={{paddingLeft:'40px',  width : '40vw'}}>
                <Form layout={this.props.formLayout}>

                    <Form.Item
                    label="С кем заключается сделка"
                    >
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="id" />
                    </Form.Item>
                <Form.Item
                    label="Дата начала и конца"
                ><RangePicker />
                </Form.Item>
                    <div>
                        <span>Тип продукции  </span>
                        <Cascader style={{ width : '30vw', marginTop: "8px" }}
                                  options={options} placeholder="Укажите тип продукции" />
                    </div>

                <Form.Item style={{marginTop: "16px" }}
                >
                    <Button type="primary" htmlType="submit">Готово</Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}

const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(TimeRelatedForm);

export default WrappedTimeRelatedForm;