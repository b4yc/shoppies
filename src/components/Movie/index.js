import React, { useContext, useState } from "react";
import { CartContext } from "../CartProvider";
import { addToCart } from "../../cartReducer";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const Movie = ({ movies }) => {
  const { cart, dispatch } = useContext(CartContext);
  const addToCartHandler = (product) => {
    if (cart.length == 4) {
      alert("Your 5 movies have been nominated!");
    } else if (cart.length >= 5) {
      alert(
        "You have nominated 5 movies already! If you'd like to add another, please remove an existing one."
      );
      return;
    }
    dispatch(addToCart(product));
  };
  return (
    <div>
      {movies.map((movie) => {
        //  = cart.includes(movie);
        let selected =
          cart.filter((item) => item.Title === movie.Title).length > 0;
        console.log(cart);
        console.log(movie);
        return (
          <div>
            <Card.Group>
              <Card>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{movie.Title}</Card.Header>
                  <Card.Meta>
                    <span className="date">{movie.Year}</span>
                  </Card.Meta>
                </Card.Content>
                <Button
                  disabled={selected}
                  onClick={() => addToCartHandler(movie)}
                >
                  Add
                </Button>
              </Card>
            </Card.Group>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
