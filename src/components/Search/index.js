import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

import Movie from "../Movie";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`http://www.omdbapi.com/?s=${value}&apikey=91b0581c`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.Search);
        setIsLoading(false);
      });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h3>Enter a Movie Name</h3>
        <Form.Input
          placeholder="Search..."
          value={value}
          onChange={handleChange}
        />
        <Button color="green" icon="search" type="submit" />
      </Form>
      {results ? (
        <Movie movies={results}></Movie>
      ) : (
        <div>Sorry! No results were found.</div>
      )}
    </div>
  );
};

export default Search;
