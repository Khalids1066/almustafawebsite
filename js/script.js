
$(document).ready(function(){
	//using sticky library 
	$(".navbar").sticky({topSpacing:0});

	//translating TODO: Make this more efficient using arrays or JSON files
    $("#arabicBtn").click(function(){
    	$( "#homeDivH1" ).text("الصفحة الرئيسية");
    	$( "#aboutDivH1" ).text("معلوماتنا");
    	$( "#galleryDivH1" ).text("عرض");
    	$( "#contactDivH1" ).text("اتصل");

    	$( "#homeBtn" ).text("الصفحة الرئيسية");
    	$( "#aboutBtn" ).text( "معلوماتنا");
    	$( "#galleryBtn" ).text("عرض");
    	$( "#contactBtn" ).text("اتصل");

    	$( "#logo" ).text("مركز المصطفى");

    });

    $("#englishBtn").click(function(){
    	$( "#homeDivH1" ).text("Home");
    	$( "#aboutDivH1" ).text("About");
    	$( "#galleryDivH1" ).text("Gallery");
    	$( "#contactDivH1" ).text("Contact");

    	$( "#homeBtn" ).text("Home");
    	$( "#aboutBtn" ).text( "About");
    	$( "#galleryBtn" ).text("Gallery");
    	$( "#contactBtn" ).text("Contact");

    	$( "#logo" ).text("Al-Mustafa");
    });

    //hiding and unhiding divs that are being used as "pages", more efficient than routing to other html
    $("#homeBtn").click(function(){
    	$("#aboutDiv").addClass('hidden');
    	$("#galleryDiv").addClass('hidden');
    	$("#contactDiv").addClass('hidden');
    	$("#homeDiv").removeClass('hidden');
    });

    $("#aboutBtn").click(function(){
    	$("#homeDiv").addClass('hidden');
    	$("#galleryDiv").addClass('hidden');
    	$("#contactDiv").addClass('hidden');
    	$("#aboutDiv").removeClass('hidden');
    	initMap();
    });

    $("#galleryBtn").click(function(){
    	$("#aboutDiv").addClass('hidden');
    	$("#homeDiv").addClass('hidden');
    	$("#contactDiv").addClass('hidden');
    	$("#galleryDiv").removeClass('hidden');
    });

    $("#contactBtn").click(function(){
    	$("#aboutDiv").addClass('hidden');
    	$("#galleryDiv").addClass('hidden');
    	$("#homeDiv").addClass('hidden');
    	$("#contactDiv").removeClass('hidden');
    });

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

