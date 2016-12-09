angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http({
      url:'/api/chats',
      method:'GET'
    }).then(function(response){
      console.log(response);
      if(response.status === 200){
        return response.data;
      }
    })
  }

  this.addChats = function(chat){
    //TODO Call server to add to chats
    return $http({
      url:'/api/chats',
      method:'POST',
      data : {
        message:chat
      }
    })
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
    return $http({
      url:'/api/chats',
      method:'delete'
    })
  }
  this.setScreenname = function(screenname) {
    return $http({
      url:'/api/screenname',
      method:'POST',
      data:{name:screenname}
    })
  }
});
