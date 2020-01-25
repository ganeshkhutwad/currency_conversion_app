/**
 * App Component.
 * @author Ganesh Khutwad.
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import Header from './Shared/Header/Header';
import PageNotFound from './Shared/PageNotFound/PageNotFound';

function App() {
    return (
        <div className="container-fluid">
            <Header title="Currency Conversion App" />
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
