import React, { Component } from "react";
//import FontAwesome from 'react-fontawesome';
import "./Quiz.css";
import Question from "./Question";

class Quiz extends Component {
	decrement(pageNumber) {
		if (pageNumber > 1) {
			return `/quiz/${pageNumber - 1}`;
		} else {
			return `/quiz/${4}`;
		}
	}
	increment(pageNumber) {
		if (pageNumber < 4) {
			pageNumber++;
			return `/quiz/${pageNumber}`;
		} else {
			return `/quiz/${1}`;
		}
	}

	render() {
		const questionNumber = this.props.match.params.questionNumber;
		return (
			<div className="columns">
				<div className="column is-12">
					<div className="container">
						<section className="hero is-info">
							<div className="hero-body">
								<h1 className="title">Quiz</h1>
								<h2 className="subtitle">Z wiedzy o HTML</h2>
							</div>
						</section>
					</div>

					<Question questions={questionNumber} />

					<div className="container">
						<div className="columns">
							<div className="column is-12">
								<a
									className="button"
									href={this.decrement(questionNumber)}
								>
									<span className="icon">
										<i className="fas fa-angle-left" />
									</span>
									<span>Wróć</span>
								</a>
								<a
									className="button is-pulled-right is-info"
									href={this.increment(questionNumber)}
								>
									<span>Dalej</span>
									<span className="icon">
										<i className="fas fa-angle-right" />
									</span>
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
