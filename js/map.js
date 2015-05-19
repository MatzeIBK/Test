var infowindow = null;
function initialize()
{
    var mapProp = {
        center: new google.maps.LatLng(47.822524, 13.175407),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    setStages(map, stages);
    setCamping(map, camps);


    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });


    var coordinates_main = [
        new google.maps.LatLng(47.823296, 13.174738),
        new google.maps.LatLng(47.822796, 13.175265),
        new google.maps.LatLng(47.822158, 13.175915),
        new google.maps.LatLng(47.822529, 13.176531),
        new google.maps.LatLng(47.823253, 13.175813),
        new google.maps.LatLng(47.823642, 13.175409)
    ];

    var coordinates_caravanCamping = [
         new google.maps.LatLng(47.826982, 13.171333),
         new google.maps.LatLng(47.826660, 13.171068),
         new google.maps.LatLng(47.826474, 13.170558),
         new google.maps.LatLng(47.826352, 13.170304),
         new google.maps.LatLng(47.826023, 13.170127),
         new google.maps.LatLng(47.825888, 13.170405),
         new google.maps.LatLng(47.825774, 13.170575),
         new google.maps.LatLng(47.825532, 13.170683),
         new google.maps.LatLng(47.825382, 13.170767),
         new google.maps.LatLng(47.825173, 13.171105),
         new google.maps.LatLng(47.824825, 13.171390),
         new google.maps.LatLng(47.824796, 13.171931),
         new google.maps.LatLng(47.824946, 13.172407),
         new google.maps.LatLng(47.825225, 13.172628),
         new google.maps.LatLng(47.826453, 13.172281),
         new google.maps.LatLng(47.826652, 13.172102),
         new google.maps.LatLng(47.826781, 13.171628),
         new google.maps.LatLng(47.827015, 13.171343)
    ];

    var coordinates_parkingNorth = [
         new google.maps.LatLng(47.827119, 13.171344),
         new google.maps.LatLng(47.827892, 13.173935),
         new google.maps.LatLng(47.826711, 13.175230),
         new google.maps.LatLng(47.827604, 13.177291),
         new google.maps.LatLng(47.828142, 13.177957),
         new google.maps.LatLng(47.828486, 13.177958),
         new google.maps.LatLng(47.828501, 13.178202),
         new google.maps.LatLng(47.829518, 13.178669),
         new google.maps.LatLng(47.829712, 13.177958),
         new google.maps.LatLng(47.829354, 13.177380),
         new google.maps.LatLng(47.829758, 13.177447),
         new google.maps.LatLng(47.829773, 13.177025),
         new google.maps.LatLng(47.830028, 13.177025),
         new google.maps.LatLng(47.829819, 13.174623),
         new google.maps.LatLng(47.829431, 13.172656),
         new google.maps.LatLng(47.828762, 13.170372),
         new google.maps.LatLng(47.828300, 13.170598),
         new google.maps.LatLng(47.828065, 13.170167),
         new google.maps.LatLng(47.827690, 13.170869),
         new google.maps.LatLng(47.827487, 13.171092),
         new google.maps.LatLng(47.827187, 13.171252)
    ];

    var path_main = new google.maps.Polygon({
        paths: coordinates_main,
        strokeColor:"#000FF",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#2457a2",
        fillOpacity:0.6,
        zIndex: 1
    });

    var path_caravanCamping = new google.maps.Polygon({
        paths: coordinates_caravanCamping,
        strokeColor:"#B56D07",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#EB963B",
        fillOpacity:0.6,
        zIndex: 1
    });

    var path_parkingNorth = new google.maps.Polygon({
        paths: coordinates_parkingNorth,
        strokeColor:"#851522",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#F0243C",
        fillOpacity:0.6,
        zIndex: 1
    });

    path_main.setMap(map);
    google.maps.event.addListener(path_main, 'click', function(){
        infowindow.setContent("Mainstage Area");
        infowindow.setPosition(new google.maps.LatLng(47.822972, 13.175609));
        infowindow.open(map);
    });
    path_caravanCamping.setMap(map);
    path_parkingNorth.setMap(map);
}

var stages = [
    ['Mainstage', 47.823581, 13.174882, 9, '<p class="pag" style="font-family: elfFont">Main Stage</p><a href="../sites/stages/mainstage.html"style="font-family: elfFont">Timetable</a>'],
    ['Clubcircus', 47.819711, 13.175657, 2, '<p class="pag" style="font-family: elfFont">Club Circus</p><a href="../sites/stages/clubcircus.html"style="font-family: elfFont">Timetable</a>'],
    ['qdance', 47.822762, 13.173973, 3, '<p class="pag" style="font-family: elfFont">Q-Dance Stage</p><a href="../sites/stages/qdance.html"style="font-family: elfFont">Timetable</a>'],
    ['heineken', 47.819755, 13.176511, 4, '<p class="pag" style="font-family: elfFont">Heineken Star Club</p><a href="../sites/stages/heineken.html"style="font-family: elfFont">Timetable</a>'],
    ['stonehenge', 47.821173, 13.171642, 6, '<p class="pag" style="font-family: elfFont">Stonehenge</p><a href="../sites/stages/stonehenge.html"style="font-family: elfFont">Timetable</a>'],
];

var camps = [
    ['basic', 47.820915, 13.171459, 5, 'Basic Camping'],
    ['caravan', 47.825707, 13.171533, 7, "<p class='pag' style='font-family: elfFont'>Caravan Camping - Area"],
    ['comfort', 47.823263, 13.179155, 8, 'Comfort-Camping']
];


function setCamping(map, campsides) {

    /* setting up the camping spots*/
    var img_camp = '../img/maps/camping_marker.png';
    for (var i = 0; i< campsides.length; i++) {
        var camp = campsides[i];
        var campLatLng = new google.maps.LatLng(camp[1], camp[2]);
        var marker_camp = new google.maps.Marker({
            position: campLatLng,
            map: map,
            icon: img_camp,
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
    var img_stage = '../img/maps/stages_marker.png';

    for (var i = 0; i < locations.length; i++) {
        var stage = locations[i];
        var myLatLng = new google.maps.LatLng(stage[1], stage[2]);
        var marker_stage = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: img_stage,
            title: stage [0],
            zIndex: stage[3],
            html: stage [4]
        });
        google.maps.event.addListener(marker_stage, 'click', function(){
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);