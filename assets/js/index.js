$(function(){
        $("#typed").typed({
            strings: ["Typed.js is a Javascript Plugin.", "It types out sentences.", "And then deletes them.", "Try it out!"],
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