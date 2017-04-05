import React from 'react';
import './App.css';
import SuggestionContainer from './SuggestionContainer';
import Sport from './Sport';
import axios from 'axios';
  


var App = React.createClass({
  getInitialState() {
    return {selected: null, venues: [], venueIndex: 0}
  },

  callFoursquare(activity) {
      axios.get(`https://api.foursquare.com/v2/venues/explore?oauth_token=UJEPMETKL0M4ZEN3BIEVALPLESODSAMKF02CLZMN41EL2AJB&v=20131016&ll=51.5%2C0.12&query=${activity}`)
            .then(response => {
              this.setState(
                {selected: activity, venues:response.data.response.groups[0].items, venueIndex: 0}
            )
      })
  },

  incrementVenueIndex(){
    this.setState(
        {venueIndex: this.state.venueIndex + 1}
      )
  },

  venuesPresent(){
    return this.state.venues.length > 0
  },

  render: function () {
    return (
      <div>
        <Sport activity='yoga' selected={this.state.selected} callFoursquare={this.callFoursquare} />
        <Sport activity='boxing' selected={this.state.selected} callFoursquare={this.callFoursquare} />
        <Sport activity='barre' selected={this.state.selected} callFoursquare={this.callFoursquare} />

        {this.venuesPresent() &&
          <SuggestionContainer venue={this.state.venues[this.state.venueIndex]} incrementVenueIndex={this.incrementVenueIndex}/> 
        }
        

      </div>
    )
  }
})


export default App;
