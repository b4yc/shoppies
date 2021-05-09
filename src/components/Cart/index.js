import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { CartContext } from "../CartProvider";
import { clearCart } from "../../cartReducer";
import Nominations from "../Nominations";
import { Button, Divider } from "semantic-ui-react";

const Cart = ({ toggle }) => {
  const { cart, dispatch } = useContext(CartContext);
  const clearCartHandler = (item) => {
    dispatch(clearCart(item));
  };

  return (
    <div data-testid="cart">
      <Button
        icon
        onClick={toggle}
        size="huge"
        style={{ backgroundColor: "inherit", margin: "20px" }}
      >
        <Icon name="x" />
      </Button>
      <Divider />
      <Button
        disabled={cart.length === 0}
        onClick={clearCartHandler}
        style={{ width: "200px", backgroundColor: "#fcfcec" }}
      >
        Clear All Nominations
      </Button>
      <Divider />
      <Nominations />
    </div>
  );
};

export default Cart;
