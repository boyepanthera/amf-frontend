import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

export const Protector = ({
    Component,
    ...rest
}) => {
    let authToken = JSON.parse(localStorage.getItem('token'));
    return ( <Route {
            ...rest
        }
        component = {
            () =>
            authToken ? (Component) : ( <Redirect to = '/' />)
        }
        />
    )
}