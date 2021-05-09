import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

import Movie from "../Movie";
import "./styles.scss";

const Search = ({ toggle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?s=${value}&type=movie&apikey=91b0581c`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.Search);
        setIsLoading(false);
      });
  }

  return (
    <div className="main">
      <h1>Find your favourite movies to nominate</h1>
      <Form onSubmit={handleSubmit} loading={isLoading} className="searchbar">
        <Form.Input
          action={
            <Button
              color="teal"
              icon="search"
              type="submit"
              style={{ backgroundColor: "#084c44" }}
            ></Button>
          }
          actionPosition="right"
          placeholder="Search for a Movie..."
          value={value}
          onChange={handleChange}
          size="large"
        ></Form.Input>
      </Form>
      <br />
      {results ? (
        <Movie movies={results} toggle={toggle}></Movie>
      ) : (
        <div>Sorry! No results were found.</div>
      )}
    </div>
  );
};

export default Search;
