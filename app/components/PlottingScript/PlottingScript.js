(function () {
    var app = angular.module('plottingScript', ['ngPopup', 'ui.ace', 'mapToolsSrv']);

    app.controller("plottingScript", function ($scope, MapToolsSrv) {



        $scope.editorScript = "" +
            "\n" +
            "var v1 = new Vehicle(33.30, -112.0, 1100);\n" +
            "v1.setEcefVelocity(1609.34,1609.34,1609.34);\n" +
            "\n" +
            "for (var i = 1; i <= 10; i++) {\n" +
            "    var llh = v1.getLlh();\n" +
            "    print(llh[0].toPrecision(9) + ',' + llh[1].toPrecision(9) + ',' + llh[2].toPrecision(5));\n" +
            "    setMarker(llh[0], llh[1], llh[2], 'Point ' + i, 'Point ' + i + ' details!');\n" +
            "    v1.go(1);\n" +
            "}\n" +
            "";

        //try {
        //    $scope.editorScript = angular.fromJson(sessionStorage.userService);
        //} catch(e) {
        //}


        $scope.eventArray = [];
        $scope.config = {
            modelName: "ScriptPlottingModel",
            width: 535,
            height: 400,
            templateUrl: "components/PlottingScript/PlottingScript.html",
            pinned: false,
            resizable: true,
            draggable: true,
            position: {top: screen.height /3 - 210, left: 10},
            title: "Script Plotting",
            hasTitleBar: true,
            isShow: true
        };

        var markers = [];

        $scope.aceLoaded = function(_editor) {
            _editor.$blockScrolling = Infinity
        };

        $scope.aceChanged = function(e) {
           sessionStorage.userService = angular.toJson($scope.editorScript);
        };

        $scope.init = function ($winId) {
            $scope.winId = $winId;
            $scope.config.title = $winId;
        };

        // place a marker
        function setMarker(lat, lon, alt, title, content) {
            MapToolsSrv.setMarker($scope.mainMap, markers, lat, lon, alt, title, content);
        }

        $scope.clearMarkers = function clearMarkers() {
            MapToolsSrv.clearMarkers($scope.mainMap, markers);
        };

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
