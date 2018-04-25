import "bulma/css/bulma.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartTest from "./components/StartTest";
import Score from "./components/Score";
import Quiz from "./components/Quiz";

ReactDOM.render(
	<Router>
		<div className="hero is-info set-clear">
			<Route exact path="/" component={StartTest} />
			<Route path="/score" component={Score} />
			<Route path="/quiz/:questionNumber" component={Quiz} />
			{/* <Route component={NoMatch} /> */}
		</div>
	</Router>,
	document.querySelector("#root")
);
