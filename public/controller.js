app.controller('cityCtrl', function($scope, items, $http, $document){
  console.log('should see this log on page load up')
  $scope.list = items.things;
  $scope.event = items.typeSend;

  $scope.data = [];
  $scope.email = ''
  $scope.aSearch = ''
  $scope.px = 0

  $scope.userMap1 = false;
  $scope.userMap2 = false;
  $scope.inputShow = false;
  $scope.tableShow = false;
  $scope.showMission = true;
  $scope.curDate = (Date().split('G')[0]);

  $scope.backHome = function(){
    $scope.userMap1 = false;
    $scope.userMap2 = false;
    $scope.inputShow = false;
    $scope.tableShow = false;
    $scope.showMission = true;
    $scope.px = 0; 
  }

  $scope.showInputBox = function(){
    $scope.inputShow = !$scope.inputShow
    $scope.userMap2 = true
    $scope.tableShow = false
    $scope.showMission = false
    $scope.px = 1
    $scope.retrieve();

  }
  $scope.tableShow1 = function(){
    $scope.tableShow = !$scope.tableShow
    $scope.userMap2 = true
    $scope.inputShow = false
    $scope.showMission = false
    $scope.px = 1
    $scope.retrieve();
  }
  $scope.showMap1 = function(){  
    $scope.userMap1 = !$scope.userMap1
  }

  $scope.submitForm = function(){
    // window.location.reload()
  }

  $scope.retrieve = function(){
    ////////////////CALLBACKS///////////////////////////////////////////////////////
    
    var successCallbackGet =  function(info){
      $scope.data = [];

        for(var i=0; i<info.data.length; i++){
          $scope.data.push(info.data[i]);
        }
        
        // $scope.userMap2 = true;
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




