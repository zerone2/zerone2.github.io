/**
 * Created by yicho on 2018-05-25.
 */

/** 버튼 클릭시 날씨 정보 불러옴**/
document.addEventListener("DOMContentLoaded", function(){

    var url1 = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR';
    var url2 = '&units=metric&APPID=a09317be030ee8f6d5a2de545c1f79d7';
    var weatherURL = url1 + url2;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", weatherURL, true);    //http 메소드, 요청을 처리할 url, 비동기로 처리될 것인지 지정하는 boolean값

    xhr.onload = function(){        //서버로부터 응답 받으면 익명함수 호출
        if(xhr.status == 200){      //status 값이 정상이면 함수 정상 실행

            data = JSON.parse(xhr.responseText);

            console.log('Tour data received');

                /**콘솔에 불러온 데이터 정보 기록**/
                console.log('weather data received');
                if(data.weather[2] == undefined) {
                    if (data.weather[1] != undefined) {
                        console.log(data.weather[1]);
                    }
                }
                else {
                    console.log(data.weather[1]);
                    console.log(data.weather[2]);
                }
                console.log(data.weather[0]);

                /**html 화면에 불러온 정보 띄워줍니다**/
                var cityStr = "";
                var tempStr = "";
                var weatherStr = "";
                var humStr="";
                var windStr="";
                var press="";
                var imgStr="http://openweathermap.org/img/w/";              //날씨 이미지
                /** json 사용 **/
                if(data.weather[2] == undefined) {
                    if (data.weather[1] == undefined) {
                        weatherStr += " Weather : " + data.weather[0].main;
                        imgStr += data.weather[0].icon + ".png";
                    }
                    else {
                        weatherStr += " Weather : " + data.weather[1].main;
                        imgStr += data.weather[1].icon + ".png";
                    }
                }
                else
                {
                    weatherStr += " Weather : " + data.weather[2].main;
                    imgStr += data.weather[2].icon + ".png";
                }

                tempStr += "" + data.main.temp;                         //기온
                tempStr=tempStr.split('.');
                cityStr += "" + data.name + " , " + data.sys.country ;  //도시이름
                humStr += "" + data.main.humidity + "% humidity" ;      //습도
                windStr += "" + data.wind.speed + "m/s";                //풍속
                press += "" + data.main.pressure + " mm Hg";            //기압

                document.getElementById("location").innerText = cityStr;
                document.getElementById("temperature").innerText = tempStr[0];
                document.getElementById("weather-desc").innerText = weatherStr;
                document.getElementById("humidity").innerText = humStr;
                document.getElementById('wind').innerText = windStr;
                document.getElementById('pressure').innerText = press;
                document.getElementById("weatherImg").src = imgStr;
            }
        }
        xhr.send();
    });

