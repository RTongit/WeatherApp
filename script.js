

let btn = document.getElementById("btn");
let weatherIcon = document.querySelector(".weather-icon");


btn.addEventListener("click", () => {
    getWeather();
})


async function getWeather() {
    let city = document.getElementById("cityinput").value;
    const apikey = "91d6d907bd094e6159cdad6d213c2ada"
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    let response = await fetch(apiurl);
    if (!response.ok) {
        document.querySelector(".weather").style.display = "none"
        alert("Invalid city name");

    }
    else {
        document.querySelector(".weather").style.display = "block"
        let data = await response.json();

        document.querySelector(".temp").textContent = Math.round(data.main.temp - 273.15) + "°C";

        document.querySelector(".city").textContent = data.name;
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".windspeed").textContent = data.wind.speed + " km/h";

        // For changing weather icon according to weather condition

        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "/img/clear.png"
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "/img/clouds.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/img/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "/img/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "/img/rain.png"
        }
        console.log(data);
    }

}



