import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

export const Protector = ({Component, ...rest}) => {
    let authToken = localStorage.getItem('token');
    return ( <Route {
            ...rest
        }
       render = {
            ({location}) =>
            authToken ? <Component /> : ( <Redirect to ={{
                pathname: '/',
                state : {from : location}
                }} />)
        }
        />
    )
}

// export function Protector({ component : Component, ...rest }) {
//     let authToken = localStorage.getItem('token')
//   return (
//     <Route
//       {...rest}
//       render={ props =>
//         authToken ? (
//           <Component {...props}/>
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }
