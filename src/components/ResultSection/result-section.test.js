import { render, screen } from "@testing-library/react";
import ResultSection from ".";
import "@testing-library/jest-dom";
import { AppContext } from "../../context/AppContext";

describe("Result section No data found", () => {
  beforeEach(() => {
    const weatherData = [];
    const isLoading = false;
    render(
      <AppContext.Provider
        value={{
          weatherData: weatherData,
          isLoading: isLoading,
        }}
      >
        <ResultSection />
      </AppContext.Provider>
    );
  });

  test("Testing no data found", () => {
    const noDataHeading = screen.getByRole("heading").textContent;
    expect(noDataHeading).toBe("No Data");
  });

  test("Testing no data svg found", () => {
    const noDataSVG = screen.getByTestId("no-data-svg");
    expect(noDataSVG).toBeInTheDocument();
  });

  test("Testing no data svg found", () => {
    const noDataSVG = screen.getByTestId("paragraph").textContent;
    expect(noDataSVG).toBe(
      "Don't worry, if you don't know what to search for, try: Dhaka, Canada or maybe USA."
    );
  });
});

describe("Result section Loader", () => {
  beforeEach(() => {
    const weatherData = [];
    const isLoading = true;
    render(
      <AppContext.Provider
        value={{
          weatherData: weatherData,
          isLoading: isLoading,
        }}
      >
        <ResultSection />
      </AppContext.Provider>
    );
  });

  test("Testing loader", () => {
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});

describe("Result section weather data", () => {
  beforeEach(() => {
    const weatherData = [
      {
        dt: 1672142400,
        main: {
          temp: 20.64,
          feels_like: 20.98,
          temp_min: 19.49,
          temp_max: 20.64,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1016,
          humidity: 85,
          temp_kf: 1.15,
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
          all: 33,
        },
        wind: {
          speed: 1.58,
          deg: 177,
          gust: 2.01,
        },
        visibility: 7686,
        pop: 0.68,
        rain: {
          "3h": 1.56,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-12-27 12:00:00",
      },
      {
        dt: 1672153200,
        main: {
          temp: 20.79,
          feels_like: 21.07,
          temp_min: 20.57,
          temp_max: 20.79,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1017,
          humidity: 82,
          temp_kf: 0.22,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 66,
        },
        wind: {
          speed: 3.96,
          deg: 116,
          gust: 4.11,
        },
        visibility: 10000,
        pop: 0.76,
        rain: {
          "3h": 1.5,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-12-27 15:00:00",
      },
    ];
    const isLoading = false;
    render(
      <AppContext.Provider
        value={{
          weatherData: weatherData,
          isLoading: isLoading,
        }}
      >
        <ResultSection />
      </AppContext.Provider>
    );
  });

  test("Testing data", () => {
    const loader = screen.getByTestId("result-section");
    expect(loader).toBeInTheDocument();
  });
});
