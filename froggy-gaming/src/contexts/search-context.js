import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
function SearchProvider(props) {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [counter, setCounter] = useState(1);
  const [type, setType] = useState("price");
  const [order, setOrder] = useState("asc");
  const [url, setUrl] = useState(
    `http://localhost:8386/api/v1/product/search/query=${query}&page=1/sort=pro.${type}&order=${order}`
  );
  const value = {
    query,
    url,
    searchResult,
    type,
    order,
    counter,
    setSearchResult,
    setCounter,
    setType,
    setOrder,
    setQuery,
    setUrl,
  };
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
