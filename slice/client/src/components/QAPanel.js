import React, { Component } from 'react';

import Layout from './Layout';
import QAList from './QAList';
import styles from '../cssmodules/QAPanel.module.css';

const QAPanel = (props)=>{
        return(
            <Layout>
                <div className={`${styles.qapanel} ui raised segment`}>
                    <QAList />
                </div>
            </Layout>
        );
}
export default QAPanel;