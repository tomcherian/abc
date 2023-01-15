import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../../context/AppContext";
import SearchHeader from "./index";

describe("Search Header", () => {
  test("Checking search header", () => {
    render(<SearchHeader />);
    const searchHeaderElement = screen.getByTestId("app-name");
    expect(searchHeaderElement).toBeInTheDocument();
  });

  test("Checking search header title", () => {
    render(<SearchHeader />);
    const searchHeaderElement = screen.getByTestId("app-name").textContent;
    expect(searchHeaderElement).toEqual("Hazz Weather");
  });

  test("Checking theme switch", () => {
    render(<SearchHeader />);
    const themeSwitch = screen.getByTestId("theme-switch");
    expect(themeSwitch).toBeInTheDocument();
  });

  test("Checking search header location name", () => {
    const searchLocation = "Dubai";
    render(
      <AppContext.Provider value={{ searchedLocation: searchLocation }}>
        <SearchHeader />
      </AppContext.Provider>
    );
    const searchHeaderElement = screen.getByText("Dubai");
    expect(searchHeaderElement).toBeInTheDocument();
  });
  test("Checking search header location name", () => {
    const searchLocation = undefined;
    render(
      <AppContext.Provider value={{ searchedLocation: searchLocation }}>
        <SearchHeader />
      </AppContext.Provider>
    );
    const searchHeaderElement = screen.getByText("Location Unknown");
    expect(searchHeaderElement).toBeInTheDocument();
  });
});
