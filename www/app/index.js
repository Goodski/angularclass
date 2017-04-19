( function(angular) {
	angular
		.module("application", ["ngRoute"])
		.config(function($locationProvider, $routeProvider) {
			$locationProvider.html5Mode(true);

			$routeProvider
				.when("/exercise1", {
					// no controller
					templateUrl  : 'www/app/partials/exercise1.htm',
					controller   : "exerciseOneController",
					controllerAs : "ctrl",
				})
				.when("/customer/:custid", {
					// will use a controller
					templateUrl: 'www/app/partials/exercise2.htm',
					controller: "exerciseTwoController",
					controllerAs: "ctrl"
				});
		})
		.controller("exerciseOneController", function() {
			this.title = "Exercise 1, in the controller";

			this.clickAction = () => {
				console.log(this);
			};

			this.students = [
				{ name: "John" },
				{ name: "Josh" },
				{ name: "Mack" }
			];
			.otherwise({
				templateUrl : 
			})
		});
} (window.angular));
