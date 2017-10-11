export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

export const getPhotosRequest = (queryParams) => {
    return {
        type: GET_PHOTOS_REQUEST,
        payload: queryParams
    }
}

export const getPhotosSuccess = (photos) => {
    return {
        type: GET_PHOTOS_SUCCESS,
        payload: photos
    }
}

export const getPhotosFail = (error) => {
    return {
        type: GET_PHOTOS_FAIL,
        payload: error
    }
}
