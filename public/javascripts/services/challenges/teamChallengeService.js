angular.module('services')
.service('teamChallengeService', function($http, $q) {
	
	// Default Headers
	$http.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };
	
	this.createChallenge = function(challengerId, challengeeId) {
		var request = $http({
			method: "post",
			url: "api/challenge/team",
			data: {
				challengerId: challengerId,
				challengeeId: challengeeId,
			}
		});
		return request.then( handleSuccess, handleError );
	};
	
	this.getChallenges = function(playerId) {
		var request = $http({
			method: "get",
			url: "api/challenge/team/"+playerId
		});
		return request.then( handleSuccess, handleError );
	};
	
	this.revokeChallenge = function(challengerId, challengeeId) {
		var request = $http({
			method: "delete",
			url: "api/challenge/team/revoke/",
			data: {
				challengerId: challengerId,
				challengeeId: challengeeId
			}
		});
		return request.then( handleSuccess, handleError );
	};
	
	this.resolveChallenge = function(challengeId, challengerScore, challengeeScore) {
		var request = $http({
			method: "post",
			url: "api/challenge/team/resolve/",
			data: {
				challengeId: challengeId,
				challengerScore: challengerScore,
				challengeeScore: challengeeScore
			}
		});
		return request.then( handleSuccess, handleError );
	};
	
	this.forfeitChallenge = function(challengeId) {
		var request = $http({
			method: "post",
			url: "api/challenge/team/forfeit/",
			data: {
				challengeId: challengeId
			}
		});
		return request.then( handleSuccess, handleError );
	};
	
	
	
	
	function handleSuccess(response) {
		var successMessage = response.data.message;
		return successMessage;
	}
	
	function handleError(response) {
		var dummy = document.createElement('body');
		dummy.innerHTML = response.data;
		var errorMessage = dummy.getElementsByTagName("h1")[0].innerHTML || 'Uh oh, something unexpected happened.';
		throw errorMessage;
		return null;
	}
	
});