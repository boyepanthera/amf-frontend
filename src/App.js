import React from 'react';
import { Parse } from './components/Parse';
import { NotFound } from './components/NotFound';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Protector } from './components/Protector';
import { Home } from './components/Home';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';

const App = () => {
    return (
        <Switch>
            <Protector path='/' exact component={Home} />
            <Protector path='/parse' exact component={Parse} />
            <Protector path='/dashboard' exact component={Dashboard} />
            <Route path='/auth' exact component={Login} />
            <Route path='/newauth' exact component={Signup} />
            <Route path='*' exact component={NotFound} />
        </Switch>
    )
}

export default App;