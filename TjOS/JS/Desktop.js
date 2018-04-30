$(document).ready(function() {
    //Hide Menus
    $("#home").hide();
    let homeOn = false;
    let deskOn = true;

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
});
