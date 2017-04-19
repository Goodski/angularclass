(function (angular){
  angular
  .module("application")
  .component("login", {
    templateUrl: "www/app/components/login/login.htm",
    controller: "loginComponentController",
    controllerAs: "vm"
  });
} (window.angular));
