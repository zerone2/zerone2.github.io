/**
 * Created by yicho on 2018-05-25.
 */

/** 버튼 클릭시 날씨 정보 불러옴**/
$(document).ready(function(){

    var url1 = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul,KR';
    var url2 = '&units=metric&APPID=a09317be030ee8f6d5a2de545c1f79d7';

    var url3 = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Seoul,KR';
    var url4 = '&cnt=7&units=metric&APPID=a09317be030ee8f6d5a2de545c1f79d7';

    var weatherURL = url1 + url2;
    var weatherURL2 = url3 + url4;

    var dt = new Date();
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    $.ajax({
        dataType: "jsonp",
        url: weatherURL,
        success : function(data){

            /**콘솔에 불러온 데이터 정보 기록**/
            console.log('weather data received');
            console.log(weatherURL);
            if(data.weather[2] === undefined) {
                if (data.weather[1] !== undefined) {
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
            var dateStr = "";
            var tempStr = "";
            var weatherStr = "";
            var humStr="";
            var windStr="";
            var press="";
            var imgStr="https://openweathermap.org/img/w/";              //날씨 이미지
            /** json 사용 **/
            if(data.weather[2] === undefined) {
                if (data.weather[1] === undefined) {
                    weatherStr += " Weather : " + data.weather[0].main;
                    imgStr += data.weather[0].icon + ".png";
                }
                else {
                    weatherStr += " Weather : " + data.weather[1].main;
                    imgStr += data.weather[1].icon + ".png";
                }
            }
            else {
                weatherStr += " Weather : " + data.weather[2].main;
                imgStr += data.weather[2].icon + ".png";
            }


            //dateStr += (dt.getMonth() + 1) + "-" + (dt.getDay()) + "-" + (dt.getFullYear());
            dateStr += dt.toLocaleString('en-GB') + " < " +week[dt.getDay()] + " > ";

            tempStr += "" + data.main.temp;                         //기온
            tempStr = tempStr.split('.');
            cityStr += "" + data.name + " , " + data.sys.country;  //도시이름
            humStr += "" + data.main.humidity + "% humidity" ;      //습도
            windStr += "" + data.wind.speed + "m/s";                //풍속
            press += "" + data.main.pressure + " mm Hg";            //기압

            $("#location").text(cityStr);
            $("#date").text(dateStr);
            $("#temperature").text(tempStr[0]);
            $("#weather-desc").text(weatherStr);
            $("#humidity").text(humStr);
            $("#wind").text(windStr);
            $("#pressure").text(press);
            document.getElementById("weatherImg").src=imgStr;

        }
    });

    /**주간 날씨 가져오기*/
    $.ajax({
        dataType: "jsonp",
        url: weatherURL2,
        success : function(data2){

            console.log('weather data received');
            console.log(weatherURL2);

            /**콘솔에 불러온 데이터 정보 기록**/

            console.log("day tempature : " + data2.list[0].temp.day);
            console.log("날짜 : " + (dt.toISOString()).split('T')[0]);

            var weatherIcon;
            var img;
            var dt2 = new Date();

            $('.week-forecast').find('li').each(function (i,e) {

               weatherIcon =  data2.list[i].weather[0].icon;
               img = '<img src=\"https://openweathermap.org/img/w/' + weatherIcon + '.png\">';
               $(this).find('h5').html((dt2.getMonth()+1) + "/" + dt2.getDate() + '<br>' + week[dt2.getDay()]);
               $(this).find('p').html( (parseInt(data2.list[i].temp.day)) );
               $(this).find('i').html(img);

                dt2.setDate(dt2.getDate()+1);

            });

/*
            weatherIcon =  data2.list[0].weather[0].icon;
            img = '<img src=\"https://openweathermap.org/img/w/' + weatherIcon + '.png\">';
            //$('h5.day0').html( (dt2.getMonth()+1) + "/" + dt2.getDate() + '<br>' + week[dt2.getDay()]);
            $('.day0 .week-day-temperature').html( (parseInt(data2.list[0].temp.day)) );
            $('.day0 .climacon').html(img);


            dt2.setDate(dt.getDate()+1);
            console.log(dt2.getDate());
            weatherIcon =  data2.list[1].weather[0].icon;
            img = '<img src=\"https://openweathermap.org/img/w/' + weatherIcon + '.png\">';

            //$('h5.day1').html( (dt2.getMonth()+1) + "/" + dt2.getDate() + '<br>' + week[dt2.getDay()]);
            $('.day1 .week-day-temperature').html( (parseInt(data2.list[1].temp.day)) );
            $('.day1 .climacon').html(img);
            //$('h5.day0').html( (dt2.getMonth()+1) + "/" + dt2.getDate() + '<br>' + week[dt2.getDay()]);


            dt2.setDate(dt2.getDate()+1);
            console.log(dt2.getDate());
            weatherIcon =  data2.list[2].weather[0].icon;
            img = '<img src=\"https://openweathermap.org/img/w/' + weatherIcon + '.png\">';

            $('h5.day2').html( (dt2.getMonth()+1) + "/" + dt2.getDate() + '<br>' + week[dt2.getDay()]);
            $('.day2 .week-day-temperature').html( (parseInt(data2.list[2].temp.day)) );
            $('.day2 .climacon').html(img);

            dt2.setDate(dt2.getDate()+1);
            console.log(dt2.getDate());
            weatherIcon =  data2.list[3].weather[0].icon;
            img = '<img src=\"https://openweathermap.org/img/w/' + weatherIcon + '.png\">';
            console.log(dt2.getDate() + "일, " + dt2.getDay() + " : " + week[dt2.getDay()]);

            $('h5.day3').html( (dt2.getMonth()+1) + "/" + dt2.getDate() + '<br>' + week[dt2.getDay()]);
            $('.day3 .week-day-temperature').html( (parseInt(data2.list[3].temp.day)) );
            $('.day3 .climacon').html(img);

            dt2.setDate(dt2.getDate()+1);
            console.log(dt2.getDate());
            weatherIcon =  data2.list[4].weather[0].icon;
            img = '<img src=\"https://openweathermap.org/img/w/' + weatherIcon + '.png\">';

            $('h5.day4').html( (dt2.getMonth()+1) + "/" + dt2.getDate() + '<br>' + week[dt2.getDay()]);
            $('.day4 .week-day-temperature').html( (parseInt(data2.list[4].temp.day)) );
            $('.day4 .climacon').html(img);

            dt2.setDate(dt2.getDate()+1);
            console.log(dt2.getDate());
            weatherIcon =  data2.list[5].weather[0].icon;
            img = '<img src=\"https://openweathermap.org/img/w/' + weatherIcon + '.png\">';

            $('h5.day5').html( (dt2.getMonth()+1) + "/" + dt2.getDate() + '<br>' + week[dt2.getDay()]);
            $('.day5 .week-day-temperature').html( (parseInt(data2.list[5].temp.day)) );
            $('.day5 .climacon').html(img);

            dt2.setDate(dt2.getDate()+1);
            console.log(dt2.getDate());
            weatherIcon =  data2.list[6].weather[0].icon;
            img = '<img src=\"https://openweathermap.org/img/w/' + weatherIcon + '.png\">';

            $('h5.day6').html( (dt2.getMonth()+1) + "/" + dt2.getDate() + '<br>' + week[dt2.getDay()]);
            $('.day6 .week-day-temperature').html( (parseInt(data2.list[6].temp.day)) );
            $('.day6 .climacon').html(img);
*/

            //$('h5.day1').html( (dt.getMonth()+1) + "/" + (dt.getDate()+1) + '<br>' + week[dt.getDay()+1]);
            //$('h5.day2').html( (dt.getMonth()+1) + "/" + (dt.getDate()+2) + '<br>' + week[dt.getDay()+2]);
            //$('h5.day3').html( (dt.getMonth()+1) + "/" + (dt.getDate()+3) + '<br>' + week[dt.getDay()+3]);
            //$('h5.day4').html( (dt.getMonth()+1) + "/" + (dt.getDate()+4) + '<br>' + week[dt.getDay()+4]);
            //$('h5.day5').html( (dt.getMonth()+1) + "/" + (dt.getDate()+5) + '<br>' + week[dt.getDay()+5]);
            //$('h5.day6').html( (dt.getMonth()+1) + "/" + (dt.getDate()+6) + '<br>' + week[dt.getDay()+6]);

        }
    });

});

