(function() {
	var app = angular.module('myApp', ['ngPopup', 'coord']);

	app.controller("textCtrl", function($scope) {
		$scope.text = 'win1';
	});

	app.controller("win1Ctrl", function($scope){
		$scope.winId = 'win1';

		var elem = document.getElementById($scope.winId).cloneNode(true);
		
		$scope.eventArray = [];
		$scope.config = {
		    modelName:"myDialog",
		    width: 435,
		    height:200,
		    dtemplateUrl:"myTemplate.html",
		    template:elem.innerHTML,
		    pinned:true,
		    resizable:true,
		    draggable:true,
		    position: {top: screen.height/2, left : 10},
		    title:"Some Function",
		    hasTitleBar: true,
		    isShow: true
		}
	});


	app.directive('myMap', function() {
	    // directive link function
	    var link = function(scope, element, attrs) {
		var map, infoWindow;
		var markers = [];
		
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
		    if (map === void 0) {
			map = new google.maps.Map(element[0], mapOptions);
		    }
		}
		
		
		// place a marker
		function setMarker(map, position, title, content) {
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
		
		// show the map and place some markers
		initMap();
		
		setMarker(map, new google.maps.LatLng(33.31, -112.0), 'Phoenix', 'Just some content');
		setMarker(map, new google.maps.LatLng(33.32, -112.0), 'Phoenix', 'Just some content');
		setMarker(map, new google.maps.LatLng(33.33, -112.0), 'Phoenix', 'Just some content');
	    };
	    
	    return {
		restrict: 'A',
		template: '<div id="gmaps"></div>',
		replace: true,
		link: link
	    };
	});
})();
