

angular.module("sampleApp", ["ngMaterial"])
        .config(function ($mdThemingProvider) {
                $mdThemingProvider
                        .theme('aCustomTheme')
                        .primaryPalette('cyan')
                        .accentPalette('lime')
                        .warnPalette('orange');

        });