app.controller('cityCtrl', function($scope, items, $http, $document){
  console.log('should see this log on page load up')
  $scope.list = items.things;

  $scope.data = [];

  $scope.test1 = true;

  $scope.makeOpp = function(){
    
    $scope.test1 = !$scope.test1
  }

  $scope.retrieve = function(){
    ////////////////CALLBACKS///////////////////////////////////////////////////////
    
    var successCallbackGet =  function(info){
      // console.log(info.data);
        for(var i=0; i<info.data.length; i++){
          $scope.data.push(info.data[i]);
        }
        // console.log($scope.data);
    }
    var errorCallback = function(){
      console.log('there was a post problem')
    }  

  ////////////////REQUESTS///////////////////////////////////////////////////////////
    
    items.getPosts().then(successCallbackGet, errorCallback);

};

  $scope.click = function(){
    things.getPosts($scope.data($index)).then(successCallbackGet, errorCallback);        
  }

});



