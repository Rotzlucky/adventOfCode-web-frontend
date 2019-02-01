import React, {Component} from 'react';
import '../../main.css';

export default class Error404 extends Component {
    render() {
        return(
            <h1>{this.props.translations["notFound"]}</h1>
        )
    }
}