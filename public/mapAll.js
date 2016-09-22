// $.ajax({
//   url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBBaeVQ5VnEhNnvrIJ8InOhq3n_vWWqQxI&libraries=places",
//   dataType: "jsonp"
// }).done(function(data) {
//   initialize();
// });

// // function initialize() {

// //     var center = new google.maps.LatLng(32.1, 34.78);

// //     var map = new google.maps.Map(document.getElementById('map1'), {
// //       zoom: 3,
// //       center: center,
// //       mapTypeId: google.maps.MapTypeId.ROADMAP
// //     });

// // $(".retrieve-thefts").click(function() {

// // var location = [];

// //     $.get( "/theft")
// //       .done(function(response){
// //         for(var i=0; i<response.length; i++){
// //           location.push([response[i].Location]);
// //           console.log(location);
// //         }
// //       })
// //       .fail(function(){
// //         console.log('error')
// //       });
      


// //     var markers = [];
// //     for (var i = 0; i < 100; i++) {
// //       // var location = data.location[i];
// //       // var latLng = new google.maps.LatLng(location.latitude,
// //       //     location.longitude);
// //       // var marker = new google.maps.Marker({
// //       //   position: latLng
// //       var marker = new google.maps.Marker({
// //           position: location
// //       });
// //       markers.push(marker);
// //     }
// //     var markerCluster = new MarkerClusterer(map, markers);
// //   })
// //   google.maps.event.addDomListener(window, 'load', initialize);

// // };

// ////////////////////////////////////////////////////////////////////////////////////

// //   // var initMap = function () {
// //   // var mapDiv = document.getElementById('map1');
// //   // var map = new google.maps.Map(mapDiv, {
// //   //   center: {lat: 32.100, lng: 34.780},
// //   //   zoom: 13
// //   //  });
  
// // // });
  
//     ////////////       //////////////      /////////////////

//   // function initialize() {
//   //  var mapOptions = {
//   //     center: new google.maps.LatLng(32.10,34.780),
//   //     zoom: 11,
//   //     mapTypeId: google.maps.MapTypeId.ROADMAP
//   //  };
//   //      var map = new google.maps.Map(document.getElementById('map1'),
//   //        mapOptions);
//   //       }
        

//        ///////////       ////////////        //////////////

//   function initialize() {
//     var map = new google.maps.Map(document.getElementById('map1'), {
//       zoom: 14,
//       center: {lat: 32.10, lng: 34.780}
//   });


//       var input = document.getElementById('pac-input');

//   var autocomplete = new google.maps.places.Autocomplete(input);


//     autocomplete.bindTo('bounds', map);

//     var infowindow = new google.maps.InfoWindow();
//     var marker = new google.maps.Marker({
//       map: map,
//       anchorPoint: new google.maps.Point(0, -29)
//     });

//     autocomplete.addListener('place_changed', function() {
//       infowindow.close();
//       marker.setVisible(false);
//       var place = autocomplete.getPlace();


//       if (!place.geometry) {
//         window.alert("Autocomplete's returned place contains no geometry");
//         return;
//       }
//     });




  

//     var place = [];
//     var drawMap = '';
//     var mcOptions = {gridSize: 50, maxZoom: 15, imagePath: 'images/m'};
//     var mc = new MarkerClusterer(map, [], mcOptions);


//     $.get( "/theft")
//       .done(function(response){
//         console.log(response);
//         for(var i=0; i<response.length; i++){
//           // console.log(response[i].Location)
//           place.push(response[i].Location);
//           // console.log(place);
//         }
//       })
//       .fail(function(){
//         console.log('error')
//       });

// var geocoder = new google.maps.Geocoder();

//   document.getElementById('retrieve-thefts').addEventListener('click', function() {
//     geocodeAddress(geocoder, map);
//   });


// function geocodeAddress(geocoder, resultsMap) {
//   var address = place;
//   // console.log(address);
//   for(var i=0; i<address.length; i++){

//   geocoder.geocode({'address': address[i]}, function(results, status) {
//     if (status === 'OK') {
//       resultsMap.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//         map: resultsMap,
//         position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
  

// //   var center = new google.maps.LatLng(37.4419, -122.1419);
// // var options = {
// //   'zoom': 13,
// //   'center': center,
// //   'mapTypeId': google.maps.MapTypeId.ROADMAP
// // };

// // var map = new google.maps.Map(document.getElementById("map"), options);

// var markers = [];
// for (var i = 0; i < 2; i++) {
//   // var latLng = new google.maps.LatLng(data.photos[i].latitude,
//   //     data.photos[i].longitude);
//   // var marker = new google.maps.Marker({'position': latLng});
//   markers.push(marker);
// }
// var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'images/m'});
// });
// }
// }

// $('.submit-theft').on('click', function(e){
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


// };


//       //////////////       ///////////////       ////////////





// //   $( ".retrieve-thefts" ).click(function() {

// //     var address = [];
// //     var drawMap = '';

// //     $.get( "/theft")
// //       .done(function(response){
// //         for(var i=0; i<response.length; i++){
// //           address.push([response[i].Location]);
// //           console.log(address);
// //         }
// //       })
// //       .fail(function(){
// //         console.log('error')
// //       });

// // google.charts.load('upcoming', {packages: ['map']});
// //     google.charts.setOnLoadCallback(drawMap);

// //   for(var i=0; i<address.length; i++){
// //     function searchAddress() {

// //       var addressInput = address[i].value;
// //       console.log(addressInput);

// //       var geocoder = new google.maps.Geocoder();
// //       geocoder.geocode({address: addressInput}, function(results, status) {
// //       if (status == google.maps.GeocoderStatus.OK) {
// //       var myResult = results[0].geometry.location; // reference LatLng value
// //       createMarker(myResult); // call the function that adds the marker
// //       map.setCenter(myResult);
// //       map.setZoom(17);
// //       } else { // if status value is not equal to "google.maps.GeocoderStatus.OK"

// //     // warning message
// //     alert("The Geocode was not successful for the following reason: " + status);

// //     google.maps.event.addDomListener(window, 'load', initialize);
// //       }
// //       })
// //       }
// //     };  

// //       function createMarker(latlng) {

// //    // If the user makes another search you must clear the marker variable
// //    if(marker != undefined && marker != ''){
// //     marker.setMap(null);
// //     marker = '';
// //    }

// //    marker = new google.maps.Marker({
// //       map: map,
// //       position: latlng
// //    });

// // }
// // });

// ////////////////////////////////////////////////////////////////////////////////




// // function createMarker(latlng) {

// //    // If the user makes another search you must clear the marker variable
// //    if(marker != undefined && marker != ''){
// //     marker.setMap(null);
// //     marker = '';
// //    }

// //    marker = new google.maps.Marker({
// //       map: map,
// //       position: latlng
// //    });

// // }


// //     function drawMap () {
// //       var data = new google.visualization.DataTable();
// //       data.addColumn('text', 'Location');
// //       // data.addColumn('string', 'Location');
// //       // data.addColumn('string', 'Marker')

// //       // data.addRows([
// //       //   ['New York City NY, United States', 'New York',   'blue' ],
// //       //   ['Scranton PA, United States',      'Scranton',   'green'],
// //       //   ['Washington DC, United States',    'Washington', 'pink' ],
// //       //   ['Philadelphia PA, United States',  'Philly',     'green'],
// //       //   ['Pittsburgh PA, United States',    'Pittsburgh', 'green'],
// //       //   ['Buffalo NY, United States',       'Buffalo',    'blue' ],
// //       //   ['Baltimore MD, United States',     'Baltimore',  'pink' ],
// //       //   ['Albany NY, United States',        'Albany',     'blue' ],
// //       //   ['Allentown PA, United States',     'Allentown',  'green']
// //       // ]);

// //       for(i = 0; i < location.length; i++)
// //     data.addRow([location[i]]);
      
// //       var url = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/';

// //       var options = {
// //         zoomLevel: 6,
// //         showTooltip: true,
// //         showInfoWindow: true,
// //         useMapTypeControl: true,
// //         icons: {
// //           blue: {
// //             normal:   url + 'Map-Marker-Ball-Azure-icon.png',
// //             selected: url + 'Map-Marker-Ball-Right-Azure-icon.png'
// //           },
// //           green: {
// //             normal:   url + 'Map-Marker-Push-Pin-1-Chartreuse-icon.png',
// //             selected: url + 'Map-Marker-Push-Pin-1-Right-Chartreuse-icon.png'
// //           },
// //           pink: {
// //             normal:   url + 'Map-Marker-Ball-Pink-icon.png',
// //             selected: url + 'Map-Marker-Ball-Right-Pink-icon.png'
// //           }
// //         }
// //       };
// //       var map1 = new google.visualization.Map(document.getElementById('map1'));

// //       map1.draw(data, options);
// //     }
// // });