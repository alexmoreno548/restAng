angular.module("app")
.factory("postResource", function ($resource) 
{
	return $resource("https://jsonplaceholder.typicode.com/posts/:id", {id: "@id"}, {update: {method:"PUT"}});
});