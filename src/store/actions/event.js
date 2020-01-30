import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getEvent_ = (event) => ({
    type: actionTypes.GET_EVENT,
    target: event,
});

export const getEvent = (id) => (dispatch) => axios.get(`http://13.59.128.56:8000/api/events/${id}/`)
    .then((res) => {
        dispatch(getEvent_(res.data));
        return res;
    });

export const getEventList_ = (event_list) => ({
    type: actionTypes.GET_EVENT_LIST,
    target: event_list,
});

export const getEventList = () => (dispatch) => axios.get('/api/events/')
    .then((res) => {
        dispatch(getEventList_(res.data));
    });

export const getEventSearch_ = (survey_search_list) => ({
        type: actionTypes.GET_EVENT_SEARCH_LIST, target: survey_search_list,
      });
      
export const getEventSearch = (keyword) => (dispatch) => axios.get(`/api/search/${keyword}/`)
        .then((res) => {
          dispatch(getEventSearch_(res.data));
        });
      

export const getMyEventList_ = (myEvent_list) => ({
    type:actionTypes.GET_MYEVENT_LIST,
    target: myEvent_list,
})

export const getMyEventList = () => (dispatch) => axios.get('/api/myevents/')
    .then((res) => {
        dispatch(getMyEventList_(res.data));
    });