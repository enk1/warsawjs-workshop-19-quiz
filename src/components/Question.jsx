import React, { Component } from "react";
import questions from "../config/questions.json";
import ProgressBar from './ProgressBar';

class Question extends Component {    
    render() {
        const questionNumber = this.props.questions;
        const questionContent = questions[questionNumber-1];

        return (
            <div className="container">
                <nav className="panel">
                    <p className="panel-heading">
                        {questionContent.question}
                    </p>

                    {questionContent.answers.map((answer, i) => {
                        return (
                            <a key={i} className="panel-block is-active">
                                <span className="panel-icon">
                                    <i className="far fa-circle" aria-hidden="true" />
                                </span>
                                {answer}
                            </a>
                        );
                    })}
                    
                    <div className="container">
                        <ProgressBar perc={questionNumber} />
                    </div>
                </nav>
            </div>
        );
    }
}

export default Question;