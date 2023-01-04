import moment from "moment";
import { useContext } from "react";
import { getTemperature } from "../../../../utils/helper";
import { AppContext } from "../../../../context/AppContext";
import "./index.css";

const MoreDetailsContent = ({ temp, main, description, time }) => {
  const { tempUnit } = useContext(AppContext);
  return (
    <div className="main-data">
      <div className="celsius-more dark">
        {Math.trunc(getTemperature(temp, tempUnit))}&#176;{tempUnit}
      </div>
      <div className="main dark">{main}</div>
      <div className="more-description dark">{description.toUpperCase()}</div>
      <div className="more-hourly dark">{moment(time).format("h:mm a")}</div>
    </div>
  );
};

export default MoreDetailsContent;
