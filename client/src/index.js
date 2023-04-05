import React from 'react'
// import { StrictMode } from "react";
import ReactDOM  from 'react-dom';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import './index.css'
import {reducers} from './reducers'
import App from './App'

const store =createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//         <Provider store={store}>
//             <App/>
//         </Provider>
    
// );


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
  
);