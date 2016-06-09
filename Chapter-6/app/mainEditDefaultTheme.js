

angular.module('sampleApp', ['ngMaterial'])
        .config(function ($mdThemingProvider) {
                $mdThemingProvider
                        .theme('default')
                        .primaryPalette('cyan')
                        .accentPalette('lime')
                        .warnPalette('orange');

        });