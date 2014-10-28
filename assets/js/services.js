angular.module('githubactivity.services', [
    'ngResource'
])
.factory('githubService', function ($http) {
    var github = function () {
        return function () {
            return $http({
                method: 'JSONP',
                cache: true,
				url: 'https://api.github.com/users/djhvscf/events?callback=JSON_CALLBACK'
            });
        }
    };

    return {
        getEvents: github()
    };
})
