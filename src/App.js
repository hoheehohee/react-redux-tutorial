import React, { Component } from 'react';
import { createStore } from 'redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';

import todoApp from './reducers';
import logo from './logo.svg';
import './App.css';

let store = createStore(todoApp);

class App extends Component {

  componentWillMount() {

    console.log(store.getState());

    let unsubscribe = store.subscribe(() => {
      console.log(store.getState());
    });

    store.dispatch(addTodo('Learn about actions'));
    store.dispatch(addTodo('Learn about reducers'));
    store.dispatch(addTodo('Learn about store'));
    store.dispatch(completeTodo(0));
    store.dispatch(completeTodo(1));
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

    unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
