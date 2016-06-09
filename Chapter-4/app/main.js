

// Create a module named sampleApp. Add ngMaterial module as dependency
angular.module('sampleApp', ['ngMaterial'])
    // A Sample controller for sidenav functionality.
    .controller('sidenavController', function ($scope, $mdSidenav) {
        
        $scope.showContentSidenav = function () {
            // Select sidenav using the $mdSidenav service. Then perform actions like open/close.
            // content-sidenav is the id (md-component-id) of the element in view/html.
            $mdSidenav('content-sidenav').open();
        };

        // State of the left sidenav. 
        $scope.showLeftSidenav = false;
        
        // State of the right sidenav
        $scope.showRightSidenav = false;

        // Called on Menu icon button click on the toolbar.
        // It toggles left sidenav.
        $scope.toggleLeftSidenav = function () {
            // Set it to true to open the sidenav if collapsed
            // Set it to false to close the sidenav if open
            $scope.showLeftSidenav = !$scope.showLeftSidenav;
        };

        // Called on Settigns icon button click on the toolbar.
        // It toggles right sidenav.
        $scope.toggleRightSidenav = function () {
            $scope.showRightSidenav = !$scope.showRightSidenav;
        };
    })
    // Controller to handle tab related events
    .controller('tabController', function($scope){
        // attached event on selection in the view/html
        $scope.tabSelected = function () {
            console.log('tab selected');
        };
        
        // attached event on deslection in the view/html
        $scope.tabDeselected = function () {
            console.log('tab deselected');
        };

    })
    
    ;