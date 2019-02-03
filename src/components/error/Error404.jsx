import React, {Component} from 'react';
import '../../main.css';
import {withNamespaces} from "react-i18next";

class Error404 extends Component {
    render() {
        const { t } = this.props;

        return(
            <h1>{t('Resource not found')}</h1>
        )
    }
}

export default withNamespaces('translations')(Error404);