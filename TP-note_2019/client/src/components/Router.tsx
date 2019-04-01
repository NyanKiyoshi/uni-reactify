import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IndexPage from '../Pages/IndexPage';
import Header from "./Header";
import MenuList from '../Menu/MenuList';
import PageNotFound from '../Pages/PageNotFound';
import {ToastContainer} from 'react-toastify';
import AssietteList from "../Assiette/AssietteList";

export default class AppRouter extends Component {
    public render(): any {
        return (
            <Router>
                <div id="content">
                    <Header/>

                    <div className="container mt-4 mb-4">
                        <Switch>
                            <Route path="/" exact component={IndexPage} />
                            <Route path="/menus/" component={MenuList} exact />
                            <Route path="/assiettes/" component={AssietteList} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                </div>

                <ToastContainer />
            </Router>
        );
    }
};
