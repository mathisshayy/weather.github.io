$.getJSON(
    "http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}&appid={&appid=1988f65fbc72677f9083449ebc3c953e}", 
    function(data){
    console.log(data);
});

var temp = data.weather.temp;
var weather = data.weather[0].main;

$('.weather').append(weather);
$(".temp").append();