jQuery(document).ready(function ($) {

	// Il est nécessaire de recharger la page, lorsqu'on teste le responsive et qu'on passe au-dessus ou en dessous d'une largeur de 768 px.  
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