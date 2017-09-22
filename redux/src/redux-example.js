var redux = require('redux');

// take current state
// do stuff with the state according the action type and parameters
// return new state

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var subscription = store.subscribe(() => {
  var state = store.getState();
  console.log('store.subscribe', state);

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = `<a href="${state.map.url}" target="_blank">Your location here!</a>`;
  }
});
// to unsubscribe, call the function returned by the store.subscribe()
// subscription(); // this unsubscribes from the state changes

console.log('Before actions', store.getState());

// fetchLocation() is a function, with redux-thunk, store.dispatch will accept functions
store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Ralli'));
store.dispatch(actions.addHobby('biking'));
store.dispatch(actions.addHobby('boxing'));
store.dispatch(actions.changeName('Kolli mcRalli'));
store.dispatch(actions.addMovie({
  name: 'Terminator 2',
  category: 'Action, Sci-fi'
}));
store.dispatch(actions.addMovie({
  name: 'Totoro',
  category: 'Thriller, Horror'
}));
store.dispatch(actions.removeHobby(1));
store.dispatch(actions.removeMovie(1));
