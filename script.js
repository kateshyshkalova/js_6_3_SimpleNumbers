'use strict';
let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');

let b = num2;

if (num2 < num1) {
    b = num1;
    num1 = num2;
    num2 = b;
}
// else if (num1=num2) console.log
let simple = number => {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            break; // выйдем из цикла
        }
        return document.write(` ${number} `)
    }
}

let simpleNumber = function (number1, number2) {

    for (let t = number1; t < number2; t++) {
        if ((t == 1) || (t == 2)) document.write(` ${t} `);
        simple(t);
    }
}
simpleNumber(num1, num2);