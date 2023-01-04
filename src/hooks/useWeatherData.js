import { useQuery } from "@tanstack/react-query";
import { getLocationDetails } from "../utils/services";

export const fetchUsingCoordinates = (
  isAltitudeInput,
  { latitude, longitude, searchInput }
) => {
  const params = {
    appid: "56c3c8b64be7b289d39ee39bda35dcf7",
    units: "metric",
    cnt: "5",
    hourly: "cloudcover",
  };
  if (isAltitudeInput) {
    params.lat = Number(latitude);
    params.lon = Number(longitude);
  } else {
    params.q = searchInput;
  }
  return getLocationDetails(params);
};

export const useWeatherData = (isAltitudeInput, searchInputData) => {
  return useQuery(
    ["weather-data"],
    () => fetchUsingCoordinates(isAltitudeInput, searchInputData),
    { enabled: false, refetchOnWindowFocus: false }
  );
};
