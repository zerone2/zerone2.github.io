/**
 * Created by yicho on 2018-05-23.
 **/


function getTourInfo(google_map, coords) {

    var myPos = coords;
    var subStr = coords.toString().split(', '); //googleLatLng로 가져온 인자를 api형식에 맞게 변환.
    coords = "mapX=" + subStr[1].substring(0,subStr[1].length-1) + "&mapY=" + subStr[0].substring(1,);

    /**radius로 반경 지정**/
    var tourUrl1 = "https://api.visitkorea.or.kr/openapi/service/rest/EngService/locationBasedList?ServiceKey=RJIAymfYXJ3BFkiqarkd7OIgVl0i9SuZ9otu3dbjXZ6shNWV9u7cqGTsgHDjRKkHSmFUhpYMzclVYyT%2FEWriQA%3D%3D&contentTypeId=82&";
    var tourUrl2 = "&radius=10000&pageNo=1&numOfRows=10&listYN=Y&arrange=E&MobileOS=ETC&MobileApp=AppTesting&_type=json";
    var tourInfo = tourUrl1 + coords + tourUrl2;
    //var tourInfo = "http://api.visitkorea.or.kr/openapi/service/rest/EngService/locationBasedList?ServiceKey=RJIAymfYXJ3BFkiqarkd7OIgVl0i9SuZ9otu3dbjXZ6shNWV9u7cqGTsgHDjRKkHSmFUhpYMzclVYyT%2FEWriQA%3D%3D&contentTypeId=82&mapX=126.985735&mapY=37.561126&radius=5000&pageNo=1&numOfRows=10&listYN=Y&arrange=E&MobileOS=ETC&MobileApp=AppTesting&_type=json";

    console.log(tourInfo);
    console.log("tourInfo loaded");

    var marker;
    var myPos_mark = new google.maps.Marker({       //현재 위치 마커생성
        position: myPos,
        map: google_map,
        label: "me"
    });
    var infowindow = new google.maps.InfoWindow();

    $.ajax({
        dataType: "json",
        url: tourInfo,
        success : function(data){

            console.log('Tour data received');

            /**html화면에 가져온 정보를 정렬해서 띄워줍니다**/
            var i = 0;
            var string = "";

            if (data.response.body.items.item[0] == undefined) {
                if (data.response.body.items.item == undefined) {
                    string += "There is no popular restaurant near here";
                }
                else {
                    var googleLatLng = new google.maps.LatLng(data.response.body.items.item.mapy, data.response.body.items.item.mapx);
                    //console.log("mapY : " + data.response.body.items.item.mapy + " & mapX : " + data.response.body.items.item.mapx);
                    marker = new google.maps.Marker({
                        position: googleLatLng,
                        map: google_map
                    });
                    google.maps.event.addListener(marker, 'click', (function(marker) {
                        return function() {
                            infowindow.setContent('<b><font color="black">'+data.response.body.items.item.title+'</b>');
                            infowindow.open(google_map, marker);
                        }
                    })(marker));

                    string += "<br>"
                        + "NAME" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item.title + "<br>"
                        + "ADDRESS" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item.addr1 + "<br>"
                        + "DISTANCE" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item.dist + "m" + "<br>";
                }
            }

            else {
                while (i < data.response.body.items.item.length) {
                    if (i >= 5) {
                        break;
                    }
                    var googleLatLng = new google.maps.LatLng(data.response.body.items.item[i].mapy, data.response.body.items.item[i].mapx);
                    //console.log("mapY : " + data.response.body.items.item[i].mapy + " & mapX : " + data.response.body.items.item[i].mapx);

                    string += "<br>"
                        + "NAME" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item[i].title + "<br>"
                        + "ADDRESS" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item[i].addr1 + "<br>"
                        + "DISTANCE" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item[i].dist + "m" + "<br>";
                    //makeMark(googleLatLng);
                    marker = new google.maps.Marker({
                        position: googleLatLng,
                        map: google_map
                    });
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            infowindow.setContent('<b><font color="black">'+data.response.body.items.item[i].title+'</b>');
                            infowindow.open(google_map, marker);
                        }
                    })(marker, i));

                    i++;
                }
            }
                document.getElementById("tourInfo").innerHTML = string;
        }
    });


}

