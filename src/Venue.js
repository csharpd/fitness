import React, { Component } from 'react';

var Venue = React.createClass({
	render: function (){
		return (
				<h1>{this.props.name}</h1>
			)
	}
})

export default Venue;