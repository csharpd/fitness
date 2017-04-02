import React from 'react';
import './App.css';
import VenueList from './venueList';
import button from './Sport';
import axios from 'axios';
  


var App = React.createClass({
  getInitialState() {
    return {selected: null, venues: []}
  },
  render: function () {
    return (
      <div>
        <div> LIFT </div>

        <Sport activity='yoga' />
        <button className={this.state.selected==='boxing' ? 'active' : 'not-active'}
        onClick={()=>{
          axios.get('https://api.foursquare.com/v2/venues/explore?oauth_token=UJEPMETKL0M4ZEN3BIEVALPLESODSAMKF02CLZMN41EL2AJB&v=20131016&ll=51.5%2C0.12&query=boxing')
            .then(response => {
              this.setState(
                {selected:"boxing", venues:response.data.response.groups[0].items}
              )
            })
        }}>Boxing</button>
        <button className={this.state.selected==='barre' ? 'active' : 'not-active'}
        onClick={()=>{
          axios.get('https://api.foursquare.com/v2/venues/explore?oauth_token=UJEPMETKL0M4ZEN3BIEVALPLESODSAMKF02CLZMN41EL2AJB&v=20131016&ll=51.5%2C0.12&query=barre')
            .then(response => {
              this.setState(
                {selected:"barre", venues:response.data.response.groups[0].items}
              )
            })
   
        }}>Barre</button>

        <VenueList venues={this.state.venues}/>
      </div>
    )
  }
})


export default App;
