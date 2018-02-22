import * as t from './actionTypes';
import * as api from './api';
import axios from 'axios';
import { userBaseApiURL } from './constants';

export function fetchUserData() {
    return (dispatch) => {
        dispatch({ 
            type: FETCHING_USER_DATA 
        })

        return axios.get(userBaseApiURL)
            .then(response => {
                dispatch({type: FETCHING_USER_DATA_SUCCESS, payload: response.data
                })
            })
            .catch(err => {
                dispatch({type: FETCHING_USER_DATA_FAIL, payload: err.data})
            })
    }
}

/*
export default function FetchEventData() {
    return dispatch => {
        dispatch({ 
            type: FETCHING_EVENT_DATA 
        })

        // TEMPORARY CODE 
        return dispatch({
            type: FETCHING_EVENT_DATA_SUCCESS,
            payload: [
                {   
                    id: 1,
                    name: 'Techncia',
                    date: 'Nov. 4th, 2017',
                    time: '10:00 AM',
                    location: 'Armory Building',
                    pictureUrl: 'http://gotechnica.org/img/logos/logo-black.png',
                    numGuest: 907,
                },
                {
                    id: 2,
                    name: 'Bitcamp',
                    date: 'Apr. 7th, 2018',
                    time: '10:00 AM',
                    location: 'Xfinity Center',
                    pictureUrl: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/497/926/datas/original.png',
                    numGuest: 489
                }
            ]
        })
        }
    }
}
*/
