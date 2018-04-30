$(document).ready(function() {
    //Hide Menus
    $("#home").hide();
    $("#console").hide();
    let homeOn = false;
    let deskOn = true;
    let consoleOn = false;

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
           $(".icon").hide();
           deskOn = false;
       } else {
           $(".icon").show();
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
});

function executeCommand() {
    let command = document.getElementById("com").value;
    let params = command.split(" ");
    switch(params[0]) {
        case "echo":
            $("#result").text(params[1]);
            break;
        default:
            $("#result").text("Unknown Command");
            break;
    }
}