app.controller('cityCtrl', function($scope, items, $http, $document){
  $scope.list = items.things;
  $scope.event = items.typeSend;

  $scope.data = [];
  $scope.dataBase = [];
  $scope.email = ''
  $scope.aSearch = ''
  $scope.px = 0
  $scope.contactEmail = ''
  $scope.contactName = ''
  $scope.contactItem = ''
  $scope.contactText = ''
  $scope.adminid = ''
  $scope.adminpass = ''

  $scope.viewContact = false;
  $scope.adminCode = false;
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
    $scope.showContact = false;
    $scope.showMission = true;
    $scope.px = 0; 
  }

  $scope.showInputBox = function(){
    $scope.inputShow = !$scope.inputShow
    $scope.userMap2 = true
    $scope.tableShow = false
    $scope.showContact = false
    $scope.viewContact = false
    $scope.showMission = false
    $scope.px = 1
    $scope.retrieve();

  }
  $scope.tableShow1 = function(){
    $scope.tableShow = !$scope.tableShow
    $scope.userMap2 = true
    $scope.inputShow = false
    $scope.showContact = false
    $scope.viewContact = false
    $scope.showMission = false
    $scope.px = 1
    $scope.retrieve();
  }

  $scope.claimBtn = function(){
    $scope.showContact = true;
    $scope.viewContact = true;
    $scope.userMap1 = false;
    $scope.userMap2 = false;
    $scope.inputShow = false;
    $scope.tableShow = false;
    $scope.showMission = false;
    $scope.px = 0; 
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

  $scope.searchDB = function() {

    var success = function(data){
      $scope.dataBase = [];
      for(var i = 0; i < data.data.length; i++){
        $scope.dataBase.push(data.data[i])
        }
      console.log($scope.dataBase)
    }
    var error = function(){
      console.log('Error with Data')
    }
    $http.get('/admin').then(success,error);

  }

  $scope.addForm = function(){
        var email = $scope.contactEmail;
        var name = $scope.contactName;
        var item = $scope.contactItem;
        var text = $scope.contactText;

        if(email !== '' && name !== '' && item !== '' && text !== ''){
        var obj = {
          email: email,
          name: name,
          text: text,
          item: item
        }

          $http.post('/admin', obj);
        } 
        
        $scope.contactEmail = ''
        $scope.contactName = ''
        $scope.contactItem = ''
        $scope.contactText = ''
      }

      $scope.adminLogClick = function() {
        $scope.admin123 = !$scope.admin123
      }

      $scope.adminLog = function(){
          var id = $scope.adminid
          var pass = $scope.adminpass
          if(id.toLowerCase() === 'admin' && pass === 'admin'){
            console.log('Success you are addmin')
            $scope.adminCode = true;
            $scope.viewContact = false;
            $scope.admin123 = false;

          } else {
            alert('Wrong ID/Password Admin access')
          }
          $scope.adminid = '';
          $scope.adminpass = '';
        }


});




