'use strict';

function pageLoaded() {
    //Найдем наши элементы на странице
    let btn = document.querySelector(".btn");
    //let timezone = document.getElementById('timezone');
    //let diteTime = document.getElementById('date_time');
    let output = document.getElementById('output');

    //Вешаем обработчик клика на кнопку
    btn.addEventListener('click', getLocation);

    function getLocation() {
        //Проверим возможность использования геолокации
        if ('geolocation' in navigator) {

            // getCurrentPosition имеет 3 callbak,два основных используем
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError)

        } else {
            writeOutput('Браузер не позволяет определить местоположения');
        }
    }

    //Запрос о местоположении выполнен успешно
    function locationSuccess(data) {
        // Отправим  fetch  запрос на API адрес сервиса
        //Для этого получим координаты местонахождения(ширина,долгота)
        let latitudeCoord = data.coords.latitude;
        let longitudeCoord = data.coords.longitude;
        let url = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitudeCoord}&long=${longitudeCoord}`;
        //fetch запрос
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let outputTxt = FormatDataOutput(data);
                writeOutput(outputTxt);
            })
    }

    //Если навигатору неудалось определить место положения.
    function locationError() {
        writeOutput('Местоположение не получено!')
    }


    function FormatDataOutput(data) {
        console.log(data);
        let html = `
  <p> <b>Часовой пояс: </b> ${data.timezone}</p>
  <p> <b>Местные дата и время: </b> ${data.date_time_txt}</p>
  `;
        return html;
    }

}

function writeOutput(message) {
    //Здесь. innerHTML получает разметку дочерних элементов.
    output.innerHTML = message;
}

//Вешаем обработчик DOMContentLoaded,чтобы код выполнился после всей загрузки ст
document.addEventListener('DOMContentLoaded', pageLoaded);