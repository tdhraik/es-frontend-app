import React, { Component } from 'react';
import './App.css';
import { Selector } from './route/Selector';
import { Provider } from "react-redux";
import dataStore from "./store";
import { SCHOOLS, CLASSES } from "./store/dataTypes";


function App() {
    return (
        <Provider store = {dataStore}>
            <Selector>
                <data name="Schools" datatype={SCHOOLS}/>
                <data name="Classes" datatype={CLASSES}/>
            </Selector>
        </Provider>
    );
}

export default App;

