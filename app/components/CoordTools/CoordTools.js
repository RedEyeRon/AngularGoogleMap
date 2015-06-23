var CoordTools = {
	isLatLonAltDegreeMeter : function (latDeg, lonDeg, altM) {
		latDeg = parseFloat(latDeg);
		lonDeg = parseFloat(lonDeg);
		altM = parseFloat(altM);
		return (-90  <= latDeg) && (latDeg <= 90) &&
			   (-180 <= lonDeg) && (lonDeg <= 180) &&
			   (-1000.0 <= altM) && (altM <= 30000.0);
	},

	isLatLonAltDegreeMeterArr: function (llh) {
		latDeg = parseFloat(llh[0]);
		lonDeg = parseFloat(llh[1]);
		altM = parseFloat(llh[2]);
		return (-90  <= latDeg) && (latDeg <= 90) &&
			   (-180 <= lonDeg) && (lonDeg <= 180) &&
			   (-1000.0 <= altM) && (altM <= 30000.0);
	},

	isEcef: function (x, y, z) {
		x = parseFloat(x);
		y = parseFloat(y);
		z = parseFloat(z);
		return (-7000000.0  <= x) && (x <= 7000000.0) &&
			   (-7000000.0 <= y) && (y <= 7000000.0) &&
			   (-7000000.0 <= z) && (z <= 7000000.0) &&
			   ( (Math.abs(x) > 1000000.0) ||
				 (Math.abs(y) > 1000000.0) ||
			 (Math.abs(z) > 1000000.0)
			   );
	},

	isEcefArr: function (ecef) {
		x = parseFloat(ecef[0]);
		y = parseFloat(ecef[1]);
		z = parseFloat(ecef[2]);
		return (-7000000.0  <= x) && (x <= 7000000.0) &&
			   (-7000000.0 <= y) && (y <= 7000000.0) &&
			   (-7000000.0 <= z) && (z <= 7000000.0) &&
			   ( (Math.abs(x) > 1000000.0) ||
				 (Math.abs(y) > 1000000.0) ||
			 (Math.abs(z) > 1000000.0)
			   );
	},

	convertTextLlhToEcef: function (inputText, outputDelimiter, defaultAlt) {
		var delimeterIndex;
		var delimeters = [",", "\t", " "];
		var newText = '';

		var linesIndex;
		var coordLines=inputText;
		if (coordLines=='') return;
		coordLines=coordLines.split('\n');

		for(linesIndex = 0; linesIndex < coordLines.length; linesIndex += 1)
		{
			var handled = false;
			latLonLine = coordLines[linesIndex];
			delimeterLoop: for(delimeterIndex = 0; !handled && (delimeterIndex < delimeters.length); delimeterIndex += 1)
			{
				var fieldArr = latLonLine.split(delimeters[delimeterIndex]);

				if (fieldArr.length == 2) fieldArr[2] = defaultAlt;
				if (fieldArr.length == 3 && CoordTools.isLatLonAltDegreeMeterArr(fieldArr))
				{
					var ecefVec = llhxyz([parseFloat(fieldArr[0]), parseFloat(fieldArr[1]), parseFloat(fieldArr[2])]);
					var x = (parseFloat(ecefVec[0]))
					var y = (parseFloat(ecefVec[1]))
					var z = (parseFloat(ecefVec[2]))
					newText = newText + x + outputDelimiter + y + outputDelimiter + z + "\n";
					handled = true;
				}
			}
			if (!handled)
			{
				newText = newText + latLonLine + "\n";
			}
		}
		return newText;
	},

	convertTextEcefToLlh: function (inputText, outputDelimiter) {
		var delimeterIndex;
		var delimeters = [",", "\t", " "];
		var newText = '';

		var linesIndex;
		var coordLines=inputText;
		if (coordLines=='') return;
		coordLines=coordLines.split('\n');

		for(linesIndex = 0; linesIndex < coordLines.length; linesIndex += 1)
		{
			var handled = false;
			latLonLine = coordLines[linesIndex];
			delimeterLoop: for(delimeterIndex = 0; delimeterIndex < delimeters.length; delimeterIndex += 1)
			{
				var fieldArr = latLonLine.split(delimeters[delimeterIndex]);

				if (fieldArr.length == 3 && CoordTools.isEcefArr(fieldArr))
				{
					var  ecefVec = new Array(3);
					ecefVec[0] = parseFloat(fieldArr[0]);
					ecefVec[1] = parseFloat(fieldArr[1]);
					ecefVec[2] = parseFloat(fieldArr[2]);

					var llhVec = xyzllh(ecefVec);
					lat=parseFloat(llhVec[0]);
					lon=parseFloat(llhVec[1]);
					alt=parseFloat(llhVec[2]);
					newText = newText + lat + outputDelimiter + lon + outputDelimiter + alt + "\n";
					handled = true;
				}
			}
			if (!handled)
			{
				newText = newText + latLonLine + "\n";
			}
		}
		return newText
	},

	moveDirection: function (bearingDegrees, distanceM, lat, lon, altM) {
		var EarthRadiusM = 6378137.0;


		var inputLatRadians = lat * Math.PI / 180.0;
		var inputLonRadians = lon * Math.PI / 180.0;
		var bearingRadians = bearingDegrees * Math.PI / 180.0;
		latRadians = Math.asin(
			Math.sin(inputLatRadians) * Math.cos(distanceM / EarthRadiusM) +
			Math.cos(inputLatRadians) * Math.sin(distanceM / EarthRadiusM) * Math.cos(bearingRadians));

		lonRadians = inputLonRadians + Math.atan2(
			Math.sin(bearingRadians) * Math.sin(distanceM / EarthRadiusM) * Math.cos(inputLatRadians),
			Math.cos(distanceM / EarthRadiusM) - Math.sin(inputLatRadians) * Math.sin(latRadians));

		var llhArr = Array(2);
		llhArr[0] = latRadians * 180.0 / Math.PI;
		llhArr[1] = lonRadians * 180.0 / Math.PI;
		llhArr[2] = altM;
		return llhArr;
	}
};
