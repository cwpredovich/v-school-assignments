import React from 'react';
import Home from './components/Home';
import Buysell from './components/Buysell';
import BuySell2 from './components/BuySell2';
import Resources from './components/Resources';
import Navbar from './components/Navbar';
import { Switch, Route, withRouter } from 'react-router-dom';


const App = () => {
    return (
        <div>
            <div className="stickyBar">
                <Navbar />
            </div>
            <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/buysell" component={ BuySell2 } />
                    <Route path="/resources" component={ Resources } />
            </Switch>
        </div>
    );
};

export default withRouter(App);