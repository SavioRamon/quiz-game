import { createStore, combineReducers, applyMiddleware } from "redux";

import reducerApi from "./quizApiDados/quizApiDados.reducer";
import quizInformacoes from "./quizAreaPrincipal/quizAreaPrincipal.reducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";


const rootReducer = combineReducers({
    reducerApi,
    quizInformacoes
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;