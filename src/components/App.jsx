import React, {Component} from 'react';
import '../main.css';
import Calendar from './views/Calendar';
import {Route, Switch} from "react-router";
import Day from "./views/Day";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Calendar}/>
                <Route path='/day/:number' component={Day}/>
                <Route path='*' component={Calendar}/>
            </Switch>
        );
    }
}

export default App;
