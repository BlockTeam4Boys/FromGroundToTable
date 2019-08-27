import React from "react";
import {withRouter} from "react-router-dom";
import AllPlaces from "../../components/carrierComponents/AllPlaces/AllPlaces";
import {Layout} from "antd";
import CarrierHeader from "../../components/carrierComponents/Header/CarrierHeader";
import CreatePlace from "../../components/carrierComponents/CreatePlace/CreatePlace";
import ConfirmDelivery from "../../components/carrierComponents/ConfirmDelivery/ConfirmDelivery";
const {Content} = Layout;

class CarrierPage extends React.Component {

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <CarrierHeader/>
                <Content>
                    <div style={{ display: 'flex', background: '#f9f9f9', paddingTop: 30, minHeight: '88vh', paddingLeft: '5vw' }}>
                        <AllPlaces/>
                        <ConfirmDelivery/>
                        <CreatePlace/>
                    </div>
                </Content>
            </Layout>

        )
    }
}

export default (withRouter(CarrierPage));
