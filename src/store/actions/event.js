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

export const getEventList = () => (dispatch) => axios.get('http://13.59.128.56:8000/api/events/')
    .then((res) => {
        dispatch(getEventList_(res.data));
    });

export const getMyEventList_ = (myEvent_list) => ({
    type:actionTypes.GET_MYEVENT_LIST,
    target: myEvent_list,
})

export const getMyEventList = () => (dispatch) => axios.get('http://13.59.128.56:8000/api/myevents/')
    .then((res) => {
        dispatch(getMyEventList_(res.data));
    });

export const participateEvent_ = (id) => ({
    type: actionTypes.PARTICIPATE_EVENT,
    // target: event,
});

export const participateEvent = (id, type) => (dispatch) => axios.post(`/api/events/${id}/participate`, type)
    .then((res) => {
        dispatch(participateEvent_(res.data));
    });
