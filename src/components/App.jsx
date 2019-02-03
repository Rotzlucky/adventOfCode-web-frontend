import React, {Component} from 'react';
import '../main.css';
import {Route, Switch} from "react-router";
import Calendar from './views/Calendar';
import Day from "./views/Day";
import Error404 from "./error/Error404";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Calendar}/>
                <Route path='/day/:number' component={Day}/>
                <Route component={Error404}/>
            </Switch>
        );
    }
}

export default App;
