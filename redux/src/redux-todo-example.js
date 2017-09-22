var redux = require('redux');

// take current state
// do stuff with the state according the action parameter
// return new state
var defaultState = {
  searchText: '',
  showCompleted: '',
  todos: []
}
var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
}

// create state object
// and tell what action there are to mutate state
// reducer has the knowledge of all possible actions to mutate state
var store = redux.createStore( reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var subscription = store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});

console.log('Before action', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'cat'
});
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
});
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'bird'
});

console.log('After action', store.getState());
