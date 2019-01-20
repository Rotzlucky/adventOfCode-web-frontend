import React, {Component} from 'react';
import './App.css';
import jQuery from 'jquery';

class Calendar extends Component {
    render() {

        const days = this.props.days.map((day, index) => {
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
        }
    }

    componentDidMount() {
        jQuery.getJSON('http://localhost:9018/api/puzzle/')
            .then((results) => {
                this.setState({
                    days: results,
                });
            });
    }

    render() {
        return (
            <div className="">
                <h1>title</h1>
                <h2>subTitle</h2>

                <Calendar
                    days={this.state.days}
                />
            </div>
        );
    }
}

export default App;
