/**
 * Created by yicho on 2018-05-23.
 **/

/**tourInfo.js 가져오기**/
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.getElementsByTagName('head')[0].appendChild(script);
}
var myloaded = function() {
    console.log("tourInfo.js loaded!");
}
loadScript('js/tourInfo.js', myloaded);

/**내 위치 가져오기**/
function myLocation() {
    /* 객체가 존재하면 */
    if ( navigator.geolocation )
    {
        /* getCurrentPostion 메서드를 호출 ( 위치를 가져오는 핸들러함수를 파라미터로 ) */
        navigator.geolocation.getCurrentPosition( successHandler, errorHandler );
    }
    else
    {
        alert("not support geolocation");
    }
}

/** 위치정보를 가져오는 사용자정의 핸들러함수 **/
function successHandler( position ) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var loc = document.getElementById("location");
    //loc.innerHTML = "현재위치는 위도 : "+latitude+"  ,경도: "+longitude;

    showMap( position.coords );
}

/* 실패한 경우 */
function errorHandler( error ) {
    var errorCode = error.code;
    var errorMessage = error.message;

    var loc = document.getElementById("location");
    loc.innerHTML = "실패 : "+errorCode+" / "+errorMessage;
}

/** google 지도위에 보여주기 **/
function showMap( coords ) {
    /* 구글맵 객체생성자 ( 위도,경도 ) */
    var googleLatLng = new google.maps.LatLng( coords.latitude, coords.longitude );

    /* 지도가 보이는 형태 */
    var googleOption = {
        zoom : 12,    // 0~21 까지 클수룩 자세하게 보임
        center : googleLatLng,  // 위에서 생성한 객체가 지도의 중앙에 오게
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    var map = document.getElementById("googlemap");


    /* 지도보이기 */
    var newMap = new google.maps.Map( map, googleOption );
    getTourInfo(newMap, googleLatLng);

}