import React, { Component } from 'react';
import Venue from './Venue'

var VenueList = React.createClass({
	render: function (){
		return (
			<ul>
			{this.props.venues.map(function(v){
				return <Venue name={v.name}/>
			})}
			</ul>
		)
	}
})

export default VenueList;