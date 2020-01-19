// after backend implement
import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addPost_ = () => ({
    type: actionTypes.ADD_POST
})

export const addPost = (post) => (dispatch) => axios.post(`/api/posting/`, post)
    .then((res) => {
        dispatch(addPost_());
        return res;
    });

export const getPost_ = (post) => ({
    type: actionTypes.GET_POST,
    target: post,
})

export const getPost = (id) => (dispatch) => axios.get(`/api/posting/${id}/`)
    .then((res) => {
        dispatch(getPost_(res.data));
    });

export const getPostDue_ = (post_list_dueDate) => ({
    type:actionTypes.GET_POST_LIST_DUE,
    target: post_list_dueDate,
})

export const getPostDue = (start, interval) => (dispatch) => axios.get(`/api/posting/duedate/${start}/${interval}/`)
    .then((res) => {
        dispatch(getPostDue_(res.data));
    });

export const getPostPost_ = (post_list_postDate) => ({
    type:actionTypes.GET_POST_LIST_POST,
    target: post_list_postDate,
})
    
export const getPostPost = (start, interval) => (dispatch) => axios.get(`/api/posting/postdate/${start}/${interval}/`)
    .then((res) => {
        dispatch(getPostPost_(res.data));
    });