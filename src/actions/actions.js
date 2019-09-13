import { SET_TEXT_1, SET_TEXT_2 } from "./constants";

export const setText1Action = (newText) => dispatch => {
    let processedText = newText + newText + newText;
    
    dispatch({
        type: SET_TEXT_1,
        payload: processedText
    })
}

export const setText2Action = (newText) => dispatch => {
    dispatch({
        type: SET_TEXT_2,
        payload: newText
    })
}