import React, {Component} from 'react';
import '../main.css';
import {Route, Switch} from "react-router";
import Calendar from './views/Calendar';
import Day from "./views/Day";
import Error404 from "./error/Error404";
import jQuery from "jquery";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            translations: {}
        }
    }

    componentDidMount() {
        jQuery.ajax('http://localhost:9018/api/i18n').done((result) => {
            this.setState({
               translations: result
            });
        });
    }

    render() {
        const translations = this.state.translations;

        return (
            <Switch>
                <Route exact path='/' render={(props) => <Calendar {...props} translations={translations}/>}/>
                <Route path='/day/:number' render={(props) => <Day {...props} translations={translations}/>}/>
                <Route render={(props) => <Error404 {...props} translations={translations}/>}/>
            </Switch>
        );
    }
}

export default App;
