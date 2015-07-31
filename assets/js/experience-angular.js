var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {

	$scope.repositories='';
	$http.get('https://api.github.com/users/darshanhs90/repos')
	.success(function(data, status, headers, config) {
		$scope.repositories=data;




	});


	$scope.clicker=function($val){

		swal({   title: "Are you sure?",   text: "You want to clone the repository "+$scope.repositories[$val].name,   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, Clone it!",   cancelButtonText: "No, Cancel Clone!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {     swal("Cloned!", "This Repository "+$scope.repositories[$val].name +" has been cloned.", "success");   } else {     swal("Cancelled", "Cloning of "+$scope.repositories[$val].name+" is cancelled", "error");   } });
	};
});