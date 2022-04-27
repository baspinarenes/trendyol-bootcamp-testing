import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "../components/Product";
import { productFactory } from "../utils/factories";

describe("<Product /> tests", () => {
  let props;

  beforeAll(() => {
    props = {
      productData: productFactory(),
    };
  });

  test("should be correctly render", () => {
    // act
    render(<Product {...props} />);

    // assert
    expect(screen.getByTestId("product-card")).toBeInTheDocument();
    expect(screen.getByTestId("favorite-box")).toBeInTheDocument();
    expect(screen.getByTestId("stamps")).toBeInTheDocument();
  });

  test("should has correct href", () => {
    // act
    render(<Product {...props} />);

    // assert
    expect(screen.getByTestId("product-card")).toHaveAttribute(
      "href",
      `/product?id=${props.productData.id}`
    );
  });

  test("should call favoritebox when click favorite", () => {
    // act
    render(<Product {...props} />);

    userEvent.click(screen.getByTestId("favorite-box"));

    // assert
    expect(screen.getByTestId("filled-heart")).toBeInTheDocument();
  });
});
