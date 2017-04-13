(function ()
{
    'use strict';

    angular
        .module('portal.home')
        .controller('HomeController', HomeController);


    HomeController.$inject = ['$scope', '$translate'];

    function HomeController($scope, $translate)
    {
        $scope.setLanguage = function (key)
        {
            $translate.use(key);
            localStorage.setItem('language', key);
        };
    }
})();