import { useContext } from "react";
import MoreSection from "./components/MoreSection";
import ResultHeader from "./components/ResultHeader";
import TodaySection from "./components/TodaySection";
import { ReactComponent as NoData } from "../../icons/no-data.svg";
import Loader from "../Loader";
import { useWeatherData } from "../../hooks/useWeatherData";
import { AppContext } from "../../context/AppContext";

import "./index.css";

const ResultSection = () => {
  const { searchInputData, isAltitudeInput } = useContext(AppContext);
  const { status, isFetching } = useWeatherData(isAltitudeInput, {
    latitude: searchInputData.latitude,
    longitude: searchInputData.longitude,
    searchInput: searchInputData.searchInput,
  });

  const getResultComponent = () => {
    if (isFetching) {
      return <Loader testId="loader" />;
    }
    if (status === "error") {
      return (
        <div className="no-data">
          <h1>No Data</h1>
          <NoData data-testid="no-data-svg" />
          <p data-testid="paragraph">
            Don't worry, if you don't know what to search for, try: Dhaka,
            Canada or maybe USA.
          </p>
        </div>
      );
    }
    return (
      <div data-testid="result-section">
        <TodaySection />
        <MoreSection />
      </div>
    )
    // switch (status) {
    //   case "loading": {
    //     return <Loader testId="loader" />;
    //   }
    //   case "success": {
    //     return (
    //       <div data-testid="result-section">
    //         <TodaySection />
    //         <MoreSection />
    //       </div>
    //     );
    //   }
    //   case "error": {
    //     return (
    //       <div className="no-data">
    //         <h1>No Data</h1>
    //         <NoData data-testid="no-data-svg" />
    //         <p data-testid="paragraph">
    //           Don't worry, if you don't know what to search for, try: Dhaka,
    //           Canada or maybe USA.
    //         </p>
    //       </div>
    //     );
    //   }
    // }
  };
  return (
    <div className={"result-section-wpr"}>
      <ResultHeader />
      {getResultComponent()}
    </div>
  );
};

export default ResultSection;
