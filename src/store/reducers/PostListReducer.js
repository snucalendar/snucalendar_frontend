import * as actionTypes from '../actions/actionTypes';

const initialState = {
    post_list_due: [
        {},
    ],
    post_list_post: [
        {},
    ],
};

const PostListReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_POST_LIST_DUE:
            return { ...state, post_list_due: action.target };
        case actionTypes.GET_POST_LIST_POST:
            return { ...state, post_list_post: action.target };
        default:
            break;
    }
    return { ...state };
};

export default PostListReducer;