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
        
        if (hash.length) {
            var $pageToShow = $pages.filter(hash);
            if ($pageToShow.length) {
                $pages.hide(0);
                $pageToShow.show(DEFAULTTRANSITIONTIME);
            }
            else {
                $pages.first().show(DEFAULTTRANSITIONTIME);    
            }
        }
        else {
            // Default to first page
            $pages.first().show(DEFAULTTRANSITIONTIME);
        }
    }
}();
