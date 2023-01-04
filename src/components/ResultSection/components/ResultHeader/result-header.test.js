import { render, screen } from "@testing-library/react";
import ResultHeader from ".";
import "@testing-library/jest-dom";

describe("Result section header", () => {
  beforeEach(() => {
    render(<ResultHeader />);
  });

  test("testing switch is there", () => {
    const unitSwitch = screen.getByTestId("unit-conversion-switch");
    expect(unitSwitch).toBeInTheDocument();
  });

  // test("testing switch on state", () => {
  //   const unitSwitchCheckbox = screen.getByTestId("unit-conversion-switch");
  //   expect(unitSwitchCheckbox.checked).toEqual(true);
  // });
});
