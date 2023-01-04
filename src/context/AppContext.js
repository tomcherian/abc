import { createContext, useState } from "react";
import { TEMP_UNITS } from "../utils/constants";

export const AppContext = createContext({
  isDarkTheme: false,
  tempUnit: TEMP_UNITS.CELSIUS,
  countryOptions: [],
  isAltitudeInput: true,
  searchInputData: {
    latitude: 0,
    longitude: 0,
    searchInput: "",
  },
  // weatherData: [],
  // isLoading: false,
  // searchedLocation: "",
  setCountryOptions: () => {},
  setTempUnit: () => {},
  setIsDarkTheme: () => {},
  setSearchInputData: () => {},
  setIsAltitudeInput: () => {},

  // setIsLoading: () => {},
  // setWeatherData: () => {},
  // setSearchedLocation: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [tempUnit, setTempUnit] = useState(TEMP_UNITS.CELSIUS);
  const [countryOptions, setCountryOptions] = useState([]);
  const [isAltitudeInput, setIsAltitudeInput] = useState(true);
  const [searchInputData, setSearchInputData] = useState({
    latitude: 0,
    longitude: 0,
    searchInput: "",
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [weatherData, setWeatherData] = useState([]);
  // const [searchedLocation, setSearchedLocation] = useState();

  return (
    <AppContext.Provider
      value={{
        tempUnit,
        setTempUnit,
        isDarkTheme,
        setIsDarkTheme,
        countryOptions,
        setCountryOptions,
        searchInputData,
        setSearchInputData,
        isAltitudeInput,
        setIsAltitudeInput,
        // searchedLocation,
        // setSearchedLocation,
        // weatherData,
        // setWeatherData,
        // isLoading,
        // setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
