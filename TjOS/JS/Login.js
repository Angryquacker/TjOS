$(document).ready(function() {
    $("#wel").hide();
    $("#wel").show(1500);
    
    $("button").click(function() {
        if(document.getElementById('user').value == undefined) {
            alert("Welcome");
        } else {
            alert('Welcome ' + document.getElementById('user').value);
        }
    });
});
