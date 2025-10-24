/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +   

2) Изменить жанр фильма, поменять "комедия" на "драма" +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. , 
<promo__bg>
Реализовать только при помощи JS +

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'), //весь блок "Добавить новый фильм"
          addInput = addForm.querySelector('.adding__input'), //графа для ввода "Что уже просмотрено"
          checkbox = addForm.querySelector('[type="checkbox"]');      
    
    
    // console.log(addForm);
    // console.log(addInput);
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();        

        let newFilm = addInput.value;
        let favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 20)}...`;
            }
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
            
        event.target.reset();
    }); 

    
    console.log(movieDB.movies);
    
    const deleteAdv = (adv_block) => {
        adv_block.forEach(item => {
            item.remove();
    });
    }; 

    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }; 

    const sortArray = (arr) => {
        arr.sort();
    }; 

    function createMovieList (films, parent) {
        parent.innerHTML = "";
        sortArray(films);
        films.forEach((film, i) => {
        parent.innerHTML += `<li class="promo__interactive-item"> ${i+1} ${film}
                            <div class="delete"></div>
                        </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            });
        });
        
    };

    deleteAdv(adv);
    sortArray(movieDB.movies);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});

      
