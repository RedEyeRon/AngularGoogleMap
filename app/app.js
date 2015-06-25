(function () {
    var app = angular.module('myApp', ['ngPopup', 'coord', 'simplePlotting', 'ecefService', 'output', 'plottingJS', 'plottingScript']);

    //app.service('EcefService', function() {
    //
    //    this.method1 = function () {
    //        alert("Yoda");
    //    }
    //});

    app.directive('myMap', function (EcefService) {
        // directive link function
        var link = function (scope, element, attrs) {

            // map config
            var mapOptions = {
                center: new google.maps.LatLng(33.32, -112.0),
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.HYBRID,
                scrollwheel: true,
                rotateControl: true,
                overviewMapControl: true,
                mapTypeControl: true
            };

            // init the map
            function initMap() {
                if (scope.mainMap === void 0) {
                    scope.mainMap = new google.maps.Map(element[0], mapOptions);
                }
            }

            // show the map and place some markers
            initMap();
            EcefService.method1();
            //window.prompt("Copy to clipboard: Ctrl+C, Enter", "Yoda");

        };

        return {
            restrict: 'A',
            template: '<div id="gmaps"></div>',
            replace: true,
            link: link
        };
    });
})();
