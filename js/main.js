/*
** File Name:	main.js
** Author:	Aditya Ramesh
** Date:	08/21/2013
** Contact:	_@adityaramesh.com
*/

$(function() {
	$("#selection").css("position", "relative");
	$("#player").css("position", "relative");

	$("#go").click(function() {
		// var v = $("#version :selected").text();
		// var t = $("#time :selected").text();
		var c = $("#camera :selected").text();
		var path = "";
		var vw = 0;
		var vh = 0;
		var ew = 0;
		var eh = 0;

		switch (c) {
		case "19": path = "data/cam019.1.avi"; vw = 704; vh = 480; break;
		case "36": path = "data/cam036.1.avi"; vw = 640; vh = 480; break;
		case "57": path = "data/cam057.1.avi"; vw = 704; vh = 480; break;
		case "114": path = "data/cam114.1.avi"; vw = 704; vh = 480; break;
		}

		var r = 1 / window.devicePixelRatio;
		if (vw * r > $(window).width()) {
			r = $(window).width() / vw;
		}

		ew = Math.floor(vw * r);
		eh = Math.floor(vh * r);

		$("#player").prepend(" \
			<video width='" + ew + "' height='" + eh + "' id='video' controls> \
				<source src='" + path + "' type='video/avi'> \
			</video> \
		");
		$("#selection").animate({left: -$("#selection").width()});
		$("#player").animate({left: -$("#player").width()});
	});
	$("#back").click(function() {
		$("#selection").animate({left: 0});
		$("#player").animate({left: 0}, function() {
			$("#video").remove();
		});
	});
});
