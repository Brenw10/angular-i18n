(function ()
{
    'use strict';

    angular
        .module('portal.core')
        .config(config);

    config.$inject = ['cfpLoadingBarProvider'];

    function config(cfpLoadingBarProvider)
    {
        cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
        cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
    }
})();