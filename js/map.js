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
    setParking(map, parking);


    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });


    var coordinates_main = [
        new google.maps.LatLng(47.823780, 13.175142),
        new google.maps.LatLng(47.823407, 13.174622),
        new google.maps.LatLng(47.822881, 13.175143),
        new google.maps.LatLng(47.822162, 13.175919),
        new google.maps.LatLng(47.821920, 13.176144),
        new google.maps.LatLng(47.821475, 13.176280),
        new google.maps.LatLng(47.821486, 13.176761),
        new google.maps.LatLng(47.822228, 13.176742),
        new google.maps.LatLng(47.822620, 13.176488),
        new google.maps.LatLng(47.823507, 13.175557),
        new google.maps.LatLng(47.823723, 13.175309)
    ];

    var coordinates_clubcircus = [
        new google.maps.LatLng(47.823291, 13.173913),
        new google.maps.LatLng(47.822969, 13.173379),
        new google.maps.LatLng(47.822729, 13.173574),
        new google.maps.LatLng(47.822618, 13.173814),
        new google.maps.LatLng(47.822558, 13.174118),
        new google.maps.LatLng(47.822521, 13.174505),
        new google.maps.LatLng(47.822687, 13.174864),
        new google.maps.LatLng(47.822946, 13.174509)
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
         new google.maps.LatLng(47.827015, 13.171343),
         new google.maps.LatLng(47.827892, 13.173935),
         new google.maps.LatLng(47.826549, 13.175391),
         new google.maps.LatLng(47.827160, 13.177780),
         new google.maps.LatLng(47.827831, 13.178727),
         new google.maps.LatLng(47.828961, 13.179410),
         new google.maps.LatLng(47.829583, 13.179433),
         new google.maps.LatLng(47.829546, 13.178957),
         new google.maps.LatLng(47.829498, 13.178760),
         new google.maps.LatLng(47.829615, 13.178389),
         new google.maps.LatLng(47.829665, 13.178040),
         new google.maps.LatLng(47.829983, 13.178057),
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

    var coordinates_campingNorth = [
        new google.maps.LatLng(47.827015, 13.171343),
        new google.maps.LatLng(47.827892, 13.173935),
        new google.maps.LatLng(47.826549, 13.175391),
        new google.maps.LatLng(47.827160, 13.177780),
        new google.maps.LatLng(47.826942, 13.178078),
        new google.maps.LatLng(47.826914, 13.178876),
        new google.maps.LatLng(47.827422, 13.180260),
        new google.maps.LatLng(47.827437, 13.181879),
        new google.maps.LatLng(47.826553, 13.181187),
        new google.maps.LatLng(47.826105, 13.180950),
        new google.maps.LatLng(47.825902, 13.181380),
        new google.maps.LatLng(47.825626, 13.183243),
        new google.maps.LatLng(47.825279, 13.183834),
        new google.maps.LatLng(47.824857, 13.184077),
        new google.maps.LatLng(47.824339, 13.183904),
        new google.maps.LatLng(47.824366, 13.182364),
        new google.maps.LatLng(47.824408, 13.181485),
        new google.maps.LatLng(47.824032, 13.181313),
        new google.maps.LatLng(47.823900, 13.180688),
        new google.maps.LatLng(47.823870, 13.179587),
        new google.maps.LatLng(47.823651, 13.178527),
        new google.maps.LatLng(47.824247, 13.178249),
        new google.maps.LatLng(47.825017, 13.175307),
        new google.maps.LatLng(47.824946, 13.172407),
        new google.maps.LatLng(47.825225, 13.172628),
        new google.maps.LatLng(47.826453, 13.172281),
        new google.maps.LatLng(47.826652, 13.172102),
        new google.maps.LatLng(47.826781, 13.171628),
        new google.maps.LatLng(47.827015, 13.171343)
    ];

    var coordinates_campingSouth = [
        new google.maps.LatLng(47.822088, 13.171936),
        new google.maps.LatLng(47.821638, 13.172478),
        new google.maps.LatLng(47.821467, 13.174070),
        new google.maps.LatLng(47.819255, 13.173822),
        new google.maps.LatLng(47.819546, 13.171653),
        new google.maps.LatLng(47.819198, 13.170659),
        new google.maps.LatLng(47.818865, 13.170464),
        new google.maps.LatLng(47.818836, 13.169600),
        new google.maps.LatLng(47.818995, 13.168606),
        new google.maps.LatLng(47.818878, 13.167632),
        new google.maps.LatLng(47.819008, 13.166309),
        new google.maps.LatLng(47.819066, 13.165745),
        new google.maps.LatLng(47.820069, 13.165808),
        new google.maps.LatLng(47.820491, 13.165353),
        new google.maps.LatLng(47.820753, 13.165310),
        new google.maps.LatLng(47.821408, 13.166479),
        new google.maps.LatLng(47.821844, 13.169709),
        new google.maps.LatLng(47.822031, 13.170899)
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

    var path_clubcircus = new google.maps.Polygon({
        paths: coordinates_clubcircus,
        strokeColor:"#406339",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#5C8F51",
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

    var path_campingNorth = new google.maps.Polygon({
        paths: coordinates_campingNorth,
        strokeColor:"#347516",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#4DB31E",
        fillOpacity:0.6,
        zIndex: 1
    });

    var path_campingSouth = new google.maps.Polygon({
        paths: coordinates_campingSouth,
        strokeColor:"#252994",
        strokeOpacity:0.8,
        strokeWeight:1,
        fillColor:"#373DED",
        fillOpacity:0.6,
        zIndex: 1
    });

    path_main.setMap(map);
    google.maps.event.addListener(path_main, 'click', function(){
        infowindow.setContent("Mainstage Area");
        infowindow.setPosition(new google.maps.LatLng(47.822972, 13.175609));
        infowindow.open(map);
    });
    path_clubcircus.setMap(map);
    path_caravanCamping.setMap(map);
    path_parkingNorth.setMap(map);
    path_campingNorth.setMap(map);
    path_campingSouth.setMap(map);
}

var stages = [
    ['Mainstage', 47.823533, 13.175031, 9, '<p class="pag" style="font-family: elfFont">Main Stage</p><a href="../sites/stages/mainstage.html"style="font-family: elfFont">Timetable</a>'],
    ['Clubcircus', 47.822911, 13.174028, 2, '<p class="pag" style="font-family: elfFont">Club Circus</p><a href="../sites/stages/clubcircus.html"style="font-family: elfFont">Timetable</a>'],
    ['qdance', 47.819322, 13.175875, 3, '<p class="pag" style="font-family: elfFont">Q-Dance Stage</p><a href="../sites/stages/qdance.html"style="font-family: elfFont">Timetable</a>'],
    ['stonehenge', 47.819332, 13.176628, 6, '<p class="pag" style="font-family: elfFont">Stonehenge</p><a href="../sites/stages/stonehenge.html"style="font-family: elfFont">Timetable</a>']
];

var camps = [
    ['south', 47.820650, 13.170293, 5, "<p class='pag' style='font-family: elfFont'>Basic Camping - Area</p>"],
    ['caravan', 47.825707, 13.171533, 7, "<p class='pag' style='font-family: elfFont'>Caravan Camping - Area</p>"],
    ['north', 47.825411, 13.178014, 8, "<p class='pag' style='font-family: elfFont'>Camping North - Area</p>"]
];

var parking = [
    ['parkingNorth',47.828468, 13.175752, 4, "<p class='pag' style='font-family: elfFont'>Parking Camping - North</p>" ]
]


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

function setParking(map, parks){
    var img_parking = '../img/maps/park_marker.png';

    for (var i = 0; i < parks.length; i++) {
        var parking = parks[i];
        var myLatLng = new google.maps.LatLng(parking[1], parking[2]);
        var marker_parking = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: img_parking,
            title: parking [0],
            zIndex: parking[3],
            html: parking [4]
        });
        google.maps.event.addListener(marker_parking, 'click', function(){
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);