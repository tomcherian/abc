import { useContext } from "react";
import moment from "moment";

import { getTemperature } from "../../../../utils/helper";
import { AppContext } from "../../../../context/AppContext";
import { useWeatherData } from "../../../../hooks/useWeatherData";

import "./index.css";

const TodaySection = () => {
  const { searchInputData, isAltitudeInput, tempUnit } = useContext(AppContext);

  const { data } = useWeatherData(isAltitudeInput, {
    latitude: searchInputData.latitude,
    longitude: searchInputData.longitude,
    searchInput: searchInputData.searchInput,
  });

  return (
    <div className="result-today-section">
      {data?.data?.list[0] && (
        <>
          <h1 className="heading">Today</h1>
          <div className="today-content">
            <div className="main-data">
              <div className="celsius" data-testid="current-temp">
                {Math.trunc(
                  getTemperature(data?.data?.list[0].main.temp, tempUnit)
                )}
                &#176;{tempUnit}
              </div>
              <div className="today-cloud">
                {data?.data?.list[0].weather[0]?.main}
              </div>
              <div className="description">
                {data?.data?.list[0].weather[0]?.description.toUpperCase()}
              </div>
              <div className="today-date">
                {moment(data?.data?.list[0].dt_txt).format("dddd MMM YYYY")}
              </div>
            </div>
            <div className="detail-data">
              <p>
                Real Feel:
                <span data-testid="real-feel">
                  {Math.trunc(data?.data?.list[0].main.feels_like)}&#176;
                  {tempUnit}
                </span>
              </p>
              <p>
                Humidity:{" "}
                <span data-testid="humidity">
                  {data?.data?.list[0].main.humidity}%
                </span>
              </p>
              <p>
                Min Temp:{" "}
                <span data-testid="min-temp">
                  {Math.trunc(
                    getTemperature(data?.data?.list[0].main.temp_min, tempUnit)
                  )}
                  &#176;{tempUnit}
                </span>
              </p>
              <p>
                Max Temp:{" "}
                <span data-testid="max-temp">
                  {Math.trunc(
                    getTemperature(data?.data?.list[0].main.temp_max, tempUnit)
                  )}
                  &#176;{tempUnit}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodaySection;
