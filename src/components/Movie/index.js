import React, { useContext, useState } from "react";
import { CartContext } from "../CartProvider";
import { addToCart } from "../../cartReducer";

const Movie = ({ movies }) => {
  const { dispatch } = useContext(CartContext);
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div>
            <h1>{movie.Title}</h1>
            <h2>{movie.Year}</h2>
            <button onClick={() => addToCartHandler(movie)}>Add</button>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
