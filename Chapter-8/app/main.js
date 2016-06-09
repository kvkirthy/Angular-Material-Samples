
angular.module('sampleApp', ['ngMaterial'])
    .controller('dialogAndAlertController', function ($scope, $mdDialog, $timeout) {

        $scope.message = "Good Morning";

        $scope.showDialogFromATemplate = function () {
            $mdDialog.show({
                templateUrl: "dialogTemplate.html",
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                closeTo: "#left",
                locals: {
                    aTitle: $scope.message
                },
                controller: function ($scope, aTitle) {
                    $scope.title = aTitle;
                },
                onComplete: function () {
                    console.log("Show dialog complete");
                }
            });
        }

        // Create alert message object. 
        var aSimpleAlert = $mdDialog
            .alert()
            .parent(angular.element(document.body))
            .title("Welcome")
            .textContent(" This is a simple alert message")
            .ok("Okay")
            ;

        // Create confirm dialog object. 
        var aConfirmDialog = $mdDialog
            .confirm()
            .parent(angular.element(document.body))
            .title("Confirm")
            .textContent(" Are you sure to continue?")
            .ok("Yes")
            .cancel("No")
            ;

        // Demonstrates showing a simple alert message.
        $scope.showSimpleMessage = function (event) {
            // Show the alert message created earlier.
            $mdDialog.show(aSimpleAlert);

            // Demonstrates hiding alert message (after a while, 5 seconds). 
            $timeout(function () {
                $scope.hideAlertMessage();
            }, 5000);
        };

        // Function to demonstrate opening from and closing in a direction
        $scope.configureAndOpenAlertFromADirection = function () {
            // Configure alert object to open from a div element with id topRight
            aSimpleAlert.openFrom("#topRight");
            // Configure alert object to close to a div element with id topLeft        
            aSimpleAlert.closeTo("#topLeft");
            // Show the alert
            $mdDialog.show(aSimpleAlert);
        };

        // demonstrates showing and handling response from a dialog box. 
        $scope.showConfirmDialog = function (event) {
            // Show confirm dialog. Use the object created earlier.
            $mdDialog.show(aConfirmDialog).then(function (result) {
                // Runs this code when user responds positively on confirm dailog (ok button)
                console.log(result);
                console.log(result + " - User selected yes");
            }, function () {
                // runs this code when user cancels the dialog.
                console.log("User selected no");
            });

            // Demonstrate closing the dialog automatically after a while. 
            $timeout(function () {
                $mdDialog.hide(aConfirmDialog);
            }, 5000);
        };

        // Function to demonstrate opening from and closing in a direction
        $scope.configureAndOpenDialogFromADirection = function () {
            // Configure alert object to open from a div element with id topRight
            aConfirmDialog.openFrom("#bottomLeft");
            // Configure alert object to close to a div element with id topLeft        
            aConfirmDialog.closeTo("#bottomRight");
            // Show the alert
            $mdDialog.show(aConfirmDialog);
        }

        // Demonstrates hiding an alert message on demand
        $scope.hideAlertMessage = function () {
            $mdDialog.hide(aSimpleAlert);
        }



    })
    .controller('toastSampleController', function ($scope, $mdToast) {
        $scope.showBasicToast = function () {
            $mdToast
                .showSimple("It calls for a toast")
                .then(function () {
                    console.log("Done with the toast");

                });
        }


        // Create toast object to be used elsewhere in the controller.
        var toast = $mdToast
            .simple() // Use the API to  create a simple toast reference.
            .textContent("A new message arrived") // message on the toast
            .action("Star it!") // add an action to the toast message.
            .capsule(true); // Show rounded corners

        // As the function on scope is invoked from view, it shows already created toast.
        $scope.showPresetToast = function () {
            $mdToast
                .show(toast)
                .then(function (action) { // The call back is invoked as user interacts with the toast message
                    console.log(action);
                });
        }

        // Show customized toast
        $scope.showAdvCustomizedShow = function () {
            var parentVal = "Message from parent";

            var toastPreset = $mdToast.show({
                position: "top right", // position toast at any corner
                parent: angular.element(document.getElementById("advancedButton")), // Parent is an element ( a div tag)
                template: "<md-toast> <strong flex='85'><sup>Highly </sup>customized toast </strong> <md-button ng-click='closeToast()'>Close </md-button></md-toast>",
                hideDelay: 0, // do not automatically close.
                locals: {
                    dynamicValue: parentVal // obtain value from parent
                },
                controller: function ($scope, $mdToast, dynamicValue) {
                    console.log(dynamicValue);
                    $scope.closeToast = function () {
                        $mdToast.hide(toastPreset); // Close when a button in the template is clicked.
                    };
                }
            });
        }

    })
    .controller('listSampleController', function ($scope, $mdToast) {
        $scope.superheroes = [
            { id: 1, name: "Iron Man", category: "Marvel", background: "pink", imageUrl: "images/ironman.png" },
            { id: 2, name: "Mowgli", category: "Disney", background: "green", imageUrl: "images/Mowgli-1.gif" },
            { id: 3, name: "Spiderman", category: "Marvel", background: "blue", imageUrl: "images/spiderman.png" },
            { id: 4, name: "Superman", category: "DC Comics", background: "yellow", imageUrl: "images/superman.png" },
            { id: 5, name: "Chhota Bheem", category: "Indian", background: "gray", imageUrl: "images/Chotabheem-1.png" }
        ];

        $scope.buttonClickHandler = function () {
            $mdToast
                .showSimple("Primary button clicked");
        };

        $scope.secondaryButtonClickHandler = function () {
            $mdToast
                .showSimple("Secondary button clicked");
        }

    })

    ;