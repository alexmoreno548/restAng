angular.module("app", ["ngRoute", "ngResource"])
.config(function ($routeProvider)
{
	$routeProvider
		.when("/",
			{
				controller: "main",
				templateUrl: "app/templates/main.html"
			})
});
