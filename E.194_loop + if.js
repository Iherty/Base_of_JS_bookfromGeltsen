let numN = +prompt('Введите натуральное число N', 0); //183
let numX = +prompt('Введите цифру, которая есть в N', 0); // 3
let repeatOfX = 0

while (numN !== 0) {
    let y = numN - Math.floor(numN / 10) * 10; // 183-180=3
    numN = Math.floor(numN / 10); // 18 

    if (y === numX) {
        repeatOfX = repeatOfX + 1; // 1
    };
}