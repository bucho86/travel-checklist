// document.addEventListener('DOMContentLoaded', () => {
//     // Toggle visibility of "Travel" section
//     const travelHeader = document.getElementById('travel-header');
//     const travelSection = document.getElementById('travel-section');
//     travelHeader.addEventListener('click', () => {
//         travelSection.classList.toggle('hidden');
//     });
//
//     // Toggle visibility of "Hotel" section
//     const hotelHeader = document.getElementById('hotel-header');
//     const hotelSection = document.getElementById('hotel-section');
//     hotelHeader.addEventListener('click', () => {
//         hotelSection.classList.toggle('hidden');
//     });
//
//     // Populate "Plan Ahead" section
//     const planAheadSection = document.getElementById('plan-ahead-section');
//     const plans = [
//         {title: 'Book Flights', details: 'Book your flights early to get the best deals.'},
//         {title: 'Reserve Hotel', details: 'Reserve your hotel rooms in advance to ensure availability.'},
//         {title: 'Pack Essentials', details: 'Make a list of essential items to pack for your trip.'}
//     ];
//
//     plans.forEach(plan => {
//         const planDiv = document.createElement('div');
//         const planTitle = document.createElement('h3');
//         const planDetails = document.createElement('p');
//
//         planTitle.textContent = plan.title;
//         planDetails.textContent = plan.details;
//
//         planDiv.appendChild(planTitle);
//         planDiv.appendChild(planDetails);
//         planAheadSection.appendChild(planDiv);
//     });
// });
// function getInfo(){
//     const newName= document.querySelector("cityInput");
//     const cityName= document.querySelector("cityName");
//     cityName.innerHTML= "--"+newName.value+"--"
// }
//  fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'{state%20code},{country%20code}&appid=fa27db200ad8ad4d6da2b3be92f8526d")
//  .then(response => response.json())
//  .then(data =>{
//        for(i=0;i<5;i++){
//            document.querySelector("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.list[i].main.temp_min - 276.74).toFixed(1)+"*";
//        }
//        for(i=0;i<5;i++){
//            document.querySelector("day" +(i+1)+"Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max -for(i=0;i<5;i++){
//            document.querySelector("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.list[i].main.temp_min - 276.74).toFixed(1)+"*";
//        } ).toFixed(1)+"*";
//        }
//      })
//
