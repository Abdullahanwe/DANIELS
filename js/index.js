window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 600)
})
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});