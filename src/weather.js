const fs = require("node:fs");
var result = {};

try {
  const data = fs.readFileSync("./src/data.json", "utf-8");
  result = JSON.parse(data);
} catch (err) {
  console.error(err);
}

let dates = new Set(
  result["hourly"]["time"].map((b) => b.substring(0, b.indexOf("T"))),
);

let hours = new Set(
  result["hourly"]["time"].map((b) => b.substring(b.indexOf("T") + 1)),
);

let hourIndex = 0;

let beautifulWeatherData = {};

for (const date of dates) {
  let dayData = {};
  for (const hour of hours) {
    let temperature = result["hourly"]["temperature_2m"][hourIndex];
    let humidity = result["hourly"]["relative_humidity_2m"][hourIndex];
    let wind = result["hourly"]["wind_speed_10m"][hourIndex];
    let code = result["hourly"]["weather_code"][hourIndex];
    let precipitation =
      result["hourly"]["precipitation_probability"][hourIndex];

    hourIndex++;

    if (!dayData["Hours"]) {
      dayData["Hours"] = {};
    }

    dayData["Hours"][hour] = {
      Temperature: temperature,
      Precipitation: precipitation,
      Wind: wind,
      Hymidity: humidity,
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
  beautifulWeatherData[date]["Max_Temp"] = Math.max(...temp);
  beautifulWeatherData[date]["Min_Temp"] = Math.min(...temp);
}

console.log(JSON.stringify(beautifulWeatherData, undefined, 2));
