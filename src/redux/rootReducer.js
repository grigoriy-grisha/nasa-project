import {combineReducers} from 'redux'
import {getReduser} from "./getReducer";
import {appReducer} from "./appReducer";


export const rootReducer = combineReducers({
    get: getReduser,
    app: appReducer,
})
