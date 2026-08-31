import Highcharts from "highcharts";
import { getDay } from "./datadisplay";
import { getImage, getStatus } from "./utils";

let date = "";
let weatherData = {};
let rawAPIData = {};

const mode = {
  TEMPERATURE: "Temperature",
  PRECIPITATION: "Precipitation",
  WIND: "Wind",
};

export function setData(dayDate, weatherDataImported, rawData) {
  date = dayDate;
  weatherData = weatherDataImported;
  rawAPIData = rawData;
}

function addEventsToButtons() {
  let temperatureButton = document.getElementById("tempButton");
  let precipitationButton = document.getElementById("precipButton");
  let windButton = document.getElementById("windButton");

  temperatureButton.addEventListener(
    "click",
    () => showChart(date, weatherData, mode.TEMPERATURE),
    false,
  );

  precipitationButton.addEventListener(
    "click",
    () => showChart(date, weatherData, mode.PRECIPITATION),
    false,
  );

  windButton.addEventListener(
    "click",
    () => showChart(date, weatherData, mode.WIND),
    false,
  );
}

function showChart(date, weatherData, mode) {
  let hours = Object.keys(weatherData[date]["Hours"]);
  let values = [];

  console.log(JSON.stringify(weatherData, null, 2));

  for (let hour in weatherData[date]["Hours"]) {
    values.push(weatherData[date]["Hours"][hour][mode]);
  }

  Highcharts.chart("container", {
    chart: {
      type: "areaspline",
    },
    legend: {
      enabled: false,
    },
    title: {
      text: "",
    },

    yAxis: {
      visible: false,
    },

    xAxis: {
      lineWidth: 0,
      categories: hours,
    },

    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
      },
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              let temperature = document.getElementById("temperature");
              let precip = document.getElementById("precipitation");
              let humidity = document.getElementById("humidity");
              let wind = document.getElementById("wind");
              let day = document.getElementById("day");
              let code = document.getElementById("code");
              let unit = document.getElementById("unit");
              let currentImg = document.getElementById("currentImgWeather");

              unit.innerHTML = rawAPIData["hourly_units"]["temperature_2m"];
              temperature.innerHTML =
                weatherData[date]["Hours"][this.category]["Temperature"];
              precip.innerHTML =
                "Precipitation: " +
                weatherData[date]["Hours"][this.category]["Precipitation"] +
                rawAPIData["hourly_units"]["precipitation_probability"];
              humidity.innerHTML =
                "Humidity: " +
                weatherData[date]["Hours"][this.category]["Humidity"] +
                rawAPIData["hourly_units"]["relative_humidity_2m"];
              wind.innerHTML =
                "Wind: " +
                weatherData[date]["Hours"][this.category]["Wind"] +
                rawAPIData["hourly_units"]["wind_speed_10m"];
              day.innerHTML = getDay(date);
              let codeFromData =
                weatherData[date]["Hours"][this.category]["Code"];
              let is_day = rawAPIData["current"]["is_day"];
              let status = getStatus(codeFromData, is_day);
              code.innerHTML = status;

              currentImg.src = getImage(codeFromData, is_day);
            },
          },
        },
      },
    },

    series: [
      {
        name: "",
        data: values,
      },
    ],
  });
}

function showDayData(date, weatherData) {}

addEventsToButtons();
