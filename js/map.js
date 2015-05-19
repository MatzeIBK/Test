var infowindow = null;
function initialize()
{
    var mapProp = {
        center: new google.maps.LatLng(47.822524, 13.175407),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    setStages(map, places);
    setCamping(map, camps);


    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });


    var area_m = [
        new google.maps.LatLng(47.823296, 13.174738),
        new google.maps.LatLng(47.822796, 13.175265),
        new google.maps.LatLng(47.822158, 13.175915),
        new google.maps.LatLng(47.822529, 13.176531),
        new google.maps.LatLng(47.823253, 13.175813),
        new google.maps.LatLng(47.823642, 13.175409)
    ]

    var flight = new google.maps.Polygon({
        paths: area_m,
        strokeColor:"#000FF",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#2457a2",
        fillOpacity:0.6,
        zIndex: 1
    });
    flight.setMap(map);
    google.maps.event.addListener(flight, 'click', function(){
        infowindow.setContent("Mainstage Area");
        infowindow.setPosition(new google.maps.LatLng(47.822972, 13.175609));
        infowindow.open(map);
    });
}

var places = [
    ['Mainstage', 47.823581, 13.174882, 9, '<p style="font-family: elfFont">Main Stage</p><a href="../sites/stages/mainstage.html"style="font-family: elfFont">Timetable</a>'],
    ['Clubcircus', 47.819711, 13.175657, 2, '<p style="font-family: elfFont">Club Circus</p><a href="../sites/stages/clubcircus.html"style="font-family: elfFont">Timetable</a>'],
    ['qdance', 47.822762, 13.173973, 3, '<p style="font-family: elfFont">Q-Dance Stage</p><a href="../sites/stages/qdance.html"style="font-family: elfFont">Timetable</a>'],
    ['heineken', 47.819755, 13.176511, 4, '<p style="font-family: elfFont">Heineken Star Club</p><a href="../sites/stages/heineken.html"style="font-family: elfFont">Timetable</a>'],
    ['stonehenge', 47.821173, 13.171642, 6, '<p style="font-family: elfFont">Stonehenge</p><a href="../sites/stages/stonehenge.html"style="font-family: elfFont">Timetable</a>'],
];

var camps = [
    ['basic', 47.820915, 13.171459, 5, 'Basic Camping'],
    ['caravan', 47.823966, 13.178707, 7, 'Caravan-Camping'],
    ['comfort', 47.823263, 13.179155, 8, 'Comfort-Camping']
];

function setCamping(map, campsides) {
    var image2 = '../img/max/camping_marker.png';
    for (var i = 0; i< campsides.length; i++) {
        var camp = campsides[i];
        var campLatLng = new google.maps.LatLng(camp[1], camp[2]);
        var marker_camp = new google.maps.Marker({
            position: campLatLng,
            map: map,
            icon: image2,
            title: camp[0],
            zIndex: camp[3],
            html: camp[4]
        });
        google.maps.event.addListener(marker_camp, 'click', function(){
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }

}

function setStages(map, locations) {
    var image = '../img/max/stages_map.png';

    for (var i = 0; i < locations.length; i++) {
        var place = locations[i];
        var myLatLng = new google.maps.LatLng(place[1], place[2]);
        var marker_stage = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            title: place [0],
            zIndex: place[3],
            html: place [4]
        });
        google.maps.event.addListener(marker_stage, 'click', function(){
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);