'use strict';
/* Task15_2 Сверстать кнопку, которая будет содержать в себе icon_01. 
При клике на кнопку иконка должна меняться на icon_02. 
Повторный клик меняет иконку обратно. */

// Ищем кнопку на странице HTML
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn_icon');
const newIcon = document.querySelector('#btn--magic');
const visibleIcon = document.querySelector('.visibility')

//Вешаем обработчик события на клик
btn.addEventListener('click', () => {
    // btn.classList.toggle('btn_icon');
    icon.classList.toggle('visibility');
    newIcon.classList.toggle('visibility');
   });  

