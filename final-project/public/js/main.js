const footerDateYearContainer = document.querySelector('.footer__date-year');

window.initMap = initMap;

function initMap() {
    const mapContainer = document.querySelector('#map');
    if (mapContainer) {
        const lat = parseFloat(mapContainer.dataset.lat);
        const lng = parseFloat(mapContainer.dataset.lng);

        const location = { lat: lat, lng: lng };
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: location,
        });

        const marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    }
}
