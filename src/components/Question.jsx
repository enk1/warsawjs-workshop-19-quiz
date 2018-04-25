import React, { Component } from "react";
import questions from "../config/questions.json";
import ProgressBar from "./ProgressBar";

class Question extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userAnswer: 0,
			showResults: false
		};
		this.saveAnswer = this.saveAnswer.bind(this);
		this.showUserAnswer = this.showUserAnswer.bind(this);
		this.checkUserAnswer = this.checkUserAnswer.bind(this);
	}

	saveAnswer(i) {
		this.setState({ userAnswer: i });
	}
	checkUserAnswer() {
		this.setState({ showResults: true });
		//this.showUserAnswer();
	}

	showUserAnswer(questionNumber) {
		if (this.state.userAnswer === questions[questionNumber].answer) {
			return `Super`;
		} else {
			return `Prawidłowa odpowiedź to ${
				questions[questionNumber].answer
			}`;
		}
	}

	render() {
		const questionNumber = this.props.questions.replace(/\D/g, "");
		const questionContent = questions[questionNumber - 1];

		return (
			<div className="container">
				<nav className="panel">
					<p className="panel-heading">{questionContent.question}</p>

					{questionContent.answers.map((answer, i) => {
						return (
							<a
								key={i}
								onClick={() => this.saveAnswer(i)}
								className="panel-block is-active"
							>
								<span className="panel-icon">
									<i
										className="far fa-circle"
										aria-hidden="true"
									/>
								</span>
								{answer}
							</a>
						);
					})}

					<a className="button" onClick={this.checkUserAnswer}>
						Sprawdź
					</a>
					<div class="hero is-success">
						{this.state.showResults
							? this.showUserAnswer(questionNumber)
							: null}
					</div>

					<div className="container">
						<ProgressBar perc={questionNumber} />
					</div>
				</nav>
			</div>
		);
	}
}

export default Question;
