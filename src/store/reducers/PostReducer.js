import * as actionTypes from '../actions/actionTypes';

const initialState = {
    post: {},
    src: '',
};

const PostReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return { ...state };
        case actionTypes.GET_POST:
            return { ...state, post: action.target };
        case actionTypes.GET_IMAGE:
            return { ...state, src: action.target };
        default:
            break;
    }
    return { ...state };
};

export default PostReducer;