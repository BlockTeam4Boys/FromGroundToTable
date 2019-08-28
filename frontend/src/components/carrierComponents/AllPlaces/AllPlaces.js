import React from "react";
import {withRouter} from "react-router-dom";
import {getMyPlaces} from "../../../services/carrierService";
import List from "antd/es/list";

class AllPlaces extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            places: [],
        };
        this.onSuccess = this.onSuccess.bind(this);
    }

    componentDidMount() {
        getMyPlaces(this.onSuccess)
    }

    onSuccess(places) {

        let arr = [];
        for (let i = 0; i < places.data.length; i++) {
            let item = [
                'Идетификатор склада - ' +  places.data[i].id,
                ', Номер дома - ' + places.data[i].legalAddress.buildingNumber,
                ', Буква дома - ' + places.data[i].legalAddress.buildingLetter,
                ', Улица - ' + places.data[i].legalAddress.street.name,
                ', Город - ' + places.data[i].legalAddress.street.city.name,
                ', Округ - ' + places.data[i].legalAddress.street.city.district.name,
                ', Регион - ' + places.data[i].legalAddress.street.city.district.region.name
            ];
            arr.push(item)
        }
        this.setState({places : arr});
        console.log(this.state.places)
    }

    render() {
        return (
            <List
                style = {{width: '40vw'}}
                size="small"
                header={<div>Мои склады</div>}
                bordered
                dataSource={this.state.places}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        )
    }
}

export default (withRouter(AllPlaces));
