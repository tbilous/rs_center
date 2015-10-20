// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
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

//GALLERY THUMBS BG
    function thumbsBgA() {
        $(".gallery-wrapper li a").each(function () {
            var imgID = this.href;
            $(this).parent('li').css('backgroundImage', 'url(' + imgID + ')');
        });
    }

    window.onload = thumbsBgA;

//TREE FAQ

    $(function () {
        $('.tree li:has(ul)').addClass('parent_li well tree-patent-well').find(' > span').attr('title', 'Collapse this branch');
        $('.tree li.parent_li > span').on('click', function (e) {
            var children = $(this).parent('li.parent_li').find(' > ul > li');
            if (children.is(":visible")) {
                children.hide('fast');
                $(this).attr('title', 'Expand this branch').find(' > i').addClass("glyphicon-plus").removeClass('glyphicon-minus');
            } else {
                children.show('fast');
                $(this).attr('title', 'Collapse this branch').find(' > i').addClass('glyphicon-minus').removeClass(" glyphicon-plus");
            }
            e.stopPropagation();
        });
    });


});