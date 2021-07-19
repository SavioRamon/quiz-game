import { all, put, call, takeEvery } from "redux-saga/effects";

import quizesRequest from "./quizesRequest";

function* requisicao(){

    const dadosApi = yield call(quizesRequest);

    yield put({
        type: "API_DADOS",
        payload: dadosApi
    })
}

export default function* sagas(){
    yield all([
        takeEvery("API_DADOS_REQUEST", requisicao)
    ])
}