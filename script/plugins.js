// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function () {
//VIDEO
    /*
     function thumbsBg() {
     $(".gallery-wrapper li").each(function () {
     var imgID = $(this).data('image');
     $(this).css('backgroundImage', 'url(img/gallery/' + imgID + ')');
     });
     }
     */

    function thumbsBgA() {
        $(".gallery-wrapper li a").each(function () {
            var imgID = this.href;
            $(this).parent('li').css('backgroundImage', 'url(' + imgID + ')');
            //$(this).css('backgroundImage', 'url(img/gallery/' + imgID + ')');
            //console.log(imgID)
        });
    }

    window.onload = thumbsBgA;


});