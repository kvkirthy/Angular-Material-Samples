
angular.module("sampleApp", ["ngMaterial"])
        .config(function ($mdThemingProvider) {
                $mdThemingProvider
                        .theme('aCustomTheme')
                        .primaryPalette('cyan', {
                                'default': '900',
                                'hue-1': '50',
                                'hue-2': '200',
                                'hue-3': '600'
                        });
        });