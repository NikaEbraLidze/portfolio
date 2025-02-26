$(function() {
    $(".skills-filter button").eq(0).on("click", function(){
        $(".w").toggleClass("filtered-skills");
        $(".skills-filter button").eq(0).toggleClass("filtered-skills");
    });//for filter skills.

    $(".skills-filter button").eq(1).on("click", function(){
        $(".m").toggleClass("filtered-skills");
        $(".skills-filter button").eq(1).toggleClass("filtered-skills");
    });//for filter skills.

    $(".loading").mouseenter(function() {
        $(".showoffon").fadeIn(0);
    });

    $(".loading").mouseleave(function() {
        $(".showoffon").fadeOut(100);
    });

    $(".for-aimation").mouseenter(function() {
        $(".showoffonforproject").fadeIn(0);
    });

    $(".for-aimation").mouseleave(function() {
        $(".showoffonforproject").fadeOut(100);
    });

    $(".click").click(function() {
        $(".for-mobile, .nav-bar-img").toggle();

        let img = $(".click");

        if (img.attr("src") === "../public/images/navbarmenu.png") {
            img.attr("src", "../public/images/close.png");
        } else {
            img.attr("src", "../public/images/navbarmenu.png"); 
        }
    });//navbar

    $(document).click(function(event) {
        if (!$(event.target).closest(".click, .for-mobile").length && $(window).width() < 899) {
            $(".for-mobile, .nav-bar-img").hide();
            $(".click").attr("src", "../public/images/navbarmenu.png");
        }
    });//navbar close
});
