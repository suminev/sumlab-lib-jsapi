class SumlabLibJSapi {
    // Инициализируем карту
    constructor(params = {
        idMap: 'map',
        center: [55.7, 37.5],
        zoom: 5
    }){
        this.map = null;
        ymaps.ready(() => {
            this.map = new ymaps.Map(params.idMap, {
                center: params.center,
                zoom: params.zoom,
                controls: ['zoomControl']
            });
        })
    }

    // Меняем параметры карты
    editMap(params = {
        idMap: 'map',
        center: [55.7, 37.5],
        zoom: 5
    }){
        ymaps.ready(() => {
            this.map.setCenter(params.center, params.zoom, {
                checkZoomRange: true
            });
        })
    }

    // Добавляем метки по адресу
    addPointsToAddress(params = {}, points = []){
        ymaps.ready(() => {
            let myCollection = new ymaps.GeoObjectCollection({}, {
                preset: `islands#${params.color}${params.type}`,
                draggable: false,
            });

            for (const n in points) {
                let el = points[n];
                let address = el.address;
                let title = el.balloonTitle;
                let description = el.balloonDescription;
                let iconContent = el.iconContent;
                let iconCaption = el.iconCaption;

                ymaps.geocode(address).then(function (res) {
                    let firstGeoObject = res.geoObjects.get(0)
                    let coords = firstGeoObject.geometry.getCoordinates();
                    myCollection.add(new ymaps.Placemark(coords, {
                        balloonContentHeader: title,
                        balloonContent: description,
                        balloonContentBody: description,
                        iconContent: iconContent,
                        iconCaption: iconCaption,
                    }));
                });
            }
            this.map.geoObjects.add(myCollection);
        })
    }

    // Добавляем метки по координатам
    addPointsToCoords(params = {}, points = []){
        ymaps.ready(() => {
            let myCollection = new ymaps.GeoObjectCollection({}, {
                preset: `islands#${params.color}${params.type}`,
                draggable: false,
            });

            for (const n in points) {
                let el = points[n];
                let coords = el.coords;
                let title = el.balloonTitle;
                let description = el.balloonDescription;
                let iconContent = el.iconContent;
                let iconCaption = el.iconCaption;

                myCollection.add(new ymaps.Placemark(coords, {
                    balloonContentHeader: title,
                    balloonContent: description,
                    balloonContentBody: description,
                    iconContent: iconContent,
                    iconCaption: iconCaption,
                }));
            }
            this.map.geoObjects.add(myCollection);
        })
    }

    // Удаляем карту
    destroyMap(){
        ymaps.ready(() => {
            this.map.destroy();
        })
    }
    
}