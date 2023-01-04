import { useContext } from "react";
import Switch from "../../../Switch";
import { AppContext } from "../../../../context/AppContext";
import "./index.css";
import { TEMP_UNITS } from "../../../../utils/constants";

const ResultHeader = () => {
  const { setTempUnit } = useContext(AppContext);

  const handleTempConversion = (e) => {
    if (e.target.checked) {
      setTempUnit(TEMP_UNITS.FAHRENHEIT);
    } else {
      setTempUnit(TEMP_UNITS.CELSIUS);
    }
  };

  return (
    <div className="result-header-wpr">
      <div className={"result-header-switch"}>
        <Switch
          id="unit-conversion"
          handleSwitch={handleTempConversion}
          testId="unit-conversion-switch"
        />
      </div>
    </div>
  );
};

export default ResultHeader;
