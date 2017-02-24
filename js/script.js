$(document).ready(function(){

	$("#navbar").sticky({topSpacing:0});

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
    	google.maps.event.trigger(map, 'resize');
    	
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
    
});

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
