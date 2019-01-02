import React, { Component } from 'react';
import './App.css';
import { Form, Header, Validation } from './modules/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container-fluid">
          <div className="col-md-6 col-sm-6">
            <Form />
          </div>

          <div className="col-md-6 col-sm-6">
            <Validation />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
