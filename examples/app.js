// Создаём карту
let map1 = new SumlabLibJSapi({
    idMap: 'map1',
    center: [55.9, 37.5],
    zoom: 10
});



// Меняем параметры карты
// map1.editMap({
//     center: [55.9, 37.5],
//     zoom: 5
// });



// Добавляем метки по адресу
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
    },{
        // Адрес метки
        address: 'Москва, улица Тверская, 10',
        // Заголовок всплывающего сообщения
        balloonTitle: 'Заголовок всплывающего сообщения',
        // Описание всплывающего сообщения
        balloonDescription: 'Описание всплывающего сообщения',
        // Текст внутри метки
        iconContent: 'Москва, улица Тверская, 10',
        // Текст возле метки
        iconCaption: 'Текст возле метки',
    }
]);



// Добавляем метки по координатам
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



// Удаляем карту
// map1.destroyMap();