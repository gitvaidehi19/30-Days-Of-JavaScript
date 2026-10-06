const weatherData = [
    {
        city: "Ahmedabad",
        temperature: 30,
        humidity: 70,
        wind: 10
    },

    {
        city: "Mumbai",
        temperature: 29,
        humidity: 78,
        wind: 15
    },

    {
        city: "Delhi",
        temperature: 35,
        humidity: 55,
        wind: 10
    },

    {
        city: "Bangalore",
        temperature: 25,
        humidity: 70,
        wind: 8
    },

    {
        city: "Pune",
        temperature: 27,
        humidity: 60,
        wind: 11
    }
];



// Get HTML Elements

const cityInput = document.getElementById("cityInput");
const getWeather = document.getElementById("getWeather");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

// Show Weather

function showWeather() {

    const city = cityInput.value.trim();


    if (city === "") {

        alert("Please enter a city name");

        return;
    }

    const weather = weatherData.find(function(data) {

        return data.city.toLowerCase() === city.toLowerCase();

    });

    if (weather === undefined) {

        cityName.textContent = "City not found";

        temperature.textContent = "";
        humidity.textContent = "";
        wind.textContent = "";

        return;
    }

    cityName.textContent = "📍 " + weather.city;

    temperature.textContent =
        "🌡️ Temperature: " + weather.temperature + "°C";

    humidity.textContent =
        "💧 Humidity: " + weather.humidity + "%";

    wind.textContent =
        "💨 Wind: " + weather.wind + " km/h";
}

// Button Event

getWeather.addEventListener("click", showWeather);