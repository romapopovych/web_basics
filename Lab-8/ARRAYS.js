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
function addLargeNumbers(num1, num2) {
	let carry = 0;
	let result = "";
	
	let i = num1.length - 1;
	let j = num2.length - 1;

	while (i >= 0 || j >= 0 || carry) {
			let digit1 = i >= 0 ? Number(num1[i]) : 0;
			let digit2 = j >= 0 ? Number(num2[j]) : 0;
			let sum = digit1 + digit2 + carry;
			
			carry = Math.floor(sum / 10);
			result = (sum % 10) + result;

			i--;
			j--;
	}

	return result;
}

// Приклад використання
console.log(addLargeNumbers("987654321987654321", "123456789123456789")); // "1111111111111111110"


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
