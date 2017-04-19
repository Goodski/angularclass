(function(angular){
  angular
  .module("application")
  .service("es",function(){
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
