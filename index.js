$(document).ready(function(){
    $("#menu-icon").click(function(){
        $("#menu-icon").hide();
        $("#close-icon").show();
        $("#mobile-menu").show();
    });

    $("#close-icon").click(function(){
        $("#menu-icon").show();
        $("#close-icon").hide();
        $("#mobile-menu").hide();
    });
});