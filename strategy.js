function Fedex() {
	this.caculate = (package) => {
		if (package.weight < 1000) {
			return package.weight * 1.1;
		} else {
			return package.weight;
		}
	};
}

function UPS() {
	this.caculate = (package) => {
		if (package.weight < 10) {
			return 10;
		} else {
			return package.weight * 1.05;
		}
	};
}

function USPS() {
	this.caculate = (package) => {
		if (package.weight < 100) {
			return package.weight;
		} else {
			return package.weight * 1.08;
		}
	};
}

function Shipping(package) {
	this.package = package;
	this.setStrategy = function (strategy) {
		this.strategy = strategy;
	};

	this.printPrice = function () {
		console.log("price: ", this.strategy.caculate(this.package));
	};
}

let ship1000 = new Shipping({ weight: 2000 });
ship1000.setStrategy(new Fedex());
ship1000.printPrice();

ship1000.setStrategy(new UPS());
ship1000.printPrice();

ship1000.setStrategy(new USPS());
ship1000.printPrice();
