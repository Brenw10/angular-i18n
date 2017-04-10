(function ()
{
    'use strict';

    angular
        .module('portal.core')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $stateProvider
            .state('homepage', {
                url          : '/',
                templateUrl  : '/app/components/home/home.html',
                controller   : 'HomeController',
            })
        ;


        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }

})();
