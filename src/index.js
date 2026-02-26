import "./styles.css";
import getWeather from "./weather.js";
import { renderError, renderWeather } from "./dom.js";

let data = {};


const loadWeather = async (city) => {
    try {
        data = await getWeather(city);
        data = filterWeather(data);
        renderWeather(data);
    } catch (error) {
        renderError(error);
    }
}

const filterWeather = (data) => {
    let filteredData = {};

    filteredData.temp = data.currentConditions.temp;
    filteredData.description = data.description;
    filteredData.feelsLike = data.currentConditions.feelslike;
    filteredData.humidity = data.currentConditions.humidity;
    filteredData.wind = data.currentConditions.windspeed;
    filteredData.rainProb = data.currentConditions.precipprob;
    filteredData.location = data.resolvedAddress;

    return filteredData;
}

const init = () => {
    loadWeather("India");
    const input = document.getElementById("city-input");
    const searchBtn = document.getElementById("search");

    searchBtn.addEventListener('click', () => {
        if (input.value.length > 2) {
            loadWeather(input.value);
            input.value = "";
        }
        else {
            renderError("empty");
        }
    })

    input.addEventListener('input', () => {
        if (input.value.length < 3 && input.value.length > 0) {
            renderError("min");
        } else {
            renderError("clear");
        }
    })
}

init();

