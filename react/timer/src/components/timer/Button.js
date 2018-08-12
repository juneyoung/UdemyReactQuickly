import React, { Component } from 'react';


// Button Class
export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	startTimer = () => {
		return this.props.startTimer(this.props.time);
	}

	render(){
		return (
			<button type='button' className='btn-default btn' onClick={ this.startTimer }>
				{ this.props.time } Seconds
			</button>
		)
	}
};