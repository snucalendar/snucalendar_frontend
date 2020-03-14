import axios from 'axios';
import * as actionTypes from './actionTypes';

const getComment_ = (comment) => ({
    type: actionTypes.GET_COMMENT,
    target: comment,
});

export const getComment = (id, cid) => (dispatch) => axios.get(`/api/events/${id}/comments/${cid}/`)
    .then((res) => {
        dispatch(getComment_(res.data));
        return res;
    });

const getCommentList_ = (comment_list) => ({
    type: actionTypes.GET_COMMENT_LIST,
    target: comment_list,
});

export const getCommentList = (id) => (dispatch) => axios.get(`/api/events/${id}/comments/`)
    .then((res) => {
        dispatch(getCommentList_(res.data));
    });

const addComment_ = () => ({
    type : actionTypes.ADD_COMMENT
})

export const addComment = (id, comment) => (dispatch) => axios.post(`/api/events/${id}/comments`, comment)
    .then((res) => {
        dispatch(addComment_(res.data));
    })

const editComment_ = () => ({
    type : actionTypes.EDIT_COMMENT
})

export const editComment = (id, cid, comment) => (dispatch) => axios.put(`/api/events/${id}/comments/${cid}/`, comment)
    .then((res) => {
        dispatch(editComment_(res.data))
    })

const deleteComment_ = () => ({
    type : actionTypes.DELETE_COMMENT
})

export const deleteComment = (id, cid) => (dispatch) => axios.delete(`/api/events/${id}/comments/${cid}/`)
    .then((res) => {
        dispatch(deleteComment_(res.data))
    })
