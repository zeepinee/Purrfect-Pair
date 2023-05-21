
$(document).ready(function(){
	
	let whichOne = 1;
	setInterval(() => {
		whichOne++;
		switch(whichOne){
			case(1):
				$("#image1").fadeIn();
				$("#image2").fadeOut();
				$("#image3").fadeOut();
                $("#image4").fadeOut();
                $("#image5").fadeOut();
                $("#image6").fadeOut();
                $("#image7").fadeOut();
				break;

            case(2):
            $("#image1").fadeOut();
            $("#image2").fadeIn();
            $("#image3").fadeOut();
            $("#image4").fadeOut();
            $("#image5").fadeOut();
            $("#image6").fadeOut();
            $("#image7").fadeOut();
            break;

            case(3):
            $("#image1").fadeOut();
            $("#image2").fadeOut();
            $("#image3").fadeIn();
            $("#image4").fadeOut();
            $("#image5").fadeOut();
            $("#image6").fadeOut();
            $("#image7").fadeOut();
            break;

            case(4):
            $("#image1").fadeOut();
            $("#image2").fadeOut();
            $("#image3").fadeOut();
            $("#image4").fadeIn();
            $("#image5").fadeOut();
            $("#image6").fadeOut();
            $("#image7").fadeOut();
            break;

            case(5):
            $("#image1").fadeOut();
            $("#image2").fadeOut();
            $("#image3").fadeOut();
            $("#image4").fadeOut();
            $("#image5").fadeIn();
            $("#image6").fadeOut();
            $("#image7").fadeOut();
            break;

            case(6):
            $("#image1").fadeOut();
            $("#image2").fadeOut();
            $("#image3").fadeOut();
            $("#image4").fadeOut();
            $("#image5").fadeOut();
            $("#image6").fadeIn();
            $("#image7").fadeOut();
            break;

            case(7):
            $("#image1").fadeOut();
            $("#image2").fadeOut();
            $("#image3").fadeOut();
            $("#image4").fadeOut();
            $("#image5").fadeOut();
            $("#image6").fadeOut();
            $("#image7").fadeIn();
            break;
		}
		if (whichOne === 7) whichOne = 0;
	}, 3500)

});