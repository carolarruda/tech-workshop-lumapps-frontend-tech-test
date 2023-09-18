/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { get } from "../api/index";
import Results from "../components/Results";
import Header from "../components/Header";




function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchMarvelCharacters() {
      try {
        const query = {
          nameStartsWith: search,
        };
        const response = await get('characters', query);
        setData(response.data.data.results);
        setTotalPages(
          Math.ceil(response.data.data.results.length / itemsPerPage)
        );
		setCurrentPage(0)
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchMarvelCharacters();
  }, [search]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <Router>
        <Header setSearch={setSearch} search={search} />
        <Results data={subset} search={search} />

        {data.length > 0 && (
          <ReactPaginate
            className="pagination"
            pageCount={totalPages}
            onPageChange={handlePageChange}
            forcePage={currentPage}
            activeClassName="selected-page"
          />
        )}
        <Switch>
          <Route exact path="/">
            <section className="lumx-spacing-padding-horizontal-huge" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
