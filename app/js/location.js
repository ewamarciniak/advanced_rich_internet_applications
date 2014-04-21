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
    gymlocations[3] = "Henry Street, Galway";
    gymlocations[4] = "Ennis Road,Limerick";
    gymlocations[5] = "Rindoon Park, Athlone";
    gymlocations[6] = "Scarlett Street, Drogheda";

    
    var gymphone = new Array();
    gymphone[0] = "01 2334546";
    gymphone[1] = "01 69547382";
    gymphone[2] = "046 2324356";
    gymphone[3] = "035 1556563";
    gymphone[4] = "011 0393842";
    gymphone[5] = "044 4747362";
    gymphone[6] = "068 5634728";


    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });


            if (address == gymlocations[0]) {
                document.getElementById('l1').innerHTML = gymlocations[0] + 'Tel:'+ gymphone[0];
            }
            if (address == gymlocations[1]) {
                document.getElementById('l1').innerHTML = gymlocations[1] + ' Tel:'+ gymphone[1];

            }
            if (address == gymlocations[2]) {
                document.getElementById('l1').innerHTML = gymlocations[2] + ' Tel:' + gymphone[2];

            }
            if (address == gymlocations[3]) {
                document.getElementById('l1').innerHTML = gymlocations[3] + ' Tel:' + gymphone[3];

            }
            if (address == gymlocations[4]) {
                document.getElementById('l1').innerHTML = gymlocations[4] + ' Tel:' + gymphone[4];

            }
            if (address == gymlocations[5]) {
                document.getElementById('l1').innerHTML = gymlocations[5] + ' Tel:' + gymphone[5];

            }
            if (address == gymlocations[6]) {
                document.getElementById('l1').innerHTML = gymlocations[6] + ' Tel' + gymphone[6];

            }


        }
        else {
            alert("Not successful for the following reason: " + status);
        }
    });


}
function jourz_onclick() {
    FindLocation();
}

window.onload = InitializeMap;


onload = function () {
    FindLocation();
}