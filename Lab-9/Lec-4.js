// Максимальна кількість зірочок у середині фігури
const maxStars = 21;

// Крок збільшення/зменшення зірочок
const step = 2;

// Верхня частина фігури
for (let stars = 9; stars <= maxStars; stars += step) {
  console.log("*".repeat(stars));
}

// Нижня частина фігури
for (let stars = maxStars - step; stars >= 9; stars -= step) {
  console.log("*".repeat(stars));
}



function timer(seconds) {
	let startTime = new Date().getTime(); // Отримуємо поточний час у мілісекундах
	let endTime = startTime + seconds * 1000; // Додаємо 10 секунд

	while (new Date().getTime() < endTime) {
			// Чекаємо, поки поточний час не досягне кінцевого часу
	}

	console.log("Час вийшов!");
}

timer(10);
