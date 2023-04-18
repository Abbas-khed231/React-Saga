import { put, takeLatest } from "redux-saga/effects";
import { INCREMENT_ASYNC, DECREMENT_ASYNC, increment, decrement } from './counterAction';

function* incrementAsyncSaga() {
    console.log("increment saga called");
    yield put(increment())
}

function* decrementAsyncSaga() {
    console.log("decrement saga called");
    yield put(decrement())
}

export function* counterSaga(){
    yield takeLatest(INCREMENT_ASYNC, incrementAsyncSaga);
    yield takeLatest(DECREMENT_ASYNC, decrementAsyncSaga);
}