import React, {Component} from 'react';
import '../../main.css';
import jQuery from "jquery";
import { Link } from 'react-router-dom'

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [],
            translations: {}
        }
    }

    componentDidMount() {
        let days = jQuery.ajax('http://localhost:9018/api/puzzle');
        let translations = jQuery.ajax('http://localhost:9018/api/i18n');

        jQuery.when(days, translations).done((result1, result2) => {
            this.setState({
                days: result1[0],
                translations: result2[0]
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
                <h1>{this.state.translations["title"]}</h1>
                <h2>{this.state.translations["subTitle"]}</h2>
                <div className="calendar-grid">{days}</div>
            </div>
        );
    }
}