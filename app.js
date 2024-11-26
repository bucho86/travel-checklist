// fetch = funtion used for making http requests to fetch resources
// (JSON style data, images, files)
// Simplifies asynchronous data fetching in javascript and
// used for interacting with API's to retrieve
// and send data asynchronously over the web.
// fetch(url, {options})

function getInfo(){
    const newName= document.querySelector("cityInput");
    const cityName= document.querySelector("cityName");
    cityName.innerHTML= "--"+newName.value+"--"
}
 fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'{state%20code},{country%20code}&appid=fa27db200ad8ad4d6da2b3be92f8526d")
 .then(response => response.json())
 .then(data =>{
       for(i=0;i<5;i++){
           document.querySelector("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.list[i].main.temp_min - 276.74).toFixed(1)+"*";
       }
       for(i=0;i<5;i++){
           document.querySelector("day" +(i+1)+"Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max -for(i=0;i<5;i++){
           document.querySelector("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.list[i].main.temp_min - 276.74).toFixed(1)+"*";
       } ).toFixed(1)+"*";
       }
     })

