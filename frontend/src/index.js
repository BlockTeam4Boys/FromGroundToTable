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
import AdminPage from "./pages/AdminPage/AdminPage";
import CarrierPage from "./pages/CarrierPage/CarrierPage";
import UserPage from "./pages/UserPage/UserPage";

ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/registration"
                   render={() => <RegistrationPage/>}/>

            <Route path="/login" render={() => <LoginPage/>}/>

            <Route path="/admin" render={() => (<AdminPage/>)}/>

            <Route path="/user" render={() => (<UserPage/>)}/>

            <Route path="/create"
                   render={() => (Cookies.get("role") === "farmer" ?
                       <CreateContractPage/> :
                       <Redirect to={"/login"}/>)}/>

            <Route path="/carrier"
                   render={() => (Cookies.get("role") === "carrier" ?
                       <CarrierPage/> :
                       <Redirect to={"/login"}/>)}/>

            <Route path="/"
                   render={() => (Cookies.get("role") === "farmer" ?
                       <DealListPage/> :
                       <Redirect to={"/login"}/>)}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
