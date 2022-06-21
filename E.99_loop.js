let profit = () => {
    let sum = 0; // общая сумма денег за сделанные клетки
    let i = 1; // номер каждого последующего шага
    let y = 1; // кол-во зерен на каждой клетке

    while (i <= 64) {
        sum = sum + y;
        y = y * 2;
        i++
    }
    return sum;
}

console.log(profit());

/* Вариант решения задачи с for
let sum = 0;
let y = 1;

for (let i = 1; i <= 64; i++) {
    sum = sum + y;
    y = y * 2;
} 
return sum;
*/