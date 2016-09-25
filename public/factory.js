app.factory('items', function ($http) {

  var things = ["Bike", "Cash", "Computer", "Handbag", "Jewelry", "Phone", "Wallet"];
  var typeSend = ["Theft", "Lost", "Found"]

    var getPosts = function(){

    return $http.get('/theft');
  
    }

    // var postList = function(info) {

    // return $http.post('/theft', info);

    // };

    // console.log('im inside of the factory');



    return {things:things, typeSend:typeSend, getPosts:getPosts};


});