
//  LEC-1   //


// 1. Виведення змінних з їх типами
var varString = "Hello, world!"; // Рядок
var varNumber = 42; // Число
var varArray = [1, 2, 3]; // Масив
var varObject = { name: "Alice", age: 25 }; // Об'єкт
var varFunction = function () { return "I'm a function!"; }; // Функція

console.log("varString:", varString, typeof varString);
console.log("varNumber:", varNumber, typeof varNumber);
console.log("varArray:", varArray, typeof varArray);
console.log("varObject:", varObject, typeof varObject);
console.log("varFunction:", varFunction, typeof varFunction);

// 2. Зміна значень змінних, щоб їх типи помінялися
varString = 123; // Тепер число
varNumber = "123"; // Тепер рядок

console.log("Modified varString:", varString, typeof varString);
console.log("Modified varNumber:", varNumber, typeof varNumber);

// 3. Порівняння рядка і числа з "однаковими" значеннями
console.log('"123" == 123:', "123" == 123); // true (нестроге порівняння)
console.log('"123" === 123:', "123" === 123); // false (строге порівняння)

// 4. Просте шифрування / дешифрування числової інформації
function encryptNumber(num, key = 5) {
  return num + key; // Просте зміщення на key
}

function decryptNumber(encryptedNum, key = 5) {
  return encryptedNum - key; // Відновлення оригінального числа
}

let originalNumber = 42;
let encrypted = encryptNumber(originalNumber);
let decrypted = decryptNumber(encrypted);

console.log("Original number:", originalNumber);
console.log("Encrypted number:", encrypted);
console.log("Decrypted number:", decrypted);


//   LEC-1  //

//   	LEC-2 //
var foo = 1; 
function bar() { 
    if (!foo) { 
        var foo = 10; 
    } 
    alert(foo); 
} 
bar();

//Чому не використовується глобальне foo = 1? Оскільки в функції є var foo, це створює локальну змінну foo, яка не має зв’язку з глобальною foo = 1.  Через hoisting, ця змінна існує у функції bar(), але до її присвоєння вона має undefined. Якщо б не було var foo у функції, тоді використовувалася б глобальна змінна, і alert(foo) вивів би 1.// 
// Тому виводиться 10 а не 1//

var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a); //  Виводиться 1 //



var a = 1;
function b() {
    a = 10; // Тепер змінюється глобальна змінна `a`
}
b();
console.log(a); // Виведе 10

// LEC-2  //

// LEC-3  // 

//1. Унарні оператори (працюють з одним операндом)//
let x = 5;
console.log(-x);       // Унарний мінус (-5)
console.log(+x);       // Унарний плюс (5)
console.log(++x);      // Префіксний інкремент (збільшення на 1) -> 6
console.log(x--);      // Постфіксний декремент (зменшення на 1 після використання) -> 6, а потім x = 5
console.log(typeof x); // Оператор typeof -> "number"
console.log(!true);    // Оператор логічного NOT -> false
console.log(~x);       // Побітове заперечення (~5) -> -6
console.log(void 0);   // void оператор повертає undefined


//2. Бінарні оператори (працюють з двома операндами)//
let a = 10, b = 3;

console.log(a + b);  // Додавання -> 13
console.log(a - b);  // Віднімання -> 7
console.log(a * b);  // Множення -> 30
console.log(a / b);  // Ділення -> 3.3333
console.log(a % b);  // Остача від ділення -> 1
console.log(a ** b); // Піднесення до степеня -> 10^3 = 1000

console.log(a > b);  // true (порівняння)
console.log(a == b); // false (нестроге порівняння)
console.log(a === b); // false (строге порівняння)
console.log(a != b);  // true (нерівність)
console.log(a >= 10 && b < 5); // Логічне AND -> true
console.log(a >= 10 || b > 5); // Логічне OR -> true

console.log(5 & 1);  // Побітове AND -> 1
console.log(5 | 1);  // Побітове OR -> 5
console.log(5 ^ 1);  // Побітове XOR -> 4
console.log(5 << 1); // Побітовий зсув вліво -> 10
console.log(5 >> 1); // Побітовий зсув вправо -> 2

console.log("Hello" + " " + "World!"); // Конкатенація рядків


//3. Тернарний оператор (працює з трьома операндами)//
let age = 18;
let message = (age >= 18) ? "Доступ дозволено" : "Доступ заборонено";
console.log(message); // "Доступ дозволено"

let num = 5;
let isEven = (num % 2 === 0) ? "Парне" : "Непарне";
console.log(isEven); // "Непарне"


//Скрипт із використанням concat()//
let line1 = "Нехай завжди буде сонце, ";
let line2 = "Нехай завжди буде небо, ";
let line3 = "Нехай завжди буде мама, ";
let line4 = "Нехай завжди буду я.";

let poem = line1.concat("\n", line2, "\n", line3, "\n", line4);
console.log(poem);

//  LEC-3  // 


//  LEC-ARRAYS  //


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








