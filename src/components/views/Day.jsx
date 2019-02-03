import React, {Component} from 'react';
import '../../main.css';
import {Link} from 'react-router-dom'
import jQuery from "jquery";
import Error404 from '../error/Error404'
import {withNamespaces} from "react-i18next";

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: [],
            solutions: [],
            status: ""
        }
    }

    callApi(url) {
        return jQuery.ajax(url)
            .done((result) => {
                this.setState({
                    status: 'SUCCESS'
                });
                return result;
            })
            .fail(() => {
                this.setState({
                    status: 'ERROR'
                });
            });
    }

    handleClick() {
        const dayNumber = parseInt(this.props.match.params.number);

        this.callApi(`http://localhost:9018/api/solution/${dayNumber}`).done((result) => {
            this.setState({
                solutions: result
            });
        });
    }

    componentDidMount() {
        const dayNumber = parseInt(this.props.match.params.number);

        this.callApi(`http://localhost:9018/api/puzzle/${dayNumber}`).done((result) => {
            this.setState({
                day: result
            });
        });
    }

    render() {
        const { t } = this.props;

        const dayNumber = parseInt(this.props.match.params.number);

        const solutions = this.state.solutions.map((solution, index) => {
            return (
                <li key={index}>
                    <span>Solution for part {index + 1}: {solution}</span>
                </li>
            )
        });

        const dayContent = (
            <div>
                <Link to='/'>{t('Navigate back')}</Link>
                <h1>Day {dayNumber}</h1>

                <button onClick={() => this.handleClick()}>
                    {t('Get solutions')}
                </button>
                <div>{solutions}</div>
            </div>
        );

        return (
            <div>
                {this.state.status === 'SUCCESS' ? dayContent : <Error404/>}
            </div>
        );
    }
}

export default withNamespaces('translations')(Day);