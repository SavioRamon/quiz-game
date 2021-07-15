import { createStore, combineReducers, applyMiddleware } from "redux";

import reducerApi from "./quizApiDados/quizApiDados.reducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";


const rootReducer = combineReducers({
    reducerApi
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;