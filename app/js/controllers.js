'use strict';
/* Controllers */
angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {

        //Partial One code Goes Here

        //alert('hello from partial One')

   }])
    .controller('MyCtrl2', [function() {

        //Partial Two code Goes Here

        //alert('hello from partial Two')

    }])
    .controller('MyCtrl3', [function() {
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

       document.getElementById('Button1').addEventListener('click',function () {

            FindLocation();
            return false;
       }, false);


    }])
    .controller('MyCtrl4', [function() {

        //Partial Four code Goes Here

        //alert('hello from partial Four')


        //Sample code.  May be deleted
       document.getElementById('bonnie2').innerHTML = "Added using Inner HTML";
       document.getElementById('bonnie3').style.visibility = 'visible';

    }]).controller('MyCtrl5', function() {

        //Partial five code Goes Here

        //alert('hello from partial Five')
});



