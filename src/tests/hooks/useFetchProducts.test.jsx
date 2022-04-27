import { renderHook } from "@testing-library/react-hooks";
import { useFetchProducts } from "../../hooks";
import faker from "@faker-js/faker";
import axios from "axios";
import { productFactory } from "../../utils/factories";
import { waitFor } from "@testing-library/react";

jest.mock("axios");

const {
  datatype: { number },
} = faker;

test("should fetch products", async () => {
  const products = [productFactory(), productFactory()];
  axios.get.mockResolvedValue({ data: products });

  const { result } = renderHook(useFetchProducts, {
    initialProps: { id: number() },
  });

  await waitFor(() => {
    expect(result.current).toStrictEqual(products);
  });
});
