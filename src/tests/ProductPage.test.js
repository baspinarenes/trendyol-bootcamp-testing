/* eslint-disable no-import-assign */
import React from "react";
import { render, screen } from "@testing-library/react";
import ProductPage from "../routes/ProductPage";
import useFetchProduct from "../hooks/useFetchProduct";
import { productFactory } from "../utils/factories";
import * as ReactRouterDom from "react-router-dom";

jest.mock("../hooks/useFetchProduct");

describe("<ProductPage /> tests", () => {
  test("should render product when fetched data is exist", () => {
    const product = productFactory();
    useFetchProduct.mockReturnValue(product);

    ReactRouterDom.useSearchParams = jest.fn(() => [
      {
        get: () => 1,
      },
    ]);

    render(<ProductPage />);

    expect(screen.getByTestId("product-page")).toBeInTheDocument();
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(product.rating.rate)).toBeInTheDocument();
    expect(screen.getByText(product.rating.count)).toBeInTheDocument();
    expect(screen.getByText(product.category)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", product.image);
  });

  test("should render product when fetched data is not exist", () => {
    const product = null;
    useFetchProduct.mockReturnValue(product);

    ReactRouterDom.useSearchParams = jest.fn(() => [
      {
        get: () => 1,
      },
    ]);

    render(<ProductPage />);

    expect(screen.queryByTestId("product-page")).not.toBeInTheDocument();
  });
});
