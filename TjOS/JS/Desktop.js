$(document).ready(function() {
    //Hide Menus
    $("#home").hide();
    $("#console").hide();
    $("#area").hide();
    $("#gameArea").hide();
    let homeOn = false;
    let deskOn = true;
    let consoleOn = false;
    let areaOn = false;
    let gameOn = false;

    //Set Text to Last Saved
    if (Cookies.get('t') == undefined) {
        document.getElementById('box').value = "";
    } else {
        document.getElementById("box").value = Cookies.get('t');
    }
    
    //Set Background Color To Set One
    $("html").css("background", Cookies.get("bgColor"));
    
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
           $("#hideDesk").html("Show Desktop");
           deskOn = false;
       } else {
           $("#desk").show();
           $("#hideDesk").html("Hide Desktop");
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
    
    //Show || Hide Game Area Logic
    $("#g").click(function() {
        if (gameOn == false) {
            $("#gameArea").show();
            gameOn = true;
        } else {
           $("#gameArea").hide();
           gameOn = false;
        }
    });
});

//Console Commands
function executeCommand() {
    let help = "<p>echo - Outputs Text<br />help - Shows Comamnds<br />clear - Clears All Text<br />background - Sets the Background Color</p>";
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
        case "background":
            console.log(state);
            if (state.toLowerCase() == "clear") {
                $("html").css('background', "#42b3f4");
                Cookies.set("bgColor", "#42b3f4", {expires: 365});
            }
            $("html").css('background', state);
            Cookies.set("bgColor", state, {expires: 365});
            break;
        default:
            $("#result").text("Unknown Command");
            break;
    }
}

//Test Function For Saving Text as a Cookie
function saveText() {
    Cookies.set('t', document.getElementById("box").value, {expires: 365});
}
