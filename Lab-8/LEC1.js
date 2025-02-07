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