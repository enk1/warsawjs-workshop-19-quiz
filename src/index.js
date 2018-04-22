import "bulma/css/bulma.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import About from "./components/About";
import Score from "./components/Score";
import Quiz from "./components/Quiz";

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={About} />
            <Route path="/score" component={Score} />
            <Route path="/quiz/:questionNumber" component={Quiz} />
            {/* <Route component={NoMatch} /> */}
        </div>
    </Router>,
    document.querySelector("#root")
);