$(function(){
        $("#typed").typed({
            strings: ["I am a Hackathon Hacker","I am a Java Developer","I am a JavaScript Developer","I am a Android Developer","I am a FullStack Developer"],
            typeSpeed: 30,
            backDelay: 100,
            loop: false,
            contentType: 'text', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
        $(".reset").click(function(){
            $("#typed").typed('reset');
        });
    });
    function newTyped(){ /* A new typed object */ }
    function foo(){ console.log("Callback");}
    
    function code(){ window.location.href='http://www.challengepost.com/haridarshan';}
    function education(){ window.location.href='sidebar.html';}
    function experience(){ window.location.href='sidebar.html';}
    function github(){ window.location.href='http://www.github.com/darshanhs90';}
    function linkedin(){ window.location.href='https://linkedin.com/in/haridarshanhs';}
    function calendar(){ window.location.href='sidebar.html';}
    
