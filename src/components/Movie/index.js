import React, { useContext, useState } from "react";
import { CartContext } from "../CartProvider";
import { addToCart } from "../../cartReducer";
import { Card, Icon, Image, Button, Modal } from "semantic-ui-react";
import "./styles.scss";

const Movie = ({ movies, toggle }) => {
  const { cart, dispatch } = useContext(CartContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState();

  const addToCartHandler = (product) => {
    if (cart.length == 4) {
      // alert("Your 5 movies have been nominated!");
      setModalMessage("You have successfully nominated 5 movies.");
      setModalOpen(true);
    } else if (cart.length >= 5) {
      // alert(
      //   "You have nominated 5 movies already! If you'd like to add another, please remove an existing one."
      // );
      setModalMessage(
        "You have nominated 5 movies already! If you'd like to add another, please remove an existing one."
      );
      setModalOpen(true);
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <div>
      {movies.length > 0 ? (
        <p>Showing the top {movies.length} results</p>
      ) : null}
      <Card.Group centered="true" className="movies">
        {movies.map((movie) => {
          let selected =
            cart.filter((item) => item.Title === movie.Title).length > 0;
          return (
            <Card style={{ width: "200px" }}>
              {movie.Poster === "N/A" ? (
                <div className="poster-not-found">Poster not found</div>
              ) : (
                <img src={movie.Poster} className="poster" />
              )}

              <Card.Content>
                <Card.Header>{movie.Title}</Card.Header>
                <Card.Meta>
                  <span className="date">{movie.Year}</span>
                </Card.Meta>
                <Card.Description>{movie.Plot}</Card.Description>
              </Card.Content>
              <Button
                animated="vertical"
                disabled={selected}
                onClick={() => addToCartHandler(movie)}
                style={{ backgroundColor: "#084c44", color: "white" }}
              >
                <Button.Content hidden>Nominate</Button.Content>
                {selected ? (
                  <Button.Content visible>Nominated</Button.Content>
                ) : (
                  <Button.Content visible>
                    <Icon name="heart" />
                  </Button.Content>
                )}
              </Button>
            </Card>
          );
        })}
      </Card.Group>
      <Modal size="small" open={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Your 5 movies have been nominated!</Modal.Header>
        <Modal.Content>{modalMessage}</Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setModalOpen(false)}>Close</Button>
          <Button
            onClick={() => {
              setModalOpen(false);
              toggle();
            }}
          >
            View Nominations
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Movie;
