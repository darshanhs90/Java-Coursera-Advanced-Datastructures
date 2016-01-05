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
	wheel.createWheel(['Github', 'DevPost', 'Hackathon']);
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
		'otherlink':'NA',
		'Language':'Arduino,Node.js',
		'hack':'Hack_UTD',
		'hackLink':'http://hackutd.devpost.com/submissions'
	},
	{
		'name':'HireMeNow',
		'github':'https://github.com/darshanhs90/YHack2015',
		'devpost':'http://devpost.com/software/hiremenow',
		'otherlink':'NA',
		'Language':'JavaScript,HTML,AngularJS,Node.js',
		'hack':'YHack 2015',
		'hackLink':'http://yhack2015.devpost.com/submissions'
	},
	{
		'name':'Alex .The Smart',
		'github':'https://github.com/darshanhs90/Node-Dev/tree/master/Drone%20Proj',
		'devpost':'http://devpost.com/software/alex-the-smart',
		'otherlink':'NA',
		'Language':'Node.js',
		'hack':'HackDFW',
		'hackLink':'http://hackdfw.devpost.com/submissions'
	},
	{
		'name':'Textual Learn',
		'github':'https://github.com/darshanhs90/textuallearnnew',
		'devpost':'http://devpost.com/software/textual-lean',
		'otherlink':'NA',
		'Language':'JavaScript,HTML,AngularJS,Node.js',
		'hack':'Nexmo: Sky\'s the Limit, Anything Goes (Pro)!',
		'hackLink':'http://nexmo-oct15.devpost.com/submissions'
	},
	{
		'name':'Share My Ride',
		'github':'https://github.com/darshanhs90/ShareMyRide',
		'devpost':'http://devpost.com/software/share-my-ride',
		'otherlink':'NA',
		'Language':'JavaScript,HTML,AngularJS,Node.js',
		'hack':'MHacks 6',
		'hackLink':'http://mhacks6.devpost.com/submissions'
	},
	{
		'name':'BitSplit',
		'github':'https://github.com/darshanhs90/Hack-The-Planet-Hack',
		'devpost':'http://devpost.com/software/bitsplit-02ce1v',
		'otherlink':'bitwise.mybluemix.net',
		'Language':'JavaScript,HTML,AngularJS,Node.js',
		'hack':'Hack the Planet',
		'hackLink':'http://htp-s2015.devpost.com/submissions'
	},
	{
		'name':'Patient Care',
		'github':'https://github.com/darshanhs90/Android-SuperUtiliser-App',
		'devpost':'http://devpost.com/software/patient-care',
		'otherlink':'NA',
		'Language':'Android',
		'hack':'InnovateNYP: Open Challenge',
		'hackLink':'http://innovatenyp-challenge2015.devpost.com/submissions'
	},
	{
		'name':'InDocs',
		'github':'https://github.com/darshanhs90/InDocs',
		'devpost':'http://devpost.com/software/indocs',
		'otherlink':'NA',
		'Language':'JavaScript,HTML,AngularJS,Node.js,Java',
		'hack':'Ambitious Apps at Amazing Scale! A Hackathon for Apache Geode (incubating)',
		'hackLink':'http://ambitious-apps.devpost.com/submissions'
	},
	{
		'name':'Twinnect',
		'github':'https://github.com/darshanhs90/Connect-With-Your-Team',
		'devpost':'http://devpost.com/software/twinnect',
		'otherlink':'fantweet.mybluemix.net',
		'Language':'JavaScript,HTML,AngularJS,Node.js',
		'hack':'Connect with Your Team | Summer Jam',
		'hackLink':'http://sjconnect.devpost.com/submissions'
	},
	{
		'name':'meChair',
		'github':'https://github.com/darshanhs90/Node-Dev/tree/master/pushbullet',
		'devpost':'http://devpost.com/software/mechair',
		'otherlink':'NA',
		'Language':'Arduino,Node.js',
		'hack':'Tech Mahindra i5 Hackathon',
		'hackLink':'http://techmahindrai5int.devpost.com/'
	},
	{
		'name':'Smart Ear Phone',
		'github':'https://github.com/darshanhs90/Android-SmartEarPhoneApp',
		'devpost':'http://devpost.com/software/smart-ear-phone',
		'otherlink':'NA',
		'Language':'Android',
		'hack':'HackRice 2015',
		'hackLink':'http://hackrice2015.devpost.com/submissions'
	},
	{
		'name':'VDeliver',
		'github':'https://github.com/darshanhs90/HackGT',
		'devpost':'NA',
		'otherlink':'http://ramen.hackgt.com/ramen-as-a-service/app/submission_view.php?id=564d129244bebd3f47335478&p_id=564d129244bebd3f47335449&filter=&start_from=0&length=118&from_page=4',
		'Language':'JavaScript,HTML,AngularJS,Node.js',
		'hack':'HackGT',
		'hackLink':'http://ramen.hackgt.com/ramen-as-a-service/app/gallery_view.php?filter=&start_from=0&length=118&page=4'
	},
	{
		'name':'ViEasyPay',
		'github':'https://github.com/darshanhs90/Money2020Hack',
		'devpost':'NA',
		'otherlink':'http://www.hackathon.io/vieasy',
		'Language':'JavaScript,HTML,AngularJS,Node.js',
		'hack':'Money 2020 Hackathon',
		'hackLink':'http://www.hackathon.io/money20-20-hackathon1/projects'
	}];



	wheel.navItems[0].navigateFunction = function () { 

		$scope.$apply(function () {
			$scope.spanner = "Github Link";
			if($scope.selectedVal!=-1)
				$scope.spannerLink =" : "+$scope.projects[$scope.selectedVal].github;
			else
				$scope.spannerLink =" : Select a Project to Get the link";
		}); 
	};
	wheel.navItems[1].navigateFunction = function () { $scope.$apply(function () {
		$scope.spanner = "DevPost Link";
		if($scope.selectedVal!=-1)
			$scope.spannerLink =" : "+$scope.projects[$scope.selectedVal].devpost;
		else
			$scope.spannerLink =" : Select a Project to Get the link";
	}); 
};
wheel.navItems[2].navigateFunction = function () { $scope.$apply(function () {
	$scope.spanner = "Hackathon Link";
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