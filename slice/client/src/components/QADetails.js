import React, { PureComponent, Fragment } from 'react';

class QADetails extends PureComponent {
    renderQA = ()=>{
        if (!this.props.qa || !this.props.qa.questions) return;
        return this.props.qa.questions.map((question)=>{
            return(
                <div key={question.qid} className="ui rasied segment">
                  <div className="ui comments">

                    <div className="comment">
                        <a href='/' className="avatar">
                            <img alt='user' src={question.user.picture} />
                        </a>
                        <div className="content">
                            <a href='/' className="author">{question.user.name}</a>
                            <div className="metadata">
                                <span className="date">{question.user.location}</span>
                            </div>
                            <div className="text">
                                <p>{question.text}</p>
                            </div>
                            <div className="actions">
                                <a href='/' className="reply">Reply</a>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="comment">
                                <a href='/' className="avatar">
                                    <img alt='author' src={this.props.qa.user.picture} />
                                </a>
                                <div className="content">
                                    <a href='/' className="author">{this.props.qa.user.name}</a>
                                    <div className="metadata">
                                        <span className="date">Just now</span>
                                    </div>
                                    <div className="text">
                                        {question.answer}
                                    </div>
                                    <div className="actions">
                                        <a href='/' className="reply">Mark as helpful</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      
                  </div>
              </div>
            );
        });
    }
    render() {
        return (
            <Fragment>
                { this.renderQA() }
            </Fragment>
        );
    }
}

export default QADetails;