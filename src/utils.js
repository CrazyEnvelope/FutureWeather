import day01 from "./img/day_icon/01d@2x.png";
import day02 from "./img/day_icon/02d@2x.png";
import day03 from "./img/day_icon/03d@2x.png";
import day09 from "./img/day_icon/09d@2x.png";
import day10 from "./img/day_icon/10d@2x.png";
import day11 from "./img/day_icon/11d@2x.png";
import day13 from "./img/day_icon/13d@2x.png";
import day50 from "./img/day_icon/50d@2x.png";
import night01 from "./img/night_icon/01n@2x.png";
import night02 from "./img/night_icon/02n@2x.png";
import night03 from "./img/night_icon/03n@2x.png";
import night09 from "./img/night_icon/09n@2x.png";
import night10 from "./img/night_icon/10n@2x.png";
import night11 from "./img/night_icon/11n@2x.png";
import night13 from "./img/night_icon/13n@2x.png";
import night50 from "./img/night_icon/50n@2x.png";

const weatherCode = {
  0: {
    day: { description: "Sunny", icon: day01 },
    night: { description: "Clear", icon: night01 },
  },
  1: {
    day: { description: "Mainly Sunny", icon: day01 },
    night: {
      description: "Mainly Clear",
      icon: night01,
    },
  },
  2: {
    day: {
      description: "Partly Cloudy",
      icon: day02,
    },
    night: {
      description: "Partly Cloudy",
      icon: night02,
    },
  },
  3: {
    day: { description: "Cloudy", icon: day03 },
    night: { description: "Cloudy", icon: night03 },
  },
  45: {
    day: { description: "Foggy", icon: day50 },
    night: { description: "Foggy", icon: night50 },
  },
  48: {
    day: { description: "Rime Fog", icon: day50 },
    night: { description: "Rime Fog", icon: night50 },
  },
  51: {
    day: {
      description: "Light Drizzle",
      icon: day09,
    },
    night: {
      description: "Light Drizzle",
      icon: night09,
    },
  },
  53: {
    day: { description: "Drizzle", icon: day09 },
    night: { description: "Drizzle", icon: night09 },
  },
  55: {
    day: {
      description: "Heavy Drizzle",
      icon: day09,
    },
    night: {
      description: "Heavy Drizzle",
      icon: night09,
    },
  },
  56: {
    day: {
      description: "Light Freezing Drizzle",
      icon: day09,
    },
    night: {
      description: "Light Freezing Drizzle",
      icon: night09,
    },
  },
  57: {
    day: {
      description: "Freezing Drizzle",
      icon: day09,
    },
    night: {
      description: "Freezing Drizzle",
      icon: night09,
    },
  },
  61: {
    day: { description: "Light Rain", icon: day10 },
    night: {
      description: "Light Rain",
      icon: night10,
    },
  },
  63: {
    day: { description: "Rain", icon: day10 },
    night: { description: "Rain", icon: night10 },
  },
  65: {
    day: { description: "Heavy Rain", icon: day10 },
    night: {
      description: "Heavy Rain",
      icon: night10,
    },
  },
  66: {
    day: {
      description: "Light Freezing Rain",
      icon: day10,
    },
    night: {
      description: "Light Freezing Rain",
      icon: night10,
    },
  },
  67: {
    day: {
      description: "Freezing Rain",
      icon: day10,
    },
    night: {
      description: "Freezing Rain",
      icon: night01,
    },
  },
  71: {
    day: { description: "Light Snow", icon: day13 },
    night: {
      description: "Light Snow",
      icon: night13,
    },
  },
  73: {
    day: { description: "Snow", icon: day13 },
    night: { description: "Snow", icon: night13 },
  },
  75: {
    day: { description: "Heavy Snow", icon: day13 },
    night: {
      description: "Heavy Snow",
      icon: night13,
    },
  },
  77: {
    day: { description: "Snow Grains", icon: day13 },
    night: {
      description: "Snow Grains",
      icon: night13,
    },
  },
  80: {
    day: {
      description: "Light Showers",
      icon: day09,
    },
    night: {
      description: "Light Showers",
      icon: night09,
    },
  },
  81: {
    day: { description: "Showers", icon: day09 },
    night: { description: "Showers", icon: night09 },
  },
  82: {
    day: {
      description: "Heavy Showers",
      icon: day09,
    },
    night: {
      description: "Heavy Showers",
      icon: night09,
    },
  },
  85: {
    day: {
      description: "Light Snow Showers",
      icon: day13,
    },
    night: {
      description: "Light Snow Showers",
      icon: night13,
    },
  },
  86: {
    day: { description: "Snow Showers", icon: day13 },
    night: {
      description: "Snow Showers",
      icon: night13,
    },
  },
  95: {
    day: { description: "Thunderstorm", icon: day11 },
    night: {
      description: "Thunderstorm",
      icon: night11,
    },
  },
  96: {
    day: {
      description: "Light Thunderstorms w/ Hail",
      icon: day11,
    },
    night: {
      description: "Light Thunderstorms w/ Hail",
      icon: night11,
    },
  },
  99: {
    day: {
      description: "Thunderstorm w/ Hail",
      icon: day11,
    },
    night: {
      description: "Thunderstorm w/ Hail",
      icon: night11,
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
