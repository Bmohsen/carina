/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particlesjs-config.json');
if ($(window).width() <= 800) {
    $('.text').addClass('text-mobile');
    $('.text').addClass('text-desktop');
} else {
    $('.text').addClass('text-desktop');
    $('.text').removeClass('text-mobile');
}
$(window).on('resize', function () {
    if ($(window).width() <= 800) {
        $('.text').addClass('text-mobile');
        $('.text').addClass('text-desktop');
    } else {
        $('.text').addClass('text-desktop');
        $('.text').removeClass('text-mobile');
    }
});