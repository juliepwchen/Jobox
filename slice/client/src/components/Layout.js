import React, { Component } from 'react';

import Header from './Header';
import styles from '../cssmodules/Layout.module.css';

class Layout extends Component {

    render() {
        return(
            <div className={`${styles.layout} ui container`}>
                <Header />
                { this.props.children }
            </div>
        );
    }
}

export default Layout;