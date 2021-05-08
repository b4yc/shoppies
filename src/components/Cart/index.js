import React, { useContext } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { CartContext } from "../CartProvider";
import { clearCart } from "../../cartReducer";
import Nominations from "../Nominations";
import { Button } from "semantic-ui-react";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);
  const clearCartHandler = (item) => {
    dispatch(clearCart(item));
  };

  return (
    <div>
      <Nominations />
      <Button onClick={clearCartHandler}>Clear All Nominations</Button>
    </div>
  );
}
