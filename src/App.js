import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBE1vTxOmJQAQFbal3pOyB3_9_pmz2IAc0",
      authDomain: "manager-a4e5e.firebaseapp.com",
      databaseURL: "https://manager-a4e5e.firebaseio.com",
      projectId: "manager-a4e5e",
      storageBucket: "manager-a4e5e.appspot.com",
      messagingSenderId: "456175127164"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
