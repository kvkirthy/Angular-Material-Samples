
angular.module('sampleApp', ['ngMaterial'])
.config(function($mdThemingProvider){
    
    
    $mdThemingProvider
            .theme('aCustomBackgroundTheme')
            .backgroundPalette('lime');
            
    $mdThemingProvider
        .definePalette('aCustomPalette', {
            '50': '#ff7b82',
            '100': '#ff626a',
            '200': '#ff4852',
            '300': '#ff2f3a',
            '400': '#ff1522',
            '500': '#fb000d',
            '600': '#e1000c',
            '700': '#c8000a',
            '800': '#ae0009',
            '900': '#950008',
            'A100': '#ff959a',
            'A200': '#ffaeb3',
            'A400': '#ffc8cb',
            'A700': '#7b0006',
            'contrastDefaultColor': 'dark'

    });
    
    $mdThemingProvider
            .theme('aCustomPaletteSample')
            .primaryPalette('aCustomPalette');
    
});