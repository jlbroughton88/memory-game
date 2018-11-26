import React from "react";
import "./header.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <nav className="card">
            <div className="row">
                <div className="col s3 m3 l3">Clicky Game!</div>
                <div className="col s6 m6 l6">Incorrect or Correct!</div>
                <div className="col s3 m3 l3">Point Counter</div>
            </div>
            </nav>
        )
    }
}

