var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {



wheel = new wheelnav('wheelDiv');
wheel.wheelRadius = wheel.wheelRadius * 0.9;
wheelcolors=colorpalette.hotaru;
wheel.createWheel([icon.code,icon.phone,icon.video, icon.github, icon.linkedin, icon.facebook, icon.instagram, icon.twitter,
icon.mail]);
$scope.wheelinfo='';
wheel.navItems[0].navigateFunction = function () { 
						document.getElementById("wheelinfopage").innerHTML = "<span class='fa fa-code'></span><a href='http://www.devpost.com/haridarshan' target='_blank'>Devpost Project and Codebase</a>";

 };

wheel.navItems[1].navigateFunction = function () { 
	document.getElementById("wheelinfopage").innerHTML = '<span class="fa fa-phone"></span><a href="tel:+14697672278">Contact Me!</a>';
 };

wheel.navItems[2].navigateFunction = function () { 
	document.getElementById("wheelinfopage").innerHTML = '<span class="fa fa-youtube"></span><a href="https://www.youtube.com/channel/UCXoM8U71pkgdSlqaILUNpGg">Video Channel</a>';
 };

wheel.navItems[3].navigateFunction = function () { 
	document.getElementById("wheelinfopage").innerHTML = '<span class="fa fa-github"></span><a href="http://www.github.com/darshanhs90">Github Repositories</a>';
 };

wheel.navItems[4].navigateFunction = function () { 
	document.getElementById("wheelinfopage").innerHTML = '<span class="fa fa-linkedin"></span><a href="http://linkedin.com/in/haridarshanhs">LinkedIn Profile</a>';
 };

wheel.navItems[5].navigateFunction = function () { 
	document.getElementById("wheelinfopage").innerHTML = '<span class="fa fa-facebook"></span><a href="https://www.facebook.com/darshan.hs.3">Facebook Profile</a>';
 };

wheel.navItems[6].navigateFunction = function () { 
	document.getElementById("wheelinfopage").innerHTML = '<span class="fa fa-instagram"></span><a href="https://www.instagram.com/darshanhs/">Instagram Profile</a>';
 };

wheel.navItems[7].navigateFunction = function () { 
	document.getElementById("wheelinfopage").innerHTML = '<span class="fa fa-twitter"></span><a href="https://twitter.com/darshanhs">Twitter Profile</a>';
 };

wheel.navItems[8].navigateFunction = function () { 
		document.getElementById("wheelinfopage").innerHTML = '<span class="fa fa-mail"></span><a href="mailto:hsdars@gmail.com">Mail me</a>';
 };



});