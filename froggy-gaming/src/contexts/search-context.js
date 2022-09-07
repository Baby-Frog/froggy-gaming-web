import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
function SearchProvider(props) {
  const [query, setQuery] = useState("");
  const value = { query, setQuery };
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
