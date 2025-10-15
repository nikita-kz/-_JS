"use strict";

// https://daruse.ru/zadaniya-po-js-dlya-prokachki

// function proizvedenie (a, b) {                                 (1)
//     console.log(a * b);
// } proizvedenie (5, 8)

// function Hello (name, surname, age) {                          (2)
//     console.log(`Privet ${name} ${surname}, tebe ${age} goda`); 
// }
// Hello("Nikita", "Provozin", 22);

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

// const text = 'В Томске рисуют графити. Художники работают на Пушкина. Тема графити порталы. Завершение работ планируется в октярбре';
// const arrayText = getFirstWords(text);
// console.log(arrayText);
// function Text (t) {
    
//     console.log(txt);         (5)
// } Text(text_);

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

let age = 1;

while (age < 100) {
    if (age < 17) {
        console.log("Children");
    } else if (age > 17 && age <30) {
        console.log("Yuong");
    }
    age ++;
}

console.log("Hey");