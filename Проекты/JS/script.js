"use strict"


const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genners: [],
    private: false
};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {  //3)
    console.log("Вы классический зритель")
} else if (personalMovieDB.count == null) {
    console.log("Произошла ошибка")
} 
else {
    console.log("Вы киноман");
};

for (let i = 0;i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""), //1)
          b = prompt("На сколько оцените его?", "");


          if (a || b == null){
            const a = prompt("Один из последних просмотренных фильмов?", "");
          }
          else if (a || b !== null){

          }
          else if (a || b > 50){

          };

          personalMovieDB.movies[a]=b;
};

console.log(personalMovieDB.movies);

/*А если не подошло ни к одному варианту - "Произошла ошибка" (надо добавить это условие)*/

