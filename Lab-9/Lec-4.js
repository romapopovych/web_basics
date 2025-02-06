function printPattern() {
	let rows = [9, 17, 23, 27, 29, 29, 27, 23, 17, 9]; // Кількість зірок у кожному рядку
	
	for (let count of rows) {
			console.log("*".repeat(count)); // Повторюємо "*" count разів
	}
}

printPattern();


function timer(seconds) {
	let startTime = new Date().getTime(); // Отримуємо поточний час у мілісекундах
	let endTime = startTime + seconds * 1000; // Додаємо 10 секунд

	while (new Date().getTime() < endTime) {
			// Чекаємо, поки поточний час не досягне кінцевого часу
	}

	console.log("Час вийшов!");
}

timer(10);

