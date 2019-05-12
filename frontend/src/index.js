import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import { BrowserRouter, Route } from 'react-router-dom'
import DealListPage from "./pages/DealsList/DealsListPage";
import CreateContractPage from "./pages/CreateContractPage/CreateContractPage";
import {Redirect, Switch} from "react-router";
import Cookies from "js-cookie";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/registration"
                   render={() => (Cookies.get("role") !== "user" ?
                       <RegistrationPage/> :
                       <Redirect to={"/"}/>)}/>
            <Route path="/login" render={() => (Cookies.get("role") !== "user" ?
                <LoginPage/> :
                <Redirect to={"/"}/>)}/>
            <Route path="/contracts"
                   render={() => (Cookies.get("role") === "user" ?
                       <DealListPage/> :
                       <Redirect to={"/login"}/>)}/>
            <Route path="/"
                   render={() => (Cookies.get("role") === "user" ?
                       <CreateContractPage/> :
                       <Redirect to={"/login"}/>)}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
