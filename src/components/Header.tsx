import * as React from "react";
import {Link} from "react-router-dom";

export default function () {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">Index</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#nav" aria-controls="nav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/persons/">Persons</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
