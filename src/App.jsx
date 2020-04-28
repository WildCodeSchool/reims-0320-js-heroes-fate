import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Axios from 'axios';

import Board from './components/Board';
import Home from './components/Home';
import UniverseList from './components/UniverseList';
import HeroesList from './components/HeroesList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
    };
  }

  componentDidMount() {
    const listHeroes = [
      687,
      620,
    ];

    for (let i = 0; i < listHeroes.length; i++) {
      Axios.get(`https://www.superheroapi.com/api.php/10222496537945566/${listHeroes[i]}`)
        .then((response) => response.data)
        .then((data) => {
          const heroes = [...this.state.heroes, data]
          heroes.sort((a, b) => (
            // thx https://www.freecodecamp.org/forum/t/the-sort-method-behaves-different-on-different-browsers/237221
            parseInt(a.id, 10) < parseInt(b.id, 10) ? 1 : -1
          ));
          this.setState({
            heroes,
          });
        });
    }
  }

  render() {
    const stateHeroes = this.state.heroes;
    return (

      <Router>
        <div>
          <Link exact to="/">Accueil</Link>
          <Link to="/Board" className="buttonPlay">Play Now !</Link>
          <Link to="UniverseList">Universe List</Link>
          <Link to="HeroesList">Heroes List</Link>

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/UniverseList">
              <UniverseList />
            </Route>

            <Route exact path="/HeroesList">
              {stateHeroes.length > 1 && <HeroesList heroes={stateHeroes} />}
            </Route>

            <Route path="/Board">
              {stateHeroes.length > 1 && <Board heroes={stateHeroes} />}
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
