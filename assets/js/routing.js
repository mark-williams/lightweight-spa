var routing = function() {
    'use strict';
    var DEFAULTTRANSITIONTIME = 100;
    return {
        init: initRouting,
    }

    function initRouting() {
        $(window).on('hashchange', onHashChange);

        $(window).trigger('hashchange');
    }

    function onHashChange(event) {
        render(window.location.hash);   
    }
    
    function render(hash) {
        var $pages = $('.page');
        $pages.hide(0);

        if (hash.length) {
            var $pageToShow = $pages.filter(hash);
            $pageToShow.show(DEFAULTTRANSITIONTIME);
        }
        else {
            // Default to first page
            $pages.first().show(DEFAULTTRANSITIONTIME);
        }
    }
}();
