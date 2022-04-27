import { useState } from "react";
import { Outlet } from "react-router-dom";
import Search from "./components/Search";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <header className="border-b py-5 px-5">
        <div className="max-w-6xl mx-auto flex justify-between gap-5">
          <a href="/" className="shrink-0">
            <img
              className="h-10"
              src="https://cdn.dsmcdn.com/web/logo/ty-elite.svg"
              alt="Trendyol"
            />
          </a>
          <Search searchTermState={{ value: searchTerm, set: setSearchTerm }} />
        </div>
      </header>
      <Outlet context={{ searchTerm }} />
    </div>
  );
}
