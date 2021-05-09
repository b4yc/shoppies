import React, { useContext } from "react";
import { CartContext } from "../CartProvider";
import { removeFromCart } from "../../cartReducer";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const Nominations = () => {
  const { cart, dispatch } = useContext(CartContext);
  const removeFromCartHandler = (itemToRemove) =>
    dispatch(removeFromCart(itemToRemove));

  return (
    <Card.Group centered>
      {cart.map((nomination) => {
        return (
          <div>
            <br />
            <Card style={{ width: "200px", backgroundColor: "#fcfcec" }}>
              <Card.Content>
                <Card.Header>{nomination.Title}</Card.Header>
                <Card.Meta>
                  <span className="date">{nomination.Year}</span>
                </Card.Meta>
              </Card.Content>
              <Button
                animated="vertical"
                onClick={() => removeFromCartHandler(nomination)}
                style={{ backgroundColor: "#e6e6d5" }}
              >
                <Button.Content hidden>Remove</Button.Content>
                <Button.Content visible>
                  <Icon name="trash" />
                </Button.Content>
              </Button>
            </Card>
          </div>
        );
      })}
    </Card.Group>
  );
};

export default Nominations;
