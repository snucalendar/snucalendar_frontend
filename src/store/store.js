import {
    createStore, combineReducers, applyMiddleware, compose,
  } from 'redux';
  import thunk from 'redux-thunk';

import EventListReducer from './reducers/EventListReducer';
import EventReducer from './reducers/EventReducer';
import UserReducer from './reducers/UserReducer';
import PostListReducer from './reducers/PostListReducer';
import PostReducer from './reducers/PostReducer';

const rootReducer = combineReducers({
  us: UserReducer,
  evl: EventListReducer,
  ev: EventReducer,
  psl: PostListReducer,
  ps: PostReducer,
});

const logger = () => (next) => (action) => {
  const result = next(action);
  return result;
};
  
const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f));
  
export default store;