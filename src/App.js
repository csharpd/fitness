import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VenueList from './venueList'
import venue from './venueData.json'

var App = React.createClass({
  getInitialState() {
    return {selected: null, venues: []}
  },
  render: function () {
    console.log(this.state)
    return (
      <div>
        <div> Hello {this.props.name} </div>
        <button onClick={()=>{
          fetch('http://foursquare')
            .then(response => {
              this.setState(
                {selected:"Yoga", venues:response.data.venues}
              )
            })
   
        }}>Yoga</button>
        <button onClick={()=>{
          this.setState(
            {selected:"Boxing", venues:venue}
          )
        }}>Boxing</button>
        <button onClick={()=>{
          this.setState(
            {selected:"Barre", venues:venue}
          )
        }}>Barre</button>
        <VenueList venues={this.state.venues}/>
      </div>
    )
  }
})


export default App;
