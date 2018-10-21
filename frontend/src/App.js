import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Fib from './Fib';
import OtherPage from './OtherPage';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h4>Links:</h4>
            <Link to="/">Home</Link>
            <Link to="/otherPage">Other Page</Link>
            <div>
              <Route exact path="/" component={Fib} />
              <Route path="/otherpage" component={OtherPage} />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
