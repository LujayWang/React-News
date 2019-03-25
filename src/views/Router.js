import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import News from '../redux/news'

export default class Guoji extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {
        return (
            <Switch>
                <Route path='/:type' component={News}></Route>
            </Switch>
        )
    }
}