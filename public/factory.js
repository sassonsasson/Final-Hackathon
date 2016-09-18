app.factory('items', function ($http) {

  var things = ["Bike", "Cash", "Computer", "Phone"];

    var getPosts = function(){

    return $http.get('/tlv')
  
    }

    var postList = function(info) {

    return $http.post('/tlv', info);

    };

    return {things:things, postList:postList, getPosts:getPosts};


});