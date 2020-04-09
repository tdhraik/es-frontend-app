import React, { Component } from 'react';
import './App.css';
import { Selector } from './route/Selector';
import { Provider } from "react-redux";
import dataStore from "./store";
import { SCHOOLS, CLASSES } from "./store/dataTypes";
import Header  from './style/Header';
import Footer  from './style/Footer';


function App() {
    return (
        <React.Fragment>
            <Header position="top"></Header>
                <div className="data-grid">
                    <Provider store = {dataStore}>
                        <Selector>
                            <data name="Schools" datatype={SCHOOLS}/>
                            <data name="Classes" datatype={CLASSES}/>
                        </Selector>
                    </Provider>
                </div>
            <Footer position="bottom"></Footer>
        </React.Fragment>
    );
}

export default App;

