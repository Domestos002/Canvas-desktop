ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("park-location-map", {
        center: [55.82493217555326,36.9955165873718],
        zoom: 12,
        controls: ['zoomControl']

    });
    myMap.behaviors.disable('scrollZoom');
    myPlacemark = new ymaps.Placemark([55.82493217555326,36.9955165873718], {
        hintContent: 'Москва!',
        balloonContent: 'Столица России'
    });

    myMap.geoObjects.add(myPlacemark);
}