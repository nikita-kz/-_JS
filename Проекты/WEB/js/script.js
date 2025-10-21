/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма" +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. , +
<promo__bg>
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const Reklama = document.querySelectorAll('.promo__adv img'), // (1)
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'), // (2)
      films = document.querySelector('.promo__interactive-list');

Reklama.forEach(item => {  // (1)
    item.remove();
});
genre.textContent = 'Драма'; // (2)
poster.style.backgroundImage = 'url("img/bg.jpg")'; // (3)

films.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    films.innerHTML += `<li class="promo__interactive-item">${ i+1} ${film}
                            <div class="delete"></div>
                        </li>`
});



// console.log(poster);
//console.log(Reklama);
// console.log(BgElements);
// console.log(genre);



