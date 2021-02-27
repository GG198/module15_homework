'use strict';
/* Реализовать чат на основе эхо-сервера wss://echo.websocket.org/
1.Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат.
2.Добавить в чат механизм отправки гео-локации
 При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку 
 на https://www.openstreetmap.org/ с вашей гео-локацией.
 */

const wsUrl = "wss://echo.websocket.org/";

//Код,который выпонится после полной загрузки страницы
function pageLoaded() {
    //Найдем элементы на странице
  const textOutput = document.querySelector(".text_output");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.getElementById("input");
  const btn = document.querySelector(".btn");

    //Создадим экземпляр класса webSocket. Для этого установим WebSocket-соединение.
     let webSocket = new WebSocket(wsUrl);

  // Событие open отправит первоночальное собщение о состоянии подключения:
  //соединение установлено,произошла ошибка ...
    webSocket.onopen = () => {
        textOutput.innerText = "Соединение установлено";
      }

    //Выводим сообщение введенное пользователем
    webSocket.onmessage = (event) => {
    chatMessage(event.data, true);
  }

    // Ошибка при передаче данных
   webSocket.onerror = () => {
    textOutput.innerText = "При передаче данных произошла ошибка";
  }

    // Навесим обработчик клика на кнопку
    btn.addEventListener("click", sendMessage);

    function sendMessage() {
        //если пользователь ничего не ввел,то сообщение не отправляется,выходим из функйии
         if (!input.value) return;
        //отправим сообщение в webSocket 
         webSocket.send(input.value);
        //выведем отправленное сообщение пользователю(isRecieved = false)
        chatMessage(input.value, false);
        //очистим импут.
        input.value === "";
    }

    //В функции два аргумента,тк необходимо выводить сообщение соответственно классу(recieved/recieved).
    //Для этого используем тернарное выражение

  function chatMessage(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
        //используем конкатенацию.
          chatOutput.innerHTML += messageHTML;
    }
}


//Добавим обработчик события DOMContentLoaded,
//чтобы код выполнялся после полной загрузки страницы
document.addEventListener("DOMContentLoaded", pageLoaded);
