import { render, screen } from "@testing-library/react";
import MoreDetailsContent from ".";
import "@testing-library/jest-dom";
import { TEMP_UNITS } from "../../../../utils/constants";
import { AppContext } from "../../../../context/AppContext";

describe("More details content section", () => {
  beforeEach(() => {
    const temp = "16.53";
    const main = "Clear";
    const description = "clear sky";
    const time = "2022-12-27 09:00:00";
    const tempUnit = TEMP_UNITS.FAHRENHEIT;
    render(
      <AppContext.Provider value={{ tempUnit: tempUnit }}>
        <MoreDetailsContent
          temp={temp}
          main={main}
          description={description}
          time={time}
        />
      </AppContext.Provider>
    );
  });

  test("Check temperature is populating", () => {
    const tempData = screen.getByText("61°F");
    expect(tempData).toBeInTheDocument();
  });

  test("Check main data is populating", () => {
    const mainData = screen.getByText("Clear");
    expect(mainData).toBeInTheDocument();
  });

  test("Check description is populating", () => {
    const description = screen.getByText("CLEAR SKY");
    expect(description).toBeInTheDocument();
  });
  test("Check time is populating", () => {
    const time = screen.getByText("9:00 am");
    expect(time).toBeInTheDocument();
  });
});
