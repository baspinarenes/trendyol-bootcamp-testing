import React from "react";
import { render, screen } from "@testing-library/react";
import Stamps from "../components/Stamps";

describe("<Stamps /> tests", () => {
  test("should render with two stamps", () => {
    // act
    render(<Stamps />);

    // assert
    expect(screen.getAllByTestId("stamp")).toHaveLength(2);
  });
});
