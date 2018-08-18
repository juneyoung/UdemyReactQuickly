<template>
	<div class="low-fluid">
		<h2> Timer </h2>
		<div class="btn-group" role="group">
			<button type='button' class='btn btn-default' @click="startTimer(5)">5</button>
			<button type='button' class='btn btn-default' @click="startTimer(10)">10</button>
			<button type='button' class='btn btn-default' @click="startTimer(15)">15</button>
		</div>
		<h1>{{ time }}</h1>
	</div>
</template>

<script>
	export default {
		layout: 'reactquick'
		, data: function(){
			return {
				time: null
				, init: null
			}
		}
		, methods: {
			startTimer: function(time){
				clearInterval(this.init);
				let thisRef = this;
				let interval = setInterval(
					function(){
					console.log('2: Inside of interval', time)
					let timeLeft = thisRef.time - 1;
					if(timeLeft <= 0) clearInterval(interval);
					thisRef.time = timeLeft;
					// thisRef.$set(Object.assign({}, thisRef.data, { time: timeLeft }))
					console.log('thisRef', thisRef, this);}
				, 1000);
				console.log('1: After interval');
				// this.data = { time : time, init: interval };
				this.time = time;
				this.init = interval;
				console.log('this.data', this.data);
				// this.$set(Object.assign({}, this.data, { time : time, init: interval}));
			}
		}
	}
</script>