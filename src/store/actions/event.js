import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getEvent_ = (event) => ({
    type: actionTypes.GET_EVENT,
    target: event,
});

export const getEvent = (id) => (dispatch) => axios.get(`/api/events/${id}/`)
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


export const keepKeyword_ = (keyword) => ({
    type: actionTypes.KEEP_KEYWORD, target: keyword,
});

export const keepKeyword = (keyword) => (dispatch) => dispatch(keepKeyword_(keyword));

export const getEventSearch_ = (survey_search_list) => ({
        type: actionTypes.GET_EVENT_SEARCH_LIST, target: survey_search_list,
      });
      
export const getEventSearch = (keyword) => (dispatch) => axios.get(`/api/search/${keyword}/`)
        .then((res) => {
          dispatch(getEventSearch_(res.data));
          return res;
        });
      

export const getMyEventList_ = (myEvent_list) => ({
    type:actionTypes.GET_MYEVENT_LIST,
    target: myEvent_list,
})

export const getMyEventList = () => (dispatch) => axios.get('/api/myevents/')
    .then((res) => {
        dispatch(getMyEventList_(res.data));
    });

export const getPostingEventList_ = (posting_event_list) => ({
    type : actionTypes.GET_POSTING_EVENT_LIST,
    target: posting_event_list
}) 
export const getPostingEventList = () => (dispatch) => axios.get('/api/posting/events/')
    .then((res) => {
        dispatch(getPostingEventList_(res.data))
    })


export const participateEvent_ = () => ({
    type: actionTypes.PARTICIPATE_EVENT,
});

export const participateEvent = (id) => (dispatch) => axios.post(`/api/events/${id}/participate`, {"type" : "participate"})
    .then((res) => {
        dispatch(participateEvent_(res.data));
    });
