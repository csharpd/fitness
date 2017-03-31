import React, { Component } from 'react';

var VenueList = React.createClass({
	render: function (){
		return (
				<p>{this.props.venues}</p>
			)
	}
})

export default VenueList;