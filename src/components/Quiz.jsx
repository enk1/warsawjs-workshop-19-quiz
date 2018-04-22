import React, { Component } from "react";
//import FontAwesome from 'react-fontawesome';
import './Quiz.css';
import Question from './Question';
import ProgressBar from "./ProgressBar";

class Quiz extends Component {
    render() {
        const questionNumber = this.props.match.params.questionNumber;

        return (
            <div className="columns">
                <div className="column is-12">
                    <div className="container">
                        <section className="hero is-primary">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="title">
                                        Quiz
                                    </h1>
                                    <h2 className="subtitle">
                                        Z wiedzy o HTML
                                    </h2>
                                </div>
                            </div>
                        </section>
                    </div>
                    
                    <Question questions={questionNumber}/>
                    
                    <div className="container">
                        <div className="columns">
                            <div className="column is-12">
                                <a className="button">
                                    <span className="icon"><i className="fas fa-angle-left"></i></span>
                                    <span>Wróć</span>
                                </a>
                                <a className="button is-pulled-right is-primary">
                                    <span>Dalej</span>
                                    <span className="icon"><i className="fas fa-angle-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        );
    }
}

export default Quiz;