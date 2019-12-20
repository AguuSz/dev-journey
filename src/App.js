import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import de componentes
import Navbar from './components/Navbar';
import Container from './components/Container';
import LogIn from './components/LogIn';
import Lenguajes from './components/Lenguajes';
import AddEntry from './components/AddEntry';

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Route path="/" exact>
          <Container />
        </Route>

        <Route path="/signIn" exact>
          <LogIn />
        </Route>

        <Route path="/lenguajes" exact>
          <Lenguajes />
        </Route>

        <Route path="/addEntry" exact>
          <AddEntry />
        </Route>

      </Router>
    )
  }
}

export default App
