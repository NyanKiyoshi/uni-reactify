import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import ItemListApp from './ItemListApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ItemListApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
