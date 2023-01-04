import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodaySection from ".";
import { AppContext } from "../../../../context/AppContext";
import { TEMP_UNITS } from "../../../../utils/constants";

beforeEach(() => {
  const weatherData = [
    {
      dt: 1672056000,
      main: {
        temp: 20.22,
        feels_like: 20.46,
        temp_min: 19.64,
        temp_max: 20.22,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 83,
        temp_kf: 0.58,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 7.8,
        deg: 318,
        gust: 7.3,
      },
      visibility: 9905,
      pop: 0.48,
      rain: {
        "3h": 0.88,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-26 12:00:00",
    },
  ];

  render(
    <AppContext.Provider
      value={{ weatherData: weatherData, tempUnit: TEMP_UNITS.CELSIUS }}
    >
      <TodaySection />
    </AppContext.Provider>
  );
});

describe("Testing Result - Today section", () => {
  test("Check Today heading", () => {
    const todayHeading = screen.getByText("Today");
    expect(todayHeading).toBeInTheDocument();
  });

  test("Check Current temperature", () => {
    const todayTemperature = screen.getByTestId("current-temp").textContent;
    expect(todayTemperature).toBe("20°C");
  });

  test("Check current status", () => {
    const todayTemperature = screen.getByText("Rain");
    expect(todayTemperature).toBeInTheDocument();
  });

  test("Check current actual status", () => {
    const todayStatus = screen.getByText("LIGHT RAIN");
    expect(todayStatus).toBeInTheDocument();
  });

  test("Check date", () => {
    const todaysDate = screen.getByText("Monday Dec 2022");
    expect(todaysDate).toBeInTheDocument();
  });

  test("Check real feel temperature", () => {
    const todayRealFeelHeading = screen.getByText("Real Feel:");
    expect(todayRealFeelHeading).toBeInTheDocument();
  });

  test("Check reel feel temperature", () => {
    const todayRealFeelTemperature =
      screen.getByTestId("real-feel").textContent;
    expect(todayRealFeelTemperature).toBe("20°C");
  });

  test("Check Humidity temperature", () => {
    const todayHumidityHeading = screen.getByText("Humidity:");
    expect(todayHumidityHeading).toBeInTheDocument();
  });

  test("Check humidity", () => {
    const todayRealFeelTemperature = screen.getByTestId("humidity").textContent;
    expect(todayRealFeelTemperature).toBe("83%");
  });

  test("Check minimum temperature", () => {
    const todayMinTemperatureHeading = screen.getByText("Min Temp:");
    expect(todayMinTemperatureHeading).toBeInTheDocument();
  });

  test("Check humidity", () => {
    const todayRealFeelTemperature = screen.getByTestId("min-temp").textContent;
    expect(todayRealFeelTemperature).toBe("19°C");
  });

  test("Check minimum temperature", () => {
    const todayMaxTemperatureHeading = screen.getByText("Max Temp:");
    expect(todayMaxTemperatureHeading).toBeInTheDocument();
  });

  test("Check humidity", () => {
    const todayRealFeelTemperature = screen.getByTestId("max-temp").textContent;
    expect(todayRealFeelTemperature).toBe("20°C");
  });
});
