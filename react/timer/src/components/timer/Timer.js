import React, { Component } from 'react';

// Timer Class
export default class Timer extends React.Component {
	render () {
		return (<h1>
			{ (!this.props.time) ? 0 : this.props.time  }
		</h1>);
	}
};
