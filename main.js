document.addEventListener('DOMContentLoaded', () => {
    // Toggle visibility of "Travel" section
    const travelHeader = document.getElementById('travel-header');
    const travelSection = document.getElementById('travel-section');
    travelHeader.addEventListener('click', () => {
        travelSection.classList.toggle('hidden');
    });

    // Toggle visibility of "Hotel" section
    const hotelHeader = document.getElementById('hotel-header');
    const hotelSection = document.getElementById('hotel-section');
    hotelHeader.addEventListener('click', () => {
        hotelSection.classList.toggle('hidden');
    });

    // Populate "Plan Ahead" section
    const planAheadSection = document.getElementById('plan-ahead-section');
    const plans = [
        { title: 'Book Flights', details: 'Book your flights early to get the best deals.' },
        { title: 'Reserve Hotel', details: 'Reserve your hotel rooms in advance to ensure availability.' },
        { title: 'Pack Essentials', details: 'Make a list of essential items to pack for your trip.' }
    ];

    plans.forEach(plan => {
        const planDiv = document.createElement('div');
        const planTitle = document.createElement('h3');
        const planDetails = document.createElement('p');

        planTitle.textContent = plan.title;
        planDetails.textContent = plan.details;

        planDiv.appendChild(planTitle);
        planDiv.appendChild(planDetails);
        planAheadSection.appendChild(planDiv);
    });
});