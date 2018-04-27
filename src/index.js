import "bulma/css/bulma.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartTest from "./components/StartTest";
import Score from "./components/Score";
import Quiz from "./components/Quiz";

ReactDOM.render(
	<Router>
		<div>
			<Route
				exact
				path={process.env.PUBLIC_URL + "/"}
				component={StartTest}
			/>
			<Route path={process.env.PUBLIC_URL + "/score"} component={Score} />
			<Route
				path={process.env.PUBLIC_URL + "/quiz/:questionNumber"}
				component={Quiz}
			/>
			{/* <Route component={NoMatch} /> */}
		</div>
	</Router>,
	document.querySelector("#root")
);
