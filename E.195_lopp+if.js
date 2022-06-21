/* Вводя в цикле по 2 оценки каждого ученика, подсчитать число учеников,
не имеющих оценок 2 и 3. В классе учится N учеников. */

//let N = +prompt('Сколько учеников учиться в классе?', ''); // 10
let sum = 0;
let N;

while(true) {
    N = +prompt('Сколько учеников учиться в классе?', '');

    if ((N <= 0) || (N === '') || (N === null)) {

    } else {
    break;
    }
} 

for(let i = 0; i < N; i++) {
    let firstGrade = prompt('Введите первую оценку ученика', ''); 
    let secondGrade = prompt('Введите вторую оценку ученика', ''); 


    if (((firstGrade === '') || (firstGrade === null)) || ((secondGrade === '') || (secondGrade === null))) {
        
        alert('Данные некорректны. Введите заново');
        N += 1;

    } else if (((+firstGrade < 2) || (+firstGrade > 5)) || ((+secondGrade < 2) || (+secondGrade > 5))) {        
        
        alert('Данные некорректны. Введите заново');
        N += 1;

    } else if ((+firstGrade > 3) && (+secondGrade > 3)) {
        
        sum += 1;
    }

} alert ('Число учеников с  хорошими оценками =' + sum);
