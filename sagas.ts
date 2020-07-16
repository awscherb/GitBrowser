
import { takeLatest, delay, put, call } from 'redux-saga/effects'
import { Actions } from './reducer'
import api from './api'

export function* handleQuery(action: Actions) {
    yield delay(500)
    console.log(action.payload)

    try {
    
        const resp = yield call(api().search, action.payload)

        const items = resp.data.items
        // console.log(items)

        yield put({ type: Actions.LoadComplete, payload: items })

    } catch (e) {
        console.log(e)
    }



}

export const searchSaga = function* () {
    yield takeLatest(Actions.SearchQuery, handleQuery)
}