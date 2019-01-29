import React, {Component} from 'react';
import '../../main.css';
import {Link} from 'react-router-dom'
import jQuery from "jquery";

export default class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: [],
            translations: {},
            solutions: [],
        }
    }

    handleClick() {
        const dayNumber = parseInt(this.props.match.params.number);
        jQuery.ajax('http://localhost:9018/api/solution/' + dayNumber).then((result) => {
            this.setState({
                solutions: result
            });
        });
    }

    componentDidMount() {
        const dayNumber = parseInt(this.props.match.params.number);
        let day = jQuery.ajax('http://localhost:9018/api/puzzle/' + dayNumber);
        let translations = jQuery.ajax('http://localhost:9018/api/i18n');

        jQuery.when(day, translations).done((result1, result2) => {
            this.setState({
                day: result1[0],
                translations: result2[0]
            });
        });
    }

    render() {
        const dayNumber = parseInt(this.props.match.params.number);

        const solutions = this.state.solutions.map((solution, index) => {
            return (
                <li key={index}>
                    <span>Solution for part {index + 1}: {solution}</span>
                </li>
            )
        });

        return (
            <div>
                <Link to='/'>{this.state.translations["back"]}</Link>
                <h1>Day {dayNumber}</h1>

                <button onClick={() => this.handleClick()}>
                    {this.state.translations["getSolutions"]}
                </button>
                <div>{solutions}</div>
            </div>
        );
    }
}