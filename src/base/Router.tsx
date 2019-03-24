import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import TP2ItemListApp from "../tp2/TP2ItemListApp";
import TP3ItemListApp from "../tp3/TP3ItemListApp";
import TP1ClockApp from "../tp1/TP1ClockApp";
import RootApp from "../RootApp";
import Header from "./Header";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Header />

                <Route path="/" exact component={RootApp} />
                <Route path="/clock/" component={TP1ClockApp} />
                <Route path="/todo-app/" component={TP2ItemListApp} />
                <Route path="/groceries/" component={TP3ItemListApp} />
            </div>
        </Router>
    );
};
