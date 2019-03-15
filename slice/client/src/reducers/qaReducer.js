import {
    FETCH_QA_LIST, FETCH_QA_BY_QAID
} from '../actions/types';

const initialState={
    qaList: [],
    selectedQA: null,
    qaSearchTerm: '',
    error: null
}

export default (state=initialState, action)=>{
    switch(action.type) {
        case FETCH_QA_LIST: 
        console.log("qaReducer FETCH_QA_LIST", action.payload.list, "error", action.payload.error);
            return {
                ...state,
                qaList: action.payload.list,
                error: action.payload.error
            };
        case FETCH_QA_BY_QAID: 
        console.log("qaReducer FETCH_QA_BY_QAID", action.payload.qa, "error", action.payload.error);
            return {
                ...state,
                selectedQA: action.payload.qa,
                error: action.payload.error
            };
        default: 
            return state;
    }
}