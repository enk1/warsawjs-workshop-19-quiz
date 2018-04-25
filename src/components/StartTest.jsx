import React, { Component } from "react";
import "./StartTest.css";

class StartTest extends Component {
	render() {
		return (
			<div className="columns">
				<div className="column is-12">
					<div className="container">
						<section className="hero is-info">
							<div className="title is-bold">HTML Test</div>
							<div className="subtitle">
								Weź udział w supertrudnym teście z HTML-a!
							</div>
							<div className="button-container">
								<a class="button is-info is-inverted">Test</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default StartTest;
