"use strict";

// Callback — это функция, которая передается как аргумент другой функции и вызывается после того, как эта функция завершит выполнение.

function first() {
    // Do something 
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) { 
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() { // Сюда передается функция callback для очередности
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); // Сюда передается функция callback через функцию done