import * as React from "react";
import {Link} from "react-router-dom";

export default function () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Index</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/clock/">Clock</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todo-app/">Todo App</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/groceries/">Groceries</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
