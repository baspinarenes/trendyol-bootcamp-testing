import { useOutletContext } from "react-router-dom";
import Product from "../components/Product";
import useFetchProducts from "../hooks/useFetchProducts";

export default function ProductsPage() {
  const { searchTerm } = useOutletContext();
  const products = useFetchProducts();

  const filteredProducts = products?.filter((product) =>
    product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  let contentElement;

  if (!filteredProducts) {
    contentElement = <div>Loading...</div>;
  } else if (filteredProducts.length === 0) {
    contentElement = <div>No product found.</div>;
  } else {
    contentElement = filteredProducts.map((product) => (
      <Product key={product.id} productData={product} />
    ));
  }

  return (
    <main data-testid="products" className="py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
        {contentElement}
      </div>
    </main>
  );
}
