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