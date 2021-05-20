/* Задания на урок:



2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
         "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
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
    // create function for sort
    const sort = (arr) => {
        arr.sort();
    };
    // sort words from movieDB
    sort(movieDB.movies);
    // find names of movies
    const movieList = document.querySelector('.promo__interactive-list');

    // funciton for clear and show db
    function showClear(films, parent) {
        // sort films
        sort(films);
        // clear ul list on index.html
        parent.innerHTML = '';
        // // enter words form movieDB in index.html ul list
        films.forEach((film, i) => {
            // create li tags with words and numbers
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                showClear(movieDB.movies, movieList);
            });
        });
    }

    // add form from html
    const addForm = document.querySelector('form.add'),
    // add looked moives in data base -> moviesDB
    addLookedMovie = addForm.querySelector('.adding__input'),
    // checkbox get element
    favCheck =  addForm.querySelector('[type="checkbox"]');
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addLookedMovie.value;
        const favorite = favCheck.checked;

        if (newFilm) {
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
            
            movieDB.movies.push(newFilm);
            sort(movieDB.movies);
            showClear(movieDB.movies, movieList);
        }

        e.target.reset();
    });

    // // get all elements for delete 
    // const delElements = document.querySelectorAll('.promo__interactive-item');
    // // button for input value
    // const addBtn = document.querySelector('.add').lastElementChild;
    // // delete film from looked
    // const del = document.querySelectorAll('.delete');
    // console.log(del);

    // del.forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //         console.log('click');
    //         btn.parentElement.remove();
    //     });
    // });
    // addBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     // create empty string
    //     let val = addLookedMovie.value;
    //     let short = '';
    //     // if input value more then 21 char trim and add ...
    //     if (val.length > 21) {
    //         short = val.slice(0, 20) + '...';
    //     } else {
    //         // esle add value
    //         short = val;
    //     }
    //     // if movieDB.movies haven't the string add it 
    //     if (!movieDB.movies.includes(short)) {
    //         movieDB.movies.push(short);
    //         showClear();
    //     }
    //     if (favCheck.checked) {
    //         console.log('Add favorite movie!');
    //     }

    // });

    // call funciton for clear and show db
    showClear(movieDB.movies, movieList);

});





