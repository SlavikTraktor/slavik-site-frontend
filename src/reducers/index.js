import {combineReducers} from "redux"

import images from "./imagesReducer"
import admin from "./adminReducer"

const rootReducer = combineReducers({
    admin,
    images
})

export default rootReducer