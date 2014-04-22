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
function jourz_onclick() {
    FindLocation();
}

window.onload = InitializeMap;


onload = function () {
    FindLocation();
}