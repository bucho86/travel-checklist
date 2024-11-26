//Implement the following functionality using JavaScript
Display the weather forecast for the next 4 days, including:
Date
Weather icon
Temperature (high and low)
Brief description (e.g., "Partly cloudy")


//api key 4 day-forecast
fa27db200ad8ad4d6da2b3be92f8526d

//this is the api key for looking it up by city name
api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

//this is the api key for looking it up by zip code
api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}

//this is to call the weather for 5 days 
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//this is ow you will call the weather hourly
https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}

//hourly forecast in metric units
https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=57&lon=-2.15&appid={API key}&units=metric

//daily forecast weather API response
"dt":1406080800,
"temp":{
        "day":297.77,  //daily averaged temperature
        "min":293.52, //daily min temperature
        "max":297.77, //daily max temperature
        "night":293.52, //night temperature
        "eve":297.77, //evening temperature
        "morn":297.77}, //morning temperature


<!-- fetch("http://api.openweathermap.org/geo/1.0/direct?q={city")

.then(response => {

    if (response.ok) {

        throw new Error("Error: " + response.statusText);

    }

    return response.json();

}


    .then(data => console.log(data.weather-forecast))

.catch(error => console.error("Error:", error)) -->


