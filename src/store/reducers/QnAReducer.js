import * as actionTypes from '../actions/actionTypes';

const initialState = {
    qna: {},
};

const QnAReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_QNA:
            return { ...state, qna: action.target };
        case actionTypes.EDIT_QNA_QUESTION:
            return { ...state};
        case actionTypes.DELETE_QNA:
            return { ...state};
        case actionTypes.DELETE_QNA_ANSWER:
            return { ...state};
        case actionTypes.EDIT_QNA_ANSWER:
            return { ...state};
        default:
            break;
    }
    return { ...state };
};

export default QnAReducer;