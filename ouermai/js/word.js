$(function() {
    $(window).resize(initFont);
    function initFont() {
        var htmlWidth = $(window).width();
        if (htmlWidth >= 960) {
            $('html').css({
                'font-size' : 24 + 'px'
            })
        } else {
            $('html').css({
                'font-size' : 36 / 960 * htmlWidth + 'px'
            })
        }
    }initFont();
}) 