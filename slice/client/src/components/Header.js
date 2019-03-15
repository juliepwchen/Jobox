import React, { Component } from 'react';

import styles from '../cssmodules/Header.module.css';

class Header extends Component {
    render() {
        const AND = '&';
        return(
            <div className={`${styles.header} ui stackable menu`} >
                <div className="item">
                    <img alt="item" src="/assets/watermelon.png" />
                    <label className={styles.label}>Slice</label>
                </div>
                <div className="right menu">
                    <a className="item" href="/">{`Q${AND}A`}</a>
                    <a className="item" href="/">JOBS</a>
                    <a className="item" href="/">CONTACT</a>
                </div> 
            </div>
        );
    }
}

export default Header;