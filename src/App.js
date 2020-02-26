import React from 'react';
import {Parse} from './components/Parse';
import {NotFound} from './components/NotFound';
import {Login} from './components/Login';
import {Protector} from './components/Protector';
import {Switch, Route} from 'react-router-dom';

const App = () => {
    return(
        <Switch>
            <Protector path='/parse' exact component={Parse}/>             
            <Route path='/' exact component={Login}/>
            <Route path='*' exact component={NotFound}/>
        </Switch>
    )
}

export default App;