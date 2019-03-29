import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RootApp from "../RootApp";
import Header from "./Header";
import PersonList from "../Person/PersonList";
import PersonDummy from "../Person/PersonDummy";
import PageNotFound from '../Pages/PageNotFound';

export default function AppRouter() {
    return (
        <Router>
            <div id="content">
                <Header />

                <div className="container mt-2 mb-2">
                    <Switch>
                        <Route path="/" exact component={RootApp} />
                        <Route path="/persons/" component={PersonList} />
                        <Route path="/dummy/" component={PersonDummy} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
