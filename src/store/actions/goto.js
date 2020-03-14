import * as actionTypes from './actionTypes';

const keepPage_ = (pageName) => ({
    type: actionTypes.KEEP_PAGE, target: pageName,
});

export const keepPage = (pageName) => (dispatch) => dispatch(keepPage_(pageName));

const keepCommunicationTab_ = (tabName) => ({
    type : actionTypes.KEEP_COMMUNICATION_PAGE,
    target : tabName
})

export const keepCommunicationTab = (tabName) => (dispatch) => dispatch(keepCommunicationTab_(tabName));