"use strict"


let numberOfFilms;
while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
}
console.log(numberOfFilms);

const personalMovieDB = {
    count:numberOfFilms,
    movie: {
        movies: {}
    },
    actors: {},
    genners: [],
    private: false
};

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

for (let i = 0;i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""), //1)
          b = prompt("На сколько оцените его?", "");
          
          
          if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movie.movies[a]=b;
            console.log("Gotovo");
          }
          else {
            console.log("Error");
            i--;
          }

};

console.log(personalMovieDB.movie.movies);
