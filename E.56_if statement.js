let hasBisector = prompt('Биссектриса в треугольнике проведена?', 'да');

if ((hasBisector === '') || (hasBisector === null) || (+hasBisector === +hasBisector)) {
    
    alert('Отмена');

} else if (hasBisector === 'нет') {
    let sideAC = prompt('Введите длину основания треугольника', '');
    let sideAB = prompt('Введите длину первой стороны треугольника', '');
    let sideBC = prompt('Введите длину второй стороны треугольника', '');

    if ((sideAC === '' || sideAC === null) || (sideAB === '' || sideAB === null) || (sideBC === '' || sideBC === null)) {
       
        alert('Отмена')

    } else if ((+sideAB === 0) || (+sideAC === 0) || (+sideBC === 0) ) {

        alert('Данные некорректны');

    } else if ((+sideAB === +sideBC) && (+sideAC === +sideAC)) {

        alert('Треугольник равнобедренный');

    } else {

        alert('Треугольник не равнобедренны');

    }

} else if (hasBisector === 'да') {
    let side24 = prompt('Введите длину биссектрисы треугольника', '');
    let angle1 = prompt('Введите градус первого угла при основании(биссектрисе) треугольника', '');
    let angle3 = prompt('Введите градус второго угла при основании(биссектрисе) треугольника', '');

    if ((side24 === '' || side24 === null) || (angle1 === '' || angle1 === null) || (angle3 === '' || angle3 === null)) {
        
        alert('Отмена')

    } else if ((+side24 === 0) && (+angle1 === 0) && (+angle3 === 0)) {

        alert('Данные некорректны'); 

    } else if ((+side24 === +side24) && (+angle1 === +angle3)) {

        alert('Треугольник равнобедренный при условии, что стороны равны');

    } else {
        
        alert('Треугольник не равнобедренный');
    }

} else {

    alert('Отмена'); // Если user введет другие строки
}; 