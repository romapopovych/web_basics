const car = {
	speedometer: 0, // Початкове значення спідометра
};

// Додаємо методи за допомогою Object.defineProperties
Object.defineProperties(car, {
	setSpeed: {
			value: function (speed) {
					this.speedometer = speed;
					return this; // Повертаємо сам об'єкт для ланцюжкового виклику
			},
			writable: false,
			enumerable: false,
			configurable: false
	},
	getSpeed: {
			value: function () {
					console.log(this.speedometer); // Виводимо значення speedometer
					return this; // Повертаємо об'єкт для продовження ланцюжка
			},
			writable: false,
			enumerable: false,
			configurable: false
	},
	clearSpeed: {
			value: function () {
					this.speedometer = 0;
					return this; // Повертаємо об'єкт для подальшого виклику
			},
			writable: false,
			enumerable: false,
			configurable: false
	}
});

// === ТЕСТУВАННЯ ЛАНЦЮЖКОВОГО ВИКЛИКУ ===
car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed().getSpeed();

