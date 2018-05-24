$(document).ready(function() {
    $("#wel").hide();
    $("#wel").show(1500);
    
    $("button").click(function() {
        if(document.getElementById('wel').value == undefined) {
            alert("Welcome");
        } else {
            alert('Welcome ' + document.getElementById('wel').value);
        }
    });
});
