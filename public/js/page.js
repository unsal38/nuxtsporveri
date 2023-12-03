$(()=>{
    $('button[name="menushow"]').on("click", function () {
        $("body nav").toggleClass("d-none");
    });
    $("body nav").on("click", function () {
        $("body nav").toggleClass("d-none");
    });
}) // YAN MENÜ
$(()=>{
     $(window).on("scroll", function () {
        if($(document).scrollTop() < 149) $("div.scrollup").hide();
        if($(document).scrollTop() >= 149) $("div.scrollup").show();
    });
    $('button[name="scrollup"]').on("click", function () {
        $(document).scrollTop(0)
    });
}) // SCROLL TOP