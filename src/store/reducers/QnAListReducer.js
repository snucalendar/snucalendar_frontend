import * as actionTypes from '../actions/actionTypes';

const initialState = {
    qna_list: {
        completed : [],
        uncompleted : []
    },
};

const QnAListReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_QNA_LIST:
            return { ...state, qna_list : action.target };
        case actionTypes.ADD_QNA:
            return { ...state};
        default:
            break;
    }
    return { ...state };
};

export default QnAListReducer;