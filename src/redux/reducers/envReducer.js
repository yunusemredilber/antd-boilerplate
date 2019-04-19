// Action Type Imports
import {SET_ENV,SET_IS_MOBILE,SET_DIMENSIONS,SET_COLLAPSED,SET_LANG} from "../actions/env-actions";
import supportedLanguages from "../../config/supportedLanguages";

const initialState = {
    width:1000,
    height:1000,
    isMobile:false,
    siderMenuCollapsed:true,
    lang:supportedLanguages.includes(navigator.language.split(/[-_]/)[0])?navigator.language.split(/[-_]/)[0]:"en"  // language without region code
};
// Settings Reducer
export default function envReducer(state=initialState, action) {
    switch (action.type) {
        case SET_ENV:
            return {
                ...state,
                ...action.payload
            };
        case SET_DIMENSIONS:
            return {
                ...state,
                width:action.payload.width,
                height:action.payload.height,
            };
        case SET_IS_MOBILE:
            return {
                ...state,
                isMobile:action.payload
            };
        case SET_COLLAPSED:
            return {
                ...state,
                siderMenuCollapsed:action.payload
            };
        case SET_LANG:
            return {
                ...state,
                lang:action.payload
            };

        default:
            return state;
    }
};
