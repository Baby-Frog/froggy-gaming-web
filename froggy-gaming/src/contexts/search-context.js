import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
function SearchProvider(props) {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState(
    `http://localhost:8386/api/v1/product/search/query=${query}`
  );
  const value = { query, url, setQuery, setUrl };
  return (
    <SearchContext.Provider value={value} {...props}></SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (typeof context === "undefined") {
    throw new Error("useSearch must be used inside SearchProvider");
  }
  return context;
}

export { SearchProvider, useSearch };
