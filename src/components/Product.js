import React, { useState } from "react";
import FavoriteBox from "./FavoriteBox";
import Stamps from "./Stamps";

export default function Product({ productData }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClickFavorite = (e) => {
    e.preventDefault();
    setIsFavorited(!isFavorited);
  };

  return (
    <a
      href={`/product?id=${productData.id}`}
      data-testid="product-card"
      className="hover:shadow-lg"
    >
      <div className="text-sm">
        <div className="relative mb-2 overflow-hidden">
          <img
            src={productData.image}
            alt="product"
            className="h-72 w-full border hover:scale-110 transition-all duration-300"
          />
          <FavoriteBox
            isFavorited={isFavorited}
            handleClickFavorite={handleClickFavorite}
          />
          <Stamps />
        </div>
        <div className="leading-4 line-clamp-2 px-2">
          <span className="font-semibold mr-1">{productData.title}</span>
          <span>{productData.description}</span>
        </div>
        <div className="flex gap-1 mt-1 items-center px-2 pb-2">
          <span className="mr-1 text-[#878787] line-through">2.899,90 TL</span>
          <span className="font-bold text-base text-[#f27a1a]">
            {productData.price} TL
          </span>
        </div>
      </div>
    </a>
  );
}
