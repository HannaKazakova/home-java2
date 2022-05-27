//1

let user = prompt ('Ваше имя');
let age = prompt ('Ваш возраст');
let city =  prompt ('Ваш город проживания');
let company =  prompt ('Ваша компания');
let phone = prompt ('Ваш телефон');
let email = prompt ('Ваш адрес электронной поты');

alert (`Меня зовут ${user}.` + '\n ' + `Мне`  +  `${age}`  +  'лет.' + '\n ' + `Я проживаю в городе ${city}.` + '\n ' + `Я работаю в ${company}.` + '\n ' + `Мои контактные данные: ${phone}  ${email}.` );

//2

let year=(2020 - age);

console.log(year);
console.log(user + 'родился в ' + year + 'году' );

//3

//let str = "121212";
let str = "333222";

if ( (Number(str[0]) + Number(str[1]) + Number(str[2])) ==  (Number(str[3]) + Number(str[4]) + Number(str[5])) ) {

console.log("да");
} 
else {
    console.log("нет");
}

//4

//let a = (1);
//let a = (0);
let a = (-3);

if(a > null){
    console.log("Верно");
 }
 else{
    console.log("Неверно");
 }

//5

let b = 10;
let c = 2;
 

console.log(b + c); 
console.log(b - c);
console.log(b * c);
console.log(b / c);

if((b + c)>1){
    console.log((b + c) * (b + c));
}
else{
    console.log("Неверно");
}

//6

if((b > 2 && b < 11) || (c >=  6 &&  c < 14)){
    console.log("Верно");
}
else{
    console.log("Неверно");
}


//7

let n = 45;

if(n <= 15){
    console.log("Первая четверть часа");
}
else if (n >= 16 && n <= 30){
    console.log("Вторая четверть часа");
}

else if(n >= 31 && n <= 45){
console.log("Третья четверть часа");
}

else if(n >= 46 && n <= 59){
console.log("Четвертая четверть часа");
}



//8

let day = 100;

if(day <=10){
    console.log("Первая декада месяца");
}
else if(day >= 11 && day <= 20){
    console.log("Вторая декада месяца");
}
else if(day >= 21 && day <= 31){
    console.log("Третья декада месяца");
}
else if(day > 31){
    console.log("Не такого");
}

//9


if(day == 365 ){
    console.log("1 год");
}
else if(day < 365 ){
    console.log("Меньше года");
}
else if(day > 365 && day <= 729){
    console.log("Больше года");
}

//10



switch(day){
    case 1 :
        console.log("Январь зима");
    break;

    case 2 :
        console.log("Февраль зима");
    break;
    case 3:
        console.log("Март весна");
    break;

    case 4:
        console.log("Апрель весна");
    break;

    case 5:
        console.log("Май весна");
    break;

    case 6 :
        console.log("Июнь лето");
    break;

    case 7 :
        console.log("Июль лето");
    break;

    case 8 :
        console.log("Август лето");
    break;

    case 9:
        console.log("Сентябрь осень");
    break;

    case 10:
        console.log("Октябрь осень");
    break;

    case 11:
        console.log("Ноябрь осень");
    break;

    case 12:
        console.log("Декабрь зима");
    break;
    default:
        console.log("Нет такого месяца и поры года");
}