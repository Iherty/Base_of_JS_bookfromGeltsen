//const n = prompt('Напишите число, сумма которой будет найдена', 0);

let sumOfN = (n) => {
    const numToString = String(n); // преобразования числа в строку
    const lengthOfNum = numToString.length; // длина числа, до какого числа будет цикл повторяться 
    let i = 0 // номер итерации в цикле 
    sum = 0; // текущая сумма чисел

    while (i < lengthOfNum) {
        sum = +sum + (+numToString[i]);
        i++
    }
    return sum;
}

let sumOfN2 = (n) => {
    let sum = 0;
    // sum = 3 + 8 + 1
    // n = 10011; sum = 3; 

    while (n !== 0) {
        let ones = n - Math.floor(n / 10) * 10;
        sum += ones;
        n = Math.floor(n / 10);
    }
    return sum;
}