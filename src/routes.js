import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';



import login from './components/pages/login';
import main from './components/pages/main';
import about from './components/pages/about';
import signin from './components/pages/signin';

const Routes = () => (
    <Switch>
        <Route exact path="/" render={() => (<Redirect to="/login" />)} />

            <Route path="/login" component={login} />
            <Route path="/main"  component={main} />
            <Route path="/about" component={about} />
            <Route path="/signin" component={signin} />
    </Switch>
);

export default Routes