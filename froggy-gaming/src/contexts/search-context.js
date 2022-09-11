import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchContext = createContext();
function SearchProvider(props) {
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState(String(searchParam.get("query")));
  const [searchResult, setSearchResult] = useState("");
  const [type, setType] = useState("price");
  const [order, setOrder] = useState("asc");
  const [url, setUrl] = useState(
    `http://localhost:8386/api/v1/product/search/query=${query}&page=1/sort=pro.${type}&order=${order}`
  );
  const value = {
    query,
    url,
    searchResult,
    searchParam,
    type,
    order,
    setSearchResult,
    setSearchParam,
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
