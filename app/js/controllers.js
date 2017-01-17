angular.module("app")
.controller("main", function ($scope, postResource) 
{
	$scope.posts = postResource.query();
})
.controller("postController", function ($scope, postResource, $routeParams) 
{

	$scope.post = postResource.get({id: $routeParams.id});

	$scope.remove = function () 
	{
		postResource.delete({id: $routeParams.id}, function (data)
		{
			console.log(data);
		})
	}

	$scope.savePost =  function () 
	{
		postResource.update({id: $scope.post.id},{data: $scope.post}, function (data) 
		{
			console.log(data);
		})
	}
	
})
.controller("newPostController", function ($scope, postResource) 
{

	$scope.post = {};

	$scope.savePost =  function() 
	{
		postResource.save({data: $scope.post}, function (data) 
		{
			console.log(data);
		});
	}
	
})
;