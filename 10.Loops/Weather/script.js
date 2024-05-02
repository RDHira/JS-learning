document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            locationElement.textContent = location;
            temperatureElement.textContent = `${temperature}°C`;
            descriptionElement.textContent = description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            locationElement.textContent = "Error fetching data";
        });
});
