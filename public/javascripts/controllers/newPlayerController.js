angular.module('controllers')
.controller('newPlayerController', ['$scope', 'socket', 'modalService', 'playerService', function($scope, socket, modalService, playerService) {

	$scope.player = {
		name: '',
		phone: null,
		email: ''
	};
	
	$scope.createPlayer = function() {
		playerService.createPlayer($scope.player.name, $scope.player.phone, $scope.player.email).then(
			function (success) {
				// Successfully created a new player.
				console.log(success);
				socket.emit('player:new', $scope.player);
				var modalOptions = {
					headerText: 'New Player',
					bodyText: success
				};
				modalService.showAlertModal({}, modalOptions);
			},
			function (failure) {
				// Did not create a new player.
				console.log(failure);
				var modalOptions = {
					headerText: 'New Player',
					bodyText: failure
				};
				modalService.showAlertModal({}, modalOptions);
			}
		);
	}
	
	
}]);