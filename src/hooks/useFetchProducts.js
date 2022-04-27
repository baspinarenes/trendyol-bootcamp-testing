import axios from "axios";
import { useState, useEffect } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );

      setProducts(response.data);
    })();
  }, []);

  return products;
};

export default useFetchProducts;
