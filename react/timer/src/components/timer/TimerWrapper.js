import React, { Component } from 'react';
import Button from './Button';
import Timer from './Timer';

// createClass -> createElement. createFactory
export default class TimerWrapper extends React.Component {
	constructor(){
		super();
		this.state = {
			time: null
			, init: null
		}
		// this.startTimer = this.startTimer.bind(this);
	}

	startTimer = (time) => {
		clearInterval(this.state.init);
		let thisRef = this;

		let interval = setInterval(function(){
			console.log('2: inside of Interval');
			let timeLeft = thisRef.state.time - 1;
			if (timeLeft <= 0) {
				clearInterval(interval);
			}
			thisRef.setState(Object.assign({}, thisRef.state, { time : timeLeft }))
		}, 1000);

		console.log('1: After setInterval');
		this.setState(Object.assign({}, this.state, { time: time, int: interval }))
	} 

	render () {
		return(
			<div className="row-fluid">
				<h2>Timer</h2>

				<div className='btn-group' role='group'>
					<Button time='5' startTimer={this.startTimer} ></Button>
					<Button time='10' startTimer={this.startTimer} ></Button>
					<Button time='15' startTimer={this.startTimer} ></Button>
				</div>
				<Timer time={this.state.time}/>
				{/*
					<audio id='end-of-time'></audio>
				*/}
			</div>
		);
	}
};