import * as actionTypes from '../actions/actionTypes';

const initialState = {
    comment_list: []
};

const CommentListReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_COMMENT_LIST:
            return { ...state, comment_list : action.target };
        case actionTypes.ADD_COMMENT:
            return { ...state};
        default:
            break;
    }
    return { ...state };
};

export default CommentListReducer;