(function () {
    var app = angular.module('mapToolsSrv', []);

    app.service('MapToolsSrv', function() {

        var infoWindow;

        // place a marker
        this.setMarker = function setMarker(map, markers, lat, lon, alt, title, content) {
            var marker;
            var markerOptions = {
                position: new google.maps.LatLng(lat, lon),
                map: map,
                title: title,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array

            google.maps.event.addListener(marker, 'click', function () {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        };

        this.clearMarkers = function clearMarkers(map, markers) {
            var markerCount = markers.length;
            for (var i = 0; i < markerCount; i++)
                markers[i].setMap(null);

            bounds = new google.maps.LatLngBounds();
        };

    });

})();
