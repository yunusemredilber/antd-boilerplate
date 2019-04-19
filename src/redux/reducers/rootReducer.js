import {combineReducers} from "redux";

import homeReducer from "./homeReducer";
import envReducer from "./envReducer"

export default combineReducers({
    home:homeReducer,
    env:envReducer,
});