import React, { Component } from "react";
import questions from "../config/questions.json";
import ProgressBar from './ProgressBar';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        };
        this.rememberAnswer = this.rememberAnswer.bind(this);
    }
   
    rememberAnswer(questionNumber, i) {
        console.log(typeof questionNumber)
        switch(questionNumber) {
            case '1':
                this.setState({first: i});
                break;
            case '2':
                this.setState({second: i});
                break;
            case '3':
                this.setState({third: i});
                break;
            case '4':
                this.setState({fourth: i});
                break;
        }

        //this.setState({questionNumber: i});
        console.table(this.state)
    }
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
                            <a key={i} onClick={() => this.rememberAnswer(questionNumber, i)} className="panel-block is-active">
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