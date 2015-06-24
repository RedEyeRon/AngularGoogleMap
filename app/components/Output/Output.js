(function() {
    var app = angular.module('output', ['ngPopup']);

    app.controller("outputCtrl", function($scope, $timeout){

        $scope.eventArray = [];
        $scope.config = {
            modelName:"Model1",
            width: 435,
            height:200,
            templateUrl:"components/Output/Output.html",
            pinned:true,
            resizable:true,
            draggable:true,
            position: {top: 0, left : 10},
            title:"Title1",
            hasTitleBar: true,
            isShow: true,
        };

        $scope.init = function($spanId) {
            $scope.spanId = $spanId;
        };
        $timeout(function (value) {//I change here
            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/clouds");
            editor.getSession().setMode("ace/mode/javascript");

        }, 0);

    });


})();
