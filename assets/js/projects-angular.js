var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
	$('#rw1').css('visibility','hidden');
	wheel = new wheelnav('wheelDiv');
	wheel.slicePathFunction = slicePath().MenuSlice;
	wheel.spreaderPathFunction = spreaderPath().HolderSpreader;
	wheel.clickModeRotate = true;
	wheel.colors = ['#AB274F','lightBlue','lightGreen'];
	wheel.spreaderEnable = true;
	wheel.createWheel(['Repo', 'Dev Post', 'holder']);
	$scope.project=function($val){


		$('#one').css('background-image','url(pages/'+$val+'1.jpg)');
		$('#two').css('background-image','url(pages/'+$val+'2.jpg)');
		$('#three').css('background-image','url(pages/'+$val+'3.jpg)');
		$('#four').css('background-image','url(pages/'+$val+'4.jpg)');



		$('#rw1').css('visibility','visible');
	}



});