(function() {
    var app = angular.module('output', ['ngPopup']);

    app.controller("outputCtrl", function($scope){

        $scope.eventArray = [];
        $scope.config = {
            modelName:"OutputModel",
            width: 435,
            height:200,
            templateUrl:"components/Output/Output.html",
            pinned:false,
            resizable:true,
            draggable:true,
            position: {top: screen.height/3 + 210, left : 10},
            title:"Output",
            hasTitleBar: true,
            isShow: true,
        };

        $scope.init = function($outputId) {
            $scope.outputId = $outputId;
        };

        $scope.println = function(str) {
            document.getElementById($scope.outputId).innerHTML += str + "<br>";
        }

    });


})();
