(function ()
{
    'use strict';

    angular
        .module('portal.core')
        .config(config);

    config.$inject = ['cfpLoadingBarProvider', '$translateProvider'];

    function config(cfpLoadingBarProvider, $translateProvider)
    {
        function _init()
        {
            cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
            cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
            setInternalization();
        }

        _init();

        function setInternalization()
        {
            $translateProvider.useSanitizeValueStrategy(null);
            $translateProvider.translations('en', {
                HOME         : 'Home',
                USER_SETTINGS: 'User Settings',
                MY_PROFILE   : 'My Profile',
                OTHERS       : 'Others',
                LOG_OUT      : 'Log out',
            });
            $translateProvider.translations('pt', {
                HOME         : 'Início',
                USER_SETTINGS: 'Configuração de Usuario',
                MY_PROFILE   : 'Meu usuario',
                OTHERS       : 'Outros',
                LOG_OUT      : 'Sair',
            });
            $translateProvider.translations('es', {
                HOME         : 'Principal',
                USER_SETTINGS: 'Configuración de usuario',
                MY_PROFILE   : 'Mi perfil',
                OTHERS       : 'Otros',
                LOG_OUT      : 'Cerrar sesión',
            });

            let language = localStorage.getItem('language');

            if (language === null)
            {
                language = 'en';
            }
            $translateProvider.preferredLanguage(language);
        }
    }
})();