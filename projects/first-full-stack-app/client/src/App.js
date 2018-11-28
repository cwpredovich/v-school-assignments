import React from 'react';
import Home from './components/Home';
import Buysell from './components/Buysell';
import Tracker from './components/Tracker';
import Navbar from './components/Navbar';
import { Switch, Route, withRouter } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                    <Route exact path="/" component={ Home } />
                    {/* I'm not too sure if the code below is correctly written. */}
                    <Route path="/buysell" component={ Buysell } />
                    <Route path="/tracker" component={ Tracker } />
            </Switch>
        </div>
    );
};

export default withRouter(App);