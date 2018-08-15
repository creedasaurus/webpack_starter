import React, { Component } from 'react';
import * as axios from 'axios';
import { AppContainer } from 'react-hot-loader';
import StateComponent from './StateComponent';

class App extends Component {
  componentDidMount() {
    axios.get('/api/hello').then(res => console.log(res)); // eslint-disable-line
  }

  render() {
    return (
      <AppContainer>
        <div className="App">
          <header>
            <h1>
            Change this text!
            </h1>
          </header>
          <StateComponent />
        </div>
      </AppContainer>
    );
  }
}

export default App;
