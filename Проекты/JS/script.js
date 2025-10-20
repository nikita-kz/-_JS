"use strict"

// let numberOfFilms;


// const personalMovieDB = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genners: [],
//     private: false,
//     start: function () {
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// }
// console.log(personalMovieDB.numberOfFilms);
// },

//     writeYourGenres: function() {
//     for (let i=1; i <= 3; i++) {
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        
//         if (genre == null || genre === '') {
//             console.log('Неправильно');
//             i--;
//         } else {
//             personalMovieDB.genners[i-1] = genre;
//         }
       
//     }
//     personalMovieDB.genners.forEach((item, i) => {
//         console.log(`Ваш любимый жанр ${i+1} это ${item}`);
//     })
//     console.log(personalMovieDB.genners);
// },

//     showMyDB: function() {
//         if (personalMovieDB.private == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log("Error");
//     }
// },
// detectedPersonalLevel: function() {
//     if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов")
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {  //3)
//     console.log("Вы классический зритель")
// } else if (personalMovieDB.count > 30) {
//     console.log("Вы киноман");
// } 
// else {
//     console.log("Произошла ошибка")
// };
// },
//  rememberMyFilms: function() {
//    for (let i = 0;i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""), //1)
//           b = prompt("На сколько оцените его?", "");
          
          
//           if (a != null && b != null && a != '' && b != '' && a.length < 50){ //2
//             personalMovieDB.movies[a]=b;
//             console.log("Gotovo");
//           }
//           else {
//             console.log("Error");
//             i--;
//           }
// };
// },
// toggleVisibleMyDB: function () {
// if (personalMovieDB.private) {
//     personalMovieDB.private = false;
// } else {
//     personalMovieDB.private = true;
//     console.log(personalMovieDB);
// }
// }
// };

// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();
// personalMovieDB.detectedPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.toggleVisibleMyDB();

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByName('circle'),
      hearts = document.querySelectorAll('heart'),
      oneHeart = document.querySelector('.heart');


const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);
//console.log(div);