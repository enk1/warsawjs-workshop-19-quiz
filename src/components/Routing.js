import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartTest from "./StartTest";
import PageNotFound from "./PageNotFound";
import Quiz from "./Quiz";

export default () => (
	<Router basename={process.env.PUBLIC_URL}>
		<Switch>
			<Route exact path="/" component={StartTest} />
			<Route exact path="/" component={Quiz} />
			{/* <Route path="/score" component={Score} /> */}
			<Route path="/quiz/:questionNumber" component={Quiz} />
			<Route component={PageNotFound} />
		</Switch>
	</Router>
);
