angular.module('githubactivity.controllers', [])

.controller('FeedCtrl', function ($scope, githubService) {
    $scope.viewUserEvents = function () {
        githubService.getEvents()
            .success(function(data, status, headers) {
                $scope.events = data.data;
            });
    };
	
	$scope.viewUserEvents();
})