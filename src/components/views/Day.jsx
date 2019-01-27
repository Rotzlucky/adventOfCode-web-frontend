import React, {Component} from 'react';
import '../../main.css';
import {Link} from 'react-router-dom'

export default class Day extends Component {

    render() {
        return (
            <div>
                <Link to='/'>back</Link>
                <h1>Day</h1>
            </div>
        );
    }
}