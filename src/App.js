import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Home, Contact, Works, Resume, Journeys } from './components/page/';
import NavBar from './components/nav/';
import './fontAwesomeInit';
class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div style={{ overflow: 'hidden' }}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/journeys" component={Journeys} />
                        <Route exact path="/works" component={Works} />
                        <Route exact path="/resume" component={Resume} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default App;
