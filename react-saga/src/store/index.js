import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import counterReducer from "./counter/counterReducer";
import { counterSaga } from "./counter/counterSaga";

const combinedReducers = combineReducers({counterReducer});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

function* rootsaga() {
    yield all([counterSaga()]);
}

sagaMiddleware.run(rootsaga);

export default store;
