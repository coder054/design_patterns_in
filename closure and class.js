function getCounter() {
	var count = 0;

	return {
		counter: function counter() {
			count++;
			console.log(count);
		},
		reset: function reset() {
			count = 0;
		},
	};
}
let a1 = new getCounter();
console.log(a1);

let { counter: counter1, reset: reset1 } = getCounter();
let { counter: counter2, reset: reset2 } = getCounter();
counter1();
counter1();
counter1();
counter2();
counter2();
counter2();
reset1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
reset2();
counter2();
counter2();
counter1();

/////////////////////////////////////////

function Counter() {
	let test = "test"; // private variable
	this.count = 0;
	this.counter = function () {
		this.count++;
		console.log(this.count);
	};
	this.reset = function () {
		this.count = 0;
	};
	return "X";
}

Counter.prototype = {
	say: function () {
		console.log("Current count is: " + this.count);
	},
};
// prototype must occur before creating object

let x = Counter();
console.log("x = ", x);
console.log("x.test = ", x.test);
console.log("x.count = ", x.count);

let counter1 = new Counter();
console.log("counter1 = ", counter1);
console.log("counter1.test = ", counter1.test);
console.log("counter1.count = ", counter1.count);

let counter2 = new Counter();
counter1.counter();
counter1.counter();
counter1.counter();
counter2.counter();
counter2.counter();
counter2.counter();
counter1.reset();
counter1.counter();
counter1.counter();
counter1.counter();
counter1.counter();
counter1.counter();
counter1.counter();
counter1.counter();
counter2.reset();
counter2.counter();
counter2.counter();
counter2.counter();
counter1.counter();

counter1.say();
counter2.say();
