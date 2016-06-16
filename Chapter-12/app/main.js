
angular.module('sampleApp', ['ngMaterial'])
    .controller('sampleController', function ($scope, $mdMedia) {

        $scope.greeting = "Good Morning";
        $scope.isGreaterThanXs = $mdMedia('gt-xs');

        $scope.hours = [];
        for (var i = 1; i <= 12; i++) {
            $scope.hours.push(i);
        }

        $scope.minutes = [];
        for (var i = 1; i <= 60; i++) {
            $scope.minutes.push(i);
        }

        $scope.AM_PM = ["AM", "PM"];
    })
    .controller('positionSampleController', function ($scope, $mdMedia, $mdBottomSheet) {

        
        $scope.showBottomSheet = function ($mdOpenMenu, event) {
             // Open menu for greater-than small screen.
            // Show bottom sheet ony if the screensize is small or below.
            if ($mdMedia('gt-sm')) {
                $mdOpenMenu(event);
            } else {
                $mdBottomSheet.show({
                    templateUrl: "/bottom-sheet-template.html"
                });

            }
        };


    })
    .controller('transformSampleController', function ($scope) {
        $scope.superheroes = [
            { id: 1, name: "Iron Man", category: "Marvel", background: "pink", imageUrl: "img/ironman.png" },
            { id: 2, name: "Mowgli", category: "Disney", background: "green", imageUrl: "img/mogli.gif" },
            { id: 3, name: "Spiderman", category: "Marvel", background: "blue", imageUrl: "img/spiderman.png" },
            { id: 4, name: "Superman", category: "DC Comics", background: "yellow", imageUrl: "img/superman.png" },
            { id: 5, name: "Chhota Bheem", category: "Indian", background: "gray", imageUrl: "img/Chotabheem.png" }
        ];
    })
    ;