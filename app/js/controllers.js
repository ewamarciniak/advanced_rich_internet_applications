'use strict';
/* Controllers */

angular.module('myApp.controllers', ['ngSanitize'])

  .controller('MyCtrl1', function($scope) {


        //Partial One code Goes Here
        //alert('hello from partial One')

   })
    .controller('MyCtrl2', function($scope, $http) {

        $http.get('./skepticsCommodities.json').success(function(data) {
            $scope.commodities = data;
        });

        $scope.orderProp = 'name';
        $scope.orderPropAlt = 'email';
        $scope.markup = function(arg) {return arg + 0.45 * arg};


    }).controller('MyCtrl3', function($scope) {
        //Partial Three code Goes Here
        //alert('hello from partial Three')

        function FindLocation() {
            //code by John Fitzpatrick
            // HDIp COM SC
            geocoder = new google.maps.Geocoder();
            InitializeMap();

            var address = document.getElementById("addressinput").value;
            var gymlocations = new Array();
            gymlocations[0] = "Cork Street Dublin";
            gymlocations[1] = "Quarry Road, Cabra, Dublin";
            gymlocations[2] = "Bishopstown Road, Cork";

            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });


                    if (address == gymlocations[0]) {

                        //$scope.myHTMLone= gymlocations[0] + 'Tel: 01-2323456';
                        document.getElementById('l1').innerHTML = gymlocations[0]+ 'Tel: 01-2323456';

                    }
                    if (address == gymlocations[1]) {
                        document.getElementById('l1').innerHTML = gymlocations[1] + ' Tel: 01 45443321';

                    }
                    if (address == gymlocations[2]) {
                        document.getElementById('l1').innerHTML = gymlocations[2] + ' Tel: 01 7675432';

                    }
                }
                else {
                    alert("Not successful for the following reason: " + status);
                }
            });
        }

        FindLocation();

        $scope.jourz = function() {

            FindLocation();

        };

        /*document.getElementById('Button1').addEventListener('click',function () {

         FindLocation();
         return false;
         }, false);*/

    }).controller('MyCtrl4', [function() {

        //Partial Four code Goes Here

        //alert('hello from partial Four')
        function WorkoutStatistics() {
            var chart1 = new CanvasJS.Chart("chartContainer_1", {
                theme: "theme1",
                title: {
                    text: "Exercise type [%]",
                    fontWeight: "bolder",
                    fontColor: "#0D8AAA",
                    fontFamily: "tahoma",
                    fontSize: 20,
                    padding: 10
                },
                data: [//array of dataSeries
                    { //dataSeries object

                        /*** Change type "column" to "bar", "area", "line" or "pie"***/
                        type: "doughnut",
                        indexLabelPlacement: "outside",
                        showInLegend: true,
                        dataPoints: [
                            { label: "step class", y: 18, name: "step class" },
                            { label: "treadmil", y: 29, name: "treadmil" },
                            { label: "pilates class", y: 40, name: "pilates class" },
                            { label: "weight lifting", y: 34, name: "weight lifting" },
                            { label: "zumba class", y: 24, name: "zumba class" }
                        ]
                    }
                ]
            });
            chart1.render();
            chart1 = {};

            var chart2 = new CanvasJS.Chart("chartContainer_2", {
                theme: "theme1",
                title: {
                    text: " Total Workout [min]",
                    fontWeight: "bolder",
                    fontColor: "#0D8AAA",
                    fontFamily: "tahoma",
                    fontSize: 20,
                    padding: 10
                },
                data: [//array of dataSeries
                    { //dataSeries object

                        /*** Change type "column" to "bar", "area", "line" or "pie"***/
                        type: "bar",
                        dataPoints: [
                            { label: "step class", y: 18 },
                            { label: "treadmil", y: 29 },
                            { label: "pilates class", y: 40 },
                            { label: "weight lifting", y: 34 },
                            { label: "zumba class", y: 24 }
                        ]
                    }
                ]
            });
            chart2.render();
            chart2 = {};

            var chart3 = new CanvasJS.Chart("chartContainer_3", {

                theme: "theme1",

                title: {
                    text: "Total calories burned [kcal]",
                    fontWeight: "bolder",
                    fontColor: "#0D8AAA",
                    fontFamily: "tahoma",
                    fontSize: 20,
                    padding: 10
                },

                data: [  //array of dataSeries
                    { //dataSeries - first quarter
                        /*** Change type "column" to "bar", "area", "line" or "pie"***/
                        type: "column",
                        name: "You",
                        showInLegend: true,
                        dataPoints: [
                            { label: "January", y: 4500 },
                            { label: "February", y: 3250 },
                            { label: "March", y: 4000 },
                            { label: "April", y: 3740 },
                            { label: "May", y: 2400 }
                        ]
                    },

                    { //dataSeries - second quarter

                        type: "column",
                        name: "Average user",
                        showInLegend: true,
                        dataPoints: [
                            { label: "January", y: 5400 },
                            { label: "February", y: 3100 },
                            { label: "March", y: 2870 },
                            { label: "April", y: 3400 },
                            { label: "May", y: 2380 }
                        ]
                    }
                ],
                /** Set axisY properties here*/
                axisY: {
                    suffix: "kcal"
                }
            });
            chart3.render();
            chart3 = {};
        }
        WorkoutStatistics();




    }]).controller('MyCtrl5', function () {



        //Partial five code Goes Here

        //alert('hello from partial Five')



    }).controller('MyCtrl6', function () {
        //controller six

    }).controller('MyCtrl7', function () {
        //controller seven  ADMIN
    })


