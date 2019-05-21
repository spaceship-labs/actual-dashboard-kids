(function ()
{
    'use strict';

    angular
        .module('app.auth.forgot-password', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.auth_forgot-password', {
            url      : '/auth/forgot-password',
            views    : {
                'main@'                                 : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.auth_forgot-password': {
                    templateUrl: 'app/main/auth/forgot-password/forgot-password.html',
                    controller : 'ForgotPasswordController as vm'
                }
            },
            bodyClass: 'forgot-password',
            isPublic: true
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/auth/forgot-password');

        // Navigation
        /*
        msNavigationServiceProvider.saveItem('auth.forgot-password', {
            title : 'Forgot Password',
            state : 'app.auth_forgot-password',
            weight: 5
        });
        */
    }

})();


