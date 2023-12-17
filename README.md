### Библиотека sumlab-lib-jsapi для упрощения работы с <a href="https://yandex.ru/dev/jsapi-v2-1/doc/ru/">API Яндекс Карт 2.1</a>

Библиотека ускоряет работу с технологией API Яндекс Карт. Для работы потребуется получить <a href="https://developer.tech.yandex.ru/">API Key</a> для Яндекс Карт.<br><br>

#### Начало работы

1. Подключите два скрипта:<br>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=ВАШ_АПИ_КЛЮЧ"></script><br>
<script src="./sumlab-lib-jsapi.js"></script><br><br>

2. Создайте контейнер для карты:<br>
<div class="map1" id="map1"></div><br><br>

3. Инициализируйте карту и настройте её:<br>
<code>
let map1 = new SumlabLibJSapi({
    idMap: 'map1',
    center: [55.9, 37.5],
    zoom: 10
});
<code>

С готовыми примерами можете ознакомиться в директории Examples.
