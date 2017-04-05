import React from 'react';
import Venue from './Venue'

var SuggestionContainer = React.createClass({
	render: function (){
		console.log(this.props.venues);
		return (
			<ul>
			{this.props.venues.map(function(v, index){
				return <Venue key={index} name={v.venue.name} type={v.venue.categories[0].name} postcode={v.venue.location.postalCode} rating={v.venue.rating} website={v.venue.url} phone={v.venue.contact.phone} twitter={v.venue.contact.twitter}/>
			})}
			</ul>
		)
	}
})

export default SuggestionContainer;