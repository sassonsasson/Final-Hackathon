app.controller('cityCtrl', function($scope, items, $http, $document){
  console.log('should see this log on page load up')
  $scope.list = items.things;

  $scope.data = [];

  $scope.submit = function(){
    ////////////////CALLBACKS///////////////////////////////////////////////////////
    var successCallbackPost = function(info){
      console.log('here is the info back from the post:', info)
      console.log('here is the info back from the post2:', $scope.loc)
      console.log('controller place', $scope.loc);
    }
    var successCallbackGet =  function(info){
      // console.log(info.data[i].Item);
      //heres the info needed to display on the h
        for(var i=0; i<info.data.length; i++){
          $scope.data.push(info.data[i].Item);
        }
        console.log($scope.data);
    }
    var errorCallback = function(){
      console.log('there was a post problem')
    }  

  ////////////////REQUESTS///////////////////////////////////////////////////////////
    items.postList({Location: $scope.loc, Item: $scope.item, Value: $scope.value}).then(successCallbackPost, errorCallback);
    items.getPosts().then(successCallbackGet, errorCallback);

};

  $scope.click = function(){
    things.getPosts($scope.data($index)).then(successCallbackGet, errorCallback);        
  }

  $document.find('.title').css('background-color', 'blue');


  /////////////////////////////////////////////////////////////////////////////////////////////////////
              // AUTO COMPLETE AND PLACE LOC TO THE MAP
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  //INSTEAD OF $('ELEMENT') WE USE $document.find('ELEMENT')
  // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBaeVQ5VnEhNnvrIJ8InOhq3n_vWWqQxI&libraries=places&callback=initMap" async defer>

  // $.ajax({
  //   url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBBaeVQ5VnEhNnvrIJ8InOhq3n_vWWqQxI&libraries=places",
  //   dataType: "jsonp"
  // }).done(function(data) {
  //   // initMap();
  //   initMap();
  // });

  

  // var location = [];

  var initMap = function () {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 32.100, lng: 34.780},
      zoom: 13
     });

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
        // location.push(place);




        //how do I throw this place over to my ng-controller? Best case you find a hack, worst case you 
        //throw all of this code into angular controller...using http instead of $ajax
        console.log('heres my place:', place)





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

        var address = '';
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

        //    $document.find(window).resize(function(){
        //   map.setCenter(center);
        // });
      });

      // Sets a listener on a radio button to change the filter type on Places
      // Autocomplete.
      function setupClickListener(id, types) {
        var radioButton = document.getElementById(id);
        radioButton.addEventListener('click', function() {
          autocomplete.setTypes(types);
        });
      }

      setupClickListener('changetype-all', []);
      setupClickListener('changetype-address', ['address']);
      setupClickListener('changetype-establishment', ['establishment']);
      setupClickListener('changetype-geocode', ['geocode']);
    
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////


});



