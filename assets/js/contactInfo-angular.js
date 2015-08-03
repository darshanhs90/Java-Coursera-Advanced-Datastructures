var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {



wheel = new wheelnav('wheelDiv');
wheel.wheelRadius = wheel.wheelRadius * 0.9;
wheelcolors=colorpalette.hotaru;
wheel.createWheel([icon.code,icon.phone,icon.video, icon.github, icon.linkedin, icon.facebook, icon.instagram, icon.twitter,
icon.mail]);
	



});