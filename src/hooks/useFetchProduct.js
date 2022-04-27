import axios from "axios";
import { useState, useEffect } from "react";

const useFetchProduct = (id) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    })();
  }, [id]);

  return product;
};

export default useFetchProduct;
