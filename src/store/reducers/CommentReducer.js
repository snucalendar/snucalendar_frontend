import * as actionTypes from '../actions/actionTypes';

const initialState = {
    comment: {},
};

const CommentReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_COMMENT:
            return { ...state, comment: action.target };
        case actionTypes.EDIT_COMMENT:
            return { ...state};
        case actionTypes.DELETE_COMMENT:
            return { ...state};
        default:
            break;
    }
    return { ...state };
};

export default CommentReducer;