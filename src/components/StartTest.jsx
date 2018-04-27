import React, { Component } from "react";
import "./StartTest.css";

class StartTest extends Component {
	startQuiz() {
		return process.env.PUBLIC_URL +"/quiz/1";
	}

	render() {
		return (
			<section className="hero is-info is-fullheight">
				<div className="hero-body">
					<div className="container">
						<div className="columns">
							<div className="column is-half set-align">
								<h1 className="title is-bold">HTML Test</h1>
								<h2 className="subtitle">
									Weź udział w supertrudnym teście z HTML-a!
								</h2>
							</div>
							<div className="column is-half set-align">
								<div className="button-container">
									<a
										className="button is-info is-inverted is-large"
										href={this.startQuiz()}
									>
										Start
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default StartTest;
