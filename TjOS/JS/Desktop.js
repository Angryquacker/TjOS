$(document).ready(function() {
    //Hide Menus
    $("#home").hide();
    $("#console").hide();
    $("#area").hide();
    let homeOn = false;
    let deskOn = true;
    let consoleOn = false;
    let areaOn = false;

    //Set Text to Last Saved
    //document.getElementById("box").value = document.cookie;
    
    //Set Background-Image
    //$("html").css("background-image", <Cookie Here>);

    //Show || Hide Menu Logic
    $("#homeOn").click(function() {
        if (homeOn == false) {
            $("#home").show();
            homeOn = true;
        } else {
            $("#home").hide();
            homeOn = false;
        }   
    });
    
    //Show || Hide Desktop Logic
    $("#hideDesk").click(function() {
       if (deskOn == true) {
           $("#desk").hide();
           deskOn = false;
       } else {
           $("#desk").show();
           deskOn = true;
       }
    });

    //Show || Hide Console Logic
    $("#con").click(function() {
        if (consoleOn == false) {
            $("#console").show();
            consoleOn = true;
        } else {
            $("#console").hide();
            consoleOn = false;
        }
    });

//Show || Hide Text Box Logic
    $("#text").click(function() {
        if (areaOn == false) {
            $("#area").show();
            areaOn = true;
        } else {
            $("#area").hide();
            areaOn = false;
        }
    });
});

//Console Commands
function executeCommand() {
    let help = "<p>echo - Outputs Text<br />help - Shows Comamnds<br />clear - Clears All Text<br />background - Sets Background Image to a Given Link</p>";
    let command = document.getElementById("com").value;
    let params = command.split(" ");
    let com = params.shift();
    let state = params.join(" ");
    switch(com.toLowerCase()) {
        case "echo":
            $("#result").text(state);
            break;
        case "help":
            $("#result").html(help);
            break;
        case "clear":
            $("#result").text("");
            document.getElementById("com").value = "";
            break;
        /* case "background": DARN THING DON'T WANNA WORK
            //Make Background Image a Cookie
            //Cookie = state;
            $("html").css("background-image", state); */
        default:
            $("#result").text("Unknown Command");
            break;
    }
}

