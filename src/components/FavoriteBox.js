import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function FavoriteBox({ isFavorited, handleClickFavorite }) {
  return (
    <div
      className="w-9 h-9 p-1 bg-white rounded-full absolute top-2 right-2 cursor-pointer flex justify-center items-center shadow-xl"
      data-testid="favorite-box"
      onClick={handleClickFavorite}
    >
      {isFavorited ? (
        <AiFillHeart
          data-testid="filled-heart"
          color="#f27a1a"
          className="bg-white rounded-full shadow-lg w-5 h-5"
        />
      ) : (
        <AiOutlineHeart
          data-testid="empty-heart"
          className="bg-white rounded-full shadow-lg w-5 h-5"
        />
      )}
    </div>
  );
}
