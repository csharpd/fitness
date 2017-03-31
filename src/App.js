import React from 'react';
import './App.css';
import VenueList from './venueList';
import axios from 'axios';
  


var App = React.createClass({
  getInitialState() {
    return {selected: null, venues: []}
  },
  render: function () {
    return (
      <div>
        <div> LIFT </div>
        <button className={this.state.selected==='yoga' ? 'active' : 'not-active'} 
          onClick={()=>{
            axios.get('https://api.foursquare.com/v2/venues/search?v=20161016&ll=51.5%2C0.12&near=camden&query=yoga&limit=5&intent=browse&radius=100000&client_id=1V2M1Z1LRWN0ZTN4X025HHAGGOS2BXZWEQ4JLO0LHU3YCWS3&client_secret=NQD2Y0K54R0CKVFRKBXJCPX5C4WIE4ZCHXCAAGSFEJQFQNA0')
              .then(response => {
                console.log('response.data',response.data);
                this.setState(
                  {selected:"Yoga", venues:response.data.response.venues}
                )
              })
        }}>Yoga</button>
        <button className={this.state.selected==='boxing' ? 'active' : 'not-active'}
        onClick={()=>{
          axios.get('https://api.foursquare.com/v2/venues/search?v=20161016&ll=51.5%2C0.12&query=boxing&limit=5&intent=browse&radius=100000&client_id=1V2M1Z1LRWN0ZTN4X025HHAGGOS2BXZWEQ4JLO0LHU3YCWS3&client_secret=NQD2Y0K54R0CKVFRKBXJCPX5C4WIE4ZCHXCAAGSFEJQFQNA0')
            .then(response => {
              this.setState(
                {selected:"boxing", venues:response.data.response.venues}
              )
            })
        }}>Boxing</button>
        <button className={this.state.selected==='barre' ? 'active' : 'not-active'}
        onClick={()=>{
          axios.get('https://api.foursquare.com/v2/venues/search?v=20161016&ll=51.5%2C0.12&query=barre&limit=5&intent=browse&radius=100000&client_id=1V2M1Z1LRWN0ZTN4X025HHAGGOS2BXZWEQ4JLO0LHU3YCWS3&client_secret=NQD2Y0K54R0CKVFRKBXJCPX5C4WIE4ZCHXCAAGSFEJQFQNA0')
            .then(response => {
              this.setState(
                {selected:"barre", venues:response.data.response.venues}
              )
            })
   
        }}>Barre</button>

        <VenueList venues={this.state.venues}/>
      </div>
    )
  }
})


export default App;
