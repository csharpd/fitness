import React from 'react';
import './App.css';
import SuggestionContainer from './SuggestionContainer';
import Sport from './Sport';
import axios from 'axios';
  


var App = React.createClass({
  getInitialState() {
    return {selected: null, venues: []}
  },

  callFoursquare(activity) {
      axios.get(`https://api.foursquare.com/v2/venues/explore?oauth_token=UJEPMETKL0M4ZEN3BIEVALPLESODSAMKF02CLZMN41EL2AJB&v=20131016&ll=51.5%2C0.12&query=${activity}`)
            .then(response => {
              this.setState(
                {selected: activity, venues:response.data.response.groups[0].items}
            )
      })
  },

  render: function () {
    return (
      <div>
        <Sport activity='yoga' selected={this.state.selected} callFoursquare={this.callFoursquare} />
        <Sport activity='boxing' selected={this.state.selected} callFoursquare={this.callFoursquare} />
        <Sport activity='barre' selected={this.state.selected} callFoursquare={this.callFoursquare} />

        <SuggestionContainer venues={this.state.venues}/>

      </div>
    )
  }
})


export default App;
