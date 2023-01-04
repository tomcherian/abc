import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Switch from "./index";

describe("Switch", () => {
  test("check input", () => {
    render(<Switch />);
    const inputElement = screen.getByRole("checkbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("check input onChange function", () => {
    const onChangeHandler = jest.fn();
    render(<Switch handleSwitch={onChangeHandler} />);
    const inputElement = screen.getByRole("checkbox");
    fireEvent.click(inputElement);
    expect(inputElement.checked).toBeTruthy();
  });
});
