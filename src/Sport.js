import React from 'react';

var Sport = React.createClass({
	render: function (){
		return (
				<button className={this.state.selected===this.props.activity ? 'active' : 'not-active'} 
				     axios.get('https://api.foursquare.com/v2/venues/explore?oauth_token=UJEPMETKL0M4ZEN3BIEVALPLESODSAMKF02CLZMN41EL2AJB&v=20131016&ll=51.5%2C0.12&query=yoga').then(response => {
		                this.setState(
		                  {selected:{this.props.activity}, venues:response.data.response.groups[0].items}
		                )
		              })>
				{this.props.activity}
				<button>
			)
	}
})

export default Sport;

