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

    //Set Text to Last Saved
    if (Cookies.get('t') == undefined) {
        document.getElementById('box').value = "";
    } else {
        document.getElementById("box").value = Cookies.get('t');
    }
    
    //Set Background Color To Set One
    $("html").css("background", Cookies.get("bgColor"));
    
    //Set Font to Font Cookie
    $("body").css("font-family", Cookies.get("font"));
    
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
});

//Console Commands
function executeCommand() {
    let help = "<p>echo - Outputs Text<br />help - Shows Comamnds<br />clear - Clears All Text<br />background - Sets the Background Color<br />font- Sets the Font<br />clearbg - Returns Background Color to Default</p>";
    let command = document.getElementById("com").value;
    let params = command.split(" ");
    let com = params.shift();
    let state = params.join(" ");
    switch(com.toLowerCase()) {
        case "echo":
            $("#result").text(state);
            console.log("Successful Execution");
            break;
        case "help":
            $("#result").html(help);
            console.log("Successful Execution");
            break;
        case "clear":
            $("#result").text("");
            document.getElementById("com").value = "";
            console.log("Successful Execution");
            break;
        case "background":
            console.log(state);
            $("html").css('background', state);
            Cookies.set("bgColor", state, {expires: 365});
            console.log("Successful Execution");
            break;
        case "clearbg":
            $("html").css('background', "#42b3f4");
            Cookies.set("bgColor", "#42b3f4", {expires: 365});
            console.log("Successful Execution");
            break;
        case "font":
            console.log(state);
            $("body").css("font-family", state);
            Cookies.set("font", state, {expires: 365});
            console.log("Successful Execution");
            break;
        default:
            $("#result").text("Unknown Command");
            console.log("Bad Command");
            break;
    }
    document.getElementById('exe').value = '';
}

//Saves TextArea as a cookie
function saveText() {
    Cookies.set('t', document.getElementById("box").value, {expires: 365});
}
