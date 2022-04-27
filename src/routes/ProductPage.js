import { useSearchParams } from "react-router-dom";
import useFetchProduct from "../hooks/useFetchProduct";
import { AiFillStar } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";

export default function ProductPage() {
  let [searchParams] = useSearchParams();

  const product = useFetchProduct(searchParams.get("id"));

  if (!product) {
    return null;
  }

  return (
    <main className="py-10 px-5" data-testid="product-page">
      <div className="max-w-6xl mx-auto flex gap-10">
        <div className="w-96 h-80 shrink-0 flex justify-center">
          <img src={product.image} alt="product img" className="w-72 h-80" />
        </div>
        <div>
          <div className="text-4xl font-bold mb-5">{product.title}</div>
          <div className="flex gap-3 items-center mb-8">
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <AiFillStar color="#ffbf00" className="w-5 h-5" />
                {product.rating.rate}
              </div>
              <div className="flex items-center gap-1">
                <MdModeComment color="#ffbf00" className="w-4 h-4" />
                {product.rating.count}
              </div>
            </div>
            /
            <div className="bg-[#f27a1a] text-white inline-block px-2 py-1 text-sm rounded-md">
              {product.category}
            </div>
          </div>
          <div className="">{product.description}</div>
        </div>
      </div>
    </main>
  );
}
