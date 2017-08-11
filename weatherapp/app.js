var APPID = "2d3eb6130a9e29f0c0ba06d09d55b511";
var temp;
var loc;
var humidity;
var wind;

function updateByzip(zip){
	var url = "http://api.openweathermap.org/data/2.5/weather?" + "zip=" + zip + "&APPID=" + APPID;
	sendRequest(url);
}



function sendRequest(url){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var data = JSON.parse(xmlhttp.responseText);
			var weather = {};
			weather.temp = K2C(data.main.temp);
			weather.loc = data.name;
			weather.humidity = data.main.humidity;
			weather.wind = data.wind.speed;
			update(weather);
		}
	};
	xmlhttp.open("GET",url, true);
	xmlhttp.send();
}

function K2C(K){
	return Math.round(K - 273.15); 
}


function update(weather){
	loc.innerHTML = weather.loc;
	temp.innerHTML = weather.temp;
	humidity.innerHTML = weather.humidity;
	wind.innerHTML = weather.wind;
}

window.onload = function() {
	loc = document.getElementById("location");
	temp = document.getElementById("temperature");
	humidity = document.getElementById("humidity");
	wind = document.getElementById("wind");
	//updateByZip(10009);

	if(!navigator.geolocation){

	}else{
		var zip = window.prompt("What is your zip code?");
		updateByzip(zip);
	}
	
}