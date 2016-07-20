$(document).ready(function() {
    $("button").click(function() { $("header").slideDown(300); });
    $("#ok").click(function() { $("header").slideUp(300); });
    $("#cancel").click(function() { $("header").slideUp(300); });
});
