import axios from 'axios';
import * as actionTypes from './actionTypes';

export const keepPage_ = (pageName) => ({
    type: actionTypes.KEEP_PAGE, target: pageName,
});

export const keepPage = (pageName) => (dispatch) => dispatch(keepPage_(pageName));