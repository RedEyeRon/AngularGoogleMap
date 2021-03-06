var app = angular.module('coord', ["ngClipboard"]);

app.directive('coord', function () {
    return {
        restrict: 'E',

        template: '{{label}}' +
        //'<textarea ng-model="coordy" size="35"></textarea>' +
        '<input type="text" ng-model="coord" size="35">' +
        '<img ng-src="{{statusIcon()}}" class="img-thumbnail" ng-click="convert();"/>' +
        //'<button class="btn btn-default" clip-copy="coordy" clip-click-fallback="fallback(copy)" clip-click="showMessage()">Copy!</button>' +
        //'<button class="btn btn-default" ng-click="runIt()">Eval!</button>' +
        '',

        controller: function ($scope) {
            $scope.coord = "";

            $scope.fallback = function (copy) {
                window.prompt('Press cmd+c to copy the text below.', copy);
            };
            $scope.showMessage = function () {
                console.log("clip-click works!");
            };


            $scope.convert = function () {

                if (CoordTools.isEcefArr($scope.coord.trim().split(",")))
                    $scope.coord = CoordTools.convertTextEcefToLlh($scope.coord, ',');
                else if (CoordTools.isLatLonAltDegreeMeterArr($scope.coord.trim().split(',')))
                    $scope.coord = CoordTools.convertTextLlhToEcef($scope.coord, ',');
            };
            $scope.statusIcon = function () {
                if (CoordTools.isEcefArr($scope.coord.trim().split(",")))
                    return "components/CoordinateInput/img/Letter-E-lg-icon.png"
                else if (CoordTools.isLatLonAltDegreeMeterArr($scope.coord.trim().split(',')))
                    return "components/CoordinateInput/img/Letter-L-lg-icon.png"
                else
                    return "components/CoordinateInput/img/sign-warning-icon.png"
            }
        }
        ,

        scope: {
            label: '@label'
        }
    };
})
;

