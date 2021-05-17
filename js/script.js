/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// document.querySelector('.promo__adv').remove();
// find prom img from index.html
const promoImg = document.querySelectorAll('.promo__adv img');
// delete promo img from promo
promoImg.forEach(item => {
    item.remove();
});
// rename title of movie
document.querySelector('.promo__genre').textContent = 'Драма';
// find bg image tag
const bgImg = document.querySelector('.promo__bg');
// change image
bgImg.style.cssText = `background: url(img/bg.jpg) center center/cover no-repeat`;
// sort words from movieDB
movieDB.movies.sort();
// find names of movies
const movieList = document.querySelector('.promo__interactive-list');
// enter words form movieDB in index.html ul list
movieList.innerHTML = '';
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
    </li>
    `;
});




