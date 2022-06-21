var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy; 
/* I found the information above on the site Stackoverflow or I can use a while loop like: 
    let day;
    let month;
    let year;
    let date;

    while(true) {
        year = prompt('Введите этот год', '2022');
        month = prompt('Введите этот месяц', '06');
        day = prompt('Введите этот день', '17');

        if ((+year <= 0) || (+month <= 0) || (day <= 0)) {

        } else if ((year === '') || (month === '') || (day === '')) {

        } else if ((year === null) || (month === null) || (day === null)) {

        } else if ((year >= 2023) || (month >= 12) || (day >= 31)) {

        } else break
        }

    }
*/


// The answer to the Q is below. Start here
let whoIsThis;
let sumOtolaryn = 0;
let sumOculist = 0;
let sumSurgeon = 0;

while(true) {
    whoIsThis = prompt('Введите данные', '');

    if (+whoIsThis === 0 || whoIsThis === '' || whoIsThis === null) {
        break
    } else if ((whoIsThis.toLowerCase() === 'отоларинголог') || (whoIsThis.toLowerCase() === 'от')) { 
        
        sumOtolaryn += 1;

    } else if ((whoIsThis.toLowerCase() === 'окулист') || (whoIsThis.toLowerCase() === 'ок')) {
        
        sumOculist += 1;

    } else if ((whoIsThis.toLowerCase() === 'хирург') || (whoIsThis.toLowerCase() === 'хи')) {
        
        sumSurgeon += 1;

    } else {

        alert('Ошибка в данных. Введите заново')

    }

} alert(`На ${today} число в больнице отолорингологов ${sumOtolaryn}, окулистов ${sumOculist},  хирургов ${sumSurgeon}`)