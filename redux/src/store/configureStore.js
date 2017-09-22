var redux = require('redux');
var thunk = require('redux-thunk').default;
var { nameReducer, hobbiesReducer, moviesReducer, mapReducer } = require('./../reducers/index');

export var configure = () => {
  var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  // create state object
  // and tell what action there are to mutate state
  // reducer has the knowledge of all possible actions to mutate state
  var store = redux.createStore( reducer, redux.compose(
    redux.applyMiddleware(thunk), // thunk is to have redux to work with actions that are functions
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
