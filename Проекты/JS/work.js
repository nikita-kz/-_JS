"use strict";

// https://daruse.ru/zadaniya-po-js-dlya-prokachki

// -------------------------------------------------- Базовые

// function proizvedenie (a, b) {                                 (1)
//     console.log(a * b);
// } proizvedenie (5, 8)

// --------------------------------------------------

// function Hello (name, surname, age) {                          (2)
//     console.log(`Privet ${name} ${surname}, tebe ${age} goda`); 
// }
// Hello("Nikita", "Provozin", 22);

// --------------------------------------------------

// function MenOrWomen (sex) {                                    (3)
//     switch (sex) {
//         case 'M':
//             console.log('Men');
//             break;
//         case 'W':
//             console.log('Women')
//             break;
//         default:
//             console.log('Error');
//         break;
//     }
// } MenOrWomen('M');

// --------------------------------------------------

// const numDay = 5;                                              (4)

// const DayofWeek = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };

// for (let key in DayofWeek) {
//     if (numDay == key) {
//         console.log(`Today ${DayofWeek[key]}`);
//     }
// } 
// --------------------------------------------------
// const text = 'В Томске рисуют графити. Художники работают на Пушкина. Тема графити порталы. Завершение работ планируется в октярбре';
// const newText = text.split('. ');                      (5)
// console.log(newText);
// --------------------------------------------------

//   

// let OneMore = [];

// function NewArray () {

//     for (let i = 0; i<100;i++) {
//         OneMore[i]=i+1;
// }

// if (OneMore>= 1 || OneMore <= 17){
//     console.log("Children");
// }
// console.log(OneMore)
// }NewArray();

// --------------------------------------------------

// let age = 1;                                    (7)

// while (age < 100) {
//     if (age < 17) {
//         console.log("Children");
//     } else if (age >= 17 && age <=30) {
//         console.log("Yuong");
//     } else {
//         console.log("Vzrosliy")
//     }
//     age ++;
// }

// console.log("Hey");


// -------------------------------------------------- Массивы

// const testArr1 = [10, 2, 4, 4, 8];      (1)
// function proverka () {
// let chet_1 = 0;
//     for (let i = 0; i < testArr1.length; i++) {
//         if (testArr1[i] % 2 === 0) {

//         }
//         else {
//             chet_1++;
//             console.log("False");
//         }
//     } 
//     if (chet_1 == 0){
//         console.log('Весь массив чётный');
//     }
//         console.log(`Счётчик ${chet_1}`);
        
// } proverka(testArr1);

// let Bigarray = [1, 5, 30, 2, 50, 22];           (2)
// let Cleanarray = [];

// function otbor (Bigarray, Cleanarray) {
//     for (let i = 0; i<Bigarray.length; i++) {
//         if (Bigarray[i] % 5 === 0) {
//             Cleanarray.push(Bigarray[i]);
//         }
//     }
//     console.log(`massiv - ${Cleanarray}`);
// } otbor(Bigarray, Cleanarray);
// console.log(Cleanarray);

// function learnJS (a, b, callback) {
//     console.log(a + b);
//     callback();
// } learnJS(5, 10, done);

// function done () {
//     console.log('Это сумма');
// }


// const array = [1, 2, 3, 4, 5, 6, 7];
// const NewArray = [];

// array.forEach((elem) => {
//     console.log(elem + 1);
// })


// let salaries = {
//     Max: 100,
//     Oleg: 150,
//     Lexa: 130
// }

// let sum = 0;

// for (let key in salaries) {
//     for (let i in salaries[key]) {
//         console.log(salaries[key]);
//     }
// }

// console.log(sum);

// const Oldarray = ['1', '4', '7', '10', '2', '4'];
// const NewArray = Oldarray.slice(-3);
// console.log(NewArray);

// Используя slice, создаём newCar из myCar.
// var myHonda = {
//   color: "красный",
//   wheels: 4,
//   engine: { cylinders: 4, size: 2.2 },
// };
// var myCar = [myHonda, 2, "в хорошем состоянии", "приобретена в 1997"];
// var newCar = myCar.slice(0, 2);
// console.log('newCar - ' + newCar);
// // Отображаем значения myCar, newCar и цвет myHonda
// //  по ссылкам из обоих массивов.
// // console.log("myCar = " + myCar.toSource());
// // console.log("newCar = " + newCar.toSource());
// // console.log("myCar[0].color = " + myCar[0].color);
// // console.log("newCar[0].color = " + newCar[0].color);

// // Изменяем цвет myHonda.
// myHonda.color = "багровый";
// console.log("Новый цвет моей Honda - " + myHonda.color);

// // Отображаем цвет myHonda по ссылкам из обоих массивов.
// console.log("myCar[0].color = " + myCar[0].color);
// console.log("newCar[0].color = " + newCar[0].color);

function Dog () {
// this привязывается к новому объекту
  this.name = 'Cheems'
}

// создаём новый объект Dog
const firstDog = new Dog();


console.log(firstDog.name);