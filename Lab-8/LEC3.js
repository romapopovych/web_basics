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