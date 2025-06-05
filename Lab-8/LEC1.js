// 1. Виведення змінних з їх типами
var varString = "Hello, world!"; // Рядок (string)
var varNumber = 42; // Число (number)
var varArray = [1, 2, 3]; // Масив (array, тип object)
var varObject = { name: "Alice", age: 25 }; // Об'єкт (object)
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
var varString = "100"; // Рядок
var varNumber = 100;   // Число


console.log('"100" == 100:', varString == varNumber);   // true (нестроге порівняння)
console.log('"100" === 100:', varString === varNumber); // false (строге порівняння)


// 4. Просте шифрування / дешифрування числової інформації
let number = 10;

// Кодування числа в Base64
let code = btoa(number.toString());
console.log("Закодоване число Base64:", code);

// Декодування Base64 назад у число
let decode = parseInt(atob(code), 10);
console.log("Декодоване число:", decode);






