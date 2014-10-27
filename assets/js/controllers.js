angular.module('testApp.controllers', [])

.controller('TitleCtrl', function ($scope, constantExample, valueExample) {
    $scope.value = valueExample;
    $scope.constant = constantExample;
})

// githubService => factory
// historyService => service

.controller('FeedCtrl', function ($scope, githubService, historyService) {
    $scope.users = ['KaeruCT', 'leopic', 'pfallasro', 'haden9', 'mfranco84', 'djhvscf'];

    $scope.viewUserEvents = function (user) {
        $scope.currentUser = user;

        // agregar usuario al historial
        historyService.add({
            date: new Date(),
            title: $scope.currentUser
        });

        // obtener eventos
        githubService.setUser($scope.currentUser);
        githubService.getEvents()
            .success(function(data, status, headers) {
                $scope.events = data.data;
            });
    };
	
	$scope.viewUserEvents();
})

// historyService => service
.controller('HistoryCtrl', function ($scope, historyService, style) {
    // obtener historial
    $scope.history = historyService.history;

    // obtener configuracion setteada en app.config
    $scope.style = style.getStyles().history;
});

