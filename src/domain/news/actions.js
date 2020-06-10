import axios from 'axios';
import {
    GET_NEWS_REQUESTED,
    GET_NEWS_SUCCEEDED,
    GET_NEWS_ERROR,
    UPVOTE,
    HIDE_NEWS,
    UPDATE_NEWS,
} from './action-types'

const BASE_URL = 'https://hn.algolia.com/api/v1/search?tags=story&page=';

export const fetchNews = (pageId) => (dispatch) => {

    dispatch({ type: GET_NEWS_REQUESTED })
    
    return axios.get(`${BASE_URL}${pageId}`)
        .then(response => {
            return dispatch({
                payload: response.data,
                type: GET_NEWS_SUCCEEDED,
            })
        })
        .catch((error) => {
            return dispatch({
                payload: error,
                type: GET_NEWS_ERROR,
            })
        })
}

export const fetchIntents = () => (dispatch) => {
  
  return axios({
    method: 'get',
    url: 'https://test-lbadmin-m.enterprisebot.co/api/v2/intents?filter=%7B%22limit%22%3A20%2C%22skip%22%3A0%2C%22where%22%3A%7B%22agentId%22%3A%225bcee5bafe751a289f6154cf%22%7D%7D',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'authorization': "pVKZbbmsoTJF4eEqBpW9YcZG010lfjvPoNE89RDpKwCiy5Y2YwkPYMz0HPQicJTQ"
    },
  }).then(response => {
    console.log(response)
})
}

export const fetchDetails = () => (dispatch) => {
  
  return axios({
    method: 'get',
    url: 'https://test-lbadmin-m.enterprisebot.co/api/v2/intents/find/wdetail?intentId=5bcee5bafe751a289f6154d5&skipLimit=%7B%22limit%22%3A10%2C%22skip%22%3A0%2C%22order%22%3A%22id%20DESC%22%7D',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'authorization': "pVKZbbmsoTJF4eEqBpW9YcZG010lfjvPoNE89RDpKwCiy5Y2YwkPYMz0HPQicJTQ"
    },
  }).then(response => {
    console.log(response)
})
}

export const fetchChat = () => (dispatch) => {

  const test = {id: "pVKZbbmsoTJF4eEqBpW9YcZG010lfjvPoNE89RDpKwCiy5Y2YwkPYMz0HPQicJTQ", ttl: 43200, created: "2020-06-10T05:53:59.202Z", userId: "5dd4e54175853b6a712145f6"}
    
    return axios({
      method: 'post',
      url: 'https://test-lbadmin-m.enterprisebot.co/api/v2/adminusers/login',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: {
        password: 'Intervi3w',
        email: 'ashu+interview@enterprisebot.org'
      }
    })
        .then(response => {
            console.log(response)
        })
        .catch((error) => {
        })
}

export function hideNews(newsId) {
    return function(dispatch, getState) {
      dispatch({
        type: HIDE_NEWS,
        payload: newsId,
      })
      dispatch({
        payload: getState(),
        type: UPDATE_NEWS,
      })
    }
  }

export function upVote(newsId) {
    return function(dispatch, getState) {
      dispatch({
        type: UPVOTE,
        payload: newsId,
      })
      dispatch({
        payload: getState(),
        type: UPDATE_NEWS,
      })
    }
  }
