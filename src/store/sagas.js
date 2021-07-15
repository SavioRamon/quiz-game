import { all, put, takeEvery } from "redux-saga/effects";


export default function* sagas(){
    yield all([
        takeEvery("API_DADOS_REQUEST", function*(action){
            yield put({
                type: "API_DADOS",
                payload: action.payload
            })
        })
    ])
}