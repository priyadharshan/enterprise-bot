import axios from 'axios';
import {
    GET_INTENT_DETAILS_REQUESTED,
    GET_INTENT_DETAILS_SUCCEEDED,
    GET_INTENT_DETAILS_ERROR,
} from './action-types'

export const getIntentDetails = (intentId) => (dispatch, getState) => {
    dispatch({ type: GET_INTENT_DETAILS_REQUESTED })
    const authTokenDetails = getState().tokenDetails.model

    console.log(intentId)

    return axios({
        method: 'get',
        url: `https://test-lbadmin-m.enterprisebot.co/api/v2/intents/find/wdetail?intentId=${intentId}&skipLimit=%7B%22limit%22%3A10%2C%22skip%22%3A0%2C%22order%22%3A%22id%20DESC%22%7D`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'authorization': authTokenDetails
            },
        })
        .then(response => {
            return dispatch({
                payload: response.data,
                type: GET_INTENT_DETAILS_SUCCEEDED,
            })
        })
        .catch((error) => {
            return dispatch({
                payload: error,
                type: GET_INTENT_DETAILS_ERROR,
            })
        })
}
