import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { useWeatherData } from "../../../../hooks/useWeatherData";
import MoreDetailsContent from "../MoreDetailsContent";
import "./index.css";

const MoreSection = () => {
  const { searchInputData, isAltitudeInput } = useContext(AppContext);
  const { data } = useWeatherData(isAltitudeInput, {
    latitude: searchInputData.latitude,
    longitude: searchInputData.longitude,
    searchInput: searchInputData.searchInput,
  });
  
  return (
    <div className="result-more-section">
      {data && (
        <h1 className="heading">
          More on {`${data?.data?.city?.name}, ${data?.data?.city?.country}`}
        </h1>
      )}
      <div className="result-more-details">
        {data &&
          data?.data?.list &&
          data?.data?.list.map((hourlyWeatherData, index) => (
            <MoreDetailsContent
              key={index}
              temp={hourlyWeatherData.main.temp}
              main={hourlyWeatherData.weather[0].main}
              description={hourlyWeatherData.weather[0].description}
              time={hourlyWeatherData.dt_txt}
            />
          ))}
      </div>
    </div>
  );
};

export default MoreSection;
