let x = prompt('Введите координату х', 0);
let y = prompt('Введите координату y', 0);

let find = (x, y) => {
    
    if ((x > 0) && (y > 0)) {
        
        alert(1);

    } else if ((x > 0) && (y < 0)) {

        alert(4);

    } else if ((x < 0) && (y > 0)) {

        alert(2);
    } else {

        alert(3);
    };
};

find(x,y);