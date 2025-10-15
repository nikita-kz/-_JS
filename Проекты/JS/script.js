"use strict"


let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genners: [],
    private: false
};

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {  //3)
    console.log("Вы классический зритель")
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} 
else {
    console.log("Произошла ошибка")
};
}
detectedPersonalLevel();
 

function rememberMyFilms() {
   for (let i = 0;i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""), //1)
          b = prompt("На сколько оцените его?", "");
          
          
          if (a != null && b != null && a != '' && b != '' && a.length < 50){ //2
            personalMovieDB.movies[a]=b;
            console.log("Gotovo");
          }
          else {
            console.log("Error");
            i--;
          }
};
}
rememberMyFilms();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    } else {
        console.log("Error");
    }
}
showMyDB();

function writeYourGenres() {
    for(let i=1;i < 4;i++){
        personalMovieDB.genners[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
        console.log(personalMovieDB.genners);
    }
}
writeYourGenres();

console.log(personalMovieDB.movies);

/*А если не подошло ни к одному варианту - "Произошла ошибка" (надо добавить это условие)*/