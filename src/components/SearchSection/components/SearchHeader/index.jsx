import { useContext } from "react";

import Switch from "../../../Switch";
import { AppContext } from "../../../../context/AppContext";
import { useWeatherData } from "../../../../hooks/useWeatherData";

import "./index.css";

const SearchHeader = () => {
  const { isDarkTheme, setIsDarkTheme, searchInputData, isAltitudeInput } =
    useContext(AppContext);
  const { data, status } = useWeatherData(isAltitudeInput, {
    latitude: searchInputData.latitude,
    longitude: searchInputData.longitude,
    searchInput: searchInputData.searchInput,
  });

  const handleThemeSwitch = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="search-header-wpr">
      <div className="app-title" data-testid="app-name">
        Hazz Weather
      </div>
      <Switch
        id="theme-change"
        handleSwitch={handleThemeSwitch}
        testId="theme-switch"
      />
      <div className="city">
        {status === "success" ? (
          <>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v10"></path>
              <path d="M9 4v13"></path>
              <path d="M15 7v5"></path>
              <circle cx="16.5" cy="17.5" r="2.5"></circle>
              <path d="M18.5 19.5l2.5 2.5"></path>
            </svg>
            {`${data?.data?.city?.name}, ${data?.data?.city?.country}`}
          </>
        ) : (
          <span>Location Unknown</span>
        )}
      </div>
    </div>
  );
};

export default SearchHeader;
