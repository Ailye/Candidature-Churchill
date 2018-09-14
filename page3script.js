'use script'
$("#jobdep").text("Dear World dictator");
$("#selector").on("click", function(event)
	{
		switch($("#selector").val())
		{
		case "World dictator" : $("#jobdep").text("Dear World dictator");
		break;
		case "Imperator" : $("#jobdep").text("Ô Imperator");
		break;
		case "Painter" : $("#jobdep").text("Glorious painter");
		break;
		case "Playboy" : $("#jobdep").text("Hey, sexy");
		break;
		}
	}			)



$("Churchcigar").on("hover", function(event)

	{
		write("<h3>Galerie photos du bogosse</h3>");


	}

					)


