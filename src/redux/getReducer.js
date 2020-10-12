import {GET_APOD, GET_MARS} from './types'

const initialState = {
    apodPost: [],
    marsPost: [],
    asteroidPost: [],
}

// Pure Functions
export const getReduser = (state = initialState, action) => {
    switch (action.type) {
    case GET_APOD: return { ...state, apodPost: action.payload }
            break;
    case GET_MARS: return { ...state, marsPost: action.payload }
            break;
    default: return state
    }
}