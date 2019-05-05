/**
 * Created by yicho on 2018-05-23.
 **/

var btn = document.getElementById('selectBtn');

function selClick(){

	var selected_value = document.getElementById("selBox").value;

	if(selected_value == "weather"){
		location.href = "weather.html";
	} else if(selected_value == "searchPlace"){
		location.href = "searchPlace.html";
	} else if(selected_value == "currentLoc"){
		location.href = "currentPlace.html";
	}
}

