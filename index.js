function data(){
	$.getJSON('https://raw.githubusercontent.com/geoffmiles/coordinateGenerator/dev/mapboxRoute.json', function coordinateGen() {

		var data = JSON.parse('https://raw.githubusercontent.com/geoffmiles/coordinateGenerator/dev/mapboxRoute.json');
		var coord = routes.geometry.coordinates 

		function coordinateGen(){
			for (i=0; i<=coord.length; i++) {
				coord[i];
				setTimeout(coordinateGen,1000);
			}
		};
	});
};