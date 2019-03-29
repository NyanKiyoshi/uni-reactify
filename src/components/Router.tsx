import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IndexPage from "../Pages/IndexPage";
import Header from "./Header";
import PersonList from "../Person/PersonList";
import PersonDummy from "../Person/PersonDummy";
import PageNotFound from '../Pages/PageNotFound';
import WrappedContent from './WrappedContent';

export default class AppRouter extends Component {
    public render(): any {
        return (
            <Router>
                <div id="content">
                    <Header/>

                    <div className="container mt-2 mb-2">
                        <Switch>
                            <Route path="/" exact component={WrappedContent(IndexPage)} />
                            <Route path="/persons/" component={WrappedContent(PersonList)} exact />
                            <Route path="/dummy/" component={WrappedContent(PersonDummy)} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
};
