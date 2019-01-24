import React, {Component} from 'react';
import './main.css';
import jQuery from 'jquery';

class Calendar extends Component {
    render() {

        const days = this.props.days.map((day) => {
            return (
                <a key={day.number} href="/2018/day/{day.number}">
                    <div className="day-cell">
                        <div className="day-cell-number">{day.number}</div>
                        <div className="day-cell-label">{day.title}</div>
                    </div>
                </a>
            )
        });

        return (
            <div className="calendar-grid">{days}</div>
        );
    }
}

class App extends Component {

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
        return (
            <div>
                <h1>{this.state.translations["title"]}</h1>
                <h2>{this.state.translations["subTitle"]}</h2>

                <Calendar
                    days={this.state.days}
                />
            </div>
        );
    }
}

export default App;
