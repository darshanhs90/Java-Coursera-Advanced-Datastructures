var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
	$('#rw1').css('visibility','hidden');
	$scope.spanner="Select a Project and click the spanner to get its link";
	$scope.spannerLink="";
	$scope.selectedVal=-1;
	var wheel = new wheelnav('wheelDiv');
	wheel.slicePathFunction = slicePath().MenuSlice;
	wheel.spreaderPathFunction = spreaderPath().HolderSpreader;
	wheel.clickModeRotate = true;
	wheel.colors = ['#AB274F','lightBlue','lightGreen'];
	wheel.sliceTransformFunction = sliceTransform().RotateTitleTransform;
	wheel.spreaderEnable = true;
	wheel.createWheel(['Github', 'Dev Post', 'Linkedin']);
	$scope.projects=[
	{
		'name':'Number Share',
		'github':'https://github.com/darshanhs90/Android-Nexmo-Insight-app',
		'devpost':'http://devpost.com/software/number-share',
		'otherlink':'https://s3-us-west-2.amazonaws.com/hackathonhacks/numbershare.apk',
		'Language':'Android',
		'hack':'Nexmo: Build With Our New Beta',
		'hackLink':'http://nexmo-july15.devpost.com/submissions'
	},
	{
		'name':'Nexruiter',
		'github':'https://github.com/darshanhs90/NexmoRecruiter',
		'devpost':'http://devpost.com/software/nexruiter-lcfxc9',
		'otherlink':'nexmorecruiter.mybluemix.net',
		'Language':'JavaScript,HTML,AngularJS,Node.js',
		'hack':'Pick Your Prize: Nexmo APIs + Verify',
		'hackLink':'http://nexmo-june15.devpost.com/submissions'
	},
	{
		'name':'Home Automation System',
		'github':'https://github.com/darshanhs90/Home-Automation-System',
		'devpost':'http://devpost.com/software/home-zi6e',
		'otherlink':'Nada',
		'Language':'Arduino,Node.js',
		'hack':'Hack_UTD',
		'hackLink':'http://hackutd.devpost.com/submissions'
	}];
	wheel.navItems[0].navigateFunction = function () { 

		$scope.$apply(function () {
			$scope.spanner = "Github";
			if($scope.selectedVal!=-1)
				$scope.spannerLink =" : "+$scope.projects[$scope.selectedVal].github;
			else
				$scope.spannerLink =" : Select a Project to Get the link";
		}); 
	};
	wheel.navItems[1].navigateFunction = function () { $scope.$apply(function () {
		$scope.spanner = "Dev Post";
		if($scope.selectedVal!=-1)
			$scope.spannerLink =" : "+$scope.projects[$scope.selectedVal].devpost;
		else
			$scope.spannerLink =" : Select a Project to Get the link";
	}); 
};
wheel.navItems[2].navigateFunction = function () { $scope.$apply(function () {
	$scope.spanner = "Other";
	if($scope.selectedVal!=-1)
		$scope.spannerLink =" : "+$scope.projects[$scope.selectedVal].otherlink;
	else
		$scope.spannerLink =" : Select a Project to Get the link";
}); 
};
$scope.project=function($val){
	$scope.selectedVal=$val;
	$val+=1;
	$('#one').css('background-image','url(pages/'+$val+'1.jpg)');
	$('#two').css('background-image','url(pages/'+$val+'2.jpg)');
	$('#three').css('background-image','url(pages/'+$val+'3.jpg)');
	$('#four').css('background-image','url(pages/'+$val+'4.jpg)');
	$('#rw1').css('visibility','visible');
}



});