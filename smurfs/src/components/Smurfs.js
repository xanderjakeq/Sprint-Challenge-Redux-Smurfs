import React, { Component } from 'react';

import {connect} from 'react-redux'
import {getSmurfs} from '../actions'

import Smurf from './Smurf';
import axios from 'axios';
import SmurfForm from './SmurfForm'

class Smurfs extends Component {
  constructor(props){
    super(props)

    this.state = {
      editingSmurfData: null
    }
  }
  componentDidMount(){
    this.props.getSmurfs()
  }
  handleDelete = id => {
    axios.delete(`/smurfs/${id}`).then(res => {
      this.props.updateSmurfs()
    }).catch(err => {
      console.log(err)
    })
  }
  handleUpdateClick = (data) => {
    this.setState({
      editingSmurfData: data
    })
  }
  handleUpdate = (e, id, data) => {
    e.preventDefault()
    axios.put(`/smurfs/${id}`,data).then(res => {
      this.props.updateSmurfs()
      this.setState({
        editingSmurfData: null
      })
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                data = {smurf} 
                key={smurf.id}
                delete = {this.handleDelete}
                update = {this.handleUpdateClick}
              />
            );
          })}
        </ul>
        {this.state.editingSmurfData != null? <SmurfForm update handleUpdate = {this.handleUpdate} data = {this.state.editingSmurfData}/> : null}
      </div>
    );
  }
}

// Smurf.defaultProps = {
//  smurfs: [],
// };
const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}
export default connect(mapStateToProps,{getSmurfs})(Smurfs);
