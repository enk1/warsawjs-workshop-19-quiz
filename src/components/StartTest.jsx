import React, { Component } from "react";
import "./StartTest.css";

class StartTest extends Component {
	startQuiz() {
		return "/quiz/1";
	}

	render() {
		return (
			<section class="hero is-info is-fullheight">
				<div class="hero-body">
					<div class="container">
						<div class="columns">
							<div class="column is-half set-align">
								<h1 className="title is-bold">HTML Test</h1>
								<h2 className="subtitle">
									Weź udział w supertrudnym teście z HTML-a!
								</h2>
							</div>
							<div class="column is-half set-align">
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
