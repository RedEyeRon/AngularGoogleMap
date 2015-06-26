(function() {
    var app = angular.module('simplePlotting', ['ngPopup', 'mapToolsSrv']);

    app.controller("simplePlotting", function($scope, MapToolsSrv){

        $scope.eventArray = [];
        $scope.config = {
            modelName:"simplePlottingModel",
            width: 435,
            height:200,
            templateUrl:"components/SimplePlotting/SimplePlotting.html",
            pinned:false,
            resizable:true,
            draggable:true,
            position: {top: screen.height/3, left : 10},
            title:"Title1",
            hasTitleBar: true,
            isShow: true
        };

        var markers = [];
        var iggyLat, iggyLon;

        $scope.init = function($winId, $lat, $lon)
        {
            $scope.winId = $winId;
            $scope.config.title = $winId;
            iggyLat = $lat;
            iggyLon = $lon;
        };

        $scope.clearMarkers = function() {
            MapToolsSrv.clearMarkers($scope.mainMap, markers);
        };

        $scope.findIggy = function() {
            MapToolsSrv.setMarker($scope.mainMap, markers, iggyLat, iggyLon, 'IGGY!', 'Just some content');
        };
    });

})();
