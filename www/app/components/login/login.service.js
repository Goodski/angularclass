(function(angular){
  angular
  .module("application")
  .factory("loginService",function(){
    return{
      login,
      logout
    }
    //public API
    this.loggedInUser = {};
    this.login = login;
    this.logout = logout;


    //implementation

    function login(){
      //do something to user Object
      this.loggedInUser ={
        name : "Joe",
        photo: "",
        loginTime : Date.now()
      }

    }

    function logout(){
      //clear user object
      this.loggedInUser = {}
    }

  })

}(window.angular));
