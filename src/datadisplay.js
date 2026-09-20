import { weatherDataCleaner } from "./weather.js";
import { setData } from "./main.js";
import { getDataFromAPI } from "./weather.js";
import { getImage } from "./utils.js";

let data = {};
let rawData = {};

const SELECTED_CLASSES = [
  "border-[#CE53E0]",
  "rounded-lg",
  "border",
  "bg-[#341539]/60",
  "p-[10px]",
  "mt-[2px]",
];

function getGeneralCodeInThatDay(date) {
  let codes = [];
  for (let hour in data[date]["Hours"]) {
    codes.push(data[date]["Hours"][hour]["Code"]);
  }

  return codes;
}

function getRepetitiveCode(codes) {
  const counts = {};
  let maxCount = 0;
  let result = codes[0];

  for (const num of codes) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      result = num;
    }
  }

  return result;
}

function addDayInForecast(date) {
  const winfo_forecast_day = document.createElement("div");
  const newp = document.createElement("p");

  const newimg = document.createElement("img");
  const winfo_forecast_day_temp = document.createElement("div");
  const newp_1 = document.createElement("p");
  const newp_2 = document.createElement("p");

  winfo_forecast_day.appendChild(newp);
  winfo_forecast_day.appendChild(newimg);
  winfo_forecast_day_temp.appendChild(newp_1);
  winfo_forecast_day_temp.appendChild(newp_2);
  winfo_forecast_day.appendChild(winfo_forecast_day_temp);

  winfo_forecast_day.className =
    "winfo-forecast-day flex flex-col justify-center";
  newp.className = "flex justify-center";
  winfo_forecast_day_temp.className =
    "winfo-forecast-day-temp flex flex-row justify-between mt-[5px]";
  newp_1.className = "mr-[10px]";

  let imgSize = "60px";
  newimg.style.width = imgSize;
  newimg.style.height = imgSize;

  let codes = getGeneralCodeInThatDay(date);
  let repetitiveCode = getRepetitiveCode(codes);

  newimg.src = getImage(repetitiveCode, rawData["current"]["is_day"]);

  newp.textContent = getDay(date);
  newp_1.textContent = data[date]["Max_Temp"] + "ᵒ";
  newp_2.textContent = data[date]["Min_Temp"] + "ᵒ";
  winfo_forecast_day.addEventListener(
    "click",
    () => {
      document
        .querySelectorAll("#forecast .winfo-forecast-day")
        .forEach((el) => el.classList.remove(...SELECTED_CLASSES));

      winfo_forecast_day.classList.add(...SELECTED_CLASSES);
      setData(date, data, rawData);
    },
    false,
  );

  var currentDiv = document.getElementById("forecast");
  currentDiv.appendChild(winfo_forecast_day);
}

export async function showWeatherData(_data, _cleanedData) {
  data = _cleanedData;
  rawData = _data;

  document.querySelectorAll(".winfo-forecast-day").forEach((el) => el.remove());

  for (let date in data) {
    addDayInForecast(date);
  }

  const firstDay = document.querySelector("#forecast .winfo-forecast-day");
  if (firstDay) firstDay.click();
}

export function getDay(date) {
  let actualDate = new Date(date);
  let day = "";
  switch (actualDate.getDay()) {
    case 0:
      day = "Sun.";
      break;
    case 1:
      day = "Mon.";
      break;
    case 2:
      day = "Tues.";
      break;
    case 3:
      day = "Wed.";
      break;
    case 4:
      day = "Thur.";
      break;
    case 5:
      day = "Fri.";
      break;
    case 6:
      day = "Sat.";
      break;
    default:
      console.error("Invalid date!");
  }
  return day;
}
