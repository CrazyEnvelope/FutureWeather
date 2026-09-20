import { showWeatherData } from "./datadisplay";

let data = {};
let cleanedData = {};
let message = document.getElementById("message");

async function getCoordinatesBasedOnRegionName() {
  const location = document.getElementById("location").value.trim();

  const url =
    "https://geocoding-api.open-meteo.com/v1/search?name=" +
    location +
    "&count=1&language=en&format=json";

  let result = {};

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    result = await response.json();
  } catch (error) {
    console.error(error.message);
  }

  const latitude = result["results"][0]["latitude"];
  const longitude = result["results"][0]["longitude"];

  getDataFromAPI(latitude, longitude);
}

export async function getDataFromAPI(latitude, longitude) {
  let result = {};
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=" +
    latitude +
    "&longitude=" +
    longitude +
    "&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,precipitation_probability&current=is_day&temperature_unit=celsius";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    result = await response.json();
  } catch (error) {
    console.error(error.message);
  }
  data = result;
  weatherDataCleaner();
  showWeatherData(data, cleanedData);
  message.remove();
}

export async function weatherDataCleaner() {
  let dates = new Set(
    data["hourly"]["time"].map((b) => b.substring(0, b.indexOf("T"))),
  );

  let hours = new Set(
    data["hourly"]["time"].map((b) => b.substring(b.indexOf("T") + 1)),
  );

  let hourIndex = 0;

  let beautifulWeatherData = {};

  for (const date of dates) {
    let dayData = {};
    for (const hour of hours) {
      let temperature = Math.round(data["hourly"]["temperature_2m"][hourIndex]);
      let humidity = Math.round(
        data["hourly"]["relative_humidity_2m"][hourIndex],
      );
      let wind = Math.round(data["hourly"]["wind_speed_10m"][hourIndex]);
      let code = data["hourly"]["weather_code"][hourIndex];
      let precipitation = Math.round(
        data["hourly"]["precipitation_probability"][hourIndex],
      );

      hourIndex++;

      if (!dayData["Hours"]) {
        dayData["Hours"] = {};
      }

      dayData["Hours"][hour] = {
        Temperature: temperature,
        Precipitation: precipitation,
        Wind: wind,
        Humidity: humidity,
        Code: code,
      };
    }

    if (!beautifulWeatherData[date]) {
      beautifulWeatherData[date] = {};
    }

    beautifulWeatherData[date] = dayData;

    let temp = [];
    for (let hour in beautifulWeatherData[date]["Hours"]) {
      temp.push(beautifulWeatherData[date]["Hours"][hour]["Temperature"]);
    }
    beautifulWeatherData[date]["Max_Temp"] = Math.round(Math.max(...temp));
    beautifulWeatherData[date]["Min_Temp"] = Math.round(Math.min(...temp));
  }

  cleanedData = beautifulWeatherData;
}

document
  .getElementById("searchButton")
  .addEventListener("click", getCoordinatesBasedOnRegionName);

/*export async function getDataFromFile() {
  let result = {};
  try {
    const response = await fetch("./src/data.json");
    result = await response.json();
  } catch (err) {
    console.error(err);
  }
  return result;
}*/
