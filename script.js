// script.js
const apiKey = "6bdef428b4446def8dfd861033f2ef3a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#cityInput");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.opacity = 1;
        document.querySelector(".error").style.transform = "translateY(0)";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + "kmph";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        } else if (data.weather[0].main == "Cler") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        // Trigger animation after fetching data
        document.querySelector(".weather h1").style.opacity = 1;
        document.querySelector(".weather h1").style.transform = "translateY(0)";
        document.querySelector(".weather h2").style.opacity = 1;
        document.querySelector(".weather h2").style.transform = "translateY(0)";
        document.querySelector(".humidity").style.opacity = 1;
        document.querySelector(".humidity").style.transform = "translateY(0)";
        document.querySelector(".wind").style.opacity = 1;
        document.querySelector(".wind").style.transform = "translateY(0)";
    }
}

// Function to check weather when Enter key is pressed
searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

// Function to check weather when button is clicked
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
