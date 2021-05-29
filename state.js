function TrafficLightStateMachine() {
	this.states = {
		red: {
			color: "red",
			go: () => {
				console.log(this.currentState.color);
				setTimeout(() => {
					this.change("green");
					this.currentState.go();
				}, 10000);
			},
		},
		green: {
			color: "green",
			go: () => {
				console.log(this.currentState.color);
				setTimeout(() => {
					this.change("yellow");
					this.currentState.go();
				}, 10000);
			},
		},
		yellow: {
			color: "yellow",
			go: () => {
				console.log(this.currentState.color);
				setTimeout(() => {
					this.change("red");
					this.currentState.go();
				}, 3000);
			},
		},
	};

	this.change = function (code) {
		this.currentState = this.states[code];
	};

	this.currentState = this.states.red;

	this.run = function () {
		this.currentState.go();
	};
}

const trafficLightStates = new TrafficLightStateMachine();
trafficLightStates.run();
