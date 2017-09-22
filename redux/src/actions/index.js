var axios = require('axios');

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name // same as 'name: name'
  }
};

export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby // same as 'hobby: hobby'
  }
};
export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id // same as 'id: id'
  }
};

export var addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie // same as 'movie: movie'
  }
};
export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id // same as 'id: id'
  }
};

export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};
export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url // same as 'url: url'
  }
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch()); // store.dispatch
    axios.get('http://ipinfo.io').then( res => {
      var location = res.data.loc;
      var baseUrl = 'http://maps.google.com?q=';

      dispatch(completeLocationFetch(baseUrl + location)); // store.dispatch
    });
  };
};
