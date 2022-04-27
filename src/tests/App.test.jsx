import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import faker from "@faker-js/faker";

const {
  lorem: { word },
} = faker;

describe("<App /> tests", () => {
  test("should render", () => {
    // act
    render(<App />);

    // assert
    expect(screen.getByTestId("app")).toBeInTheDocument();
    expect(screen.getByTestId("search-container")).toBeInTheDocument();
  });

  test("should change search term when user types", () => {
    // arrange
    const newSearchTerm = word();
    // act
    render(<App />);

    const searchInput = screen.getByRole("textbox");

    userEvent.type(searchInput, newSearchTerm);

    // assert
    expect(searchInput).toHaveValue(newSearchTerm);
  });
});
