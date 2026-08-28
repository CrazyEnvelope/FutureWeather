import { weatherDataCleaner } from "./weather.js";

let data = {};

function addDayInForecast(date) {
  const winfo_forecast_day_1 = document.createElement("div");
  const newp = document.createElement("p");

  const newimg = document.createElement("img");
  const winfo_forecast_day_temp = document.createElement("div");
  const newp_1 = document.createElement("p");
  const newp_2 = document.createElement("p");

  winfo_forecast_day_1.appendChild(newp);
  winfo_forecast_day_1.appendChild(newimg);
  winfo_forecast_day_temp.appendChild(newp_1);
  winfo_forecast_day_temp.appendChild(newp_2);
  winfo_forecast_day_1.appendChild(winfo_forecast_day_temp);

  winfo_forecast_day_1.className =
    "winfo-forecast-day-1 flex flex-col justify-center";
  newp.className = "flex justify-center";
  winfo_forecast_day_temp.className =
    "winfo-forecast-day-temp flex flex-row justify-between mt-[5px]";
  newp_1.className = "mr-[10px]";

  let imgSize = "60px";
  newimg.style.width = imgSize;
  newimg.style.height = imgSize;

  newimg.src = "./src/img/day/heavy.svg";

  newp.textContent = getDay(date);
  newp_1.textContent = data[date]["Max_Temp"] + "ᵒ";
  newp_2.textContent = data[date]["Min_Temp"] + "ᵒ";

  var currentDiv = document.getElementById("forecast");
  currentDiv.appendChild(winfo_forecast_day_1);
}

async function showWeatherData() {
  data = await weatherDataCleaner();
  for (let date in data) {
    addDayInForecast(date);
  }
}

function getDay(date) {
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

showWeatherData();
