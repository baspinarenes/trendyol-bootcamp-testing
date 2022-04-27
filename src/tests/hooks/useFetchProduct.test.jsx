import { renderHook } from "@testing-library/react-hooks";
import { useFetchProduct } from "../../hooks";
import faker from "@faker-js/faker";
import axios from "axios";
import { productFactory } from "../../utils/factories";
import { waitFor } from "@testing-library/react";

jest.mock("axios");

const {
  datatype: { number },
} = faker;

test("should fetch product", async () => {
  const product = productFactory();
  axios.get.mockResolvedValue({ data: product });

  const { result } = renderHook(useFetchProduct, {
    initialProps: { id: number() },
  });

  await waitFor(() => {
    expect(result.current).toStrictEqual(product);
  });
});
