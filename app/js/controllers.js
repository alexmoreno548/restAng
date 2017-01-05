angular.module("app")
.controller("main", function ($scope, $resource) 
{
	var post = $resource("https://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});

	console.log(post.query);

	$scope.posts = post.query();


});