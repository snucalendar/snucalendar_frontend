import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pageName: '',
    tabName : 'comment'
};

const PageControlReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.KEEP_PAGE:
            return { ...state, pageName: action.target };
        case actionTypes.KEEP_COMMUNICATION_PAGE:
            return { ...state, tabName: action.target}
        default:
            break;
    }
    return { ...state };
};

export default PageControlReducer;