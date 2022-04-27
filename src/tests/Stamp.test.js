import React from "react";
import { render, screen } from "@testing-library/react";
import faker from "@faker-js/faker";
import Stamp from "../components/Stamp";

const {
  random: { word },
} = faker;

describe("<Stamp /> tests", () => {
  test("should render", () => {
    // arrange
    const props = {
      text: word(),
    };

    // act
    render(<Stamp {...props} />);

    // assert
    expect(screen.getByTestId("stamp")).toBeInTheDocument();
    expect(screen.getByTestId("stamp")).toHaveClass("bg-[#535353]");
  });

  test("should has green background color when stamp is 'Kargo Bedava'", () => {
    // arrange
    const props = {
      text: "Kargo Bedava",
    };

    // act
    render(<Stamp {...props} />);

    // assert
    expect(screen.getByTestId("stamp")).toHaveClass("bg-green-600");
  });
});
