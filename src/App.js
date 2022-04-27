import { useState } from "react";
import { Outlet } from "react-router-dom";
import Search from "./components/Search";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div data-testid="app">
      <header className="border-b py-5 px-5">
        <div className="max-w-6xl mx-auto flex justify-between gap-5">
          <a href="/" className="shrink-0" data-testid="logo">
            <img
              className="h-10"
              src="https://cdn.dsmcdn.com/web/logo/ty-elite.svg"
              alt="Trendyol"
            />
          </a>
          <Search
            searchTerm={searchTerm}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>
      </header>
      <Outlet context={{ searchTerm }} />
    </div>
  );
}
