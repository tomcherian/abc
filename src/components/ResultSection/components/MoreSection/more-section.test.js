import MoreSection from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../../context/AppContext";

beforeEach(() => {
  render(
    <AppContext.Provider
      value={{
        searchedLocation: "Dubai",
      }}
    >
      <MoreSection />
    </AppContext.Provider>
  );
});

describe("More data on Result section", () => {
  test("More Heading", () => {
    const moreOnHeading = screen.getByRole("heading");
    expect(moreOnHeading).toBeInTheDocument();
  });
});
