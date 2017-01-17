angular.module("app", ["ngRoute", "ngResource"])
.config(function ($routeProvider)
{
	$routeProvider
		.when("/",
		{
			controller: "main",
			templateUrl: "app/templates/main.html"
		})
		.when("/post/:id",
		{
			controller: "postController",
			templateUrl: "app/templates/post.html"	
		})
		.when("/posts/new",
		{
			controller: "newPostController",
			templateUrl: "app/templates/new.html"	
		})
		.when("/posts/edit/:id",
		{
			controller: "postController",
			templateUrl: "app/templates/new.html"	
		})
});
