import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import TheGame from './Home/TheGame';
import Board from './Board/Board';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'homepage',
    }
    this.changeScreen = this.changeScreen.bind(this);
  }

  changeScreen() {
    this.setState({
      screen: 'board',
    });
  }

  render() {
    return (
      <Router>
        <div>
          <div className={this.state.screen === 'homepage' ? 'page__container' : 'hidden'}>
            <nav>
              <ul className="mini__navbar">
                <li className="mini__list"><NavLink activeClassName="active" to="/homepage">Welcome</NavLink></li>
                <li className="mini__list"><NavLink activeClassName="active" to="/rules">Instructions</NavLink></li>
              </ul>
            </nav>

            <Switch>

              <Route path="/homepage">
                <TheGame heroes={this.props.heroes} changeScreen={this.changeScreen} />
              </Route>
              <Route path="/rules">
                <p>This is the rules</p>
              </Route>
            </Switch>
          </div>
          <div className={this.state.screen === 'board' ? 'board__container' : 'hidden'}>
            {this.props.heroes.length > 1 && <Board heroes={this.props.heroes} />}
          </div>
        </div>

      </Router>
    );
  }
}

export default Homepage;