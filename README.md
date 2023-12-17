## Библиотека sumlab-lib-jsapi для упрощения работы с <a href="https://yandex.ru/dev/jsapi-v2-1/doc/ru/">API Яндекс Карт 2.1</a>
Библиотека ускоряет работу с технологией API Яндекс Карт. Для работы потребуется получить <a href="https://developer.tech.yandex.ru/">API Key</a> для Яндекс Карт.

### Начало работы
1. Подключите два скрипта:
```
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=ВАШ_АПИ_КЛЮЧ"></script>
<script src="./sumlab-lib-jsapi.js"></script>
```
2. Создайте контейнер для карты:
```
<div class="map1" id="map1"></div>
```
3. Инициализируйте карту и настройте её:
```
let map1 = new SumlabLibJSapi({
    idMap: 'map1',
    center: [55.9, 37.5],
    zoom: 10
});
```
4. Настройте карту:
Добавьте метки по адресу
```
map1.addPointsToAddress({
    // Тип меток: Icon, StretchyIcon, DotIcon, CircleIcon, CircleDotIcon
    type: 'StretchyIcon',
    // Цвета меток: blue, red, darkOrange, night, darkBlue, pink, gray, brown, darkGreen, violet, black, yellow, green, orange, lightBlue, olive
    color: 'blue',
},[
    {
        // Адрес метки
        address: 'Москва, улица Казакова, 8с1',
        // Заголовок всплывающего сообщения
        balloonTitle: 'Заголовок всплывающего сообщения',
        // Описание всплывающего сообщения
        balloonDescription: 'Описание всплывающего сообщения',
        // Текст внутри метки
        iconContent: 'Москва, улица Казакова, 8с1',
        // Текст возле метки
        iconCaption: 'Текст возле метки',
    }
]);
```
Добавьте метки по координатам:
```
map1.addPointsToCoords({
    // Тип меток: Icon, StretchyIcon, DotIcon, CircleIcon, CircleDotIcon
    type: 'StretchyIcon',
    // Цвета меток: blue, red, darkOrange, night, darkBlue, pink, gray, brown, darkGreen, violet, black, yellow, green, orange, lightBlue, olive
    color: 'blue',
},[
    {
        // Координаты метки
        coords: [55.9, 37.5],
        // Заголовок всплывающего сообщения
        balloonTitle: 'Заголовок всплывающего сообщения',
        // Описание всплывающего сообщения
        balloonDescription: 'Описание всплывающего сообщения',
        // Текст внутри метки
        iconContent: '55.9, 37.5',
        // Текст возле метки
        iconCaption: 'Текст возле метки',
    },{
        // Координаты метки
        coords: [55.2, 36.1],
        // Заголовок всплывающего сообщения
        balloonTitle: 'Заголовок всплывающего сообщения',
        // Описание всплывающего сообщения
        balloonDescription: 'Описание всплывающего сообщения',
        // Текст внутри метки
        iconContent: '55.2, 36.1',
        // Текст возле метки
        iconCaption: 'Текст возле метки',
    }
]);
```
Удалите карту:
```
map1.destroyMap();
```
С готовыми примерами можете ознакомиться в директории Examples.
