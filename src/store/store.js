import {
    createStore, combineReducers, applyMiddleware, compose,
  } from 'redux';
  import thunk from 'redux-thunk';

  import rootReducer from './reducers'; // 이름 이렇게 하는 게 맞나..

// import EventListReducer from './reducers/EventListReducer';
// import EventReducer from './reducers/EventReducer';
// import UserReducer from './reducers/UserReducer';
// import PostListReducer from './reducers/PostListReducer';
// import PostReducer from './reducers/PostReducer';
// import CalendarReducer from './reducers/CalendarReducer';

// const rootReducer = combineReducers({
//   us: UserReducer,
//   evl: EventListReducer,
//   ev: EventReducer,
//   psl: PostListReducer,
//   ps: PostReducer,
//   cd: CalendarReducer,
//   main: main,
// });

const logger = () => (next) => (action) => {
  const result = next(action);
  return result;
};

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f));

export default store;
