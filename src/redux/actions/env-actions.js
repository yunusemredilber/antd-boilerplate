// supportedLanguages array
import supportedLanguages from "../../config/supportedLanguages";

// Action Types
export const SET_ENV = "SET_ENV";
export const SET_DIMENSIONS = "SET_DIMENSIONS";
export const SET_IS_MOBILE = "SET_IS_MOBILE";
export const SET_COLLAPSED = "SET_COLLAPSED";
export const SET_LANG = "SET_LANG";


/* Env Actions */

// Env Setter
export function setEnv(env) {
    return dispatch => {
        dispatch({
            type: SET_ENV,
            payload: env
        })
    };
}
// Dimension Setter
export function setDimensions(width,height) {
    return dispatch => {
        dispatch({
            type: SET_DIMENSIONS,
            payload: {width,height}
        })
    };
}
// isMobile Setter
export function setIsMobile(isMobile) {
    return dispatch => {
        dispatch({
            type: SET_IS_MOBILE,
            payload: isMobile
        })
    };
}
// SideBar Collapse State Setter
export function setCollapsed(collapsed) {
    return dispatch => {
        dispatch({
            type: SET_COLLAPSED,
            payload: collapsed
        })
    };
}
// SideBar Collapse State Setter
export function setLang(lang) {
    return dispatch => {
        if (supportedLanguages.includes(lang))
            dispatch({
                type: SET_LANG,
                payload: lang
            });
        else
            dispatch({
                type: SET_LANG,
                payload: "en"
            });
    };
}