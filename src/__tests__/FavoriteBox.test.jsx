import React from "react";
import { render, screen } from "@testing-library/react";
import FavoriteBox from "../components/FavoriteBox";

describe("<FavoriteBox /> tests", () => {
  test("should render with initial state", () => {
    const props = {
      isFavorited: false,
      handleClickFavorite: () => {},
    };

    render(<FavoriteBox {...props} />);

    expect(screen.getByTestId("favorite-box")).toBeInTheDocument();
    expect(screen.getByTestId("empty-heart")).toBeInTheDocument();
  });

  test("should fill heart when isFavorited is true", () => {
    console.log("sadas");
    const props = {
      isFavorited: true,
      handleClickFavorite: () => {},
    };
    render(<FavoriteBox {...props} />);

    expect(screen.getByTestId("filled-heart")).toBeInTheDocument();
  });
});
