import React, { Component } from "react";
//import FontAwesome from 'react-fontawesome';
import './Quiz.css';

class Quiz extends Component {
    render() {
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
                    
                    <div className="container">
                        <nav className="panel">
                            <p className="panel-heading">
                                Jaki znacznik odpowiada za pogrubienie tekstu?
                            </p>
                    
                            <a className="panel-block is-active">
                                <span className="panel-icon">
                                <i className="far fa-circle" aria-hidden="true"></i>
                                </span>
                                &lt;li&gt; 
                            </a>
                            <a className="panel-block is-active">
                                <span className="panel-icon">
                                <i className="far fa-circle" aria-hidden="true"></i>
                                </span>
                                &lt;br&gt; 
                            </a>
                            <a className="panel-block is-active">
                                <span className="panel-icon">
                                <i className="far fa-circle" aria-hidden="true"></i>
                                </span>
                                &lt;strong&gt; 
                            </a>
                            <a className="panel-block is-active">
                                <span className="panel-icon">
                                <i className="far fa-circle" aria-hidden="true"></i>
                                </span>
                                &lt;em&gt; 
                            </a>
                        </nav>
                    </div>

                    <div className="container">
                        <progress className="progress" value="15" max="100">15%</progress>
                    </div>

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