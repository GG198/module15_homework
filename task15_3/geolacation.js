'use strict';

/* Сверстайте кнопку, клик на которую будет выводить на экран следующие данные:
1. Размеры экрана пользователя (ширина и высота).
2. Координаты местонахождения пользователя. Если пользователь отказался дать доступ к местоположению 
или данная функция недоступна в бразуере,
вывести вместо координат сообщение «Информация о местоположении недоступна». */

//1. Размеры экрана пользователя (ширина и высота)
console.log(`Размеры экрана пользователя:  ширина - ${screen.width}, высота - ${screen.height}`);

// Найдем наши элементы на странице html
const btn = document.querySelector('.btn');
const status = document.querySelector('#status');
const linkMap = document.querySelector('#map-link');

//2. Координаты местонахождения пользователя

//Создадим функции при получении ошибки и успешного получения геолокации
//получение ошибки
const error = () => {
    status.textContent = 'Информация о местоположении недоступна';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
    // console.log('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    linkMap.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    linkMap.textContent = 'Ссылка на карту';
}


//Установим обработчик click. 
btn.addEventListener('click', () => {
    //1.На случай,если запрос по геолокации уже производился - удаляем hef  и текст внутри
    linkMap.href = '';
    linkMap.textContent = '';

    //Проверим поодержку браузером пользовтеля геолокации.Для этого проверяем наличае geolocation в navigator
    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
});
