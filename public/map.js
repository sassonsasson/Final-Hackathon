// $.ajax({
//   url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBBaeVQ5VnEhNnvrIJ8InOhq3n_vWWqQxI&libraries=places",
//   dataType: "jsonp"
// }).done(function(data) {
//   // initMap();
//   initMap();
// });


// var address = '';

// var initMap = function () {
//   var mapDiv = document.getElementById('map');
//   var map = new google.maps.Map(mapDiv, {
//     center: {lat: 32.100, lng: 34.780},
//     zoom: 13
//    });

  // var input = document.getElementById('pac-input');

  // var autocomplete = new google.maps.places.Autocomplete(input);


  //   autocomplete.bindTo('bounds', map);

  //   var infowindow = new google.maps.InfoWindow();
  //   var marker = new google.maps.Marker({
  //     map: map,
  //     anchorPoint: new google.maps.Point(0, -29)
  //   });

  //   autocomplete.addListener('place_changed', function() {
  //     infowindow.close();
  //     marker.setVisible(false);
  //     var place = autocomplete.getPlace();


  //     if (!place.geometry) {
  //       window.alert("Autocomplete's returned place contains no geometry");
  //       return;
  //     }
  //   });

//      // If the place has a geometry, then present it on a map.
//       if (place.geometry.viewport) {
//         map.fitBounds(place.geometry.viewport);
//       } else {
//         map.setCenter(place.geometry.location);
//         map.setZoom(17);  // Why 17? Because it looks good.
//       }
//       marker.setIcon(/** @type {google.maps.Icon} */({
//         url: place.icon,
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(35, 35)
//       }));
//       marker.setPosition(place.geometry.location);
//       marker.setVisible(true);
//       console.log(place);
      
//       if (place.address_components) {
//         address = [
//           (place.address_components[0] && place.address_components[0].short_name || ''),
//           (place.address_components[1] && place.address_components[1].short_name || ''),
//           (place.address_components[2] && place.address_components[2].short_name || '')
//         ].join(' ');
//         console.log('here is my address', address)
   
//       }

//       infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
//       infowindow.open(map, marker);

//       google.maps.event.addDomListener(map, "idle", function(){
//       center=map.getCenter();
//       });

//         $(window).resize(function(){
//         map.setCenter(center);
//       });
//     });

//     // Sets a listener on a radio button to change the filter type on Places
//     // Autocomplete.
//     function setupClickListener(id, types) {
//       var radioButton = document.getElementById(id);
//       radioButton.addEventListener('click', function() {
//         autocomplete.setTypes(types);
//       });
//     }

//     $('.submit-theft').on('click', function(e){
//       e.preventDefault();

//         var theft = {
//           Email: $('#email').val(),
//           Name: $('#name').val(),
//           Item: $('#item').val(),
//           Value: $('#value').val(),
//           Location: address,
//           Date: $('#date').val(),
//         };

//         console.log('here is the theft object', theft);

//         $.post( "/theft", theft).done(function(response){console.log(response)}).fail(function(){console.log('error')});

//     })

//     setupClickListener('changetype-all', []);
//     setupClickListener('changetype-address', ['address']);
//     setupClickListener('changetype-establishment', ['establishment']);
//     setupClickListener('changetype-geocode', ['geocode']);
  
// }
