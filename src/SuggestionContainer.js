import React from 'react';
import Venue from './Venue'

var SuggestionContainer = React.createClass({
	render: function (){
		var v = this.props.venue
		return (
			<div>
				<ul>
					<Venue 
						name={v.venue.name} 
						type={v.venue.categories[0].name} 
						postcode={v.venue.location.postalCode} 
						rating={v.venue.rating} 
						website={v.venue.url} 
						phone={v.venue.contact.phone} 
						twitter={v.venue.contact.twitter}/>
				</ul>
				<button onClick={this.props.incrementVenueIndex}>Next</button>
			</div>
		)
	}
})

export default SuggestionContainer;