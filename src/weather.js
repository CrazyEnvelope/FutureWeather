export async function getDataFromAPI() {
  let result = {};
  try {
    const response = await fetch("./src/data.json");
    result = await response.json();
  } catch (err) {
    console.error(err);
  }
  return result;
}

export async function weatherDataCleaner() {
  let result = await getDataFromAPI();

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
      let temperature = Math.round(
        result["hourly"]["temperature_2m"][hourIndex],
      );
      let humidity = Math.round(
        result["hourly"]["relative_humidity_2m"][hourIndex],
      );
      let wind = Math.round(result["hourly"]["wind_speed_10m"][hourIndex]);
      let code = result["hourly"]["weather_code"][hourIndex];
      let precipitation = Math.round(
        result["hourly"]["precipitation_probability"][hourIndex],
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

  return beautifulWeatherData;
}
