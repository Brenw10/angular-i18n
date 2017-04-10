(function ()
{
    'use strict';

    angular
        .module('portal', [
            /* Shared modules */
            'portal.core',
            //
            /* Feature areas */
            'portal.main',
            'portal.home',
        ]);
})();
