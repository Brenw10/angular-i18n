(function ()
{
    'use strict';

    angular
        .module('portal.main')
        .controller('MainController', MainController);


    MainController.$inject = ['$scope', 'cfpLoadingBar'];

    function MainController($rootScope, cfpLoadingBar)
    {
        function _init()
        {
            cfpLoadingBar.start();
            $.material.init();
        }

        _init();
    }
})();