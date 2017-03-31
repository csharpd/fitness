import React from 'react';

var Venue = React.createClass({
	render: function (){
		return (
				<ul>
					<h1>{this.props.name}</h1>
					<p>{this.props.type}</p>
					<p>{this.props.postcode}</p>
				</ul>
			)
	}
})

export default Venue;