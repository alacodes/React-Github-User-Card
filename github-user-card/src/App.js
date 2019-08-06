import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state ={
      user: 'alacodes',
      userData: [],
      followers: []
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        this.setState({userData: res.data})
      })
      .catch(err => {
        alert('You id10t: ', err)
      })
  }

  render() {
    console.log('user: ', this.state.userData)
    return (
      <div className='App'>
       <UserCard user={this.state.userData} />
      </div>
    )
  }
}
export default App;