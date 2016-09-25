app.controller('cityCtrl', function($scope, items, $http, $document){
  console.log('should see this log on page load up')
  $scope.list = items.things;
  $scope.event = items.typeSend;

  $scope.data = [];
  $scope.email = ''

  $scope.userMap1 = false;
  $scope.userMap2 = true;
  $scope.tableShow = false;
  $scope.showRob = false;
  $scope.showFound = false;
  $scope.showLost = false;
  $scope.curDate = (Date().split('G')[0]);

  $scope.showMap1 = function(){  
    $scope.userMap1 = !$scope.userMap1
  }
  $scope.showMap2 = function(){  
    $scope.userMap2 = !$scope.userMap2
  }
  $scope.tableShow1 = function(){
    $scope.tableShow = !$scope.tableShow
  }

  $scope.robberyShow = function(){
    $scope.showRob = !$scope.showRob
    $scope.showFound = false;
    $scope.showLost = false;
  }

  $scope.foundShow = function(){
    $scope.showFound = !$scope.showFound
    $scope.showRob = false;
    $scope.showLost = false;
  }

  $scope.lostShow = function(){
    $scope.showLost = !$scope.showLost
    $scope.showRob = false;
    $scope.showFound = false;
  }

  $scope.submitForm = function(){
    window.location.reload()
  }

  $scope.retrieve = function(){
    ////////////////CALLBACKS///////////////////////////////////////////////////////
    
    var successCallbackGet =  function(info){
      $scope.data = [];

        for(var i=0; i<info.data.length; i++){
          $scope.data.push(info.data[i]);
        }
        $scope.userMap1 = false;
        $scope.userMap2 = true;
    }
    var errorCallback = function(){
      console.log('there was a post problem')
    }  

  ////////////////REQUESTS///////////////////////////////////////////////////////////
    
    items.getPosts().then(successCallbackGet, errorCallback);

};
  $scope.retrieve();

  $scope.click = function(){
    things.getPosts($scope.data($index)).then(successCallbackGet, errorCallback);        
  }


});




