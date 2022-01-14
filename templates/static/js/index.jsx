import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Query from './components/Query';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Query} />
                    <Route exact path='/query' component={Query} />
                </Switch>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("content"));

