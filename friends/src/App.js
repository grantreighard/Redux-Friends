import React, { Component } from 'react';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
        <CreateFriendForm />
      </div>
    );
  }
}

export default App;
