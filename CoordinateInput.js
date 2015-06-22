
    var app = angular.module('coord', []);

    app.directive('coord', function () {
        return {
            restrict: 'E',

            template: '{{label}}' +
            '<input type="text" ng-model="coord">' +
            '<img ng-src="{{statusIcon()}}" class="img-thumbnail" ng-click="convert();"/>',

            controller: function ($scope) {
                $scope.coord = "";
                $scope.convert = function () {
                    if (CoordTools.isEcefArr($scope.coord.trim().split(",")))
                        $scope.coord = CoordTools.convertTextEcefToLlh($scope.coord);
                    else if (CoordTools.isLatLonAltDegreeMeterArr($scope.coord.trim().split(',')))
                        $scope.coord = CoordTools.convertTextLlhToEcef($scope.coord);
                };
                $scope.statusIcon = function () {
                    if (CoordTools.isEcefArr($scope.coord.trim().split(",")))
                        return "img/Letter-E-lg-icon.png"
                    else if (CoordTools.isLatLonAltDegreeMeterArr($scope.coord.trim().split(',')))
                        return "img/Letter-L-lg-icon.png"
                    else
                        return "img/sign-warning-icon.png"
                }
            },

            scope: {
                label: '@label'
            }
        };
    });

