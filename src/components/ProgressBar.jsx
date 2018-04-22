import React, { Component } from "react";
import './ProgressBar.css';

class ProgressBar extends Component {
    render() {
        const perc = this.props.perc;

        return (
            <progress className="progress" value={perc} max="4">{perc/4*100}%</progress>
        );
    }
}

export default ProgressBar;