'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovieSeen = prompt('Один из последних просмотренных фильмов?', '');
const rateLastMovie = +prompt('На сколько оцените его?', '');
const lastMovieSeen1 = prompt('Один из последних просмотренных фильмов?', '');
const rateLastMovie1 = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[lastMovieSeen] = rateLastMovie; 
personalMovieDB.movies[lastMovieSeen1] = rateLastMovie1;

console.log(personalMovieDB);




