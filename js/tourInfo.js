/**
 * Created by yicho on 2017-05-12.
 **/

function getTourInfo(coords) {
    var tourUrl1 = "http://api.visitkorea.or.kr/openapi/service/rest/EngService/locationBasedList?ServiceKey=RJIAymfYXJ3BFkiqarkd7OIgVl0i9SuZ9otu3dbjXZ6shNWV9u7cqGTsgHDjRKkHSmFUhpYMzclVYyT%2FEWriQA%3D%3D&contentTypeId=82&";
    var tourUrl2 = "&radius=5000&pageNo=1&numOfRows=10&listYN=Y&arrange=E&MobileOS=ETC&MobileApp=AppTesting&_type=json";
    var tourInfo = tourUrl1 + coords + tourUrl2;
    //var tourInfo = "http://api.visitkorea.or.kr/openapi/service/rest/EngService/locationBasedList?ServiceKey=RJIAymfYXJ3BFkiqarkd7OIgVl0i9SuZ9otu3dbjXZ6shNWV9u7cqGTsgHDjRKkHSmFUhpYMzclVYyT%2FEWriQA%3D%3D&contentTypeId=82&mapX=126.985735&mapY=37.561126&radius=5000&pageNo=1&numOfRows=10&listYN=Y&arrange=E&MobileOS=ETC&MobileApp=AppTesting&_type=json";
    
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){        //서버로부터 응답 받으면 익명함수 호출
        if(xhr.status == 200){      //status 값이 정상이면 함수 정상 실행

            data = JSON.parse(xhr.responseText);

            console.log('Tour data received');

            /**html화면에 가져온 정보를 정렬해서 띄워줍니다**/
            var i = 0;
            var string = "";

            if (data.response.body.items.item[0] == undefined) {
                if (data.response.body.items.item == undefined) {
                    string += "There is no popular restaurant near here";
                }
                else {
                    string += "==============================================================" + "<br>"
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
                    string += "==============================================================" + "<br>"
                        + "NAME" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item[i].title + "<br>"
                        + "ADDRESS" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item[i].addr1 + "<br>"
                        + "DISTANCE" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item[i].dist + "m" + "<br>";
                    i++;
                }
            }
                document.getElementById("tourInfo").innerHTML = string;
        }
    }

    xhr.open('GET', tourInfo, true);    //http 메소드, 요청을 처리할 url, 비동기로 처리될 것인지 지정하는 boolean값
    xhr.send(null);

    /*
    $.ajax({
        dataType: "json",
        url: tourInfo,
        success: function (data) {

            //콘솔에 데이터 받았다고 표시합니다
            console.log('Tour data receied');

            //html화면에 가져온 정보를 정렬해서 띄워줍니다
            var i = 0;
            var string = "";

            if (data.response.body.items.item[0] == undefined) {
                if (data.response.body.items.item == undefined) {
                    string += "There is no popular restaurant near here";
                }
                else {
                    string += "==============================================================" + "<br>"
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
                    string += "==============================================================" + "<br>"
                        + "NAME" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item[i].title + "<br>"
                        + "ADDRESS" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item[i].addr1 + "<br>"
                        + "DISTANCE" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ":" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.response.body.items.item[i].dist + "m" + "<br>";
                    i++;
                }
            }
                document.getElementById("tourInfo").innerHTML = string;
        }
    });*/
}

