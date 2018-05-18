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
    if (Cookies.get('t') == undefined) {
        document.getElementById('box').value = "";
    } else {
        document.getElementById("box").value = Cookies.get('t');
    }
    
    //Set Background Color To Set One
    $("html").css("background-color", Cookies.get("bgColor"));
    $("html").css('linear-gradient', "none");
    
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
    let help = "<p>echo - Outputs Text<br />help - Shows Comamnds<br />clear - Clears All Text</p>";
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
            $("html").css('background-color', state);
            $("html").css('linear-gradient', "none");
            Cookies.set("bgColor", state, {expires: 2});
            break;
        default:
            $("#result").text("Unknown Command");
            break;
    }
}

//Test Function For Saving Text as a Cookie
function saveText() {
    Cookies.set('t', document.getElementById("box").value, {expires: 365});
    alert(Cookies.get('t'));
    alert(document.getElementById('box').value); 
}
