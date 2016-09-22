// document.getElementById("form").click(".submit-theft").reset();
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

      ////////////       ////////////        ////////////         /////////////


var spot = [];

  $.get( "/theft")
      .done(function(response){
        for(var i=0; i<response.length; i++){
          spot.push(response[i].Location);
        }
      })
      .fail(function(){
        console.log('error')
      });

      document.getElementById('retrieve-thefts').addEventListener('click', function() {

var address = spot;
var bounds = new google.maps.LatLngBounds();
// Creating an array that will contain the addresses
var places = [];
// Creating a variable that will hold the InfoWindow object
var infowindow;
// markerclusterer
var markerCluster = new MarkerClusterer(map1, markers, {imagePath: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m'})
// 2.png'})
// , {imagePath: '../images/m2.png'});
var popup_content = ["<p>DTR Medical<\/p><img src=\"http:\/\/www.mediwales.com\/mapping\/wp-content\/uploads\/2011\/09\/dtr-logo.png\" \/><br \/><br \/><a href=\"http:\/\/www.mediwales.com\/mapping\/home\/dtr-medical\/\">View profile<\/a>", "<p>MediWales<\/p><img src=\"http:\/\/www.mediwales.com\/mapping\/wp-content\/uploads\/2011\/09\/index.png\" \/><br \/><br \/><a href=\"http:\/\/www.mediwales.com\/mapping\/home\/mediwales\/\">View profile<\/a>", "<p>Teamworks Design & Marketing<\/p><img src=\"http:\/\/www.mediwales.com\/mapping\/wp-content\/uploads\/2011\/09\/Teamworks-Design-Logo.png\" \/><br \/><br \/><a href=\"http:\/\/www.mediwales.com\/mapping\/home\/teamworks-design-and-marketing\/\">View profile<\/a>", "<p>Acuitas Medical<\/p><img src=\"http:\/\/www.mediwales.com\/mapping\/wp-content\/uploads\/2011\/09\/acuitas-medical-logo.gif\" \/><br \/><br \/><a href=\"http:\/\/www.mediwales.com\/mapping\/home\/acuitas-medical\/\">View profile<\/a>", "<p>Nightingale<\/p><img src=\"http:\/\/www.mediwales.com\/mapping\/wp-content\/uploads\/2011\/09\/Nightingale.png\" \/><br \/><br \/><a href=\"http:\/\/www.mediwales.com\/mapping\/home\/nightingale\/\">View profile<\/a>"];
var geocoder = new google.maps.Geocoder();
var markers = [];
        // Adding a LatLng object for each city
        for (var i = 0; i < address.length; i++) {
            (function (i) {
                geocoder.geocode({'address': address[i]}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        places[i]  = results[0].geometry.location;
                        // Adding the markers
                        var marker1 = new google.maps.Marker({position: places[i]});
                        markers.push(marker1);
                        //add the marker to the markerClusterer
                        markerCluster.addMarker(marker1);
                        // Creating the event listener. It now has access to the values of i and marker as they were during its creation
                        google.maps.event.addListener(marker1, 'click', function () {
                            // Check to see if we already have an InfoWindow
                            if (!infowindow) {
                                infowindow = new google.maps.InfoWindow();
                            }
                            // Setting the content of the InfoWindow
                            infowindow.setContent(popup_content[i]);
                            // Tying the InfoWindow to the marker
                            infowindow.open(map1, marker1);
                        });
                        // Extending the bounds object with each LatLng
                        bounds.extend(places[i]);
                        // Adjusting the map to new bounding box
                        map1.fitBounds(bounds)
                    } else {
                        alert("Geocode was not successful for the following reason: " + status);
                    }
                });
            })(i);
        }

    })
  }    
