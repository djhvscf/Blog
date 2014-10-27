angular.module('testApp.services', [
    'ngResource'
])

// value: define un valor
.value('valueExample', 'Proyecto 2')

// constant: define un valor constante
.constant('constantExample', 'Angular Example')

.value('valueExample', 'Proyecto 3') // modifica "valueExample"
.value('constantExample', 'kamehameha') // no funciona

// service: funcion que angular llama como un constructor => new historyService()
.service('historyService', function () {
    this.history = [];
    this.add = function (entry) {
        this.history.unshift(entry);
    };
})

// factory: retorna un objeto
.factory('githubService', function ($http) {
    var github = function (op) {
        return function () {
            return $http({
                method: 'JSONP',
                cache: true,
                //url: 'https://api.github.com/users/' + githubUser + '/' + op + '?callback=JSON_CALLBACK'
				url: 'https://api.github.com/users/djhvscf/events?callback=JSON_CALLBACK'//'https://api.github.com/repos/' + githubUser + '/' + 'Hello-World/events' + '?callback=JSON_CALLBACK'
				//https://api.github.com/repos/djhvscf/Hello-World/events
				//repos/:owner/:repo/events
            });
        }
    }, githubUser;

    return {
        getEvents: github('events'),
        setUser: function (user) {
            githubUser = user;
        }
    };
})

// provider: se puede configurar en app.config
.provider('style' /* no poner "Provider */, function () {
    var styles = {};

    this.setStyles = function (s) {
        styles = s;
    };

    this.$get = function () {
        return {
            getStyles: function () {
                return styles;
            }
        }
    };
})
