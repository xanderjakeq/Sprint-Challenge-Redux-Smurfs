import React, { Component } from 'react';

import {connect} from 'react-redux'
import {getSmurfs,deleteSmurf,updateSmurf} from '../actions'

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
    this.props.deleteSmurf(id).then(() => this.props.getSmurfs())
  }

  handleUpdateClick = (data) => {
    this.setState({
      editingSmurfData: data
    })
  }
  handleUpdate = (e, id, data) => {
    e.preventDefault()
    this.props.updateSmurf(id, data).then(res => {
      this.props.getSmurfs()
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
export default connect(mapStateToProps,{getSmurfs, deleteSmurf, updateSmurf})(Smurfs);
