
$(document).ready(function(){
    //making top navbar and footer sticky using library
    $("#nav").sticky({topSpacing:0});
    $("#footer").sticky({topSpacing:0});

    //collapses navbar after an option is chosen
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

	//translating TODO: Make this more efficient using arrays or JSON files
    $("#arabicBtn").click(function(){
    	$( "#homeDivH1" ).text("الصفحة الرئيسية");
    	$( "#aboutDivH1" ).text("معلوماتنا");
    	$( "#mediaDivH1" ).text("ميديا");
    	$( "#contactDivH1" ).text("اتصل");

    	$( "#homeBtn" ).text("الصفحة الرئيسية");
    	$( "#aboutBtn" ).text( "معلوماتنا");
    	$( "#mediaBtn" ).text("ميديا");
    	$( "#contactBtn" ).text("اتصل");

    	$( "#logo" ).text("مركز المصطفى");

    });

    $("#englishBtn").click(function(){
    	$( "#homeDivH1" ).text("Home");
    	$( "#aboutDivH1" ).text("About");
    	$( "#mediaDivH1" ).text("Media");
    	$( "#contactDivH1" ).text("Contact");

    	$( "#homeBtn" ).text("Home");
    	$( "#aboutBtn" ).text( "About");
    	$( "#mediaBtn" ).text("Media");
    	$( "#contactBtn" ).text("Contact");

    	$( "#logo" ).text("Al-Mustafa");
    });

    //hiding and unhiding divs that are being used as "pages", more efficient than routing to other html
    $("#homeBtn").click(function(){
    	$("#aboutDiv").addClass('hidden');
    	$("#mediaDiv").addClass('hidden');
    	$("#contactDiv").addClass('hidden');
    	$("#homeDiv").removeClass('hidden');
    });

    $("#aboutBtn").click(function(){
    	$("#homeDiv").addClass('hidden');
    	$("#mediaDiv").addClass('hidden');
    	$("#contactDiv").addClass('hidden');
    	$("#aboutDiv").removeClass('hidden');
    	initMap();
    });

    $("#mediaBtn").click(function(){
    	$("#aboutDiv").addClass('hidden');
    	$("#homeDiv").addClass('hidden');
    	$("#contactDiv").addClass('hidden');
    	$("#mediaDiv").removeClass('hidden');
    });

    $("#contactBtn").click(function(){
    	$("#aboutDiv").addClass('hidden');
    	$("#mediaDiv").addClass('hidden');
    	$("#homeDiv").addClass('hidden');
    	$("#contactDiv").removeClass('hidden');
    });

    //navbar darkens after scroll
    $(window).scroll(function() {
	  	if($(document).scrollTop() > 10) {
	    	$('#nav').addClass('shrink');
	    }
	    else {
	    	$('#nav').removeClass('shrink');
	    }
  	});
});

//function that initializes the google maps at the right coordinates
function initMap() {
	var location = {lat: -36.903190, lng: 174.688691};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 12,
	  center: location
	});

	var marker = new google.maps.Marker({
	  position: location,
	  map: map
	});
}
