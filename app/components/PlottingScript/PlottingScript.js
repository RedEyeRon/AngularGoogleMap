(function () {
    var app = angular.module('plottingScript', ['ngPopup', 'ui.ace']);

    app.controller("plottingScript", function ($scope, $timeout) {


        $scope.editorScript = "" +
            "\n" +
            "var lat = 33.30, lon = -112.0, alt = 1100;\n" +
            "\n" +
            "for (var i = 0; i < 10; i++) {\n" +
            "    print(lat.toPrecision(9) + ',' + lon.toPrecision(9) + ',' + alt.toPrecision(5));\n" +
            "    setMarker(lat, lon, alt, 'Point ' + i);\n" +
            "    lat += 0.01;\n" +
            "    lon += 0.01;\n" +
            "}\n" +
            "";

        $scope.eventArray = [];
        $scope.config = {
            modelName: "ScriptPlottingModel",
            width: 435,
            height: 200,
            templateUrl: "components/PlottingScript/PlottingScript.html",
            pinned: false,
            resizable: true,
            draggable: true,
            position: {top: screen.height /3 - 210, left: 10},
            title: "Script Plotting",
            hasTitleBar: true,
            isShow: true
        };

        var infoWindow;
        var markers = [];
        var iggy;

        $scope.aceLoaded = function(_editor) {
            _editor.setReadOnly(false);
        };

        $scope.aceChanged = function(e) {
        };

        $scope.init = function ($winId) {
            $scope.winId = $winId;
            $scope.config.title = $winId;
        };

        // place a marker
        function setMarker(lat, lon, alt, title, content) {
            var map = $scope.mainMap;
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
        }

        $scope.clearMarkers = function clearMarkers() {
            var markerCount = markers.length;
            for (var i = 0; i < markerCount; i++)
                markers[i].setMap(null);

            bounds = new google.maps.LatLngBounds();
        };

        $timeout(function (value) {//I change here
            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/clouds");
            editor.getSession().setMode("ace/mode/javascript");

        }, 0);

        function print(str) {
            var elem = document.getElementById('outputId');
            elem.innerHTML += str + "<br>";
        }

        $scope.runIt = function () {
            var out;
            try {
                out = eval($scope.editorScript);
            }
            catch (err) {
                out = err;
            }
            console.log("Eval: " + out);
            print("Result: " + out);
        };

    });

})();
