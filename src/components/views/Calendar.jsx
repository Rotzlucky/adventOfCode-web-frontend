import React, {Component} from 'react';
import '../../main.css';
import jQuery from "jquery";
import { Link } from 'react-router-dom'

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [],
        }
    }

    componentDidMount() {
        let days = jQuery.ajax('http://localhost:9018/api/puzzle');

        jQuery.when(days).done((result) => {
            this.setState({
                days: result
            });
        });
    }

    render() {

        const days = this.state.days.map((day) => {
            return (
                <Link to={`/day/${day.number}`} key={day.number}>
                    <div key={day.number} className="day-cell">
                        <div className="day-cell-number">{day.number}</div>
                        <div className="day-cell-label">{day.title}</div>
                    </div>
                </Link>
            )
        });

        return (
            <div>
                <h1>{this.props.translations["title"]}</h1>
                <h2>{this.props.translations["subTitle"]}</h2>
                <div className="calendar-grid">{days}</div>
            </div>
        );
    }
}