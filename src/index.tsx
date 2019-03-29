import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from "./components/Router";
import './scss/index.scss';
import './configs';
import $ from 'jquery';  // noqa
import 'popper.js';
import 'bootstrap';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
