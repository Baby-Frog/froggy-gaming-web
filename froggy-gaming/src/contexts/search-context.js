import { createContext, useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchContext = createContext();
function SearchProvider(props) {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState(searchParam.get("query"));
  // const [searchResult, setSearchResult] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [type, setType] = useState("price");
  const [order, setOrder] = useState("asc");
  const [url, setUrl] = useState(
    `http://localhost:8386/api/v1/product/search/query=${query}&page=1/sort=pro.${type}&order=${order}`
  );
  console.log(searchParam.get("query"));

  function handleNavigateCategory(cateName) {
    setQuery(cateName);
    setUrl(
      `http://localhost:8386/api/v1/product/search/query=${query}&page=1/sort=pro.price&order=asc`
    );
    setSearchParam({
      query: query,
    });

    navigate(`/chi-tiet?query=${searchParam}`);
  }

  function handleSearch(e) {
    e.preventDefault();
    setUrl(
      `http://localhost:8386/api/v1/product/search/query=${query}&page=1/sort=pro.price&order=asc`
    );
    setSearchParam({
      query: query,
    });
    navigate(`/chi-tiet?query=${query}`);
    window.location.reload(false);
  }

  const value = {
    query,
    url,
    // searchResult,
    searchParam,
    nextPage,
    // setSearchResult,
    setOrder,
    handleNavigateCategory,
    handleSearch,
    setType,
    setNextPage,
    setSearchParam,
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
