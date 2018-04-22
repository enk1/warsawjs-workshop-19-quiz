import "bulma/css/bulma.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Score from "./components/Score";
import Quiz from "./components/Quiz";

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Quiz} />
            <Route path="/score" component={Score} />
            <Route path="/about" component={About} />
        </div>
    </Router>,
    document.getElementById("root")
);
