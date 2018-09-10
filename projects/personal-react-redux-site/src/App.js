import React from 'react';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Resources from './components/Resources';
import Navbar from './components/Navbar';
import { Switch, Route, withRouter } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                    <Route exact path="/" component={ Home } />
                    {/* I'm not too sure if the code below is correctly written. */}
                    <Route path="/stocks" component={ Stocks } />
                    <Route path="/resources" component={ Resources } />
            </Switch>
        </div>
    );
};

export default withRouter(App);