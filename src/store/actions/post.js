// after backend implement
import axios from 'axios';
import * as actionTypes from './actionTypes';
/*
export const addPost_ = () => ({
    type: actionTypes.ADD_POST
})

export const addPost = (post) => (dispatch) => axios.post('api/events/', post)
    .then((res) => {
        dispatch(addPost_());
        return res;
    });*/

export const getPost_ = (post) => ({
    type: actionTypes.GET_POST,
    target: post,
})

export const getPost = (id) => (dispatch) => axios.get('http://13.59.128.56:8000/api/events/${id}/')
    .then((res) => {
        dispatch(getPost_(res.data));
    });

export const getPostList_ = (post_list) => ({
    type:actionTypes.GET_POST_LIST,
    target: post_list,
})

export const getPostList = () => (dispatch) => axios.get('http://13.59.128.56:8000/api/events/')
    .then((res) => {
        dispatch(getPostList_(res.data));
    });