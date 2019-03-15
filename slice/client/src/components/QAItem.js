import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import styles from '../cssmodules/QAItem.module.css';
import { fetchQAByQaId } from '../actions';

import QADetails from './QADetails';

class QAItem extends PureComponent {
    state = {
        open: false
    }
    onItemClick = (qaId) =>{
        console.log('qaId', qaId);
        this.props.fetchQAByQaId(qaId);
        this.setState({ open: !this.state.open});
    }
    renderItem = ()=>{
        return  (
            <div onClick={()=> this.onItemClick(this.props.item.qaId) } className={`${styles.qaitem} item`}>
                <img className={`${styles.avatarimage} ui avatar image`} src={this.props.item.user.picture} alt="qaitem"/>
                <div className="content">
                    <div className="header">{ this.props.item.user.name}</div>
                    <div className="metadata">QA Alive</div>
                </div>
                <label className={styles.label}>{ this.props.item.topic }</label>
                <div className="right floated content">
                {/* <button className={`${styles.circularbutton} circular ui icon button`}>
                    <i className="icon chevron right"></i>
                </button> */}
                </div>
            </div>
        );
    }
    renderItemWithoutDetails = ()=>{
        return this.renderItem();
    }
    renderItemWithDetails = ()=>{
        return  (
            <Fragment>
                {this.renderItem()}
                <QADetails qa={this.props.qa}/>
            </Fragment>
        );
    }
    renderItemDetails = ()=>{
        return this.state.open ? this.renderItemWithDetails() : this.renderItemWithoutDetails();
    }

    render() {
        return (
            <Fragment>
            { this.renderItemDetails() } 
            </Fragment>
        );
    }
}

const mapStateToProps = ({qaState})=>{
    console.log('qaState.selectedQA', qaState.selectedQA);
    return {
        qa: qaState.selectedQA
    }
}
export default connect(mapStateToProps, {
    fetchQAByQaId
})(QAItem);