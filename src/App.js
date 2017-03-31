import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VenueList from './venueList'

var App = React.createClass({
  getInitialState() {
    return {selected: null, venues: ['hi']}
  },
  render: function () {
    console.log(this.state)
    return (
      <div>
        <div> Hello {this.props.name} </div>
        <button onClick={()=>{
          this.setState(
            {selected:"Yoga"}
          )
        }}>Yoga</button>
        <button onClick={()=>{
          this.setState(
            {selected:"Boxing"}
          )
        }}>Boxing</button>
        <button onClick={()=>{
          this.setState(
            {selected:"Barre"}
          )
        }}>Barre</button>
        <VenueList venues={this.state.venues}/>
      </div>
    )
  }
})


export default App;
