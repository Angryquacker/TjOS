$(document).ready(function() {
    //Hide Menus
    $("#home").hide();
    let on = false;

    //Show || Hide Menu Logic
    $("#homeOn").click(function() {
        if (on == false) {
            $("#home").show();
            on = true;
        } else {
            $("#home").hide();
            on = false;
        }   
    });

    
});