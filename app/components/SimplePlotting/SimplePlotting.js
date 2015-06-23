(function() {
    var app = angular.module('simplePlotting', ['ngPopup']);

    app.controller("simplePlotting", function($scope){

        $scope.eventArray = [];
        $scope.config = {
            modelName:"Model1",
            width: 435,
            height:200,
            templateUrl:"components/SimplePlotting/SimplePlotting.html",
            pinned:true,
            resizable:true,
            draggable:true,
            position: {top: screen.height/2, left : 10},
            title:"Title1",
            hasTitleBar: true,
            isShow: true
        }

        var infoWindow;
        var markers = [];
        var iggy

        $scope.init = function($winId, $lat, $lon)
        {
            $scope.winId = $winId;
            $scope.config.title = $winId;
            iggy = new google.maps.LatLng($lat, $lon)
        };

        // place a marker
        function setMarker(position, title, content) {
            var map = $scope.mainMap
            var marker;
            var markerOptions = {
                position: position,
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
        }

        $scope.clearMarkers = function clearMarkers() {
            var markerCount=markers.length;
            for(var i=0;i<markerCount;i++)
                markers[i].setMap(null);

            bounds=new google.maps.LatLngBounds();
        };

        $scope.findIggy = function() {
            setMarker(iggy, 'IGGY!', 'Just some content');
        };
    });

})();
