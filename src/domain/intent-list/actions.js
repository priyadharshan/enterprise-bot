import axios from 'axios';
import {
    GET_INTENT_LIST_REQUESTED,
    GET_INTENT_LIST_SUCCEEDED,
    GET_INTENT_LIST_ERROR,
} from './action-types'

export const getIntentList = () => (dispatch, getState) => {
    dispatch({ type: GET_INTENT_LIST_REQUESTED })
    const authTokenDetails = getState().tokenDetails.model

    return axios({
        method: 'get',
        url: 'https://test-lbadmin-m.enterprisebot.co/api/v2/intents?filter=%7B%22limit%22%3A20%2C%22skip%22%3A0%2C%22where%22%3A%7B%22agentId%22%3A%225bcee5bafe751a289f6154cf%22%7D%7D',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'authorization': authTokenDetails
            },
        })
        .then(response => {
            return dispatch({
                payload: response,
                type: GET_INTENT_LIST_SUCCEEDED,
            })
        })
        .catch((error) => {
            return dispatch({
                payload: error,
                type: GET_INTENT_LIST_ERROR,
            })
        })
}
