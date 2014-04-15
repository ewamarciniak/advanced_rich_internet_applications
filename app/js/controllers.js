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

    }])
    .controller('MyCtrl4', [function() {

        //Partial Four code Goes Here

        //alert('hello from partial Four')


        //Sample code.  May be deleted
       document.getElementById('bonnie2').innerHTML = "Added using Inner HTML";
       document.getElementById('bonnie3').style.visibility = 'visible';

    }]).controller('MyCtrl5', function() {

        //Partial five code Goes Here

        alert('hello from partial Five')
});



