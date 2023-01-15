import { screen, renderHook } from "@testing-library/react";
import TodaySection from ".";
import { AppContext } from "../../../../context/AppContext";
import { TEMP_UNITS } from "../../../../utils/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useWeatherData } from "../../../../hooks/useWeatherData";
import { renderWithClient } from "../../../../tests/utils";

// describe("Testing Result - Today section", () => {
//   // beforeEach(() => {
//   // const createWrapper = () => {
//   //   const queryClient = new QueryClient({
//   //     defaultOptions: {
//   //       queries: {
//   //         retry: false,
//   //       },
//   //     },
//   //   });
//   //   return ({ children }) => (
//   //     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   //   );
//   // };

//   // test("my first test", async () => {
//   //   const { result } = renderHook(() => useWeatherData(true, searchInputData), {
//   //     wrapper: createWrapper(),
//   //   });
//   //   console.log("result", result);
//   // });
//   // test("Check Today heading", () => {
//   //   const todayHeading = screen.getByText("Today");
//   //   expect(todayHeading).toBeInTheDocument();
//   // });

//   // test("Check Current temperature", () => {
//   //   const todayTemperature = screen.getByTestId("current-temp").textContent;
//   //   expect(todayTemperature).toBe("20°C");
//   // });

//   // test("Check current status", () => {
//   //   const todayTemperature = screen.getByText("Rain");
//   //   expect(todayTemperature).toBeInTheDocument();
//   // });

//   // test("Check current actual status", () => {
//   //   const todayStatus = screen.getByText("LIGHT RAIN");
//   //   expect(todayStatus).toBeInTheDocument();
//   // });

//   // test("Check date", () => {
//   //   const todaysDate = screen.getByText("Monday Dec 2022");
//   //   expect(todaysDate).toBeInTheDocument();
//   // });

//   // test("Check real feel temperature", () => {
//   //   const todayRealFeelHeading = screen.getByText("Real Feel:");
//   //   expect(todayRealFeelHeading).toBeInTheDocument();
//   // });

//   // test("Check reel feel temperature", () => {
//   //   const todayRealFeelTemperature =
//   //     screen.getByTestId("real-feel").textContent;
//   //   expect(todayRealFeelTemperature).toBe("20°C");
//   // });

//   // test("Check Humidity temperature", () => {
//   //   const todayHumidityHeading = screen.getByText("Humidity:");
//   //   expect(todayHumidityHeading).toBeInTheDocument();
//   // });

//   // test("Check humidity", () => {
//   //   const todayRealFeelTemperature = screen.getByTestId("humidity").textContent;
//   //   expect(todayRealFeelTemperature).toBe("83%");
//   // });

//   // test("Check minimum temperature", () => {
//   //   const todayMinTemperatureHeading = screen.getByText("Min Temp:");
//   //   expect(todayMinTemperatureHeading).toBeInTheDocument();
//   // });

//   // test("Check humidity", () => {
//   //   const todayRealFeelTemperature = screen.getByTestId("min-temp").textContent;
//   //   expect(todayRealFeelTemperature).toBe("19°C");
//   // });

//   // test("Check minimum temperature", () => {
//   //   const todayMaxTemperatureHeading = screen.getByText("Max Temp:");
//   //   expect(todayMaxTemperatureHeading).toBeInTheDocument();
//   // });

//   // test("Check humidity", () => {
//   //   const todayRealFeelTemperature = screen.getByTestId("max-temp").textContent;
//   //   expect(todayRealFeelTemperature).toBe("20°C");
//   // });
// });

test("Check today", async () => {
  const result = renderWithClient(<TodaySection />);
  expect(await result.findByText(/Today/i)).toBeInTheDocument();
});
