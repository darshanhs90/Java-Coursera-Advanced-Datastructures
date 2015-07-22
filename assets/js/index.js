$(function(){
        $("#typed").typed({
            strings: ["I am Haridarshan.","I am a Java Developer","I am a JavaScript Developer","I am a Android Developer"],
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
    function foo(){ console.log("Callback");
}