import * as actionTypes from '../actions/actionTypes';

const initialState = {
    post_list: [],
};

const PostListReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_POST_LIST:
            return { ...state, post_list: action.target };
        default:
            break;
    }
    return { ...state };
};

export default PostListReducer;