import React from 'react';

var Venue = React.createClass({
	render: function (){
		return (
				<ul>
					<h1>{this.props.name}</h1>
					<p>{this.props.type}</p>
					<p>{this.props.postcode}</p>
					<p>{this.props.rating}</p>
					<p>{this.props.website}</p>
					<p>Telephone: {this.props.phone}</p>
					<a href={'wwww.twitter.com/'+ this.props.twitter}>Twitter </a>
				
				</ul>
			)
	}
})

export default Venue;