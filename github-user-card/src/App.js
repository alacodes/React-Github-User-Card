import React from 'react';
import './App.css';
import Cards from './components/Cards.js';
import axios from 'axios';

class App extends React.Component {
  state = {
    people: []
  };

  componentDidMount = () => {
    axios
      .get('https://api.github.com/users/alacodes/followers')
      .then(res => {
        this.setState({ people: res.data });
      })
      .catch(err => {
        console.log("Error, you idiot", err);
      });
  };
  render() {
    return (
      <div className="App">
        <Cards people={this.state.people} />
      </div>
    );
  }
}
export default App;