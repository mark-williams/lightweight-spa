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
        render(decodeHash(window.location.hash));   
    }

    function decodeHash(hash) {
        var parts = hash.split('/');
        return {
            page: parts[0],
            section: parts[1] ? parts[1] : null
        }
    }
    
    function render(params) {
        console.log('RENDER PARAMS', params);
        var $pages = $('.page');       
        if (params.page.length) {
            var $pageToShow = $pages.filter(params.page);
            if ($pageToShow.length) {
            
                $pages.not('params.page').hide(DEFAULTTRANSITIONTIME, function() {
                    $pageToShow.show(DEFAULTTRANSITIONTIME, function() {
                        if (params.section) {
                            smoothlyScroll(params.section); 
                        }
                    });
                });
            }
        }
        else {
            // Default to first page
            $pages.hide(0, function() {
                $pages.first().show(DEFAULTTRANSITIONTIME);
            });
        }
    }

    function smoothlyScroll(section) {
        var target = $('#' + section);
        //target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                     scrollTop: target.offset().top
                 }, 1000);
        }
    }
}();
