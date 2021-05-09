import React, { useState } from "react";
import {
  Form,
  Button,
  Pagination,
  Container,
  Grid,
  Divider,
} from "semantic-ui-react";

import Movie from "../Movie";
import "./styles.scss";

const Search = ({ toggle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [numOfResults, setNumOfResults] = useState(0);

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
        setNumOfResults(parseInt(data.totalResults));
        setIsLoading(false);
      });
  }

  function handlePages(page) {
    setIsLoading(true);
    fetch(
      `https://www.omdbapi.com/?s=${value}&page=${page}&type=movie&apikey=91b0581c`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
      <Container textAlign="center">
        {results && results.length > 0 ? (
          <Grid centered>
            <Grid.Row>
              <Grid.Column>
                <Grid.Row>
                  <p>Found {numOfResults} Movies</p>
                </Grid.Row>
                <Grid.Row>
                  <Movie movies={results} toggle={toggle}></Movie>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Pagination
                defaultActivePage={1}
                totalPages={Math.ceil(numOfResults / 10)}
                onPageChange={(event, data) => {
                  handlePages(data.activePage);
                }}
              />
            </Grid.Row>
          </Grid>
        ) : results ? null : (
          <div>Sorry! No results were found.</div>
        )}
      </Container>
    </div>
  );
};

export default Search;
