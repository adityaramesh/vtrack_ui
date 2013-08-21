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
		var v = $("#version :selected").text();
		var c = $("#camera :selected").text();
		var t = $("#time :selected").text();
		var r = window.devicePixelRatio;

		var path = "";
		var w = 0;
		var h = 0;

		switch (c) {
		case "19": path = "data/cam019.1.avi"; w = 704 / r; h = 480 / r; break;
		case "36": path = "data/cam036.1.avi"; w = 640 / r; h = 480 / r; break;
		case "57": path = "data/cam057.1.avi"; w = 704 / r; h = 480 / r; break;
		case "114": path = "data/cam114.1.avi"; w = 704 / r; h = 480 / r; break;
		}

		$("#player").prepend(" \
			<video width='" + w + "' height='" + h + "' id='video' controls> \
				<source src='" + path + "' type='video/avi'> \
			</video> \
		");
		$("#selection").animate({left: -800});
		$("#player").animate({left: -800});
	});
	$("#back").click(function() {
		$("#selection").animate({left: 0});
		$("#player").animate({left: 0}, function() {
			$("#video").remove();
		});
	});
});
