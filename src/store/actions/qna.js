import axios from 'axios';
import * as actionTypes from './actionTypes';

const getQnA_ = (qna) => ({
    type : actionTypes.GET_QNA,
    target : qna
})

export const getQnA = (id, qid) => (dispatch) => axios.get(`/api/events/${id}/qna/${qid}/`)
    .then((res) => {
        dispatch(getQnA_(res.data));
    })

const getQnAList_ = (qna_list) => ({
    type : actionTypes.GET_QNA_LIST,
    target : qna_list
})

export const getQnAList = (id) => (dispatch) => axios.get(`/api/events/${id}/qna/`)
    .then((res) => {
        dispatch(getQnAList_(res.data))
    })

const addQnA_ = () => ({
    type : actionTypes.ADD_QNA,
})

export const addQnA = (id, qna) => (dispatch) => axios.post(`/api/events/${id}/qna/`, qna)
    .then((res) => {
        dispatch(addQnA_(res.data))
    })

const editQnAQuestion_ = () => ({
    type : actionTypes.EDIT_QNA_QUESTION
})

export const editQnAQuestion = (id, qid, qna) => (dispatch) => axios.put(`/api/events/${id}/comments/${qid}/`, qna)
    .then((res) => {
        dispatch(editQnAQuestion_(res.data))
    })

const deleteQnA_ = () => ({
    type : actionTypes.DELETE_QNA
})

export const deleteQnA = (id, qid) => (dispatch) => axios.delete(`/api/events/${id}/comments/${qid}/`)
    .then((res) => {
        dispatch(deleteQnA_(res.data))
    })

const editQnAAnswer_ = () => ({
    type : actionTypes.EDIT_QNA_ANSWER
})

export const editQnAAnswer = (id, qid, qna_answer) => (dispatch) => axios.put(`/api/events/${id}/comments/${qid}/answer/`, qna_answer)
    .then((res) => {
        dispatch(editQnAAnswer_(res.data))
    })

const deleteQnAAnswer_ = () => ({
    type : actionTypes.DELETE_QNA_ANSWER
})

export const deleteQnAAnswer = (id, qid) => (dispatch) => axios.delete(`/api/events/${id}/comments/${qid}/answer/`)
    .then((res) => {
        dispatch(deleteQnAAnswer_(res.data))
    })
