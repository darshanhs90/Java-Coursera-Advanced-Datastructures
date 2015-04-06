var app=angular.module("myApp",['ui.select']);
app.controller("MainController",function($scope,$http){
	$('#frme').css('width',$(window).width()/3);
	$('#frme').css('height',$(window).height/2);
	$('#srch1').show();
	$('#srch2').hide().show();
	$scope.showlink1=false;
	$scope.about=[{name:'Who I Am?'},{name:'My Technical Background?'}
	,{name:'Which all Frameworks are Used?'},{name:'Why I am a front-end developer?'},
	{name:'Browse Through My Profile'}];
	$scope.selectabout={};
	var b=true;
	$scope.counter=0;
	$('#srch2').css('display','none');
	$scope.decisionChosen='';
$scope.fn1=function(){
	if(b==true){
	$('#srch1').hide(500);
	//$scope.srch=false;
	$('#srch2').blur().show(500);
}
};
$scope.fn2=function(){
	if(b==true){   
	$('#srch1').show(500);
	//$scope.srch=true;
	$('#srch2').hide(500);
}
};

$scope.fn3=function(){
		b=false;
		//alert($('#decision').text());
if($('#decision').text()!=""){
	//if condition for bool values

	if($('#decision').text()=='My Technical Background?'){
		$scope.decisionChosen="technical";
		//alert($('#decision').text());
	}
	else if($('#decision').text()=='Who I Am?'){
		$scope.decisionChosen="summary";
		//alert($('#decision').text());
	}
	else if($('#decision').text()=='Which all Frameworks are Used?'){
		$scope.decisionChosen="frameworks";
		//alert($('#decision').text());
	}
	else if($('#decision').text()=='Why I am a front-end developer?'){
		$scope.decisionChosen="frontend";
		//alert($('#decision').text());
	}else if($('#decision').text()=='Browse Through My Profile'){
		$scope.decisionChosen="browse";
		//alert($('#decision').text());
	}
	else{
		b=true;
	}
	
	}
};
$scope.fn4=function(){
$scope.showpage=true;
$scope.hidetext=true;

};

$scope.hoverfn=function($var){	
if($var=='mapmark'){
	filtering('0');
}
else if($var=='picture'){
	filtering('1');
}
else if($var=='projects'){
	filtering('2');
}
else if($var=='calendar'){
	filtering('3');
}
else if($var=='contact'){
	filtering('4');
}
else if($var=='search'){
	filtering('5');
}
else if($var=='linkedin'){
	filtering('6');
}
else if($var=='facebook'){
	filtering('7');
}
else if($var=='road'){
	filtering('8');
}
else if($var=='plane'){
	filtering('9');
}

};
$scope.arr=[true,false,false,false,false,false,false,false,false,false];
filtering=function($selectedval){

for (var i =0; i<$scope.arr.length; i++) {
	//alert($selectedval);
	if($selectedval!=i){
		$scope.arr[i]=false;
	}
	else{
		$scope.arr[$selectedval]=true;
	}
}
};
$scope.srch=true;
$scope.hidetext=false;
//$scope.showpage=false;
$scope.showpage=true;
$scope.map=false;

$scope.projects=[
{"title":"Bappy Mappy","description":"The idea behind this web app is to help fellow users by providing inspiration through videos or songs or quotes from people like Sri Sri Ravishankar Guruji,Mahatma Gandhi,etc.Apart from this,This web application also allows the users to check for other users who are feeling the same feeling like sad\/depressed\,etc and connect with them.The main idea behind this is that \"Only like minds understand the gravity of the situation\" that a person is in and thus can help in the resolution of the same. Apart from this,those who have overcome similar sort of situation\[termed as Happy people\] can assist those who are in need by getting in touch with them through their email. Those in need of help can get in touch with other people based on their location and seek further help. In case none of those things work out,Contacting admin will help out surely,whose details will be shown out in the Help\/Get Help section.",
"frameworks":"Ajax,javascript,jquery,mysql,php,html5,bootstrap,css3,angular.js",
"link":"http://happy.net46.net/beforeLoginHome.php"},
{"title":"Family App","description":"Story The story behind the app is that due to the strenuous work that I was facing ,I couldn't talk to friends and relatives and thus felt like being kept out in the dark during friends/family gatherings.It was about time that i set this out correct,during which this idea of a family app flashed to my mind.The inspiration comes from millions of people working in the IT sector who face a tough time managing time betweens work,friends and family.By using this app,they can keep tabs on their family and friends as well as save a copy of their family tree.The target user is everyone who will be knowing how to use computer as well as the internet,Since everyone has friends and family whom they would like to connect.The key features of this app is 1:Instant updation and deletion of friends along with their posts/comments. 2.Add the persons as friends and get to know them by posting about them 3.Build your family tree by including your ancestral relations and save a copy of it on the database,ensuring it stays safe 4.Share your family tree with others,hopefully you will find the relations which might have been hidden by looking at your ancestors 5.Search users by their location and last name for easy sorting 6.Remove users from your list incase of accidental inclusion",
"frameworks":"Ajax,javascript,jquery,mysql,php,html5,bootstrap,css3,angular.js",
"link":"http://familyapp.net76.net/"},
{"title":"Online Training System","description":"This Project involved developing a website which aimed at providing various free on-line courses for students.Upon completion of the course along with the required grade in the assignments a course completion certificate was given.The website was coded using HTML, CSS,JQuery for the Front End and PHP,MySQL for the back end.",
"frameworks":"Ajax,javascript,jquery,mysql,php,html5,XML,CSS",
"link":"http://onlinetraining.site90.com/index.html"},
{"title":"Travel Management System","description":"Developed a Java based tourism system which provides information to tourists regarding the places they want to visit as well as help them in the ticket booking process for the journey.",
"frameworks":"Java,J2EE,javascript,jquery,mysql,html5,CSS",
"link":"NA"}

]
$scope.showlinks=[false,false,false];
$scope.showlink=function($var1,$var2){
	//alert($var1+" "+$var2);
	$scope.showlinks[$var1]=$var2;
}

$scope.otherprojects=[
{"title":"Application to synchronize file contents/appointments between laptop, android device and cloud",
"description":"This Project involved developing an application using JAVA Socket Programming,which served the purpose of synchronizing file contents(irrespective of the file type) or appointments between laptop/PC, Amazon cloud server and an Android device.The file syncing between the cloud server and the client used the TCP protocol for the data transfer whereas the file syncing between the laptop/PC and Android device used the link layer/WiFi for the data transfer",
"frameworks":"Java,Android,AWS",
"link":"https://github.com/darshanhs90/File-Synchronisation-application"},

{"title":"BankTrade Replacement with GTSNet",
"description":"Designed an data warehousing replacement model for the existing BankTrade system with GTSNet(Global Trade Solutions) which helped the SunTrust bank in faster extraction and better readability of data.GTSNet is an Accounting system which supports Standby Letter of Credits,Trade Letter of Credits and Documentary Collections.",
"frameworks":"SQL,Abinitio,Data warehousing,Unix",
"link":"NA"},

{"title":"Real Estate-Collateral",
"description":"Designed a data warehousing model for efficient processing of insurance data for Real Estate- Collateral assets which are affected by natural calamities,for the Client SunTrust Bank.This helps in monitoring and tracking collaterals and Federal Reserve reporting.",
"frameworks":"SQL,Abinitio,Data warehousing,Unix",
"link":"NA"},

{"title":"GRE Mnemonics Android Application",
"description":"Designed and developed a Android based mobile application which is an Offline (Graduate Record Examination) GRE Words dictionary having mnemonics associated with them .This provides a fool proof method for students taking the GRE to learn the words with ease and thus helping them to crack the GRE Vocabulary part.",
"frameworks":"Android,Java,SQLite",
"link":"https://play.google.com/store/apps/details?id=com.gremnemonics&hl=en"},

{"title":"American Sign Language Conversion",
"description":"The project involved the conversion of American sign language to English text using image processing techniques by developing a MATLAB code for the same.The Conversion Model was successfully implemented on a Virtex5 FPGA.It can be used by speech and hearing impaired for the purpose of communication",
"frameworks":"MATLAB,Image processing",
"link":"NA"},

{"title":"Face Recognition System",
"description":"The project involved comparing two pictures by subtraction after performing colour conversion, which was implemented on a Spartan 6 FPGA.It can be used to detect habitual offenders and also help in biometric access using face recognition.",
"frameworks":"MATLAB,Image processing",
"link":"NA"},

{"title":"Smart Ear Phone",
"description":"This Project revolves around the idea of automating the volume of your earphone,which senses its surroundings and depending on the surroundings increases or decreases the volume.Inspiration comes from every user who wears a earphone.The two main problems faced by users is that 1: Once the user gets in tune with the music,they care less about the surroundings,which therefore pose a threat to the life while crossing streets,etc.2:The other problem is that whenever the user enters a noisy or quiet neighbourhood,the user manually has to change the volume in order to clearly hear the music .Key features and Component: The Key feature is that The Smart Ear Phone application keeps running in background by continuously listening to the sound from the surroundings and processes it. Depending on the value of the sound outside ,the application modifies the volume for efficient hearing of the music. One more added advantage is that,in case of no noise,the application doesn't allow the user to listen to music in high volume,In case the user changes the volume to be high,the application automatically reduces the volume.Thereby protecting the users Ear drums.",
"frameworks":"Android,Java",
"link":"https://github.com/darshanhs90/Smart-Ear-Phone"}

]


$scope.resume=[
{"name":"File/Appointments Synchronization Application","type":"Android Application","tech":"Java,Unix,AWS,Android"},
{"name":"Travel Management System","type":"Web Application","tech":"Java,J2EE,HTML,CSS,Javascript,jQuery"},
{"name":"Family App","type":"Web application","tech":"Ajax,Javascript,jQuery,mysql,PHP,HTML5,Bootstrap,CSS3,Angular.js"},
{"name":"Bappy Mappy","type":"Web Application","tech":"Ajax,Javascript,jQuery,mysql,PHP,HTML5,Bootstrap,CSS3,Angular.js"},
{"name":"BankTrade Replacement with GTSNet","type":"Business Intelligence/Data warehousing Project","tech":"Data warehousing,Abinitio,Unix,SQL"},
{"name":"Real Estate-Collateral","type":"Business Intelligence/Data warehousing Project","tech":"Data warehousing,Abinitio,Unix,SQL"},
{"name":"Online Training System","type":"Web Application","tech":"Ajax,Javascript,jQuery,mysql,PHP,HTML5,XML,CSS"},
{"name":"GRE Mnemonics Android Application","type":"Android Application","tech":"Java,Android,SQLite"},
{"name":"Smart Ear Phone","type":"Android Application","tech":"Java,Android"},
{"name":"American Sign Language Conversion","type":"MATLAB Application","tech":"MATLAB"},
{"name":"Face Recognition System","type":"MATLAB Application","tech":"MATLAB"}
];





});