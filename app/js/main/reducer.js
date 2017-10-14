import { createReducer } from './utils'
import {
    GET_PHOTOS_REQUEST, 
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,
    SAVE_TOKEN
} from './actions'

const DEFAULT_STATE = {
    queryParams: {
        lat: 50.440159,
        lng: 30.520037,
        distance: 1000,
        token: null
    },
    photos: null,
    loading: false
}

const setPhotos = (state, action) => {
    console.log(action)
    return {
        ...state,
        photos: action.payload.items,
        loading: false
    }
}

const setLoading = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const setError = (state, action) => {
    return {
        ...state,
        error: action.payload,
        loading: false
    }
}

const setToken = (state, action) => {
    return {
        ...state,
        token: action.payload
    }
}

export default createReducer(DEFAULT_STATE, {
    [GET_PHOTOS_REQUEST]: setLoading,
    [GET_PHOTOS_SUCCESS]: setPhotos,
    [GET_PHOTOS_FAIL]: setError,
    [SAVE_TOKEN]: setToken
})