let a = +prompt('Введите число а', 0);
let b = +prompt('Введите число b', 0);
let c = +prompt('Введите число с', 0);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let theBiggestNum = (a, b, c) => {
    if ((a >= b) && (a >= c)) {
        alert(`Самое большое число a = ${a}`);
    } else if ((b >= a) && (b >= c)) {
        alert(`Самое большое число b = ${b}`);
    } else {
        alert(`Самое большое число c = ${c}`);
    }
};

theBiggestNum(a, b, c);
// Не работает при вводе строк в параметр b, требуется валидация входящих данных
