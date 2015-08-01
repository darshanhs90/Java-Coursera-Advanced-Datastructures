var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {

	$scope.project=function($val){
			

		$('#one').css('background-image','url(pages/'+$val+'1.jpg)');
		$('#two').css('background-image','url(pages/'+$val+'2.jpg)');
		$('#three').css('background-image','url(pages/'+$val+'3.jpg)');
		$('#four').css('background-image','url(pages/'+$val+'4.jpg)');



		$('#rw1').css('visibility','visible');
	}



});