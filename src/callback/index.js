function sum(num1, num2){
    return num1 + num2;
}

//encapsulamiento
function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(6, 2, sum));

//manejando los tiempos
function hoy(callback){
    console.log(new Date);
    setTimeout(function(){
        let dia = new Date;
        callback(dia);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

hoy(printDate);