$.ajax({
  url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBBaeVQ5VnEhNnvrIJ8InOhq3n_vWWqQxI&libraries=places",
  dataType: "jsonp"
}).done(function(data) {
  initialize();
});

var map, map1;

function initialize(condition) {
      var myOptions = {
      zoom: 14,
      center: new google.maps.LatLng(32.10, 34.780),
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map'), myOptions); 
  map1 = new google.maps.Map(document.getElementById('map1'), myOptions);   

  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);


    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();


      if (!place.geometry) {
        window.alert("Autocomplete's returned place contains no geometry");
        return;
      }
    

     // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);  // Why 17? Because it looks good.
      }
      marker.setIcon(/** @type {google.maps.Icon} */({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      }));
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      console.log(place);
      
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
        console.log('here is my address', address)
   
      }

      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
      infowindow.open(map, marker);

      google.maps.event.addDomListener(map, "idle", function(){
      center=map.getCenter();
      });

        $(window).resize(function(){
        map.setCenter(center);
      });
    });
  
    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    function setupClickListener(id, types) {
      var radioButton = document.getElementById(id);
      radioButton.addEventListener('click', function() {
        autocomplete.setTypes(types);
      });
    }

    $('.submit-theft').on('click', function(e){
      e.preventDefault();

        var theft = {
          Email: $('#email').val(),
          Name: $('#name').val(),
          Item: $('#item').val(),
          Value: $('#value').val(),
          Location: address,
          Date: $('#date').val(),
        };

        console.log('here is the theft object', theft);

        $.post( "/theft", theft).done(function(response){console.log(response)}).fail(function(){console.log('error')});

    })

    setupClickListener('changetype-all', []);
    setupClickListener('changetype-address', ['address']);
    setupClickListener('changetype-establishment', ['establishment']);
    setupClickListener('changetype-geocode', ['geocode']);


var spot = [];
    var drawMap = '';
    var mcOptions = {gridSize: 50, maxZoom: 15, imagePath: 'images/m'};
    // var mc = new MarkerClusterer(map1, [], mcOptions);


    $.get( "/theft")
      .done(function(response){
        for(var i=0; i<response.length; i++){
          spot.push(response[i].Location);
        }
      })
      .fail(function(){
        console.log('error')
      });

var geocoder = new google.maps.Geocoder();

  document.getElementById('retrieve-thefts').addEventListener('click', function() {
    geocodeAddress(geocoder, map1);
  


function geocodeAddress(geocoder, resultsMap) {
  var address = spot;
  // var ground = [];
  var markers = [];
  for(var i=0; i<address.length; i++){

    (function(i) {
    geocoder.geocode( {'address': address[i]}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
    places[i] = results[0].geometry.location}
    // console.log(places);
    // Adding the markers
    var marker1 = new google.maps.Marker({position: places[i]});
    markers.push(marker1);
    console.log(markers);
    var markerCluster = new MarkerClusterer(map, markers);
      // , {imagePath: '../images/m'});
    //add the marker to the markerClusterer
    markerCluster.addMarker(marker1);



    // geocoder.geocode({'address': address[i]}, function(results, status) {
    //   if (status === 'OK') {
    //     resultsMap.setCenter(results[0].geometry.location);

    //     var marker = new google.maps.Marker({
    //       map: resultsMap,
    //       position: results[0].geometry.location
    //     });

      // var latLng = new google.maps.LatLng(results[0].geometry.location.latitude, 
      //     results[0].geometry.location.longitude);
      
      // var marker1 = new google.maps.Marker({ position: latLng });
      //     markers.push(marker1);
        
        // var markerCluster = new MarkerClusterer(map, markers, {imagePath: '../images/m'});

      google.maps.event.addDomListener(window, 'load', initialize);
      
    //   } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {    
    //         setTimeout(function() {
    //             Geocode('address');
    //         }, 200);

    // } else {
    //   alert('Geocode was not successful for the following reason: ' + status);
    // }
    })
    })
}  
}
})  
}
