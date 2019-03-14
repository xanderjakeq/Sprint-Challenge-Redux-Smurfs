import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import './App.css';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import NavBar from './NavBar'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path = "/add" render = {props => <SmurfForm {...props} updateSmurfs = {this.props.getSmurfs}/>}/>
          <Route exact path = '/' render= {props => <Smurfs {...props} updateSmurfs = {this.props.getSmurfs} smurfs={this.props.smurfs} />}/>
        </div>
      </Router>
    );
  }
}



export default (App);
