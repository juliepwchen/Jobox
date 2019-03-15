import React, { Component } from 'react';
import { connect } from 'react-redux';

import QAItem from './QAItem';
import styles from '../cssmodules/QAList.module.css';

import { fetchQAList } from '../actions';

class QAList extends Component {
    componentDidMount() {
        this.props.fetchQAList();
    }
    
    renderList = ()=>{
        return this.props.list.map((item)=>{
            return (
              <QAItem key={item.qaId} item={item}/>
            );
        });
    }

    render() {
        return( 
            <div className={` ${styles.qalist} ui segment middle aligned celled selection list`}>
                { this.renderList() }
            </div>
        );
    }
}

const mapStateToProps = ({qaState}) => {
    return {
        list: qaState.qaList
    };
}

export default connect(mapStateToProps, {
    fetchQAList
})(QAList);