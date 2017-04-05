import React from 'react';
import axios from 'axios';

var Sport = React.createClass({
	handleClick: function (){
		this.props.callFoursquare(this.props.activity)
	},
	render: function (){
		return (
				<button className={this.props.selected===this.props.activity ? 'active' : 'not-active'}
					onClick={this.handleClick}>
						{this.props.activity}
				</button>
			)
	}
})

export default Sport;

