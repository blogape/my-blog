import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Home from '../view/App/';
import Login from '../view/Login/';
import Registered  from '../view/Registered/';
import Article from '../view/Article/';
const BasicRoute=()=>(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login}/> 
            <Route exact path='/registered' component={Registered} />
            <Route exact path='/artilce' component={Article} />
        </Switch>
    </HashRouter>
)

export default BasicRoute;