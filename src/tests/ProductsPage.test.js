/* eslint-disable no-import-assign */
import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsPage from "../routes/ProductsPage";
import useFetchProducts from "../hooks/useFetchProducts";
import { productFactory } from "../utils/factories";
import { useOutletContext } from "react-router-dom";

jest.mock("../hooks/useFetchProducts");
jest.mock("react-router-dom");

describe("<ProductsPage /> tests", () => {
  test("should render products when searched product is available", () => {
    const products = [productFactory(), productFactory()];
    const searchTerm = products[0].title;
    const filteredProducts = products.filter((product) =>
      product.title.includes(searchTerm)
    );
    useFetchProducts.mockReturnValue(products);
    useOutletContext.mockReturnValue({ searchTerm });

    render(<ProductsPage />);

    expect(screen.getByTestId("products")).toBeInTheDocument();
    expect(screen.getAllByTestId("product-card")).toHaveLength(
      filteredProducts.length
    );
  });

  test("should render products when fetched data length is 0", () => {
    const products = [];
    useFetchProducts.mockReturnValue(products);

    render(<ProductsPage />);

    expect(screen.getByTestId("products")).toBeInTheDocument();
    expect(screen.getByText("No product found.")).toBeInTheDocument();
  });

  test("should render products when fetched data is null", () => {
    const products = null;
    useFetchProducts.mockReturnValue(products);

    render(<ProductsPage />);

    expect(screen.getByTestId("products")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
