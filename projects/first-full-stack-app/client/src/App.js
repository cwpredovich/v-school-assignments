import React from 'react';
import Home from './components/Home';
import Buysell from './components/Buysell';
import Resources from './components/Resources';
import Navbar from './components/Navbar';
import { Switch, Route, withRouter } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/buysell" component={ Buysell } />
                    <Route path="/resources" component={ Resources } />
            </Switch>
        </div>
    );
};

export default withRouter(App);