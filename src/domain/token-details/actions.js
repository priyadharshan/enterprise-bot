import axios from 'axios';
import {
    GET_TOKEN_DETAILS_REQUESTED,
    GET_TOKEN_DETAILS_SUCCEEDED,
    GET_TOKEN_DETAILS_ERROR,
} from './action-types'

export const getTokenDetails = (username, password) => (dispatch) => {
    dispatch({ type: GET_TOKEN_DETAILS_REQUESTED })

    return axios({
            method: 'post',
            url: 'https://test-lbadmin-m.enterprisebot.co/api/v2/adminusers/login',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: {
                password: password,
                email: username
            }
        })
        .then(response => {
            console.log(response)
            return dispatch({
                payload: response.data,
                type: GET_TOKEN_DETAILS_SUCCEEDED,
            })
        })
        .catch((error) => {
            return dispatch({
                payload: error,
                type: GET_TOKEN_DETAILS_ERROR,
            })
        })
}
