import React, {Component} from 'react';
import '../../main.css';
import {Link} from 'react-router-dom'

export default class Day extends Component {

    render() {
        const dayNumber = parseInt(this.props.match.params.number);
        return (
            <div>
                <Link to='/'>back</Link>
                <h1>Day {dayNumber}</h1>
            </div>
        );
    }
}