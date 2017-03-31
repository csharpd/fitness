import React from 'react';
import Venue from './Venue'

var VenueList = React.createClass({
	render: function (){
		console.log(this.props.venues);
		return (
			<ul>
			{this.props.venues.map(function(v){
				return <Venue name={v.name} type={v.categories[0].name} postcode={v.location.postalCode}/>
			})}
			</ul>
		)
	}
})

export default VenueList;