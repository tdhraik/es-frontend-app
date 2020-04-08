import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";
import { customReducerEnhancer } from "./customReducerEnhancer";
import { multiActions } from "./multiActionMiddleware";
import { asyncEnhancer } from "./asyncEnhancer";
import { createRestMiddleware } from "../rest/RestMiddleware";

const enhancedReducer = customReducerEnhancer(
    combineReducers(
        {
            modelData: modelReducer,
            stateData: stateReducer
        })
);

const restMiddleware = createRestMiddleware(
    "http://localhost:8080/school",
    "http://localhost:8080/school");

export default createStore(enhancedReducer,
    compose(applyMiddleware(multiActions),
        applyMiddleware(restMiddleware),
        asyncEnhancer(2000)));

export { saveSchool, saveClass, deleteSchool, deleteClass } from "./modelActionCreators";