import axios from 'axios'

import { call, put, takeLatest, all } from 'redux-saga/effects'
import { 
    GET_PHOTOS_REQUEST,
    getPhotosRequest, 
    getPhotosSuccess,
    getPhotosFail
} from './actions'


function* getPhotos(action) {
    // console.log(">>>",action)
    try {
        let lat = action.payload.lat,
            lng = action.payload.lng,
            distance = action.payload.distance,
            token = action.payload.token;
            
        const {data} = yield call(axios.get, 
            `https://api.instagram.com/v1/media/search?lat=${lat}&lng=${lng}&distance=${distance}&access_token=${token}`)
        yield put(getPhotosSuccess(data))
    } catch (err) {
        yield put(getPhotosFail(err))
    }
}

export default function* main() {
    yield takeLatest(GET_PHOTOS_REQUEST, getPhotos)
}