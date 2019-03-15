import qa from '../apis/qa';

import {
    FETCH_QA_LIST,
    FETCH_QA_BY_QAID
} from './types';

export const fetchQAList = ()=> async (dispatch)=>{

    const resp = await qa.get("/api/qa");
    console.log("action creator fetchQAList ", resp);

    dispatch({
        type: FETCH_QA_LIST,
        payload: {
            list: resp.data.results,
            error: resp.status
        }
    });
}

export const fetchQAByQaId = (qaId) => async (dispatch) =>{
    const resp = await qa.get(`/api/qa/${qaId}`);
    console.log("action creator fetchQAByQaId ", resp);

    dispatch({
        type: FETCH_QA_BY_QAID,
        payload: {
            qa: resp.data,
            error: resp.status
        }
    });
}