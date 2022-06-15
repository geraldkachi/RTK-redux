import { combineReducers } from "redux"
import petCounter from "./petCounter"
import petFavourite from "./petFavourite"

const reducers = combineReducers({
    petCounter,
    petFavourite
})


export default reducers