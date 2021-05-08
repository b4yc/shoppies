import React, { useContext } from "react";
import { CartContext } from "../CartProvider";
import { removeFromCart } from "../../cartReducer";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const Nominations = () => {
  const { cart, dispatch } = useContext(CartContext);
  const removeFromCartHandler = (itemToRemove) =>
    dispatch(removeFromCart(itemToRemove));

  return (
    <div>
      {cart.map((nomination) => {
        return (
          <div>
            <Card.Group>
              <Card>
                <Card.Content>
                  <Card.Header>{nomination.Title}</Card.Header>
                  <Card.Meta>
                    <span className="date">{nomination.Year}</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Button onClick={() => removeFromCartHandler(nomination)}>
                  Remove
                </Button>
              </Card>
            </Card.Group>
          </div>
        );
      })}
    </div>
  );
};

export default Nominations;
