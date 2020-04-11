import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {
  Welcome,
  PokemonList
} from './components/components';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to='/pokemon' />
      </Route>
      <div className="App">
        <header className="App-header">
          <img src={require('./img/pokemon.png')} className="App-logo" alt="logo" />
          {/* <Link to="/pokemon">Home</Link> */}
          {/* <Link to="/pokesmon/charizard">Charizard</Link> */}
          {/* <Welcome /> */}
        </header>
        <PokemonList />
      </div>
    </Router>
  );
}

export default App;
