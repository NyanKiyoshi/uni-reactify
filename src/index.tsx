import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from "./base/Router";
import './scss/index.scss';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
