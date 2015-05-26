
var app = angular.module('coord', []);

app.directive('coord', function(){
    return {
        restrict: 'E',

        template:
            '{{label}}' +
            '<input type="text" ng-model="coord">' +
            '<img ng-src="{{statusIcon()}}" class="img-thumbnail" ng-click="convert();"/>',

        controller: function($scope) {
            $scope.coord = "";
            $scope.convert = function () {
                $scope.coord = $scope.coord === "E" ?  'L' : 'E';
            };
            $scope.statusIcon = function() {
                if ($scope.coord === "E")
                    return "img/Letter-E-lg-icon.png"
                else if ($scope.coord === "L")
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
