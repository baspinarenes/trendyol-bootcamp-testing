/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import Search from "../components/Search";

const {
  random: { word },
} = faker;

describe("<Search /> tests", () => {
  test("should render with initial state", () => {
    // arrange
    const props = {
      searchTerm: word(),
      handleSearchInputChange: jest.fn(),
    };

    // act
    render(<Search {...props} />);

    // assert
    expect(screen.getByTestId("search-container")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue(props.searchTerm);
  });

  test("should change input value when user types", () => {
    // arrange
    const props = {
      searchTerm: word(),
      handleSearchInputChange: jest.fn(),
    };
    const newSearchTerm = word();

    // act
    render(<Search {...props} />);
    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, newSearchTerm);

    // assert
    expect(searchInput).toHaveValue(props.searchTerm);
  });
});
