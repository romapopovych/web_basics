//1. Знайти неперервний підмасив з максимальною сумою (Алгоритм Кадане)//

function maxSubarraySum(arr) {
	let maxSum = -Infinity;
	let currentSum = 0;

	for (let num of arr) {
			currentSum = Math.max(num, currentSum + num);
			maxSum = Math.max(maxSum, currentSum);
	}

	return maxSum;
}

// Приклад використання
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 (підмасив [4, -1, 2, 1])

//2. Функція сумування двох дуже довгих чисел (рядків)//
function sumLongNumbers(num1, num2) {
	// Додаємо числа як великі цілі числа (BigInt підтримує довгі числа)
	let result = BigInt(num1) + BigInt(num2);
	return result.toString();
}

// Приклад використання
let num1 = "987654321987654321987654321";
let num2 = "123456789123456789123456789";
console.log(sumLongNumbers(num1, num2));


//3. Реалізація різниці двох масивів (з урахуванням кількості повторень)//
function arrayDifference(arr1, arr2) {
	let countMap = new Map();

	// Підраховуємо елементи другого масиву
	for (let num of arr2) {
			countMap.set(num, (countMap.get(num) || 0) + 1);
	}

	let result = [];

	// Проходимося по першому масиву, віднімаючи знайдені в другому
	for (let num of arr1) {
			if (countMap.has(num) && countMap.get(num) > 0) {
					countMap.set(num, countMap.get(num) - 1);
			} else {
					result.push(num);
			}
	}

	return result;
}

// Приклад використання
console.log(arrayDifference([1, 2, 2, 3, 4, 5], [2, 3, 3])); // [1, 2, 4, 5]
console.log(arrayDifference([1, 1, 1, 2, 2, 3], [1, 2]));    // [1, 1, 2, 3]


//  LEC-ARRAYS  //