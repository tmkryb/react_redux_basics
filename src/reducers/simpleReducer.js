import { SET_TEXT_1, SET_TEXT_2 } from "../actions/constants";

export default (state = {}, action) => {
    switch (action.type) {
        case SET_TEXT_1: 
            return {        
                ...state,
                text1: action.payload
            }
        case SET_TEXT_2: 
            return {
                ...state,
                text2: action.payload
            }
        default:
            return state;
    }
}