'use strict';
/* Controllers */
//alert('alert first');
angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {

        //alert('hello c1')

   }])
    .controller('MyCtrl2', [function() {

        var mymodule = (function () {
        //Private

        //Public
            return {
                $$: function (id) {
                    'use strict';
                    if (typeof id != 'undefined') {
                        return document.getElementById(id);
                    }
                    else {
                        return 'undefined'
                    }
                },

                showDivs: function (arg) {
                    document.getElementById(arg).style.visibility = 'visible';
                },

                hideDivs: function (arg) {
                    document.getElementById(arg).style.visibility = 'hidden';
                }

            }
        })();

//AddEventListener
        mymodule.$$('myinput').addEventListener('focus',function () {

            mymodule.showDivs('scorewrapper');
            return false;
        }, false);

        mymodule.$$('myinput').addEventListener('blur',function () {

            mymodule.hideDivs('scorewrapper');
            return false;
        }, false);

    }])
    .controller('MyCtrl3', [function() {

    }])
    .controller('MyCtrl4', [function() {

       document.getElementById('bonnie2').innerHTML = "Added using Inner HTML";
       document.getElementById('bonnie3').style.visibility = 'visible';
    }]).controller('MyCtrl5', function($scope) {

        $scope.markup = function(arg) {

            return arg + 100 * arg};

            $scope.services = [
                {
                    name: "Web Development",
                    price: 300,
                    active: true
                },
                {
                    name: "Design",
                    price: 400,
                    active: false
                },
                {
                    name: "Integration",
                    price: 300,
                    active: false
                },
                {
                    name: "Training",
                    price: 220,
                    active: false
                }
            ];

            $scope.toggleActive = function(s) {
                s.active = !s.active
            };

            $scope.total = function() {
                var total = 0;

                angular.forEach($scope.services, function(s) {
                    if (s.active) {
                        total+= s.price;
                    }
                });
                return total;
            } ;
});



