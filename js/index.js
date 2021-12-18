jQuery(document).ready(function ($) {
	if (window.matchMedia("(max-width: 768px)").matches) {
		// état à l'ouverture du menu
		$("#open").click(function () {
			$("header nav").addClass("open")
			$("header nav ul").css({
				"opacity": "1",
			});
		});
		// état à la fermeture du menu
		$("#close, header ul li a").click(function () {
			$("header nav").removeClass("open");
			$("header nav ul").css({
				"opacity": "0"
			});
		});
	}
});