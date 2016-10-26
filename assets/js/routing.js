var routing = function() {
    'use strict';
    var DEFAULTTRANSITIONTIME = 300;
    return {
        init: initRouting,
    }

    function initRouting() {
        $(window).on('hashchange', onHashChange);

        $(window).trigger('hashchange');
    }

    function onHashChange(event) {
        console.log('HASH CHANGE', event);
        // Show first page
        var $pages = $('.page');
        $pages.hide(0);
        $pages.first().show(DEFAULTTRANSITIONTIME);   
    }
    
}();
