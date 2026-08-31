const weatherCode = {
  0: {
    day: { description: "Sunny", icon: "./src/img/day_icon/01d@2x.png" },
    night: { description: "Clear", icon: "./src/img/night_icon/01n@2x.png" },
  },
  1: {
    day: { description: "Mainly Sunny", icon: "./src/img/day_icon/01d@2x.png" },
    night: {
      description: "Mainly Clear",
      icon: "./src/img/night_icon/01n@2x.png",
    },
  },
  2: {
    day: {
      description: "Partly Cloudy",
      icon: "./src/img/day_icon/02d@2x.png",
    },
    night: {
      description: "Partly Cloudy",
      icon: "./src/img/night_icon/02n@2x.png",
    },
  },
  3: {
    day: { description: "Cloudy", icon: "./src/img/day_icon/03d@2x.png" },
    night: { description: "Cloudy", icon: "./src/img/night_icon/03n@2x.png" },
  },
  45: {
    day: { description: "Foggy", icon: "./src/img/day_icon/50d@2x.png" },
    night: { description: "Foggy", icon: "./src/img/night_icon/50n@2x.png" },
  },
  48: {
    day: { description: "Rime Fog", icon: "./src/img/day_icon/50d@2x.png" },
    night: { description: "Rime Fog", icon: "./src/img/night_icon/50n@2x.png" },
  },
  51: {
    day: {
      description: "Light Drizzle",
      icon: "./src/img/day_icon/09d@2x.png",
    },
    night: {
      description: "Light Drizzle",
      icon: "./src/img/night_icon/09n@2x.png",
    },
  },
  53: {
    day: { description: "Drizzle", icon: "./src/img/day_icon/09d@2x.png" },
    night: { description: "Drizzle", icon: "./src/img/night_icon/09n@2x.png" },
  },
  55: {
    day: {
      description: "Heavy Drizzle",
      icon: "./src/img/day_icon/09d@2x.png",
    },
    night: {
      description: "Heavy Drizzle",
      icon: "./src/img/night_icon/09n@2x.png",
    },
  },
  56: {
    day: {
      description: "Light Freezing Drizzle",
      icon: "./src/img/day_icon/09d@2x.png",
    },
    night: {
      description: "Light Freezing Drizzle",
      icon: "./src/img/night_icon/09n@2x.png",
    },
  },
  57: {
    day: {
      description: "Freezing Drizzle",
      icon: "./src/img/day_icon/09d@2x.png",
    },
    night: {
      description: "Freezing Drizzle",
      icon: "./src/img/night_icon/09n@2x.png",
    },
  },
  61: {
    day: { description: "Light Rain", icon: "./src/img/day_icon/10d@2x.png" },
    night: {
      description: "Light Rain",
      icon: "./src/img/night_icon/10n@2x.png",
    },
  },
  63: {
    day: { description: "Rain", icon: "./src/img/day_icon/10d@2x.png" },
    night: { description: "Rain", icon: "./src/img/night_icon/10n@2x.png" },
  },
  65: {
    day: { description: "Heavy Rain", icon: "./src/img/day_icon/10d@2x.png" },
    night: {
      description: "Heavy Rain",
      icon: "./src/img/night_icon/10n@2x.png",
    },
  },
  66: {
    day: {
      description: "Light Freezing Rain",
      icon: "./src/img/day_icon/10d@2x.png",
    },
    night: {
      description: "Light Freezing Rain",
      icon: "./src/img/night_icon/10n@2x.png",
    },
  },
  67: {
    day: {
      description: "Freezing Rain",
      icon: "./src/img/day_icon/10n@2x.png",
    },
    night: {
      description: "Freezing Rain",
      icon: "./src/img/night_icon/01d@2x.png",
    },
  },
  71: {
    day: { description: "Light Snow", icon: "./src/img/day_icon/13d@2x.png" },
    night: {
      description: "Light Snow",
      icon: "./src/img/night_icon/13n@2x.png",
    },
  },
  73: {
    day: { description: "Snow", icon: "./src/img/day_icon/13d@2x.png" },
    night: { description: "Snow", icon: "./src/img/night_icon/13n@2x.png" },
  },
  75: {
    day: { description: "Heavy Snow", icon: "./src/img/day_icon/13d@2x.png" },
    night: {
      description: "Heavy Snow",
      icon: "./src/img/night_icon/13n@2x.png",
    },
  },
  77: {
    day: { description: "Snow Grains", icon: "./src/img/day_icon/13d@2x.png" },
    night: {
      description: "Snow Grains",
      icon: "./src/img/night_icon/13n@2x.png",
    },
  },
  80: {
    day: {
      description: "Light Showers",
      icon: "./src/img/day_icon/09d@2x.png",
    },
    night: {
      description: "Light Showers",
      icon: "./src/img/night_icon/09n@2x.png",
    },
  },
  81: {
    day: { description: "Showers", icon: "./src/img/day_icon/09d@2x.png" },
    night: { description: "Showers", icon: "./src/img/night_icon/09n@2x.png" },
  },
  82: {
    day: {
      description: "Heavy Showers",
      icon: "./src/img/day_icon/09d@2x.png",
    },
    night: {
      description: "Heavy Showers",
      icon: "./src/img/night_icon/09n@2x.png",
    },
  },
  85: {
    day: {
      description: "Light Snow Showers",
      icon: "./src/img/day_icon/13d@2x.png",
    },
    night: {
      description: "Light Snow Showers",
      icon: "./src/img/night_icon/13n@2x.png",
    },
  },
  86: {
    day: { description: "Snow Showers", icon: "./src/img/day_icon/13d@2x.png" },
    night: {
      description: "Snow Showers",
      icon: "./src/img/night_icon/13n@2x.png",
    },
  },
  95: {
    day: { description: "Thunderstorm", icon: "./src/img/day_icon/11d@2x.png" },
    night: {
      description: "Thunderstorm",
      icon: "./src/img/night_icon/11n@2x.png",
    },
  },
  96: {
    day: {
      description: "Light Thunderstorms w/ Hail",
      icon: "./src/img/day_icon/11d@2x.png",
    },
    night: {
      description: "Light Thunderstorms w/ Hail",
      icon: "./src/img/night_icon/11n@2x.png",
    },
  },
  99: {
    day: {
      description: "Thunderstorm w/ Hail",
      icon: "./src/img/day_icon/11d@2x.png",
    },
    night: {
      description: "Thunderstorm w/ Hail",
      icon: "./src/img/night_icon/11n@2x.png",
    },
  },
};

export function getImage(code, isDay) {
  if (isDay) {
    return weatherCode[code]["day"]["icon"];
  }
  return weatherCode[code]["night"]["icon"];
}

export function getStatus(code, isDay) {
  if (isDay) {
    return weatherCode[code]["day"]["description"];
  }
  return weatherCode[code]["night"]["description"];
}
