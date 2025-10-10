"use strict"


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genners: [],
    private: false
};



const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt ("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;


/*А если не подошло ни к одному варианту - "Произошла ошибка" (надо добавить это условие)*/
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель")
} else if (personalMovieDB.count == null) {
    console.log("Произошла ошибка")
} 
else {
    console.log("Вы киноман");
};

console.log(personalMovieDB.movies)
