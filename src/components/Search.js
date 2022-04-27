import React from "react";

export default function Search({ searchTerm, handleSearchInputChange }) {
  return (
    <div
      className="flex items-center gap-2 border px-4 rounded-md bg-[#f3f3f3]"
      data-testid="search-container"
    >
      <input
        type="text"
        placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        className="bg-transparent w-96 outline-none"
        value={searchTerm}
        data-testid="search-input"
        onChange={handleSearchInputChange}
      />
      <i className="search-icon w-5 h-5 bg-no-repeat" />
    </div>
  );
}
