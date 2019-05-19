import React from "react";
import "./AdminPage.css";
import {withRouter} from "react-router-dom";
import CreateProduct from "../../components/adminComponents/CreateProduct/CreateProduct";

class AdminPage extends React.Component {

    render() {
        return (
             <CreateProduct/>
        )
    }
}

export default (withRouter(AdminPage));
