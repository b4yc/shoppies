import React, { useContext } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { CartContext } from "../CartProvider";
import { clearCart } from "../../cartReducer";
import Nominations from "../Nominations";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);
  const clearCartHandler = (item) => {
    dispatch(clearCart(item));
  };

  return (
    <div>
      <Nominations />
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
      <button onClick={clearCartHandler}>Clear Cart</button>
    </div>
  );
}
